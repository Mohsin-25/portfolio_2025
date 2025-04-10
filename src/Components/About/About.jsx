import React from "react";
import RevealAnimation from "../Utils/Animation/RevealAnimation";
import { motion } from "motion/react";

const About = () => {
  return (
    <section className="page h-page " id="about">
      <div className="">
        <RevealAnimation>
          <motion.h1
          // className="text-6xl mb-16"
          >
            About Me
          </motion.h1>
        </RevealAnimation>
        <div className="flex gap-4">
          <div className="flex flex-col flex-1/2 text-2xl gap-6">
            <RevealAnimation direction="left">
              <motion.p>Hey there!👋</motion.p>
            </RevealAnimation>
            <RevealAnimation>
              <motion.p>
                I'm Mohammad Mohsin, a frontend developer who loves turning
                ideas into elegant web interfaces.
              </motion.p>
            </RevealAnimation>
            <RevealAnimation direction="left">
              <motion.p>
                With 2+ years of experience in React, JavaScript, and modern
                styling tools, I build digital experiences that are fast,
                functional, and visually sharp.
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
          <div className="flex-1/2 flex justify-center -mt-[128px]">
            <RevealAnimation>
              <img src="/profile.png" alt="" className="h-[50vh] ml-auto" />
            </RevealAnimation>
          </div>
          <div>{/* img */}</div>
        </div>
      </div>
    </section>
  );
};

export default About;
