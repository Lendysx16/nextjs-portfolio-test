import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectCardData } from "@/types/types";

const ProjectsData: ProjectCardData[] = [
    {
        id: 1,
        tag: ["next", "typescript"],
        title: "Portfolio project",
        description: "Portfolio project build with Next/TypeScript",
        imgUrl: "/images/test.jpg",
        gitUrl: "/",
        liveUrl: "/",
    },
];
const ProjectSection = () => {
    return (
        <>
            <h2 className=" text-white text-4xl font-bold mt-4 text-center mb-8">
                My Projects
            </h2>{" "}
            <div>
                {ProjectsData.map(
                    ({ id, title, description, imgUrl, gitUrl, liveUrl }) => (
                        <ProjectCard
                            key={id}
                            title={title}
                            description={description}
                            imgUrl={imgUrl}
                            gitUrl={gitUrl}
                            liveUrl={liveUrl}
                        />
                    )
                )}
            </div>
        </>
    );
};

export default ProjectSection;
