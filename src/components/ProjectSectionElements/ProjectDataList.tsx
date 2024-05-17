import { getProjectsData } from "@/utils/databaseActions";
import ProjectDataListByTags from "./ProjectDataListByTags";

const ProjectDataList = async () => {
    try {
        const ProjectsData = await getProjectsData();

        return (
            <div className="">
                <ProjectDataListByTags
                    props={ProjectsData}
                />
            
            </div>
        );
    }
    catch (err) { 
        return <div className=" font-bold text-2xl m-auto mt-24 text-center text-white"> Server error. Try again later.</div>
    }
};

export default ProjectDataList;
