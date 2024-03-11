import { ReactNode } from "react";
import Image from "next/image";
import TypeAnimationComponent from "@/components/TypeAnimationComponent";

const sequence: Array<string | number> = [
  "Gleb",
  1000,
  "Web Developer",
  1000,
  "Photographer",
  1000,
];
const HeroSection = (): ReactNode => {
  return (
    <section className="container min-h-[80svh] md:flex md:items-center">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left ">
          <h1 className="mb-4 text-4xl font-extrabold  text-white lg:text-6xl">
            <div className="grid grid-rows-2">
              <span className=" bg-gradient-to-r from-red-200 to-purple-400 bg-clip-text text-transparent">
                Hi I&apos;m
              </span>
              <TypeAnimationComponent
                style={{
                  textWrap: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
                sequence={sequence}
                speed={25}
              />
            </div>
          </h1>
          <p className="mb-6 text-base text-slate-400 sm:text-lg lg:text-xl">
            Hello! I am a software engineer and photographer from Russia. I
            enjoy writing web-apps in Vue, React and Express using TypeScript. I
            am currently looking for new opportunities.
          </p>
          <div className=" mb-12 flex flex-col gap-4 sm:flex-row md:mb-0">
            <button className=" bg-pos-0 hover:bg-pos-100 bg-size-200 w-full self-center rounded-full bg-gradient-to-br from-violet-700 via-blue-400 to-red-600  px-6 py-3 text-white transition-all duration-700 sm:w-fit">
              <a href={"https://t.me/lendysx16"} target="_blank">
                Contact me via telegram
              </a>
            </button>
            <button className="bg-pos-0 hover:bg-pos-100 bg-size-200 w-full self-center rounded-full bg-gradient-to-br from-red-600 via-blue-400 to-violet-700  px-6 py-3 text-white transition-all duration-700 sm:w-fit">
              Check my resume
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center">
          <div className="relative  h-[250px] w-[250px] rounded-full xl:h-[350px] xl:w-[350px]">
            <Image
              src={"/images/test.jpg"}
              alt="image"
              className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2  transform rounded-full object-cover "
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
