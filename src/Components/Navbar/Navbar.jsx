import React, { useState } from "react";
import PopRevealAnimation from "../Utils/Animation/PopRevealAnimation";
import { navbarItems } from "../Utils/Other/constants";
import { BiMenuAltRight } from "react-icons/bi";
import CharacterFlip from "../Utils/Animation/CharacterFlip";
import {
  HiCloudArrowDown,
  HiMiniXMark,
  HiOutlineCloudArrowDown,
} from "react-icons/hi2";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const scrollToSection = (item) => {
    const section = document.getElementById(item?.toLowerCase());
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <>
      <div className="flex justify-between p-4 z-10000" id="navbar">
        <div className="flex">
          <PopRevealAnimation delay={0.35}>
            <div className="px-2 mx-2 text-xl cursor-pointer  hover:scale-110 ease-in-out whitespace-nowrap">
              {/* {"<Mohsin />"} */}
              <span className="lessThan">{"<"}</span>
              <span className="mr-1 primary-text">
                <CharacterFlip mode="auto" speed={100}>
                  {"mohsin"}
                </CharacterFlip>
              </span>
              <span className="slash">{"/"}</span>
              <span className="moreThan">{">"}</span>
            </div>
          </PopRevealAnimation>
          {/* <div className=" px-2 mx-2 cursor-pointer">{"Mohsin( )"}</div> */}
          {/* <>
          <div className="bg-black relative flex flex-col items-center justify-center overflow-hidden rounded-md h-[4rem]">
            <h1 className="flex justify-center font-bold text-center text-white relative z-20">
              <span className="pt-15">{"<Mohsin/>"}</span>
            </h1>
            <div className="w-[10rem] relative">
              <div className="absolute inset-x-5 top-0 bg-gradient-to-r from-transparent via-indigo-600 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-5 top-0 bg-gradient-to-r from-transparent via-indigo-600 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-15 top-0 bg-gradient-to-r from-transparent via-sky-600 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-15 top-0 bg-gradient-to-r from-transparent via-sky-600 to-transparent h-px w-1/4" />

              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={10000}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
        </> */}
        </div>
        <div className="md:hidden z-10">
          {/* {!openMenu && (
            <BiMenuAltRight size={30} onClick={() => setOpenMenu(!openMenu)} />
          )} */}
          {openMenu ? (
            <HiMiniXMark size={30} onClick={() => setOpenMenu(!openMenu)} />
          ) : (
            <BiMenuAltRight size={30} onClick={() => setOpenMenu(!openMenu)} />
          )}
        </div>
        <ul className="md:flex group hidden">
          {navbarItems?.map((item, index) => {
            return (
              <PopRevealAnimation
                delay={0.35 + (index + 1) / 10}
                key={index}
                // delay={0.35 + 0.1 + index / 5}
              >
                <li
                  className="px-4 cursor-pointer hover:scale-110 ease-in-out 
                group-hover:opacity-60 hover:opacity-100 hover-primary-text
                "
                  // peer opacity-50 hover:opacity-100
                  // border-b-2 border-transparent hover:border-blue-400
                  onClick={() => {
                    scrollToSection(item);
                  }}
                >
                  <CharacterFlip cursor="pointer">
                    {item?.toUpperCase()}
                  </CharacterFlip>
                </li>
              </PopRevealAnimation>
            );
          })}
          <PopRevealAnimation delay={0.35 + (navbarItems?.length + 2) / 10}>
            <a href="./mohsin_resume.pdf" download="Mohsin_Resume">
              <li
                className="px-4 cursor-pointer hover:scale-110 ease-in-out 
      group-hover:opacity-60 hover:opacity-100 primary-text hover:text-[#dcd7c9] flex items-center gap-2"
              >
                <HiCloudArrowDown size={22} /> <span>RESUME</span>
              </li>
            </a>
          </PopRevealAnimation>
        </ul>
        {openMenu && (
          <ul
            className="flex-col z-20 fixed bg-white/20 rounded-md w-[95%] h-full mt-12 text-5xl p-4"
            style={{
              backdropFilter: "blur(16px) saturate(180%)",
            }}
          >
            {navbarItems?.map((item, index) => {
              return (
                <PopRevealAnimation
                  delay={0.35 + (index + 1) / 10}
                  key={index}
                  // delay={0.35 + 0.1 + index / 5}
                >
                  <li
                    className="px-5 py-5 cursor-pointer hover:scale-110 ease-in-out 
                 hover-primary-text
                "
                    onClick={() => {
                      scrollToSection(item);
                    }}
                  >
                    <CharacterFlip cursor="pointer">
                      {item?.toUpperCase()}
                    </CharacterFlip>
                  </li>
                </PopRevealAnimation>
              );
            })}
            <PopRevealAnimation delay={0.35 + (navbarItems?.length + 2) / 10}>
              <a href="./mohsin_resume.pdf" download="Mohsin_Resume">
                <li
                  className="px-4 cursor-pointer hover:scale-110 ease-in-out 
      group-hover:opacity-60 hover:opacity-100 primary-text hover:text-[#dcd7c9] flex items-center gap-2"
                >
                  <span>RESUME</span> <HiCloudArrowDown size={50} />
                </li>
              </a>
            </PopRevealAnimation>
          </ul>
        )}
      </div>{" "}
    </>
  );
};

export default Navbar;
