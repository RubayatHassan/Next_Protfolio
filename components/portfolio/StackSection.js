import { stack } from "../../data/portfolio";

export default function StackSection() {
  return (
    <section className="border-y border-black/5 bg-white/55 py-8 dark:border-white/10 dark:bg-white/[0.04]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-5 md:px-8">
        {stack.map((tech) => {
          const Icon = tech.icon;
          return (
            <div key={tech.name} className="flex items-center gap-2 rounded-lg border border-black/5 bg-white px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-gray-200">
              <Icon className="text-xl text-[#0f766e] dark:text-[#5eead4]" />
              {tech.name}
            </div>
          );
        })}
      </div>
    </section>
  );
}
