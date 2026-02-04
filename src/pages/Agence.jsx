import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import _gsap from "gsap/gsap-core";
import React, { useRef } from "react";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imgArray = [
    "/photo/1-card.jpg",
    "/photo/1-card.jpg",
    "/photo/2-card.jpg",
    "/photo/2-card.jpg",
    "/photo/3-card.jpg",
    "/photo/3-card.jpg",
    "/photo/4-card.jpg",
    "/photo/4-card.jpg",
    "/photo/5-card.jpg",
    "/photo/5-card.jpg",
    "/photo/6-card.jpg",
    "/photo/6-card.jpg",
    "/photo/7-card.jpg",
    "/photo/7-card.jpg",
    "/photo/8-card.jpg",
    "/photo/8-card.jpg",
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: "top 28%",
        end: "top -70%",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imgIndex;
          if (elem.progress < 1) {
            imgIndex = Math.floor(elem.progress * imgArray.length);
          } else {
            imgIndex = imgArray.length - 1;
          }

          imageRef.current.src = imgArray[imgIndex];
        },
      },
    });
  });

  return (
    <div>
      <div className="section1">
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden h-[17vw] w-[12vw] rounded-3xl top-64 left-[35vw] -z-10"
        >
          <img
            ref={imageRef}
            src="/photo/1-card.jpg"
            alt="card"
            className="h-full object-cover w-full"
          />
        </div>
        <div className=" absolute font-[font2] text-black z-20">
          <div className="mt-[55vh]">
            <h1 className="text-[18vw] text-center uppercase leading-[18vw]">
              SEVEN7Y TWO
            </h1>
          </div>
          <div className="pl-[40%]">
            <p className="text-5xl indent-100 ">
              Were inquisitive and open-minded, and we make sure creativity
              crowds out ego from every corner. A brand is a living thing, with
              values, a personality and a story. If we ignore that, we can
              achieve short-term success, but not influence that goes the
              distance. We bring that perspective to every brand story we help
              tell.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
