import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import RevealAnimation from "../Utils/Animation/RevealAnimation";

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
    <section ref={targetRef} className="px-32 relative h-[400vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* <RevealAnimation> */}
        <h1 className="text-6xl absolute top-[60px]">Skills</h1>
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
    <div className="group relative h-[450px] w-[600px] overflow-hidden rounded-2xl bg-white/15">
      <div className="p-6 absolute inset-0 z-10 flex flex-col justify-between">
        <div className="text-5xl flex mx-auto text-center">
          <sapn>{card?.group}</sapn>
        </div>
        <div className="col-span-3 grid grid-cols-2 gap-2 text-2xl">
          {card?.skill?.map((item, index) => (
            <span
              key={index}
              className={`bg-black px-2 py-1 rounded-md  hover:bg-black/40
                ${item?.includes("*") && "text-black"}`}
              // hover:bg-white/0 hover:text-[#00FF7F] border-[1px] border-transparent hover:border-[#00FF7F]
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// • Front-End : React.js, JavaScript, Reusable Components, Custom Hooks, Controlled Components.
// • UI/UX and Styling : Tailwind CSS, Material UI, Headless UI.
// • State Management and API Handling : Redux toolkit, TanStack Query,
// • Form Handling : React Hook Form, Yup Validation.
// • Version Control and Collaboration : Git, GitHub.

const skills = [
  {
    group: "Frontend",
    skill: [
      "React.js",
      "JavaScript",
      "Reusable Components",
      "Custom Hooks",
      "HTML",
      "*",
    ],
    color: "",
  },
  {
    group: "UI/UX and Styling",
    skill: [
      "Tailwind CSS",
      "Material UI",
      "Headless UI",
      "Styled Components",
      ,
      "CSS",
      "*",
    ],
    color: "",
  },
  {
    group: "State Management and API Handling",
    skill: [
      "Redux toolkit",
      "TanStack Query",
      "Context API",
      "Axios",
      "*",
      "*",
    ],
    color: "",
  },
  {
    group: "Form Handling",
    skill: [
      "React Hook Form",
      "Yup Validation",
      "Controlled Components",
      "*",
      "*",
      "*",
    ],
    color: "",
  },
  {
    group: "Version Control and Collaboration",
    skill: ["Git", "GitHub", "*", "*", "*", "*"],
    color: "",
  },
];
