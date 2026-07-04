import Image from "next/image";
import { expertise } from "../../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function ExpertiseSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <SectionHeader eyebrow="Expertise" title="End-to-end development for serious web products." />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {expertise.map((item) => (
          <article key={item.title} className="rounded-lg border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 dark:border-white/10 dark:bg-white/10">
            <Image src={item.image} alt="" width={78} height={78} />
            <h3 className="mt-6 text-xl font-black text-[#111827] dark:text-white">{item.title}</h3>
            <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{item.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {item.tools.map((tool) => (
                <span key={tool} className="rounded-lg bg-[#f4f1ea] px-3 py-1 text-sm font-semibold text-gray-700 dark:bg-black/20 dark:text-gray-200">
                  {tool}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
