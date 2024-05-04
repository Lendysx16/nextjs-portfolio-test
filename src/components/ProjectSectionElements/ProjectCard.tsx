import React from "react";
import { ProjectCardProps } from "@/types/types";
import Image from "next/image";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
export const ProjectCard = ({
    imgUrl,
    title,
    description,
    liveUrl,
    gitUrl,
}: ProjectCardProps) => {
    return (
        <div className=" rounded-t-xl bg-[#181820]  transition-all hover:-translate-y-1 bg-[#fff] bg-opacity-10">
            <div className="group relative h-52 md:h-72 ">
                <Image
                    src={imgUrl}
                    height={300}
                    width={300}
                    quality={90}
                    priority={true}
                    alt={title}
                    className="absolute h-full w-full rounded-t-xl object-cover"
                ></Image>
                <div className=" overlay absolute left-0 top-0 flex h-full w-full items-center justify-center gap-8 rounded-t-xl bg-[#181818] bg-opacity-0 transition-all group-hover:bg-opacity-80">
                    {gitUrl && (
                        <Link
                            href={gitUrl}
                            className=" group/link relative hidden h-10 w-10 rounded-full border-2 border-[#ADB7BE] transition-all duration-500 hover:border-white group-hover:block md:h-14 md:w-14"
                        >
                            <CodeBracketIcon className=" absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-[#ADB7BE] transition-all duration-500 group-hover/link:text-white md:h-8 md:w-8" />
                        </Link>
                    )}
                    <Link
                        href={liveUrl}
                        className=" group/link2 relative hidden h-10 w-10 rounded-full border-2 border-[#ADB7BE] transition-all duration-500 hover:border-white group-hover:block md:h-14 md:w-14"
                    >
                        <EyeIcon className=" absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-[#ADB7BE] transition-all duration-500 group-hover/link2:text-white md:h-8 md:w-8" />
                    </Link>
                </div>
            </div>
            <div className="px-4 py-6 text-[#eee] flex-1">
                <h5 className="mb-2 text-xl font-semibold">{title}</h5>
                <p className=" text-[#ADB7BE]">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
