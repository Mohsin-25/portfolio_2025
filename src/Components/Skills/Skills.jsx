import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

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

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh]">
      <p>Skills</p>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {techStack.map((card, index) => {
            return <Card card={card} key={index} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="group relative h-[450px] w-[450px] overflow-hidden rounded-2xl bg-gray-600/30">
      <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="p-8 text-6xl">{card}</p>
      </div>
    </div>
  );
};

// • Front-End : React.js, JavaScript, Reusable Components, Custom Hooks, Controlled Components.
// • UI/UX and Styling : Tailwind CSS, Material UI, Headless UI.
// • State Management and API Handling : Redux toolkit, TanStack Query,
// • Form Handling : React Hook Form, Yup Validation.
// • Version Control and Collaboration : Git, GitHub.

const techStack = [
  "React.js",
  "JavaScript",
  "Redux Toolkit",
  "Reusable Components",
  "Custom Hooks",
  "Controlled Components",
  "Tailwind CSS",
  "Material UI",
  "Headless UI",
  "React Hook Form",
  "Yup Validation",
  "TanStack Query",
  "Git",
  "GitHub",
];
