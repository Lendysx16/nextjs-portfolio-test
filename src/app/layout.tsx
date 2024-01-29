// metadata
import type { Metadata } from "next";

// styles, fonts
import { Fira_Mono } from "next/font/google";
import "./globals.css";

// vercel statistics
import { SpeedInsights } from "@vercel/speed-insights/next";

//components
import NavBar from "@/components/NavBarElements/NavBar";

const mono = Fira_Mono({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
});
export const metadata: Metadata = {
    metadataBase: new URL("https://lendysx16.vercel.app"),
    title: "Lendy | Portfolio",
    description:
        "Portfolio site for Lendy, a web-developer and designer-photographer.",
    openGraph: {
        title: "Lendy | Portfolio",
        description:
            "Portfolio site for Lendy, a web-developer and designer-photographer.",
        images: [
            {
                url: "https://images.unsplash.com/photo-1705382575625-b4527151f50e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                width: 1200,
                height: 630,
            },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <html lang="en">
                <body
                    className={
                        mono.className +
                        " min-h-screen bg-[#202020] w-full scroll-smooth scrollbar-none"
                    }
                >
                    <div className="min-h-screen w-100 scroll-bar-none">
                        <main className="flex min-h-full flex-col bg-[#202020] w-full overflow-x-clip scroll-smooth">
                            <NavBar />
                            {children}
                        </main>
                        <SpeedInsights />
                    </div>
                </body>
            </html>
        </>
    );
}
