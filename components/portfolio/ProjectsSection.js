import Image from "next/image";
import { AiFillGithub, AiOutlineArrowRight, AiOutlineApi } from "react-icons/ai";
import { profile, projects } from "../../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function ProjectsSection() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24 md:px-8">
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
          <article key={project.title} className="overflow-hidden rounded-3xl border border-black/5 bg-white/80 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10 dark:border-white/10 dark:bg-white/10">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live site`}
                className="group relative block aspect-[16/10] bg-[#ece7de]"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-[#111827]/0 text-sm font-bold text-white opacity-0 transition group-hover:bg-[#111827]/35 group-hover:opacity-100">
                  Open live project <AiOutlineArrowRight className="ml-2" />
                </span>
              </a>
            ) : (
              <div className="relative aspect-[16/10] bg-[#ece7de]">
                <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" />
              </div>
            )}
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
              <div className="mt-5 flex flex-wrap gap-3">
                {(project.frontendUrl || project.liveUrl) && (
                  <a
                    href={project.frontendUrl || project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#111827] px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#0f766e] dark:bg-white dark:text-[#111827] dark:hover:bg-[#5eead4]"
                  >
                    Frontend Live
                    <AiOutlineArrowRight />
                  </a>
                )}
                {project.backendUrl && (
                  <a
                    href={project.backendUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-black/10 px-4 py-2 text-sm font-bold text-gray-700 transition hover:-translate-y-0.5 hover:border-[#0f766e] hover:text-[#0f766e] dark:border-white/10 dark:text-gray-200 dark:hover:text-[#5eead4]"
                  >
                    Backend Live
                    <AiOutlineApi />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-black/10 px-4 py-2 text-sm font-bold text-gray-700 transition hover:-translate-y-0.5 hover:border-[#0f766e] hover:text-[#0f766e] dark:border-white/10 dark:text-gray-200 dark:hover:text-[#5eead4]"
                  >
                    Frontend Code
                    <AiFillGithub />
                  </a>
                )}
                {project.backendGithubUrl && (
                  <a
                    href={project.backendGithubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-black/10 px-4 py-2 text-sm font-bold text-gray-700 transition hover:-translate-y-0.5 hover:border-[#0f766e] hover:text-[#0f766e] dark:border-white/10 dark:text-gray-200 dark:hover:text-[#5eead4]"
                  >
                    Backend Code
                    <AiFillGithub />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


