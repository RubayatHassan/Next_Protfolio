import { AiOutlineDownload } from "react-icons/ai";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { profile } from "../../data/portfolio";

export default function Navbar({ darkMode, onToggleDarkMode }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-black/5 bg-[#f7f4ee]/75 backdrop-blur-xl dark:border-white/10 dark:bg-[#101314]/75">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="flex items-center gap-2 font-burtons text-xl tracking-wide">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#0f766e] text-sm text-white">R</span>
          {profile.brand}<span className="text-[#0f766e] dark:text-[#5eead4]">.</span>
        </a>
        <div className="flex items-center gap-2 sm:gap-4">
          <a className="hidden text-sm font-medium text-gray-600 hover:text-[#0f766e] dark:text-gray-300 dark:hover:text-[#5eead4] sm:inline" href="#work">
            Work
          </a>
          <a className="hidden text-sm font-medium text-gray-600 hover:text-[#0f766e] dark:text-gray-300 dark:hover:text-[#5eead4] sm:inline" href="#contact">
            Contact
          </a>
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="grid h-10 w-10 place-items-center rounded-lg border border-black/10 bg-white text-[#1f2933] shadow-sm transition hover:-translate-y-0.5 hover:border-[#0f766e] dark:border-white/10 dark:bg-white/10 dark:text-white"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <BsSunFill /> : <BsFillMoonStarsFill />}
          </button>
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-[#0f766e] px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-teal-900/20 transition hover:-translate-y-0.5 hover:bg-[#115e59]"
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineDownload className="text-lg" />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
