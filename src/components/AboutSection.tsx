import React from "react";
import Image from "next/image";
import AboutSectionInfo from "./AboutSectionInfo";
export const AboutSection = () => {
    return (
        <section className="text-white min-h-88 relative" id="about">
            <div className="flex items-center flex-col md:flex-row gap-10 xl:gap-16 sm:py-16 xl:px-16 justify-around h-full md:items-start ">
                <div className="mx-auto overflow-clip mb-12  md:m-0 rounded-3xl md:aspect-square max-w-[500px] h-full shadow-violet-400 shadow-[0px_0px_100px_-30px_rgba(0,0,0,0.3)]">
                    <Image
                        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        height={1000}
                        width={1000}
                        quality={90}
                        priority={true}
                        alt="computer"
                        className="w-full h-full object-cover "
                    ></Image>
                </div>
                <AboutSectionInfo />
            </div>
        </section>
    );
};

export default AboutSection;
