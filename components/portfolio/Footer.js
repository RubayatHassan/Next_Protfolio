import { socials } from "../../data/portfolio";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-8 text-sm text-gray-600 dark:text-gray-300 md:flex-row md:px-8">
      <p>© 2026 Quazi Rubayat Hassan. All rights reserved.</p>
      <div className="flex gap-3">
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="grid h-10 w-10 place-items-center rounded-lg border border-black/10 bg-white text-xl text-gray-700 transition hover:-translate-y-0.5 hover:border-[#0f766e] hover:text-[#0f766e] dark:border-white/10 dark:bg-white/10 dark:text-gray-200"
            >
              <Icon />
            </a>
          );
        })}
      </div>
    </footer>
  );
}
