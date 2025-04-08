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
