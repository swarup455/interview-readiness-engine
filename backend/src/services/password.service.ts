import bcrypt from "bcryptjs";

const PASSWORD_ROUNDS = 12;

export const hashPassword = (password: string): Promise<string> => bcrypt.hash(password, PASSWORD_ROUNDS);
export const verifyPassword = (password: string, passwordHash: string): Promise<boolean> => bcrypt.compare(password, passwordHash);
