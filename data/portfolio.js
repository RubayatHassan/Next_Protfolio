import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaFacebook, FaGithub, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiPrisma,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import profileImage from "../public/Rubayat1.png";
import database from "../public/database.webp";
import design from "../public/design.png";
import deployment from "../public/deployment.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

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
  image: profileImage,
  resumeUrl:
    "https://drive.google.com/file/d/15E_5XskbinYInXPuV8Ju4qP3ARuADDhq/view?usp=sharing",
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
  { name: "Redux", icon: SiRedux },
  { name: "JavaScript", icon: IoLogoJavascript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Node.js", icon: FaNode },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Mongoose", icon: SiMongoose },
  { name: "PostgreSQL", icon: BiLogoPostgresql },
  { name: "Prisma", icon: SiPrisma },
];

export const projects = [
  {
    title: "SaaS Dashboard",
    type: "Admin experience",
    image: web1,
    tags: ["Next.js", "Charts", "Responsive"],
  },
  {
    title: "Commerce Platform",
    type: "Product experience",
    image: web2,
    tags: ["React", "API", "Checkout"],
  },
  {
    title: "Agency Website",
    type: "Marketing site",
    image: web3,
    tags: ["UI Design", "SEO", "Tailwind"],
  },
  {
    title: "Learning Portal",
    type: "Web app",
    image: web4,
    tags: ["MERN", "Auth", "MongoDB"],
  },
  {
    title: "Portfolio System",
    type: "Personal brand",
    image: web5,
    tags: ["Next.js", "CMS", "Design"],
  },
  {
    title: "Operations Tool",
    type: "Internal workflow",
    image: web6,
    tags: ["Node.js", "Prisma", "PostgreSQL"],
  },
];
