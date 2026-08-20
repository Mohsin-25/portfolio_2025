import RevealAnimation from "../Utils/Animation/RevealAnimation";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import Timeline from "./Timeline";

const Experience = () => {
  const data = [
    {
      company: "Fyntune Solutions Pvt. Ltd.",
      project: "RNR - Rewards & Recognition",
      content: [
        "Platform for ICICI Prudential for configuring and calculating commissions, incentives, goalsheets, and rewards based on policy transactions and business rules across channels, intermediaries, and employees",
        "Led a team of 4 frontend developers, coordinating task allocation, development activities, code reviews, technical guidance, and ensured coding standards and consistent architecture across the team",
        "Collaborated with business stakeholders and backend teams to gather, analyze, and clarify requirements, translating complex business rules into scalable frontend workflows and configurations",
        "Participated in feature planning, estimation, production issue resolution and releases, ensuring timely delivery of business-critical features",
      ],
      timeline: {
        from: {
          year: 2025,
          month: "July - Present",
          // month: "January",
        },
        to: {
          year: 2026,
          month: new Date().toLocaleString("default", { month: "long" }),
        },
      },
    },
    {
      company: "Fyntune Solutions Pvt. Ltd.",
      project: "BroCore - Policy Data Warehouse",
      content: [
        "It is an insurance platform enabling brokers/agents to manage policies, endorsements, claims, renewals, and view details efficiently",
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
          month: "January - 2025 July",
          // month: "January",
        },
        to: {
          year: 2025,
          month: new Date().toLocaleString("default", { month: "long" }),
        },
      },
    },
    {
      company: "Fyntune Solutions Pvt. Ltd.",
      project: "OEM - Original Equipment Manufacturer",
      content: [
        "It is a web platform enabling users to select vehicle models for policy issuance, renewal, and rollover with dynamic quotes, endorsements, and claim management",
        "Improved application performance by 30% through optimized data fetching and management, leading to faster and more responsive policy handling",
        "Developed configurable policy add-ons and endorsements, decreasing support requests by 50%",
        "Designed an intuitive, user-friendly interface with smooth navigation, reducing page load times by 15% and enhancing overall user experience",
      ],
      timeline: {
        from: {
          year: 2022,
          month: "December - 2024 January",
          // month: "December",
        },
        to: {
          year: 2024,
          month: "January",
        },
      },
    },
  ];
  return (
    <>
      <section className="page flex-col" id="experience">
        <RevealAnimation>
          <h1>Experience</h1>
        </RevealAnimation>
        <Timeline data={data} />
      </section>
      <section className="half-page"></section>
    </>
  );
};

export default Experience;
