import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import remindImg from "@/public/remind.png";
import foodJavaImg from "@/public/foodJava.png";
import weatherAppImg from "@/public/weatherApp.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelors in Technology in Information Technology",
    location: "Rajiv Gandhi institute of Petroleum Technology,Jais, Amethi, Uttar Pradesh",
    description:
      "I'm pursuing B.Tech in Information Technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2025",
  },
  {
    title: "Front-End Developer Intern",
    location: "TECHOCTANET Pvt Ltd",
    description:
      "I worked as a front-end developer intern for 2 months. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2024 - July 2024",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [

  {
    title: "Remind-Me App",
    description:
      "Remind Me is a web application that allows users to create and manage collections of tasks for different people. ",
    tags: ["Next.js", "TypeScript", "Tailwind", "Shadcn UI Library", 'prisma'],
    imageUrl: remindImg,
    link: "https://github.com/willeynimbus/remind-me"
  },
  {
    title: "Food Ordering System",
    description:
      "Developed a food Ordering system windows GUI. A Person can Order food and get the bills of odered food.",
    tags: ["Java", "Java Swing", "Java Springboot"],
    imageUrl: foodJavaImg,
    link: "https://github.com/willeynimbus/food_java"
  },
  {
    title: "Weather App",
    description:
      "A web Apllication that gives weather Information. A person can use this application to get the weather details of the any city.",
    tags: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    imageUrl: weatherAppImg,
    link: "https://github.com/willeynimbus/weather-app"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "JWT",
  "Next Auth",
  "React Native",
  "Expo",
  "Git/Github",
  "Tailwind",
  "Bootstrap",
  "Shadcn UI Library",
  "MongoDB",
  "Redux",
  "GraphQL",
  "C",
  "C++",
  "Python",
  "Java",
  "SQL",
  "MS Excel",
  "PowerBI",

] as const;