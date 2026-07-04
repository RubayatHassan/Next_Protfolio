export default function SectionHeader({ eyebrow, title, className = "" }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#0f766e] dark:text-[#5eead4]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black text-[#111827] dark:text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
