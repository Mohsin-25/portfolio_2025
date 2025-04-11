import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { yearsOfExperience } from "../Utils/Other/constants";

const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const updateHeight = () => {
      setHeight(ref.current.getBoundingClientRect().height);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 40%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div className="mx-auto">
        {/* <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Changelog from my journey
        </h2> */}
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        <p className="text-neutral-700 dark:text-neutral-300 text-lg ">
          I've been working in{" "}
          <span className="primary-text">{data?.[0]?.company}</span> for the
          past{" "}
          <span className="primary-text">
            {
              // `${yearsOfExperience} years`
              "2 years"
            }
          </span>
          . Here's a timeline of my journey.
        </p>
        {data?.map((item, index) => (
          <div key={index} className="flex justify-start pt-20">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-60 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute -left-4 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-[#39dcc5] border border-neutral-300 f:border-neutral-700 p-2" />
              </div>

              <h3 className="pl-10  font-bold flex">
                <div>
                  <div className="hidden md:flex flex-col">
                    <span className="text-5xl">{item.timeline.from.year}</span>
                    <span className="text-[12px] -mt-[6px] primary-text">
                      {item.timeline.from.month}
                    </span>
                  </div>
                </div>
                {/* <div className="text-5xl mt-1 mx-1">{" - "}</div>
                <div className="flex flex-col">
                  <span className="text-5xl">{item.timeline.to.year}</span>
                  <span className="text-[12px] -mt-[6px] primary-text">
                    {item.timeline.to.month}
                  </span>
                </div> */}
              </h3>
              {/* <h3 className="text-xl md:pl-20 md:text-5xl font-bold">
                <span className="text-[18px]">
                  {item.timeline.from.year}
                  {" - "}
                </span>
                {item.timeline.to.year}
              </h3> */}
            </div>

            <div className="relative w-full">
              <h3 className="block text-4xl mb-4 text-left font-bold">
                <div className="flex md:hidden mb-4">
                  <span className="text-3xl">{item.timeline.from.year}</span>
                  <span className="text-[12px] primary-text mt-auto pb-1 ml-1">
                    {item.timeline.from.month}
                  </span>
                </div>
                <span className="primary-text">
                  {item.project.split("-")[0]}
                </span>
                <span> - </span>
                <span>{item.project.split("-")[1]}</span>
              </h3>
              <ul className="space-y-2">
                {item.content.map((point, index) => (
                  <li key={index} className="relative pl-4">
                    <span className="absolute left-0 top-0 text-lg text-white">
                      •
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              {/* <ul className="list-disc list-inside">
                {item.content.map((item) => (
                  <li>{item}</li>
                ))}
              </ul> */}
            </div>
          </div>
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute  top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-red-400 via-[#39dcc5] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
