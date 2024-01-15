import React, { ReactNode } from "react";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
const Home = (): ReactNode => {
    return (
        <main className="flex min-h-full flex-col bg-[#202020] w-full overflow-x-clip scroll-smooth">
            <NavBar />
            <div className="container mx-auto px-12 py-4 flex-1">
                <HeroSection />
            </div>
        </main>
    );
};

export default Home;
