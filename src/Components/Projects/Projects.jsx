import React from "react";
import RevealAnimation from "../Utils/Animation/RevealAnimation";
import { motion } from "motion/react";
import CharacterFlip from "../Utils/Animation/CharacterFlip";

const Projects = () => {
  return (
    <>
      <section className="page" id="projects">
        <div className="w-full">
          <RevealAnimation>
            <motion.h1>Projects</motion.h1>
          </RevealAnimation>
          <div className="flex gap-5 max-[1000px]:flex-col-reverse justify-between">
            <div className="flex flex-col gap-5 flex-1">
              <div className="flex flex-col">
                <div className="block text-4xl mb-4 text-left font-bold">
                  <span className="primary-text">
                    <CharacterFlip speed={100}>Shajra</CharacterFlip>
                  </span>
                  <span> - </span>
                  <span>Family Tree Management</span>
                </div>
                <span>
                  Full-Stack Personal Project |{" "}
                  <a
                    href="https://shajra-next.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    Live App
                  </a>
                </span>
              </div>
              <div className="flex flex-col gap-5">
                <RevealAnimation>
                  <motion.p>
                    Shajra is a family tree management application that helps
                    users build, organize, and visualize their family history
                    through interactive family trees. It supports managing
                    family members, defining relationships, and collaborating
                    with others to preserve family connections.
                  </motion.p>
                </RevealAnimation>

                <span>Key Features</span>

                <ul>
                  <li className="relative pl-4">
                    <span className="absolute left-0 top-0 text-lg text-white">
                      •
                    </span>
                    Interactive Family Trees: Visualize family relationships
                    through an interactive, navigable tree interface.
                  </li>
                  <li className="relative pl-4">
                    <span className="absolute left-0 top-0 text-lg text-white">
                      •
                    </span>
                    Family Member Management: Create, update, and organize
                    member profiles with personal details and photos.
                  </li>
                  <li className="relative pl-4">
                    <span className="absolute left-0 top-0 text-lg text-white">
                      •
                    </span>
                    Relationship Mapping: Connect family members through
                    parent-child and spousal relationships.
                  </li>
                  <li className="relative pl-4">
                    <span className="absolute left-0 top-0 text-lg text-white">
                      •
                    </span>
                    Collaboration & Invitations: Invite others to collaborate on
                    family trees with role-based permissions.
                  </li>
                  <li className="relative pl-4">
                    <span className="absolute left-0 top-0 text-lg text-white">
                      •
                    </span>
                    Authentication & Authorization: Secure access with JWT-based
                    authentication, protected routes, and access control.
                  </li>
                  <li className="relative pl-4">
                    <span className="absolute left-0 top-0 text-lg text-white">
                      •
                    </span>
                    Responsive Interface: Designed to provide a smooth
                    experience across different screen sizes.
                  </li>
                </ul>

                <span>Tech Stack</span>

                <ul>
                  <li className="relative pl-4">
                    <span className="absolute left-0 top-0 text-lg text-white">
                      •
                    </span>
                    Next.js, TypeScript, Tailwind CSS, MongoDB, Mongoose, JWT,
                    Vercel.
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <img
                src="./shajra_mockup.png"
                alt="Project mockup"
                className="w-[600px] max-[1300px]:w-[500px] max-[1200px]:w-[400px] max-[1000px]:w-full z-10 relative"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="half-page"></section>
    </>
  );
};

export default Projects;
