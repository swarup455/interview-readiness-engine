// components/AuthErrorToast.tsx
"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { toast } from "sonner";

const ERROR_MESSAGES: Record<string, string> = {
    unauthenticated: "Please sign in to continue.",
    session_expired: "Your session expired. Please sign in again.",
    onboarding_required: "Please complete your profile to continue.",
};

export function AuthErrorToast() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const errorCode = searchParams.get("authError");
        if (!errorCode) return;

        const message = ERROR_MESSAGES[errorCode] ?? "Something went wrong. Please try again.";
        toast.error(message);

        const params = new URLSearchParams(searchParams.toString());
        params.delete("authError");
        const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;
        router.replace(newUrl);
    }, [searchParams, pathname, router]);

    return null;
}