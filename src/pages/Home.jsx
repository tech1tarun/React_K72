import React from "react";
import Video from "../components/home/Video.jsx";
import HomeHeroText from "../components/home/HomeHeroText.jsx";
import HomeBottonText from "../components/home/HomeBottonText.jsx";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between">
        <HomeHeroText />
        <HomeBottonText />
      </div>
    </div>
  );
};

export default Home;
