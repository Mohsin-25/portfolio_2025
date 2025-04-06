import React, { useEffect, useId, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion, useAnimation } from "motion/react";
import { cn } from "../Other/cn";

export const SparklesCore = (props) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;

  const [init, setInit] = useState(false);
  const generatedId = useId();
  const controls = useAnimation();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };

  return (
    <motion.div
      animate={controls}
      className={cn("relative w-full h-[400px] overflow-hidden", className)}
    >
      {init && (
        <Particles
          id={id || generatedId}
          className="h-full w-full"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: background || "#0d47a1",
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
              },
            },
            particles: {
              number: {
                value: particleDensity || 100,
                density: {
                  enable: true,
                  area: 800,
                },
              },
              color: {
                value: particleColor || "#ffffff",
              },
              shape: {
                type: "circle",
              },
              opacity: {
                value: {
                  min: 0.3,
                  max: 0.8,
                },
                animation: {
                  enable: true,
                  speed: speed || 2,
                  startValue: "random",
                  sync: false,
                },
              },
              size: {
                value: {
                  min: minSize || 1,
                  max: maxSize || 3,
                },
              },
              move: {
                enable: true,
                speed: {
                  min: 0.1,
                  max: 1,
                },
                direction: "none",
                outModes: {
                  default: "out",
                },
              },
              links: {
                enable: false,
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};
