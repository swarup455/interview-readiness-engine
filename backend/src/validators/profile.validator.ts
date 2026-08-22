import { ProfileProvider } from "@prisma/client";
import { z } from "zod";

const nullableText = (maxLength: number) => z.string().trim().max(maxLength).nullable().optional();
const profileUrl = z.string().trim().url().max(2048).refine((value) => {
  const protocol = new URL(value).protocol;
  return protocol === "https:" || protocol === "http:";
}, "URL must use HTTP or HTTPS.");

export const updateProfileSchema = z.object({
  name: nullableText(120),
  education: nullableText(1000),
  graduationYear: z.number().int().min(1950).max(2100).nullable().optional(),
  experienceLevel: nullableText(80),
  targetRole: nullableText(160),
  summary: nullableText(4000),
});

export const profileLinkSchema = z.object({
  provider: z.nativeEnum(ProfileProvider),
  url: profileUrl,
  label: nullableText(120),
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
export type ProfileLinkInput = z.infer<typeof profileLinkSchema>;
