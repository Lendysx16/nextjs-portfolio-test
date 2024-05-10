import ProjectDataListByTags from "./ProjectDataListByTags";
import getProjectsData from "@/utils/getProjectsData";

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
