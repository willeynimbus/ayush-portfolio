"use client";
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 font-sans">
        I am <span className="font-medium">Ayush Kumar</span>, a highly
        motivated B.Tech in Information Technology student with a passion for{" "}
        <span className="font-medium">
          Competitive Progrmming, Full-Stack Web Development & Data Analytics
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I possess strong proficiency in programming
        languages like <span className="underline">C, C++, Python & Java</span>{" "}
        My core stack is{" "}
        <span className="font-medium italic">
          HTML, CSS, Javascript, React, Next.js, Node.js, MongoDB, MS Excel,
          SQL, MySQL and PowerBI
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
