import ProjectCard from "./ProjectCard";
import { ProjectCardData } from "@/types/types";
const getProjectsData = async () => {
    "use server";
    try {
        const response = await fetch("/api/getNotionData", {
            cache: "no-store",
        });
        if (response.ok) {
            const data = await response.json();

            return data as ProjectCardData[];
        }
    } catch (error) {
        throw error;
    }
};

const ProjectDataList = async () => {
    const ProjectsData = await getProjectsData();

    return (
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 xl:grid-cols-3">
            {ProjectsData?.map(
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
    );
};

export default ProjectDataList;
