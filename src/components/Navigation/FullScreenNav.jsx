import React from "react";

const FullScreenNav = () => {
  return (
    <div id="fullscreennav" className="h-screen w-full py-40 absolute bg-black">
      <div className="">
        <div className="link relative border-t-2">
          <h1 className="text-center leading-40 font-[font2] text-[8vw] uppercase">
            Work
          </h1>
          <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
            <div className="moveX flex overflow-auto items-center">
              <h2 className="whitespace-nowrap text-center leading-tight font-[font2] text-[8vw] uppercase">
                See Everthing
              </h2>
              <img
                className="h-28 object-cover rounded-full shrink-0 w-72"
                src="/photo/work.jpg"
              />
              <h2 className="whitespace-nowrap text-center leading-tight font-[font2] text-[8vw] uppercase">
                See Everthing
              </h2>
              <img
                className="h-28 object-cover rounded-full shrink-0 w-72"
                src="/photo/work-2.png"
              />
            </div>
            <div className="moveX flex overflow-auto items-center">
              <h2 className="whitespace-nowrap text-center leading-40 pt-2 font-[font2] text-[8vw] uppercase">
                See Everthing
              </h2>
              <img
                className="h-32 object-cover rounded-full shrink-0 w-72"
                src="/photo/work.jpg"
              />
              <h2 className="whitespace-nowrap text-center leading-40 pt-2 font-[font2] text-[8vw] uppercase">
                See Everthing
              </h2>
              <img
                className="h-32 object-cover rounded-full shrink-0 w-72"
                src="/photo/work-2.png"
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default FullScreenNav;
