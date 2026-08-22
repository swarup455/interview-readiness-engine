import { z } from "zod";

const email = z.string().trim().toLowerCase().email().max(320);
const password = z.string().min(12).max(128);

export const registerSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email,
  password,
});

export const loginSchema = z.object({
  email,
  password: z.string().min(1).max(128),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
