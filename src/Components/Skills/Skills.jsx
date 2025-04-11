import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import RevealAnimation from "../Utils/Animation/RevealAnimation";
import { skills } from "../Utils/Other/constants";

const Skills = () => {
  return (
    <div className="bg-black" id="skills">
      <HorizontalScrollCarousel />
    </div>
  );
};

export default Skills;

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);

  return (
    <section ref={targetRef} className="px-12 md:px-32 relative h-[400vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* <RevealAnimation> */}
        <h1 className="text-5xl md:text-6xl absolute top-[60px]">Skills</h1>
        {/* </RevealAnimation> */}
        <motion.div style={{ x }} className="flex gap-8">
          {skills?.map((card, index) => {
            return <Card card={card} key={index} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="group relative h-[350px] w-[330px] md:w-[600px] overflow-hidden rounded-2xl bg-white/10">
      <div className="p-6 absolute inset-0 z-10 flex flex-col justify-between">
        <div className="text-2xl md:text-4xl flex mx-auto text-center min-h-20">
          <span>{card?.group}</span>
        </div>
        <div className="col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-2 text-2xl">
          {card?.skill?.map((item, index) => (
            <span
              key={index}
              className={`bg-white/10 px-2 py-1 rounded-lg border border-white/20  hover:bg-white/15
                ${item?.includes("*") && "text-white/1"}`}
              // hover:bg-white/0 hover:primary-text border-[1px] border-transparent hover:border-[#39dcc5]
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
