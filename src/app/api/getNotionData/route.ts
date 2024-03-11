import { NextRequest, NextResponse } from "next/server";

import { NotionResponseType, ProjectCardData } from "@/types/types";
import { Client } from "@notionhq/client";

import { unstable_noStore as noStore } from "next/cache";
export async function GET(req: NextRequest) {
    async function getProjectsData(): Promise<ProjectCardData[]> {
        noStore();
        const NOTION_KEY = process.env.NOTION_TOKEN;
        const notion = new Client({ auth: NOTION_KEY });
        const myProjects = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID as string,
        });

        const ArrWithProjects: ProjectCardData[] = [];
        // @ts-ignore
        const results = myProjects.results;
        // @ts-ignore
        for (const { properties } of results) {
            const data = properties as NotionResponseType;
            ArrWithProjects.push({
                title: data.Title.title[0].plain_text,
                imgUrl: data.imgUrl.url,
                gitUrl: data.gitUrl.url,
                id:
                    data.id.unique_id.prefix +
                    data.id.unique_id.number.toString(),
                tags: data.tags.multi_select.map((x) => x.name),
                liveUrl: data.liveUrl.url,
                description: data.Description.rich_text[0].plain_text,
            });
        }

        return ArrWithProjects;
    }

    const data = await getProjectsData();

    return NextResponse.json(data);
}
