import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import { AuthErrorToast } from "@/components/AuthErrorToast";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Interview Readiness Engine",
  description: "Company-specific interview preparation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <Toaster richColors position="top-center" />
        <AuthErrorToast />
        {children}
      </body>
    </html>
  );
}