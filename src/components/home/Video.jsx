import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full overflow-hidden">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        src="/video/69496b2d.mp4"
      ></video>
    </div>
  );
};

export default Video;
