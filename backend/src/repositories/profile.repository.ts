import type { Prisma } from "@prisma/client";
import { prisma } from "../db/prisma.js";

export const profileRepository = {
  findByUserId: (userId: string) => prisma.candidateProfile.findUnique({ where: { userId }, include: { profileLinks: { orderBy: { createdAt: "asc" } } } }),
  upsert: (userId: string, data: Prisma.CandidateProfileUncheckedCreateInput) =>
    prisma.candidateProfile.upsert({ where: { userId }, create: data, update: data, include: { profileLinks: { orderBy: { createdAt: "asc" } } } }),
  findLinkOwnedByUser: (userId: string, linkId: string) => prisma.profileLink.findFirst({ where: { id: linkId, candidateProfile: { userId } } }),
  createLink: (candidateProfileId: string, data: Prisma.ProfileLinkUncheckedCreateInput) => prisma.profileLink.create({ data: { ...data, candidateProfileId } }),
  updateLink: (linkId: string, data: Prisma.ProfileLinkUpdateInput) => prisma.profileLink.update({ where: { id: linkId }, data }),
  deleteLink: (linkId: string) => prisma.profileLink.delete({ where: { id: linkId } }),
};
