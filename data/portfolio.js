import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaFacebook, FaGithub, FaGitAlt, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiExpress,
  SiDocker,
  SiFirebase,
  SiFramer,
  SiGithub,
  SiPostman,
  SiMongodb,
  SiMongoose,
  SiNpm,
  SiNextdotjs,
  SiPrisma,
  SiRedis,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import database from "../public/database.webp";
import design from "../public/design.png";
import deployment from "../public/deployment.png";
import rentnestPreview from "../public/rentnest.png";
import dinoHrPreview from "../public/dino-hr.png";
import devIssuesPreview from "../public/devissues.png";
import metroTimeFarePreview from "../public/metro-time-fare.png";

export const siteMeta = {
  title: "Quazi Rubayat Hassan | Full Stack Web Developer",
  description:
    "Professional portfolio of Quazi Rubayat Hassan, a full stack web developer building polished React, Next.js, Node.js, and database-backed products.",
};

export const profile = {
  name: "Quazi Rubayat Hassan",
  brand: "Rubayat",
  role: "Full Stack Web Developer",
  location: "Bangladesh",
  image: "https://i.imgur.com/FvdMK9d.png",
  resumeUrl:
    "https://drive.google.com/file/d/1pRb7hzPA3WXhXirbOySEJbRxygEsEQay/view?usp=sharing",
  linkedinUrl:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ||
    "https://www.linkedin.com/in/rubayat-hassan",
  githubUrl:
    process.env.NEXT_PUBLIC_GITHUB_URL ||
    "https://github.com/RubayatHassan",
  facebookUrl: "https://www.facebook.com/rubayat.roktim/",
};

export const socials = [
  {
    name: "Facebook",
    href: profile.facebookUrl,
    icon: FaFacebook,
  },
  {
    name: "LinkedIn",
    href: profile.linkedinUrl,
    icon: AiFillLinkedin,
  },
  {
    name: "GitHub",
    href: `${profile.githubUrl}?tab=repositories`,
    icon: FaGithub,
  },
];

export const stats = [
  { value: "2+", label: "Years building web apps" },
  { value: "12+", label: "Production-ready projects" },
  { value: "MERN", label: "Primary engineering stack" },
];

export const expertise = [
  {
    title: "Frontend Engineering",
    summary:
      "Clean, responsive interfaces with React, Next.js, Redux, Tailwind, and component-focused architecture.",
    image: design,
    tools: ["React", "Next.js", "JavaScript", "TypeScript", "Redux", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    summary:
      "REST APIs, data modelling, authentication flows, and maintainable Node.js services for modern products.",
    image: database,
    tools: ["Node.js", "Express", "MongoDB", "Mongoose", "PostgreSQL", "Prisma"],
  },
  {
    title: "Delivery & Tooling",
    summary:
      "Git-based collaboration, deployment setup, cloud hosting, Firebase integration, and product polish.",
    image: deployment,
    tools: ["Git", "GitHub", "Firebase", "Vercel", "Netlify", "Figma"],
  },
];

export const stack = [
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Redux", icon: SiRedux },
  { name: "JavaScript", icon: IoLogoJavascript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Node.js", icon: FaNode },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Mongoose", icon: SiMongoose },
  { name: "PostgreSQL", icon: BiLogoPostgresql },
  { name: "Prisma", icon: SiPrisma },
  { name: "Redis", icon: SiRedis },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: SiGithub },
  { name: "Firebase", icon: SiFirebase },
  { name: "Vercel", icon: SiVercel },
  { name: "Docker", icon: SiDocker },
  { name: "Postman", icon: SiPostman },
  { name: "Framer Motion", icon: SiFramer },
  { name: "npm", icon: SiNpm },
];

export const projects = [
  {
    title: "RentNest",
    type: "Rental property marketplace",
    image: rentnestPreview,
    liveUrl: "https://rent-nest-frontend-iota.vercel.app/",
    frontendUrl: "https://rent-nest-frontend-iota.vercel.app/",
    backendUrl: "https://rentnest-backend-rho.vercel.app/",
    githubUrl: "https://github.com/RubayatHassan/Rent_Nest-Front-end",
    backendGithubUrl: "https://github.com/RubayatHassan/Rent_Nest",
    tags: ["Next.js", "Node.js", "Property Rental"],
  },
  {
    title: "Dino HR",
    type: "HR management platform",
    image: dinoHrPreview,
    liveUrl: "https://dino-hr.vercel.app/",
    frontendUrl: "https://dino-hr.vercel.app/",
    githubUrl: "https://github.com/RubayatHassan/dino-HR.git",
    tags: ["Next.js", "HR", "Dashboard"],
  },
  {
    title: "DevIssues",
    type: "Developer issue tracker",
    image: devIssuesPreview,
    liveUrl: "https://react-devissues.vercel.app/",
    frontendUrl: "https://react-devissues.vercel.app/",
    githubUrl: "https://github.com/RubayatHassan/DevIssues-Frontend.git",
    tags: ["React", "Issues", "Frontend"],
  },
  {
    title: "Metro Time Fare",
    type: "Transit time and fare app",
    image: metroTimeFarePreview,
    liveUrl: "https://metro-time-fare.vercel.app/",
    frontendUrl: "https://metro-time-fare.vercel.app/",
    githubUrl: "https://github.com/RubayatHassan/Metro-time-fare.git",
    tags: ["Next.js", "Transit", "Fare Calculator"],
  },
];






