export const yearsOfExperience = (
  (new Date() - new Date("2022-12-12")) /
  (1000 * 60 * 60 * 24 * 365)
).toFixed(1);

export const navbarItems = [
  "About",
  "Skills",
  "Experience",
  // "Projects",
  "Recommendation",
  "Contact",
  // "Download CV",
];

export const skills = [
  {
    group: "Frontend",
    skill: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "React Hooks",
      "Custom Hooks",
    ],
    color: "",
  },
  {
    group: "UI/UX & Styling",
    skill: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Material UI (MUI)",
      "Styled Components",
      "Responsive Design",
    ],
    color: "",
  },
  {
    group: "State & API Handling",
    skill: [
      "Redux Toolkit",
      "Zustand",
      "TanStack Query",
      "Context API",
      "Axios",
      "REST APIs",
    ],
    color: "",
  },
  {
    group: "Forms & Validation",
    skill: [
      "React Hook Form",
      "Controlled Components",
      "Yup",
      "Zod",
      "Dynamic Forms",
      "Error Handling",
    ],
    color: "",
  },
  {
    group: "Routing & Tools",
    skill: [
      "React Router",
      "TanStack Router",
      "App Router (Next.js)",
      "Vite",
      "Yarn",
      "Npm",
    ],
    color: "",
  },
  {
    group: "Backend",
    skill: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "API Development",
    ],
    color: "",
  },
  {
    group: "Version Control & Collaboration",
    skill: ["Git", "GitHub", "*", "*", "*", "*"],
    color: "",
  },
];
