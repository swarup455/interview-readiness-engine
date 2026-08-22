import type { User } from "@prisma/client";
import type { LoginInput, RegisterInput } from "../validators/auth.validator.js";
import { AppError } from "../utils/app-error.js";
import { hashPassword, verifyPassword } from "./password.service.js";
import { userRepository } from "../repositories/user.repository.js";

export const toPublicUser = (user: User) => ({ id: user.id, email: user.email, name: user.displayName, createdAt: user.createdAt });

export async function register(input: RegisterInput): Promise<User> {
  const existing = await userRepository.findByEmail(input.email);
  if (existing) throw new AppError(409, "EMAIL_UNAVAILABLE", "Unable to create an account with these details.");
  return userRepository.create({ email: input.email, displayName: input.name, passwordHash: await hashPassword(input.password) });
}

export async function login(input: LoginInput): Promise<User> {
  const user = await userRepository.findByEmail(input.email);
  if (!user || !(await verifyPassword(input.password, user.passwordHash))) {
    throw new AppError(401, "INVALID_CREDENTIALS", "Invalid email or password.");
  }
  return user;
}
