import { motion, useAnimation, useInView } from "motion/react";
import React, { useEffect, useRef } from "react";

const RevealAnimation = ({
  children,
  width = "fit-content",
  duration = 0.5,
  delay = 0.25,
  direction = "right",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={`relative overflow-hidden w-fit`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: duration,
          delay: delay,
        }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { [direction]: 0 },
          visible: { [direction]: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{
          duration: 0.6,
          ease: "easeIn",
        }}
        className="absolute top-[8px] bottom-[0px] left-0 right-0 z-[20] bg-[#39dcc5]/30"
      ></motion.div>
    </div>
  );
};

export default RevealAnimation;
