import { ProjectCardData } from "@/types/types";
import prisma from "./prisma";

export const getProjectsData = async () => { 
    const projects = await prisma.projects.findMany();

    const arrByTags: ProjectCardData = {};

    for (const el of projects) {
        if (!arrByTags[el.tag]) {
            arrByTags[el.tag] = [el]
        }
        else { 
            arrByTags[el.tag].push(el);
        }
    }

    return arrByTags;
}