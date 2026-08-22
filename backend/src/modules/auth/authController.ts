import { Request, Response } from "express";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { ApiError } from "../../utils/apiError.js";
import { ApiResponse } from "../../utils/apiResponse.js";
import axios from "axios";
import jwt from "jsonwebtoken";
import prisma from "../../lib/prisma.js";
import { onboardingSchema } from "./authValidator.js";

const issueToken = (res: Response, userId: string, isOnboarded: boolean) => {
    const token = jwt.sign(
        { userId, isOnboarded },
        process.env.JWT_SECRET!,
        { expiresIn: "3d" }
    );

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 3 * 24 * 60 * 60 * 1000,
    });
};

export const googleRedirect = (req: Request, res: Response) => {
    const params = new URLSearchParams({
        client_id: process.env.GOOGLE_CLIENT_ID!,
        redirect_uri: process.env.GOOGLE_CALLBACK_URL!,
        response_type: "code",
        scope: "openid email profile",
        access_type: "offline",
        prompt: "consent",
    });

    res.redirect(
        `${process.env.GOOGLE_AUTH_URL}?${params.toString()}`
    );
};

export const googleCallback = asyncHandler(
    async (req: Request, res: Response) => {
        const { code } = req.query;

        if (!code || typeof code !== "string") {
            throw new ApiError(400, "Missing authorization code");
        }

        const { data: tokenData } = await axios.post(
            process.env.GOOGLE_TOKEN_URL!,
            {
                code,
                client_id: process.env.GOOGLE_CLIENT_ID,
                client_secret: process.env.GOOGLE_CLIENT_SECRET,
                redirect_uri: process.env.GOOGLE_CALLBACK_URL,
                grant_type: "authorization_code",
            }
        );

        const { data: profile } = await axios.get(
            process.env.GOOGLE_USERINFO_URL!,
            {
                headers: {
                    Authorization: `Bearer ${tokenData.access_token}`,
                },
            }
        );

        if (!profile.email) {
            throw new ApiError(
                400,
                "Google account did not provide an email"
            );
        }

        const user = await prisma.user.upsert({
            where: { email: profile.email },
            update: { displayName: profile.name ?? null },
            create: { email: profile.email, displayName: profile.name ?? null, passwordHash: null },
            include: { candidateProfile: { include: { profileLinks: true } } },
        } as any);

        const fullUser = await prisma.user.findUnique({
            where: { id: user.id },
            include: { candidateProfile: { include: { profileLinks: true } } },
        });

        const isOnboarded = Boolean(
            fullUser?.candidateProfile?.headline &&
            fullUser?.candidateProfile?.targetRole &&
            fullUser?.candidateProfile?.profileLinks?.length
        );
        issueToken(res, user.id, isOnboarded);

        return res
            .send(`
                <script>
                    window.opener.postMessage(
                        { type: "interview-readiness-auth-success" },
                        "${process.env.CLIENT_URL}"
                    );
                    window.close();
                </script>
            `);
    }
);

export const completeOnboarding = asyncHandler(
    async (req: Request, res: Response) => {
        const userId = (req as any).userId;

        if (!userId) {
            throw new ApiError(401, "Not authenticated");
        }

        const parsed = onboardingSchema.safeParse(req.body);

        if (!parsed.success) {
            throw new ApiError(
                400,
                "Invalid onboarding data"
            );
        }

        const { profileLinks, ...profileData } = parsed.data;

        const candidateProfile = await prisma.$transaction(
            async (tx) => {
                const profile =
                    await tx.candidateProfile.upsert({
                        where: { userId },

                        update: profileData,

                        create: {
                            userId,
                            ...profileData,
                        },
                    });

                if (profileLinks !== undefined) {
                    await tx.profileLink.deleteMany({
                        where: {
                            candidateProfileId: profile.id,
                        },
                    });

                    if (profileLinks.length > 0) {
                        await tx.profileLink.createMany({
                            data: profileLinks.map((link) => ({
                                candidateProfileId: profile.id,
                                provider: link.provider,
                                url: link.url,
                                label: link.label,
                            })),
                        });
                    }
                }

                return tx.candidateProfile.findUnique({
                    where: { id: profile.id },
                    include: {
                        profileLinks: true,
                    },
                });
            }
        );

        issueToken(res, userId, true);
        
        return res.status(200).json(
            new ApiResponse(
                200,
                candidateProfile,
                "Onboarding completed successfully"
            )
        );
    }
);

export const getOnboardingStatus = asyncHandler(
    async (req: Request, res: Response) => {
        const userId = (req as any).userId;

        if (!userId) {
            throw new ApiError(401, "Not authenticated");
        }

        const profile =
            await prisma.candidateProfile.findUnique({
                where: { userId },
                include: {
                    profileLinks: true,
                },
            });

        const isComplete = Boolean(
            profile?.headline &&
            profile?.targetRole &&
            profile?.profileLinks?.length
        );

        return res.status(200).json(
            new ApiResponse(
                200,
                {
                    isComplete,
                    candidateProfile: profile,
                },
                "Onboarding status fetched successfully"
            )
        );
    }
);

export const logout = async (
    req: Request,
    res: Response
) => {
    res.clearCookie("token");

    return res.status(200).json(
        new ApiResponse(
            200,
            null,
            "Logged out successfully"
        )
    );
};

export const getMe = async (
    req: Request,
    res: Response
) => {
    const userId = (req as any).userId;

    if (!userId) {
        throw new ApiError(401, "Not authenticated");
    }

    const user = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        include: {
            candidateProfile: {
                include: {
                    profileLinks: true,
                },
            },
        },
    });

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    return res.status(200).json(
        new ApiResponse(
            200,
            { user },
            "User fetched successfully"
        )
    );
};