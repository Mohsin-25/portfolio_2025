import React from "react";
import RevealAnimation from "../Utils/Animation/RevealAnimation";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <section className="page" id="contact">
      <RevealAnimation>
        <motion.h1>Contact</motion.h1>
      </RevealAnimation>
    </section>
  );
};

export default Contact;
