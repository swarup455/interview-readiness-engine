import clientApi from "@/lib/client-api";

export type ProfileProvider = "LINKEDIN" | "GITHUB" | "LEETCODE" | "CODECHEF" | "OTHER";

export interface ProfileLinkInput {
    provider: ProfileProvider;
    url: string;
    label?: string;
}

export interface OnboardingPayload {
    headline?: string;
    bio?: string;
    education?: string;
    graduationYear?: number;
    experienceLevel?: string;
    targetRole?: string;
    profileLinks?: ProfileLinkInput[];
}

export async function updateProfile(payload: OnboardingPayload) {
    const { data } = await clientApi.post("/api/auth/onboarding", payload);
    return data;
}