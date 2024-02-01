import React, { Suspense } from "react";
import { ProjectDataList } from "./ProjectDataList";

const ProjectSection = async () => {
    return (
        <>
            <h2 className=" mb-8 mt-4 text-center text-4xl font-bold text-white">
                My Projects
            </h2>
            <Suspense
                fallback={
                    <div className="text-white text-center text-3xl font-bold mt-10">
                        Loading...
                    </div>
                }
            >
                <ProjectDataList />
            </Suspense>
        </>
    );
};

export default ProjectSection;
