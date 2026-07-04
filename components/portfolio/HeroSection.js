import Image from "next/image";
import { AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";
import { profile, stats } from "../../data/portfolio";

export default function HeroSection() {
  return (
    <section id="home" className="mx-auto grid min-h-[calc(100vh-74px)] max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-[1.05fr_0.95fr] md:px-8 lg:py-20">
      <div>
        <p className="mb-5 inline-flex rounded-lg border border-[#0f766e]/20 bg-white/70 px-3 py-2 text-sm font-semibold text-[#0f766e] shadow-sm dark:border-[#5eead4]/20 dark:bg-white/10 dark:text-[#5eead4]">
          {profile.role} based in {profile.location}
        </p>
        <h1 className="max-w-3xl text-4xl font-black leading-tight text-[#111827] dark:text-white sm:text-5xl lg:text-6xl">
          Building modern web products with clean code and thoughtful design.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700 dark:text-gray-300">
          I am {profile.name}, a CSE graduate and full stack developer focused on React, Next.js, Node.js, and database-backed applications that feel fast, clear, and reliable.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#111827] px-5 py-3 font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#0f766e] dark:bg-white dark:text-[#111827] dark:hover:bg-[#5eead4]"
          >
            View Projects
            <AiOutlineArrowRight className="text-xl" />
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-white px-5 py-3 font-semibold text-[#1f2933] shadow-sm transition hover:-translate-y-0.5 hover:border-[#0f766e] dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            <AiOutlineMail className="text-xl" />
            Message Me
          </a>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-lg border border-black/5 bg-white/75 p-4 shadow-sm dark:border-white/10 dark:bg-white/10">
              <p className="text-2xl font-black text-[#0f766e] dark:text-[#5eead4]">{item.value}</p>
              <p className="mt-1 text-sm leading-5 text-gray-600 dark:text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-md">
        <div className="absolute -left-4 top-8 h-28 w-28 rounded-lg bg-[#e76f51]/20 blur-2xl" />
        <div className="absolute -right-6 bottom-8 h-36 w-36 rounded-lg bg-[#0f766e]/20 blur-2xl" />
        <div className="relative overflow-hidden rounded-lg border border-black/10 bg-white p-4 shadow-2xl shadow-black/10 dark:border-white/10 dark:bg-white/10">
          <div className="relative h-[430px] overflow-hidden rounded-lg bg-gradient-to-b from-[#d7f3ed] to-[#f8e1d5] dark:from-[#123d39] dark:to-[#2b211e]">
            <Image src={profile.image} alt={profile.name} layout="fill" objectFit="cover" priority />
          </div>
          <div className="mt-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-300">Available for</p>
              <p className="font-bold">Frontend & Full Stack roles</p>
            </div>
            <div className="h-3 w-3 rounded-full bg-[#2a9d8f] shadow-lg shadow-[#2a9d8f]/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
