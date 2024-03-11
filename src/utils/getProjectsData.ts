import "server-only";
import { NotionResponseType, ProjectCardData } from "@/types/types";
import { Client } from "@notionhq/client";
// import { cookies } from "next/headers";
import { unstable_noStore as noStore } from "next/cache";

export default async function getProjectsData(): Promise<ProjectCardData[]> {
    noStore();
    // const _cookies = cookies();
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
        const data = properties as NotionResponseType;
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
}
