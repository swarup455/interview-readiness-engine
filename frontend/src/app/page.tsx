"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
    Target,
    Code2,
    ClipboardCheck,
    ArrowRight,
    Link2,
    FileText,
    ListChecks,
} from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SCORE_BREAKDOWN = [
    { label: "Assessment performance", icon: ClipboardCheck, value: 82, weight: "40%" },
    { label: "GitHub activity", icon: Github, value: 71, weight: "25%" },
    { label: "LeetCode solved", icon: Code2, value: 88, weight: "20%" },
    { label: "LinkedIn profile", icon: Linkedin, value: 64, weight: "15%" },
];

const FINAL_SCORE = 78;

function useCountUp(target: number, durationMs = 1200) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let raf: number;
        const start = performance.now();

        const tick = (now: number) => {
            const progress = Math.min((now - start) / durationMs, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [target, durationMs]);

    return value;
}

function ScoreGauge({ score }: { score: number }) {
    const animated = useCountUp(score);
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (animated / 100) * circumference;

    return (
        <div className="relative flex h-32 w-32 flex-none items-center justify-center">
            <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                <circle cx="60" cy="60" r="54" fill="none" stroke="#E2E8F0" strokeWidth="10" />
                <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{ transition: "stroke-dashoffset 0.1s linear" }}
                />
            </svg>
            <div className="absolute flex flex-col items-center">
                <span className="font-mono text-3xl font-semibold tabular-nums text-slate-900">
                    {animated}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                    readiness
                </span>
            </div>
        </div>
    );
}

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-gray-100 font-sans text-slate-900">
            {/* Nav */}
            <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                        <Target size={16} className="text-white" />
                    </div>
                    <span className="text-sm font-semibold tracking-tight">
                        Interview Readiness Engine
                    </span>
                </Link>
                <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
                    <a href="#how-it-works" className="hover:text-slate-900">How it works</a>
                    <a href="#gaps" className="hover:text-slate-900">Skill gaps</a>
                </nav>
                <Link href="/auth">
                    <Button className="rounded-full bg-blue-600 px-5 hover:bg-blue-700">
                        Get started
                    </Button>
                </Link>
            </header>

            {/* Hero */}
            <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-12 md:grid-cols-2 md:items-center md:pt-20">
                <div>
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                        Explainable readiness scoring
                    </span>
                    <h1 className="mt-5 font-[var(--font-display)] text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 md:text-5xl">
                        Know if you&apos;re ready
                        <br />
                        before they ask.
                    </h1>
                    <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500">
                        Connect your assessments, GitHub, LinkedIn, and LeetCode. Get one score
                        for your target role — and the exact breakdown behind it, so you know
                        precisely what to fix.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <Link href="/auth">
                            <Button
                                size="lg"
                                className="gap-2 rounded-full bg-blue-600 px-6 hover:bg-blue-700"
                            >
                                Start free assessment
                                <ArrowRight size={16} />
                            </Button>
                        </Link>
                        <a href="#how-it-works">
                            <Button
                                size="lg"
                                variant="outline"
                                className="rounded-full border-slate-300 bg-white px-6 text-slate-700 hover:bg-slate-50"
                            >
                                See how scoring works
                            </Button>
                        </a>
                    </div>
                </div>

                {/* Signature: explainable score card */}
                <Card className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
                    <div className="flex items-center gap-5 border-b border-slate-100 pb-6">
                        <ScoreGauge score={FINAL_SCORE} />
                        <div>
                            <p className="text-sm font-medium text-slate-900">
                                Senior Backend Engineer
                            </p>
                            <p className="text-xs text-slate-400">Target role · Stripe</p>
                            <p className="mt-2 text-xs leading-relaxed text-slate-500">
                                Built from four weighted signals below.
                            </p>
                        </div>
                    </div>
                    <ul className="mt-5 flex flex-col gap-4">
                        {SCORE_BREAKDOWN.map(({ label, icon: Icon, value, weight }) => (
                            <li key={label} className="flex items-center gap-3">
                                <Icon size={15} className="flex-none text-slate-400" />
                                <div className="flex-1">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-slate-600">{label}</span>
                                        <span className="font-mono text-slate-400">
                                            {value} <span className="text-slate-300">· {weight}</span>
                                        </span>
                                    </div>
                                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                                        <div
                                            className="h-full rounded-full bg-blue-600"
                                            style={{ width: `${value}%` }}
                                        />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Card>
            </section>

            {/* How it works */}
            <section id="how-it-works" className="border-t border-slate-200/70 bg-white">
                <div className="mx-auto max-w-6xl px-6 py-20">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                        How it works
                    </h2>
                    <p className="mt-2 max-w-md text-sm text-slate-500">
                        Three steps, in order — each one feeds the next.
                    </p>
                    <div className="mt-10 grid gap-8 md:grid-cols-3">
                        {[
                            {
                                n: "01",
                                icon: Link2,
                                title: "Connect your profiles",
                                body: "Link GitHub, LinkedIn, and LeetCode, and pick your target company and role.",
                            },
                            {
                                n: "02",
                                icon: FileText,
                                title: "Take the assessment",
                                body: "A short, role-specific assessment calibrates your score against real interview data.",
                            },
                            {
                                n: "03",
                                icon: ListChecks,
                                title: "Get your prep plan",
                                body: "See exactly which gaps are dragging your score down, ranked by what to fix first.",
                            },
                        ].map(({ n, icon: Icon, title, body }) => (
                            <div key={n} className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <span className="font-mono text-xs text-blue-600">{n}</span>
                                    <Icon size={16} className="text-slate-400" />
                                </div>
                                <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                                <p className="text-sm leading-relaxed text-slate-500">{body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skill gap map */}
            <section id="gaps" className="mx-auto max-w-6xl px-6 py-20">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                    See your gaps, by topic
                </h2>
                <p className="mt-2 max-w-md text-sm text-slate-500">
                    Every topic is scored against what your target role actually asks.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                    {[
                        { topic: "System Design", strength: "strong" },
                        { topic: "Concurrency", strength: "weak" },
                        { topic: "SQL & Indexing", strength: "moderate" },
                        { topic: "Caching", strength: "strong" },
                        { topic: "API Design", strength: "strong" },
                        { topic: "Distributed Systems", strength: "weak" },
                        { topic: "Behavioral", strength: "moderate" },
                        { topic: "Data Structures", strength: "strong" },
                    ].map(({ topic, strength }) => {
                        const styles = {
                            strong: "bg-blue-50 text-blue-700 border-blue-100",
                            moderate: "bg-slate-50 text-slate-600 border-slate-200",
                            weak: "bg-white text-slate-400 border-slate-200 border-dashed",
                        } as const;
                        return (
                            <div
                                key={topic}
                                className={`rounded-xl border px-4 py-3 text-sm font-medium ${styles[strength as keyof typeof styles]}`}
                            >
                                {topic}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-200/70 bg-white">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-slate-400 sm:flex-row">
                    <span>© {new Date().getFullYear()} Interview Readiness Engine</span>
                    <div className="flex gap-6">
                        <Link href="/terms" className="hover:text-slate-600">Terms</Link>
                        <Link href="/privacy" className="hover:text-slate-600">Privacy</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}