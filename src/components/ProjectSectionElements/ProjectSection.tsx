import { getProjectsData } from "@/utils/getProjectsData";
import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectSection = async () => {
  const ProjectsData = await getProjectsData();
  return (
    <>
      <h2 className=" mb-8 mt-4 text-center text-4xl font-bold text-white">
        My Projects
      </h2>
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
          ),
        )}
      </div>
    </>
  );
};

export default ProjectSection;
