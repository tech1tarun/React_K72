import React from "react";
import ProjectCard from "../components/projects/ProjectCard";

const Project = () => {
  return (
    <div className="p-2.5">
      <div className="pt-[20vw] ">
        <h2 className="font-[font2] text-[10vw] uppercase">Projects</h2>
      </div>
      <div className="-mt-20">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;
