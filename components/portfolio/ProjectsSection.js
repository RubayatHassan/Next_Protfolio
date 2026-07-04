import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
import { profile, projects } from "../../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function ProjectsSection() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeader eyebrow="Selected Work" title="Projects with polished interfaces and practical engineering." />
        <a
          href={`${profile.githubUrl}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-bold text-[#0f766e] hover:text-[#e76f51] dark:text-[#5eead4]"
        >
          See GitHub
          <AiOutlineArrowRight />
        </a>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="overflow-hidden rounded-lg border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 dark:border-white/10 dark:bg-white/10">
            <div className="relative aspect-[16/10] bg-[#ece7de]">
              <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#e76f51]">{project.type}</p>
              <h3 className="mt-2 text-2xl font-black text-[#111827] dark:text-white">{project.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-lg border border-black/10 px-3 py-1 text-sm font-semibold text-gray-600 dark:border-white/10 dark:text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
