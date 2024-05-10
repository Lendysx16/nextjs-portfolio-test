import { getProjectsData } from "@/utils/databaseActions";
import ProjectDataListByTags from "./ProjectDataListByTags";

const ProjectDataList = async () => {
    const ProjectsData = await getProjectsData();

    return (
        <div className="">
                    <ProjectDataListByTags
                    props={ProjectsData}
                    />
            
        </div>
    );
};

export default ProjectDataList;
