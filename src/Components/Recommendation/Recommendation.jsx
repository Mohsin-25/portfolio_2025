import React from "react";
import { motion } from "motion/react";
import RevealAnimation from "../Utils/Animation/RevealAnimation";

const Recommendation = () => {
  return (
    <section className="page" id="recommendation">
      {/* WIP - make reusable card */}
      <div>
        <RevealAnimation>
          <motion.h1>Recommendation</motion.h1>
        </RevealAnimation>
        <div className="w-[550px] h-fit bg-white/10 shadow-lg rounded-xl p-6 text-center mt-12">
          <img
            src="/abhishek-shimpi.jpg"
            alt="Abhishek Shimpi"
            className="w-24 h-24 rounded-full mx-auto -mt-16 border-4 border-black"
          />
          <div className="mt-6">
            <RevealAnimation direction="left">
              <motion.p className=" text-[16px] italic">
                <span className="text-[#39dcc5] text-4xl">“</span>I had the
                pleasure of leading and mentoring Mohsin, and I've witnessed
                firsthand his proactive mindset, dedication, and exceptional
                problem-solving skills in React.js and front-end development.
                His ability to build scalable, high-performance UIs and tackle
                complex challenges makes him a standout developer.
              </motion.p>
            </RevealAnimation>
            <RevealAnimation>
              <motion.p className=" text-[16px] italic">
                Excited to see him grow and achieve even greater success in the
                future
                <span className="text-[#39dcc5] text-4xl">”</span>
              </motion.p>
            </RevealAnimation>
            <motion.div className="flex justify-center">
              <RevealAnimation direction="left">
                <motion.h3 className="text-lg font-semibold text-[#39dcc5] mt-4">
                  Abhishek Shimpi
                </motion.h3>
                <motion.p className="text-sm text-gray-500">
                  Lead Frontend Engineer @ Fyntune Solutions
                </motion.p>
              </RevealAnimation>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
