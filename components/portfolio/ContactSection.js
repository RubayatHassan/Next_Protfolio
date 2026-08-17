import { AiOutlineDownload, AiOutlineMail } from "react-icons/ai";
import { profile } from "../../data/portfolio";

export default function ContactSection() {
  return (
    <section id="contact" className="px-5 pb-10 md:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#0f766e] p-8 text-white shadow-2xl shadow-teal-900/20 md:p-14">
        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border-[28px] border-white/10" />
        <div className="pointer-events-none absolute -bottom-28 left-1/3 h-72 w-72 rounded-full border-[32px] border-white/5" />
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#b9fff5]">Contact</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Let&apos;s build something clean, useful, and memorable.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-teal-50">
              Open to full stack roles, freelance builds, and product-focused web development work.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 font-bold text-[#0f766e] transition hover:-translate-y-0.5" href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <AiOutlineMail className="text-xl" />
              Message on LinkedIn
            </a>
            <a className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
              <AiOutlineDownload className="text-xl" />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
