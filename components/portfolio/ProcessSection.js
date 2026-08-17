import { AiOutlineCode, AiOutlineRocket, AiOutlineSearch } from "react-icons/ai";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    number: "01",
    icon: AiOutlineSearch,
    title: "Understand",
    text: "Turn the idea, users, and business goals into a clear technical direction.",
  },
  {
    number: "02",
    icon: AiOutlineCode,
    title: "Build",
    text: "Craft accessible interfaces and dependable APIs with a focus on quality details.",
  },
  {
    number: "03",
    icon: AiOutlineRocket,
    title: "Ship",
    text: "Test, deploy, and refine the product so it is ready for real people to use.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative overflow-hidden border-y border-black/5 bg-white/60 py-24 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-[#2a9d8f]/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader
          eyebrow="How I work"
          title="A simple process that keeps good work moving."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className="group rounded-3xl border border-black/5 bg-[#f7f4ee]/80 p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#2a9d8f]/30 hover:shadow-xl hover:shadow-[#0f766e]/10 dark:border-white/10 dark:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0f766e] text-2xl text-white shadow-lg shadow-teal-900/20">
                    <Icon />
                  </span>
                  <span className="font-burtons text-3xl text-[#0f766e]/20 dark:text-[#5eead4]/20">{step.number}</span>
                </div>
                <h3 className="mt-8 text-xl font-black text-[#111827] dark:text-white">{step.title}</h3>
                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
