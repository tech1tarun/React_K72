import React from "react";

const ProjectCard = () => {
  return (
    <div className="w-full h-200 mb-4 flex gap-4">
      <div className="w-1/2 rounded-none relative group transition-all hover:rounded-[70px] overflow-hidden h-full ">
        <img className="h-full w-full object-cover " src="/photo/work.jpg" />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute flex items-center justify-center top-0 left-0 h-full w-full bg-black/10">
          <h2 className="uppercase text-6xl font-[font1] pt-4 px-4 text-white border-4 rounded-full">
            View Project
          </h2>
        </div>
      </div>
      <div className="w-1/2 rounded-none relative group transition-all hover:rounded-[70px] overflow-hidden h-full ">
        <img className="h-full w-full object-cover " src="/photo/work.jpg" />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute flex items-center justify-center top-0 left-0 h-full w-full bg-black/10">
          <h2 className="uppercase text-6xl font-[font1] pt-4 px-4 text-white border-4 rounded-full">
            View Project
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
