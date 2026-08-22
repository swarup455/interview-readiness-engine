import { prisma } from "../db/prisma.js";

export const userRepository = {
  findByEmail: (email: string) => prisma.user.findUnique({ where: { email } }),
  findById: (id: string) => prisma.user.findUnique({ where: { id } }),
  create: (data: { email: string; displayName: string; passwordHash: string }) => prisma.user.create({ data }),
  updateName: (id: string, displayName: string | null) => prisma.user.update({ where: { id }, data: { displayName } }),
};
