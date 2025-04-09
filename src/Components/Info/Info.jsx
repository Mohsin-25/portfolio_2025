import React from "react";
import Navbar from "../Navbar/Navbar";
import RevealAnimation from "../Utils/Animation/RevealAnimation";

const Info = () => {
  return (
    <>
      <Navbar />
      <section className="page info flex-col" id="info">
        {/* <div className="flex"> */}
        <div className="flex flex-col gap-8 justify-center text-center h-full my-auto">
          <div className="flex flex-col">
            <RevealAnimation>
              <h1 className="!mb-0">Building the Web,</h1>
            </RevealAnimation>
            <RevealAnimation direction="left">
              <h1 className="!mb-0">
                <span className="text-[#39dcc5]">One Pixel</span> at a Time
              </h1>
            </RevealAnimation>
          </div>
          <div className="text-2xl">
            <RevealAnimation>
              <p>
                Creating smooth, responsive, and{" "}
                <span className={`text-[#39dcc5]`}>user-centric</span> web
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
    </>
  );
};

export default Info;
