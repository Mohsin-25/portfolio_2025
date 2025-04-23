import React, { useEffect, useRef } from "react";
import RevealAnimation from "../Utils/Animation/RevealAnimation";
import { motion } from "motion/react";
import CharacterFlip from "../Utils/Animation/CharacterFlip";

const About = () => {
  const bgRef = useRef(null);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (bgRef.current) {
      bgRef.current.style.backgroundPosition = `left ${scrollY * 0.25}px`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="page" id="about">
        <div className="">
          <RevealAnimation>
            <motion.h1
            // className="text-6xl mb-16"
            >
              About Me
            </motion.h1>
          </RevealAnimation>
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            <div className="flex flex-col flex-1/2 text-2xl gap-6">
              <RevealAnimation direction="left">
                <motion.p>Hey there!👋</motion.p>
              </RevealAnimation>
              <RevealAnimation>
                <motion.p>
                  I'm{" "}
                  <span className="primary-text">
                    <CharacterFlip speed={100}>Mohammad Mohsin</CharacterFlip>
                  </span>
                  , a frontend developer who loves turning ideas into elegant
                  web interfaces.
                </motion.p>
              </RevealAnimation>
              <RevealAnimation direction="left">
                <motion.p>
                  With{" "}
                  <span className="primary-text">
                    <CharacterFlip speed={100}>2+ years</CharacterFlip>
                  </span>{" "}
                  of experience in React, JavaScript, and modern styling tools,
                  I build digital experiences that are fast, functional, and
                  visually sharp.
                </motion.p>
              </RevealAnimation>
              <RevealAnimation>
                <motion.p>
                  Whether it's a sleek landing page or complex dynamic forms, I
                  focus on creating digital experiences that are smooth,
                  responsive, and user-first.
                </motion.p>
              </RevealAnimation>
            </div>
            <div
              ref={bgRef}
              className="flex-1/2 flex justify-center items-end lg:-mt-[128px] bg-[#000000] overflow-hidden h-[50vh] rounded-md relative"
              style={{
                // borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                backgroundImage: "url('/react-word-art.png')",
                backgroundAttachment: "fixed",
                // backgroundPosition: "bottom left",
                // backgroundRepeat: "no-repeat",
                // backgroundSize: "cover",
                opacity: 0.7,
                zIndex: 0,
              }}
              // style={{ borderRadius: "75% 25% 34% 66% / 64% 24% 76% 36% " }}
              // style={{ borderRadius: "36% 64% 73% 27% / 33% 67% 33% 67% " }}
            >
              {/* <RevealAnimation> */}
              <img
                src="/profile-without-bg.png"
                alt="profile"
                className="h-[50vh] z-10 relative"
                style={{
                  filter: `
    drop-shadow(2px 2px 1px black)
    drop-shadow(-2px 2px 1px black)
    drop-shadow(2px -2px 1px black)
    drop-shadow(-2px -2px 1px black)
  `,
                }}
              />
              {/* </RevealAnimation> */}
            </div>
          </div>
        </div>
      </section>
      <section className="half-page"></section>
    </>
  );
};

export default About;
