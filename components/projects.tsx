"use client";
import React, { useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} id="projects" className="scroll-mt-56 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 mt-16 rounded-lg p-4 border-2 backdrop-filter backdrop-blur-[0.5rem] bg-opacity-40">
        <h1 className="text-center font-sans font-bold text-xl">
          Check out my other projects here
        </h1>
        <a
          href="https://github.com/willeynimbus"
          className="underline text-xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-sans font-semibold hover:scale-110 active:scale-105 transition-all"
        >
          Github
        </a>
      </div>
    </section>
  );
}
