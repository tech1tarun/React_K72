import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useContext, useEffect } from "react";
import { NavbarContext } from "../../context/NavContext";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);
  console.log(navOpen);

  const tlRef = useRef(null);
  useGSAP(() => {
    tlRef.current = gsap.timeline({ paused: true });

    tlRef.current
      .from(".stairing", {
        height: 0,
        stagger: { amount: -0.25 },
        duration: 0.8,
        ease: "power3.out",
      })
      .from(fullNavLinksRef.current, {
        opacity: 0,
        duration: 0.4,
      })
      .from(".link", {
        rotateX: 90,
        opacity: 0,
        stagger: 0.1,
      });
  }, []);

  

  useEffect(() => {
  if (!tlRef.current) return;

  if (navOpen) {
    tlRef.current.play();     // OPEN
  } else {
    tlRef.current.reverse();  // CLOSE (same animation, reversed)
  }
}, [navOpen]);

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      // className=" h-screen w-full overflow-hidden absolute bg-black z-50"
      className={`h-screen w-full absolute bg-black z-50 transition-opacity ${
        navOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinksRef} className="relative">
        <div className="flex w-full justify-between p-3 items-start">
          <div className="p-3">
            <div className="w-36">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                <path
                  fill="white"
                  fill-rule="evenodd"
                  d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                ></path>
              </svg>
            </div>
          </div>
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className="h-32 w-32 relative cursor-pointer"
          >
            <div className="h-44 w-0.5 -rotate-45 origin-top absolute bg-[#D3FD50]"></div>
            <div className="h-44 w-0.5 right-0 rotate-45 origin-top absolute bg-[#D3FD50]"></div>
          </div>
        </div>
        <div className="py-26">
          <div className="link origin-top relative border-t-2 ">
            <h1 className="text-center leading-[0.95] font-[font2] text-[8vw] uppercase">
              Work
            </h1>
            <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
              <div className="moveX flex overflow-auto items-center">
                <h2 className="whitespace-nowrap text-center leading-[0.95] font-[font2] text-[8vw] uppercase">
                  See Everthing
                </h2>
                <img
                  className="h-28 object-cover rounded-full shrink-0 w-72"
                  src="/photo/work.jpg"
                />
                <h2 className="whitespace-nowrap text-center leading-[0.95] font-[font2] text-[8vw] uppercase">
                  See Everthing
                </h2>
                <img
                  className="h-28 object-cover rounded-full shrink-0 w-72"
                  src="/photo/work-2.png"
                />
              </div>
              <div className="moveX flex overflow-auto items-center">
                <h2 className="whitespace-nowrap text-center leading-[0.95] pt-2 font-[font2] text-[8vw] uppercase">
                  See Everthing
                </h2>
                <img
                  className="h-32 object-cover rounded-full shrink-0 w-72"
                  src="/photo/work.jpg"
                />
                <h2 className="whitespace-nowrap text-center leading-[0.95] pt-2 font-[font2] text-[8vw] uppercase">
                  See Everthing
                </h2>
                <img
                  className="h-32 object-cover rounded-full shrink-0 w-72"
                  src="/photo/work-2.png"
                />
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-t-2">
            <h1 className="text-center leading-[0.95] font-[font2] text-[8vw] uppercase">
              Agency
            </h1>
            <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
              <div className="moveX flex overflow-auto items-center">
                <h2 className="whitespace-nowrap text-center leading-[0.95] font-[font2] text-[8vw] uppercase">
                  Know Us
                </h2>
                <img
                  className="h-28 object-cover rounded-full shrink-0 w-72"
                  src="/photo/work.jpg"
                />
                <h2 className="whitespace-nowrap text-center leading-[0.95] font-[font2] text-[8vw] uppercase">
                  Know Us
                </h2>
                <img
                  className="h-28 object-cover rounded-full shrink-0 w-72"
                  src="/photo/work-2.png"
                />
              </div>
              <div className="moveX flex overflow-auto items-center">
                <h2 className="whitespace-nowrap text-center leading-[0.95] pt-2 font-[font2] text-[8vw] uppercase">
                  Know Us
                </h2>
                <img
                  className="h-32 object-cover rounded-full shrink-0 w-72"
                  src="/photo/work.jpg"
                />
                <h2 className="whitespace-nowrap text-center leading-[0.95] pt-2 font-[font2] text-[8vw] uppercase">
                  Know Us
                </h2>
                <img
                  className="h-32 object-cover rounded-full shrink-0 w-72"
                  src="/photo/work-2.png"
                />
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-t-2">
            <h1 className="text-center leading-[0.95] font-[font2] text-[8vw] uppercase">
              Contact
            </h1>
            <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
              <div className="moveX flex overflow-auto items-center">
                <h2 className="whitespace-nowrap text-center leading-[0.95] font-[font2] text-[8vw] uppercase">
                  See Everthing
                </h2>
                <img
                  className="h-28 object-cover rounded-full shrink-0 w-72"
                  src="/photo/work.jpg"
                />
                <h2 className="whitespace-nowrap text-center leading-[0.95] font-[font2] text-[8vw] uppercase">
                  Send Us a Fax
                </h2>
                <img
                  className="h-28 object-cover rounded-full shrink-0 w-72"
                  src="/photo/work-2.png"
                />
              </div>
              <div className="moveX flex overflow-auto items-center">
                <h2 className="whitespace-nowrap text-center leading-[0.95] pt-2 font-[font2] text-[8vw] uppercase">
                  Send Us a Fax
                </h2>
                <img
                  className="h-32 object-cover rounded-full shrink-0 w-72"
                  src="/photo/work.jpg"
                />
                <h2 className="whitespace-nowrap text-center leading-[0.95] pt-2 font-[font2] text-[8vw] uppercase">
                  Send Us a Fax
                </h2>
                <img
                  className="h-32 object-cover rounded-full shrink-0 w-72"
                  src="/photo/work-2.png"
                />
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-y-2">
            <h1 className="text-center leading-[0.95] font-[font2] text-[8vw] uppercase">
              Blog
            </h1>
            <div className="moveLink absolute flex top-0 bg-[#D3FD50] text-black">
              <div className="moveX flex overflow-auto items-center">
                <h2 className="whitespace-nowrap text-center leading-[0.95] font-[font2] text-[8vw] uppercase">
                  Read Article
                </h2>
                <img
                  className="h-28 object-cover rounded-full shrink-0 w-72"
                  src="/photo/work.jpg"
                />
                <h2 className="whitespace-nowrap text-center leading-[0.95] font-[font2] text-[8vw] uppercase">
                  Read Article
                </h2>
                <img
                  className="h-28 object-cover rounded-full shrink-0 w-72"
                  src="/photo/work-2.png"
                />
              </div>
              <div className="moveX flex overflow-auto items-center">
                <h2 className="whitespace-nowrap text-center leading-[0.95] pt-2 font-[font2] text-[8vw] uppercase">
                  Read Article
                </h2>
                <img
                  className="h-32 object-cover rounded-full shrink-0 w-72"
                  src="/photo/work.jpg"
                />
                <h2 className="whitespace-nowrap text-center leading-[0.95] pt-2 font-[font2] text-[8vw] uppercase">
                  Read Article
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
    </div>
  );
};

export default FullScreenNav;
