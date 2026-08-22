"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Code2, Braces, Sparkles } from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { updateProfile, type ProfileLinkInput } from "@/api/onboarding";

const EXPERIENCE_LEVELS = [
    "Student",
    "Entry-level",
    "Mid-level",
    "Senior",
    "Staff+",
];

function isValidUrl(value: string) {
    if (!value.trim()) return true;
    try {
        new URL(value);
        return true;
    } catch {
        return false;
    }
}

export default function OnboardingPage() {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);

    const [headline, setHeadline] = useState("");
    const [targetRole, setTargetRole] = useState("");
    const [experienceLevel, setExperienceLevel] = useState("");
    const [education, setEducation] = useState("");
    const [graduationYear, setGraduationYear] = useState("");
    const [bio, setBio] = useState("");

    const [githubUrl, setGithubUrl] = useState("");
    const [linkedinUrl, setLinkedinUrl] = useState("");
    const [leetcodeUrl, setLeetcodeUrl] = useState("");
    const [codechefUrl, setCodechefUrl] = useState("");

    const links = [
        { provider: "GITHUB" as const, url: githubUrl },
        { provider: "LINKEDIN" as const, url: linkedinUrl },
        { provider: "LEETCODE" as const, url: leetcodeUrl },
        { provider: "CODECHEF" as const, url: codechefUrl },
    ];

    const hasAtLeastOneLink = links.some((l) => l.url.trim().length > 0);
    const allLinksValid = links.every((l) => isValidUrl(l.url));

    const canSubmit = useMemo(() => {
        return (
            headline.trim().length > 0 &&
            targetRole.trim().length > 0 &&
            hasAtLeastOneLink &&
            allLinksValid &&
            !submitting
        );
    }, [headline, targetRole, hasAtLeastOneLink, allLinksValid, submitting]);

    const handleSubmit = async () => {
        if (!canSubmit) return;
        setSubmitting(true);

        try {
            const profileLinks: ProfileLinkInput[] = links
                .filter((l) => l.url.trim().length > 0)
                .map((l) => ({ provider: l.provider, url: l.url.trim() }));

            await updateProfile({
                headline: headline.trim(),
                targetRole: targetRole.trim(),
                experienceLevel: experienceLevel || undefined,
                education: education.trim() || undefined,
                graduationYear: graduationYear ? Number(graduationYear) : undefined,
                bio: bio.trim() || undefined,
                profileLinks,
            });

            toast.success("Profile completed");
            router.push("/dashboard");
            router.refresh();
        } catch (err) {
            toast.error("Couldn't save your profile. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-gray-100 px-4 py-12">
            <div className="mx-auto max-w-xl">
                <div className="mb-6 text-center">
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                        <Sparkles size={17} className="text-blue-600" />
                    </div>
                    <h1 className="text-xl font-semibold tracking-tight text-slate-900">
                        Complete your profile
                    </h1>
                    <p className="mt-1 text-sm text-slate-500">
                        This is what your readiness score is calculated from.
                    </p>
                </div>

                <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-200/60">
                    <CardContent className="flex flex-col gap-6 p-6">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="headline">
                                Headline <span className="text-blue-600">*</span>
                            </Label>
                            <Input
                                id="headline"
                                placeholder="Backend Engineer, 3 years experience"
                                value={headline}
                                onChange={(e) => setHeadline(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="targetRole">
                                Target role <span className="text-blue-600">*</span>
                            </Label>
                            <Input
                                id="targetRole"
                                placeholder="Senior Backend Engineer at Stripe"
                                value={targetRole}
                                onChange={(e) => setTargetRole(e.target.value)}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <Label>Experience level</Label>
                                <Select
                                    value={experienceLevel}
                                    onValueChange={setExperienceLevel}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select level" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {EXPERIENCE_LEVELS.map((level) => (
                                            <SelectItem key={level} value={level}>
                                                {level}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="graduationYear">Graduation year</Label>
                                <Input
                                    id="graduationYear"
                                    type="number"
                                    placeholder="2024"
                                    value={graduationYear}
                                    onChange={(e) => setGraduationYear(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="education">Education</Label>
                            <Input
                                id="education"
                                placeholder="B.Tech in Computer Science, IIT Bombay"
                                value={education}
                                onChange={(e) => setEducation(e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea
                                id="bio"
                                placeholder="A short summary about your background"
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                rows={3}
                            />
                        </div>

                        <div className="flex flex-col gap-3 border-t border-slate-100 pt-5">
                            <p className="text-sm font-medium text-slate-700">
                                Profile links{" "}
                                <span className="font-normal text-slate-400">
                                    (at least one required)
                                </span>
                            </p>

                            <div className="flex items-center gap-2">
                                <Github size={16} className="flex-none text-slate-400" />
                                <Input
                                    placeholder="https://github.com/yourhandle"
                                    value={githubUrl}
                                    onChange={(e) => setGithubUrl(e.target.value)}
                                    className={!isValidUrl(githubUrl) ? "border-red-300" : ""}
                                />
                            </div>

                            <div className="flex items-center gap-2">
                                <Linkedin size={16} className="flex-none text-slate-400" />
                                <Input
                                    placeholder="https://linkedin.com/in/yourhandle"
                                    value={linkedinUrl}
                                    onChange={(e) => setLinkedinUrl(e.target.value)}
                                    className={!isValidUrl(linkedinUrl) ? "border-red-300" : ""}
                                />
                            </div>

                            <div className="flex items-center gap-2">
                                <Code2 size={16} className="flex-none text-slate-400" />
                                <Input
                                    placeholder="https://leetcode.com/yourhandle"
                                    value={leetcodeUrl}
                                    onChange={(e) => setLeetcodeUrl(e.target.value)}
                                    className={!isValidUrl(leetcodeUrl) ? "border-red-300" : ""}
                                />
                            </div>

                            <div className="flex items-center gap-2">
                                <Braces size={16} className="flex-none text-slate-400" />
                                <Input
                                    placeholder="https://codechef.com/users/yourhandle"
                                    value={codechefUrl}
                                    onChange={(e) => setCodechefUrl(e.target.value)}
                                    className={!isValidUrl(codechefUrl) ? "border-red-300" : ""}
                                />
                            </div>
                        </div>

                        <Button
                            size="lg"
                            disabled={!canSubmit}
                            onClick={handleSubmit}
                            className={`mt-2 w-full rounded-full bg-blue-600 hover:bg-blue-700 ${!canSubmit ? "cursor-not-allowed opacity-40 hover:bg-blue-600" : ""
                                }`}
                        >
                            {submitting ? "Saving..." : "Complete profile"}
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}