import type { ProfileLinkInput, UpdateProfileInput } from "../validators/profile.validator.js";
import { AppError } from "../utils/app-error.js";
import { profileRepository } from "../repositories/profile.repository.js";
import { userRepository } from "../repositories/user.repository.js";

export async function getProfile(userId: string) {
  return profileRepository.findByUserId(userId);
}

export async function updateProfile(userId: string, input: UpdateProfileInput) {
  if (input.name !== undefined) await userRepository.updateName(userId, input.name);
  return profileRepository.upsert(userId, {
    userId,
    education: input.education ?? null,
    graduationYear: input.graduationYear ?? null,
    experienceLevel: input.experienceLevel ?? null,
    targetRole: input.targetRole ?? null,
    bio: input.summary ?? null,
  });
}

export async function listLinks(userId: string) {
  return (await profileRepository.findByUserId(userId))?.profileLinks ?? [];
}

async function requireProfile(userId: string) {
  const profile = await profileRepository.findByUserId(userId);
  if (!profile) throw new AppError(409, "PROFILE_REQUIRED", "Save your profile before adding links.");
  return profile;
}

export async function createLink(userId: string, input: ProfileLinkInput) {
  const profile = await requireProfile(userId);
  return profileRepository.createLink(profile.id, { provider: input.provider, url: input.url, label: input.label ?? null });
}

export async function updateLink(userId: string, linkId: string, input: ProfileLinkInput) {
  const link = await profileRepository.findLinkOwnedByUser(userId, linkId);
  if (!link) throw new AppError(404, "PROFILE_LINK_NOT_FOUND", "Profile link was not found.");
  return profileRepository.updateLink(link.id, { provider: input.provider, url: input.url, label: input.label ?? null });
}

export async function deleteLink(userId: string, linkId: string) {
  const link = await profileRepository.findLinkOwnedByUser(userId, linkId);
  if (!link) throw new AppError(404, "PROFILE_LINK_NOT_FOUND", "Profile link was not found.");
  await profileRepository.deleteLink(link.id);
}
