"use client";

import Link from "next/link";
import { Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaGoogle } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const perks = [
    "AI-powered readiness scoring",
    "GitHub, LinkedIn & LeetCode analysis",
    "Personalized prep roadmap",
];

export default function AuthPage() {
    const router = useRouter();

    const handleGoogleLogin = () => {
        const width = 500;
        const height = 600;
        const left = window.screenX + (window.outerWidth - width) / 2;
        const top = window.screenY + (window.outerHeight - height) / 2;

        const popup = window.open(
            `${process.env.NEXT_PUBLIC_API_URL}/api/auth/google`,
            "interview-readiness-oauth",
            `width=${width},height=${height},left=${left},top=${top}`
        );

        const handleMessage = (event: MessageEvent) => {
            if (event.origin !== process.env.NEXT_PUBLIC_API_URL) return;
            if (event.data?.type !== "interview-readiness-auth-success") return;

            window.removeEventListener("message", handleMessage);
            popup?.close();
            router.push("/dashboard");
        };

        window.addEventListener("message", handleMessage);
        const timer = setInterval(() => {
            if (popup?.closed) {
                clearInterval(timer);
                window.removeEventListener("message", handleMessage);
            }
        }, 500);
    };

    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-100 px-4 font-sans">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_20%,transparent_100%)]" />
            </div>

            <div className="w-full max-w-sm">
                <Link href="/" className="mb-8 flex items-center justify-center gap-2 group">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 transition-transform duration-200 group-hover:scale-105">
                        <Target size={16} className="text-white" />
                    </div>
                    <span className="text-base font-semibold tracking-tight text-slate-900">
                        Interview Readiness Engine
                    </span>
                </Link>

                <Card className="rounded-2xl border border-slate-200 bg-gray-100 shadow-sm shadow-slate-200/50">
                    <CardContent className="flex flex-col items-center gap-6 p-8">
                        <div className="flex flex-col items-center gap-2 text-center">
                            <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                                <TrendingUp size={17} className="text-blue-600" />
                            </div>
                            <h1 className="text-xl font-semibold tracking-tight text-slate-900">
                                Know exactly where you stand
                            </h1>
                            <p className="text-sm text-slate-500">
                                Sign in to get your explainable readiness score and a targeted prep plan.
                            </p>
                        </div>

                        <ul className="flex w-full flex-col gap-2 rounded-xl border border-slate-100 bg-slate-50/70 px-4 py-3">
                            {perks.map((perk) => (
                                <li key={perk} className="flex items-center gap-2 text-xs text-slate-600">
                                    <span className="h-1 w-1 flex-none rounded-full bg-blue-600" />
                                    {perk}
                                </li>
                            ))}
                        </ul>

                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full gap-2.5 rounded-full border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                            onClick={handleGoogleLogin}
                        >
                            <FaGoogle className="text-blue-600" />
                            Continue with Google
                        </Button>

                        <p className="text-center text-xs leading-relaxed text-slate-400">
                            By continuing, you agree to our{" "}
                            <Link href="/terms" className="underline underline-offset-2 hover:text-slate-600">
                                Terms
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy" className="underline underline-offset-2 hover:text-slate-600">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}