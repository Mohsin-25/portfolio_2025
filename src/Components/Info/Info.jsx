import React from "react";
import Navbar from "../Navbar/Navbar";
import RevealAnimation from "../Utils/Animation/RevealAnimation";
import CharacterFlip from "../Utils/Animation/CharacterFlip";

const Info = () => {
  return (
    <>
      <Navbar />
      <section className="page flex-col" id="info">
        {/* <div className="flex"> */}
        <div className="flex flex-col gap-8 justify-center text-center h-full my-auto">
          <div className="flex flex-col">
            <RevealAnimation>
              <h1 className="!mb-0">Building the Web,</h1>
            </RevealAnimation>
            <RevealAnimation direction="left">
              <h1 className="!mb-0">
                <span className="primary-text">
                  <CharacterFlip mode="auto" speed={100}>
                    ONE PIXEL
                  </CharacterFlip>
                </span>{" "}
                at a Time
              </h1>
            </RevealAnimation>
          </div>
          <div className="text-2xl">
            <RevealAnimation>
              <p>
                Creating smooth, responsive, and{" "}
                <span className={`primary-text`}>
                  <CharacterFlip>{"user-centric"}</CharacterFlip>
                </span>{" "}
                web applications.
              </p>{" "}
            </RevealAnimation>
          </div>
        </div>
        {/* <div>
          <img src={web} alt="" />
        </div>
      </div> */}
      </section>
      <section className="half-page"></section>
    </>
  );
};

export default Info;
