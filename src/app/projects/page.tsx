import React, { ReactNode } from "react";
import Wrapper from "@/components/Wrapper";
import ProjectSection from "@/components/ProjectSectionElements/ProjectSection";
import { Metadata } from "next";

const ProjectsPage = (): ReactNode => {
    return (
        <Wrapper>
            <ProjectSection />
        </Wrapper>
    );
};

export default ProjectsPage;
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
    title: "Lendy | Projects",
    description: "My projects list",
};
