import { z } from "zod";

export const profileLinkSchema = z.object({
    provider: z.enum([
        "LINKEDIN",
        "GITHUB",
        "LEETCODE",
        "CODECHEF",
        "OTHER",
    ]),
    url: z.string().url().max(2048),
    label: z.string().max(120).optional(),
});

export const onboardingSchema = z.object({
    headline: z.string().max(240).optional(),
    bio: z.string().optional(),
    education: z.string().optional(),
    graduationYear: z.number().int().min(1950).max(2100).optional(),
    experienceLevel: z.string().max(80).optional(),
    targetRole: z.string().max(160).optional(),

    profileLinks: z
        .array(profileLinkSchema)
        .max(10)
        .optional(),
});