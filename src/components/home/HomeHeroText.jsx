import React from "react";
import Video from "./Video.jsx";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-3 text-center">
      <div className="text-[9.5vw] uppercase leading-[8vw]">The spark for</div>
      <div className="text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]">
        all
        <div className="h-[8vw] w-[16vw] rounded-full overflow-hidden -mt-3">
          <Video />
        </div>
        things
      </div>
      <div className="text-[9.5vw] uppercase leading-[8vw]">creative</div>
    </div>
  );
};

export default HomeHeroText;
