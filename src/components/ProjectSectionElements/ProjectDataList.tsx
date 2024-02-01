import React from "react";
import getProjectsData from "@/utils/getProjectsData";
import ProjectCard from "./ProjectCard";

export const ProjectDataList = async () => {
    const ProjectsData = await getProjectsData();
    return (
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 xl:grid-cols-3">
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
    );
};
