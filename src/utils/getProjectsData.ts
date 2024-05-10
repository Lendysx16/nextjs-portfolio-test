import "server-only";
import { NotionResponseType, ProjectCardData } from "@/types/types";
import { Client } from "@notionhq/client";
import { unstable_noStore as noStore } from "next/cache";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export default async function getProjectsData(): Promise<ProjectCardData> {
    noStore();
    const NOTION_KEY = process.env.NOTION_TOKEN;
    const notion = new Client({ auth: NOTION_KEY });
    const myProjects = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID as string,
    });

    const projectsDataByTags: ProjectCardData = {};
    const results = myProjects.results as PageObjectResponse[];

    for (const { properties } of results) {
        const data = properties as NotionResponseType;
        const tag = data.tags.multi_select[0].name;
        if (!projectsDataByTags[tag]) {
            projectsDataByTags[tag] = [];
        }

        projectsDataByTags[tag].push({
            title: data.Title.title[0].plain_text,
            imgUrl: data.imgUrl.url,
            gitUrl: data.gitUrl.url,
            id: data.id.unique_id.prefix + data.id.unique_id.number.toString(),
            liveUrl: data.liveUrl.url,
            description: data.Description.rich_text[0].plain_text,
        });
    }

    return projectsDataByTags;
}
