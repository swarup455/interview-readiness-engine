import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);

const PUBLIC_PATHS = ["/auth"];
const ONBOARDING_PATH = "/onboarding";
const DEFAULT_AUTHENTICATED_PATH = "/dashboard";

async function verifyToken(token: string) {
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        return payload as { userId: string; isOnboarded: boolean };
    } catch {
        return null;
    }
}

export async function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const token = req.cookies.get("token")?.value;

    const isPublicPath = PUBLIC_PATHS.includes(pathname);
    const isOnboardingPath = pathname === ONBOARDING_PATH;

    if (!token) {
        if (isPublicPath) return NextResponse.next();

        const url = req.nextUrl.clone();
        url.pathname = "/auth";
        url.searchParams.set("authError", "unauthenticated");
        return NextResponse.redirect(url);
    }

    const payload = await verifyToken(token);

    if (!payload) {
        const url = req.nextUrl.clone();
        url.pathname = "/auth";
        url.searchParams.set("authError", "session_expired");
        const res = NextResponse.redirect(url);
        res.cookies.delete("token");
        return res;
    }

    if (!payload.isOnboarded) {
        if (isOnboardingPath) return NextResponse.next();

        const url = req.nextUrl.clone();
        url.pathname = ONBOARDING_PATH;
        if (!isPublicPath) {
            url.searchParams.set("authError", "onboarding_required");
        }
        return NextResponse.redirect(url);
    }

    if (isPublicPath || isOnboardingPath) {
        const url = req.nextUrl.clone();
        url.pathname = DEFAULT_AUTHENTICATED_PATH;
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp)).*)",
    ],
};