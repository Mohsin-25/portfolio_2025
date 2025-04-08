import React from "react";

const Test = () => {
  const categories = [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "JavaScript",
        "Reusable Components",
        "Custom Hooks",
        "HTML",
      ],
    },
    {
      title: "UI/UX and Styling",
      skills: [
        "Tailwind CSS",
        "Material UI",
        "Headless UI",
        "Styled Components",
        "CSS",
      ],
    },
    {
      title: "State Management and API Handling",
      skills: ["Redux toolkit", "TanStack Query", "Context API", "Axios"],
    },
    {
      title: "Form Handling",
      skills: ["React Hook Form", "Yup Validation", "Controlled Components"],
    },
    {
      title: "Version Control",
      skills: ["Git"],
    },
  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black flex items-center px-6 py-10">
      <div className="flex gap-10 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="snap-center shrink-0 w-[320px] h-[40vh] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col justify-between"
          >
            <h2 className="text-xl font-semibold text-white mb-4">
              {cat.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-white/10 text-white text-sm px-3 py-1 rounded-lg border border-white/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Test;
