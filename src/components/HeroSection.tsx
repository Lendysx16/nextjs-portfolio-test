import { ReactNode } from "react";
import Image from "next/image";
import TypeAnimationComponent from "@/components/TypeAnimationComponent";

const sequence: Array<string | number> = [
    "Lendy",
    1000,
    "Gleb",
    1000,
    "Web Developer",
    1000,
    "Photographer",
    1000,
];
const HeroSection = (): ReactNode => {
    return (
        <section className="container h-full">
            <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left ">
                    <h1 className="text-white mb-4 lg:text-6xl  text-4xl font-extrabold">
                        <div className="grid grid-rows-2">
                            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-purple-400">
                                Hi I&apos;m
                            </span>
                            <TypeAnimationComponent
                                sequence={sequence}
                                speed={25}
                            />
                        </div>
                    </h1>
                    <p className="text-slate-400 text-base sm:text-lg lg:text-xl mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eaque culpa obcaecati consequatur pariatur quibusdam,
                        expedita accusamus animi enim quo totam nisi molestiae
                        autem iure unde qui facilis alias? Consequuntur,
                        nesciunt.
                    </p>
                    <div className=" mb-6 flex gap-4 flex-col sm:flex-row">
                        <button className=" px-6 py-3 rounded-full w-full sm:w-fit bg-gradient-to-br from-violet-700 via-blue-400 to-red-600 transition-all  text-white self-center duration-700 bg-pos-0 hover:bg-pos-100 bg-size-200">
                            Hire Me
                        </button>
                        <button className="px-6 py-3 rounded-full w-full sm:w-fit bg-gradient-to-br to-violet-700 via-blue-400 from-red-600 transition-all  text-white self-center duration-700 bg-pos-0 hover:bg-pos-100 bg-size-200">
                            Download CV
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center">
                    <div className="rounded-full  relative w-[250px] h-[250px] xl:w-[400px] xl:h-[400px]">
                        <Image
                            src={"/images/test.jpg"}
                            alt="image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full  w-full h-full object-cover "
                            width={300}
                            height={300}
                            priority={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
