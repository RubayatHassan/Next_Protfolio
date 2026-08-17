import Image from "next/image";
import { expertise } from "../../data/portfolio";
import SectionHeader from "./SectionHeader";

export default function ExpertiseSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:px-8">
      <SectionHeader eyebrow="Expertise" title="End-to-end development for serious web products." />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {expertise.map((item) => (
          <article key={item.title} className="group rounded-3xl border border-black/5 bg-white/75 p-7 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-[#2a9d8f]/30 hover:shadow-xl hover:shadow-black/10 dark:border-white/10 dark:bg-white/10">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#f4f1ea] dark:bg-white/10">
              <Image src={item.image} alt="" width={64} height={64} className="transition duration-300 group-hover:scale-110" />
            </div>
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
