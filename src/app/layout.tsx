import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const mono = Fira_Mono({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
});
export const metadata: Metadata = {
    title: "Lendy | Portfolio",
    description:
        "Portfolio site for Lendy, a software engineer and designer-photographer.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={mono.className + " min-h-screen bg-[#202020] w-full"}
            >
                <div className="min-h-screen w-100">
                    {children}
                    <SpeedInsights />
                </div>
            </body>
        </html>
    );
}
