//metadata
import type { Metadata } from "next";
import Head from "next/head";

// styles, fonts
import { Fira_Mono } from "next/font/google";
import "./globals.css";

// vercel statistics
import { SpeedInsights } from "@vercel/speed-insights/next";

const mono = Fira_Mono({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
});
// export const metadata: Metadata = {
//     title: "Lendy | Portfolio",
//     description:
//         "Portfolio site for Lendy, a software engineer and designer-photographer.",
// };

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Head>
                <title>Lendysx16 | Portfolio </title>
                <meta name="description" content="Portfolio site" />
                <meta name="og:title" content="Lendysx16 | Portfolio" />
                <meta name="og:description" content="Lendys site" />
                <meta
                    property="og:image"
                    content="https://images.unsplash.com/photo-1705382575625-b4527151f50e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
            </Head>
            <html lang="en">
                <body
                    className={
                        mono.className + " min-h-screen bg-[#202020] w-full"
                    }
                >
                    <div className="min-h-screen w-100">
                        {children}
                        <SpeedInsights />
                    </div>
                </body>
            </html>
        </>
    );
}
