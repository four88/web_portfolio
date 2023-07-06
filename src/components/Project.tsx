import ProjectCard from "./ProjectCard";
import { projectData } from "../data/data";

function Project() {
  return (
    <section className="flex flex-col w-full">
      <h1 className="font-krick font-bold text-[96px] mb-6 max-md:text-[46px]">
        Personal Project
      </h1>
      <ul className="flex flex-row gap-8 w-full max-lg:flex-col">
        {projectData.map((data) => {
          return <ProjectCard project={data} />;
        })}
      </ul>
    </section>
  );
}

export default Project;
