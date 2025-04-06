import { motion, useAnimation, useInView } from "motion/react";
import React, { useEffect, useRef } from "react";

const PopRevealAnimation = ({
  children,
  width = "fit-content",
  delay = 0.35,
  duration = 0.5,
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
    </div>
  );
};

export default PopRevealAnimation;
