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
        <div>
            <div className="h-52 md:h-72 relative group">
                <Image
                    src={imgUrl}
                    height={300}
                    width={300}
                    quality={90}
                    alt={title}
                    className="w-full h-full object-cover rounded-t-xl absolute"
                ></Image>
                <div className=" overlay absolute w-full h-full top-0 left-0 bg-[#181818] rounded-t-xl bg-opacity-0 flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center gap-8">
                    <Link
                        href={gitUrl}
                        target="_blank"
                        className=" hidden group-hover:block transition-all duration-500 h-10 w-10 md:w-14 md:h-14 border-2 hover:border-white rounded-full border-[#ADB7BE] group/link relative"
                    >
                        <CodeBracketIcon className=" w-5 h-5 md:w-8 md:h-8 text-[#ADB7BE] cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white transition-all duration-500" />
                    </Link>
                    <Link
                        href={liveUrl}
                        target="_blank"
                        className=" hidden group-hover:block transition-all duration-500 h-10 w-10 md:w-14 md:h-14 border-2 hover:border-white rounded-full border-[#ADB7BE] group/link2 relative"
                    >
                        <EyeIcon className=" w-5 h-5 md:w-8 md:h-8 text-[#ADB7BE] cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/link2:text-white transition-all duration-500" />
                    </Link>
                </div>
            </div>
            <div className="text-white py-6 px-4 bg-[#181818]">
                <h5 className="text-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE]">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
