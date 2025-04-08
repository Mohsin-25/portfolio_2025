import RevealAnimation from "../Utils/Animation/RevealAnimation";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Timeline from "./Timeline";

const Experience = () => {
  const data = [
    {
      company: "Fyntune Solutions Pvt. Ltd.",
      project: "BroCore - Policy Data Warehouse",
      content: [
        "Developed a dynamic and reusable form builder, reducing manual form creation time by 60% and improving maintainability",
        "Implemented configurable fields with labels, sequencing, validations, and support for diverse field types",
        "Integrated the form builder into a policy entry system, reducing policy configuration time by 50%",
        "Built a multi-level nested stepper form to handle complex, hierarchical data entry with dynamic field rendering",
        "Applied dynamic validation rules to ensure data integrity, reducing input errors by up to 40%",
        "Scaled the module to support 25+ lines of business (health, motor, term life, travel, marine, etc.), improving adaptability by 80%",
      ],
      timeline: {
        from: {
          year: 2024,
          month: "January",
        },
        to: {
          year: 2025,
          month: new Date().getMonth(),
        },
      },
    },
    {
      company: "Fyntune Solutions Pvt. Ltd.",
      project: "Original Equipment Manufacturer (OEM)",
      content: [
        "Built a web platform enabling users to select vehicle models for policy issuance, renewal, and rollover with dynamic quotes, endorsements, and claim management",
        "Improved application performance by 30% through optimized data fetching and management, leading to faster and more responsive policy handling",
        "Developed configurable policy add-ons and endorsements, decreasing support requests by 50%",
        "Designed an intuitive, user-friendly interface with smooth navigation, reducing page load times by 15% and enhancing overall user experience",
      ],
      timeline: {
        from: {
          year: 2022,
          month: "December",
        },
        to: {
          year: 2024,
          month: "January",
        },
      },
    },
  ];
  return (
    <section className="page flex-col" id="experience">
      <RevealAnimation>
        <motion.h1>Experience</motion.h1>
      </RevealAnimation>
      <Timeline data={data} />
    </section>
  );
};

export default Experience;
