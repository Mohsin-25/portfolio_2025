import React from "react";
import RevealAnimation from "../Utils/Animation/RevealAnimation";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <section className="page " id="experience">
      <RevealAnimation>
        <motion.h1>Experience</motion.h1>
      </RevealAnimation>
    </section>
  );
};

export default Experience;
