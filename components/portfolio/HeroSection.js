import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";
import { profile, stats } from "../../data/portfolio";

export default function HeroSection() {
  return (
    <section id="home" className="relative mx-auto grid min-h-[calc(100vh-74px)] max-w-6xl items-center gap-12 overflow-hidden px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-8 lg:py-24">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0f766e]/20 bg-white/75 px-3 py-2 text-sm font-semibold text-[#0f766e] shadow-sm dark:border-[#5eead4]/20 dark:bg-white/10 dark:text-[#5eead4]">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#2a9d8f]" />
          Available for select opportunities · {profile.location}
        </div>
        <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-[-0.04em] text-[#111827] dark:text-white sm:text-6xl lg:text-7xl">
          I build digital products that feel <span className="text-[#0f766e] dark:text-[#5eead4]">clear.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700 dark:text-gray-300">
          I am {profile.name}, a CSE graduate and full stack developer focused on React, Next.js, Node.js, and database-backed applications that feel fast, clear, and reliable.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
            <div key={item.label} className="rounded-2xl border border-black/5 bg-white/75 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10">
              <p className="text-2xl font-black text-[#0f766e] dark:text-[#5eead4]">{item.value}</p>
              <p className="mt-1 text-sm leading-5 text-gray-600 dark:text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-md">
        <div className="absolute -left-4 top-8 h-28 w-28 rounded-lg bg-[#e76f51]/20 blur-2xl" />
        <div className="absolute -right-6 bottom-8 h-36 w-36 rounded-lg bg-[#0f766e]/20 blur-2xl" />
        <div className="relative rounded-[2rem] border border-black/10 bg-white p-4 shadow-2xl shadow-black/10 dark:border-white/10 dark:bg-white/10">
          <div className="relative h-[430px] overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-[#d7f3ed] to-[#f8e1d5] dark:from-[#123d39] dark:to-[#2b211e]">
            <img
              src={profile.image}
              alt={profile.name}
              className="absolute inset-0 h-full w-full object-contain object-top"
            />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/5 bg-[#f7f4ee] px-4 py-3 dark:border-white/10 dark:bg-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#2a9d8f] shadow-lg shadow-[#2a9d8f]/60" />
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500 dark:text-gray-300">Available for</p>
              </div>
              <p className="mt-2 text-sm font-black leading-5 text-[#111827] dark:text-white">Frontend &amp; Full Stack roles</p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-[#f7f4ee] px-4 py-3 dark:border-white/10 dark:bg-white/[0.06]">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500 dark:text-gray-300">Currently focused on</p>
              <p className="mt-2 text-sm font-black leading-5 text-[#111827] dark:text-white">Web experiences</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-3 text-xl text-gray-500 dark:text-gray-400">
          <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-[#0f766e]"><AiFillGithub /></a>
          <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-[#0f766e]"><AiFillLinkedin /></a>
          <a href="mailto:hello@rubayat.dev" aria-label="Email" className="transition hover:text-[#0f766e]"><AiOutlineMail /></a>
        </div>
      </div>
    </section>
  );
}
