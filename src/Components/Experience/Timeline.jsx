import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "motion/react";

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
    offset: ["start 20%", "end 40%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div className="mx-auto">
        {/* <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Changelog from my journey
        </h2> */}
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-md">
          I've been working in{" "}
          <span className="text-[#00FF7F]">{data?.[0]?.company}</span> for the
          past <span className="text-[#00FF7F]">2 years</span>. Here's a
          timeline of my journey.
        </p>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data?.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>

              <h3 className="text-xl md:pl-20 md:text-5xl font-bold">
                <span className="text-[18px]">
                  {item.timeline.from.year} -{" "}
                </span>{" "}
                {item.timeline.to.year}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className=" block text-4xl mb-4 text-left font-bold">
                {item.project}
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
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
