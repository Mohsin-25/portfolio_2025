import React, { useEffect, useRef, useState } from "react";
import { isSpecificCharacterUpperCase } from "../Other/helperFunctions";

const CharacterFlip = ({
  children,
  mode = "hover", // "hover" or "auto"
  delay = 3000, // used only in auto mode
  speed = 75, // flip animation speed
  cursor = "default",
}) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const characters = isSpecificCharacterUpperCase(children, 1)
    ? letters
    : letters.toLowerCase();

  const [text, setText] = useState(children);
  const intervalRef = useRef(null);
  const animationRef = useRef(null);

  const runFlip = () => {
    let iterations = 0;

    clearInterval(animationRef.current);

    animationRef.current = setInterval(() => {
      setText(() =>
        children
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (char === "-") return "-";
            if (char === ".") return ".";
            if (index < iterations) return children[index];
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      iterations++;
      if (iterations > children.length) {
        clearInterval(animationRef.current);
      }
    }, speed);
  };

  // AUTO MODE
  useEffect(() => {
    if (mode === "auto") {
      runFlip();
      intervalRef.current = setInterval(runFlip, delay);
    }

    return () => {
      clearInterval(intervalRef.current);
      clearInterval(animationRef.current);
    };
  }, [mode, delay, speed, children]);

  // HOVER MODE HANDLER
  const handleMouseEnter = () => {
    if (mode === "hover") {
      runFlip();
    }
  };

  return (
    <span
      className={`inline-block font-mono cursor-${cursor}`}
      onMouseEnter={handleMouseEnter}
    >
      {text}
    </span>
  );
};

export default CharacterFlip;
