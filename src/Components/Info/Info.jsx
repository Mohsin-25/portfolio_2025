import React from "react";
import Navbar from "../Navbar/Navbar";
import RevealAnimation from "../Utils/Animation/RevealAnimation";

const Info = () => {
  return (
    <section className="page info flex-col" id="info">
      <Navbar />
      {/* <div className="flex"> */}
      <div className="flex flex-col gap-12 justify-center text-center h-full ml-8">
        <div className="font-bold text-6xl flex flex-col gap-8">
          {/* Building the Web, One Pixel at a Time */}
          <RevealAnimation>
            <p className="pb-4">Building the Web,</p>
          </RevealAnimation>

          <RevealAnimation direction="left">
            <p>
              <span className="text-[#00FF7F]">One Pixel</span> at a Time
            </p>
          </RevealAnimation>
          {/* <RevealAnimation>
            <p>Transforming Ideas </p>
          </RevealAnimation>
          <RevealAnimation>
            <p>
              Into <span className="text-[#00FF7F]">Interactive </span>
              Web
            </p>
          </RevealAnimation>
          <RevealAnimation>
            <p>Experiences</p>
          </RevealAnimation> */}
        </div>
        <div className="text-2xl">
          <RevealAnimation>
            <p>
              Creating smooth, responsive, and{" "}
              <span className="text-[#00FF7F]">user-centric</span> web
              applications.
            </p>{" "}
          </RevealAnimation>
        </div>
      </div>
      {/* <div>
          <img src={web} alt="" />
        </div>
      </div> */}
    </section>
  );
};

export default Info;
