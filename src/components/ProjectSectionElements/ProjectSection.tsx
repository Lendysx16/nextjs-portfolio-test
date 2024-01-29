import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectCardData, NotionResponceType } from "@/types/types";
import { Client } from "@notionhq/client";

const getPojectsData = async (): Promise<ProjectCardData[]> => {
  "server only";
  const NOTION_KEY = process.env.NOTION_TOKEN;
  const notion = new Client({ auth: NOTION_KEY });
  const myProjects = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
  });
  // @ts-ignore
  const ArrWithProjects: ProjectCardData[] = [];
  const results = myProjects.results;
  // @ts-ignore
  for (const { properties } of results) {
    const data = properties as NotionResponceType;
    ArrWithProjects.push({
      title: data.Title.title[0].plain_text,
      imgUrl: data.imgUrl.url,
      gitUrl: data.gitUrl.url,
      id: data.id.unique_id.prefix + data.id.unique_id.number.toString(),
      tags: data.tags.multi_select.map((x) => x.name),
      liveUrl: data.liveUrl.url,
      description: data.Description.rich_text[0].plain_text,
    });
  }

  return ArrWithProjects;
};

const ProjectSection = async () => {
  const ProjectsData = await getPojectsData();
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
