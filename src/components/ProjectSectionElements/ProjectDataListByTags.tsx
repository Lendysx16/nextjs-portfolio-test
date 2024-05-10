"use client";

import { ProjectCardData } from "@/types/types";
import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectDataListByTags = ({ props }: { props: ProjectCardData }) => {
    const allTags = Object.keys(props);
    
    const [selectedTag, setSelectedTag] = useState(allTags[0]);

    const allProjects = props[selectedTag];

    return (
        <>
            <div className="flex items-center justify-center gap-6 mb-6">
                {allTags.map((tag) => (
                    <div
                        key={tag}
                        className={`text-[#ddd] rounded-lg bg-[#181818] ${tag === selectedTag && 'bg-[#dadada]'} px-6 py-2 font-semibold cursor-pointer bg-opacity-10 transition-all`}
                        onClick={() => setSelectedTag(tag)}
                    >
                        {tag}
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 xl:grid-cols-3">
                {allProjects.map((project) => selectedTag === "web" ? <ProjectCard key={project.id} {...project}/>: "not ready yet")}
            </div>
        </>
    );
};

export default ProjectDataListByTags;
