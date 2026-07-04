export default function AboutSection() {
  return (
    <section id="about" className="bg-[#111827] py-20 text-white dark:bg-black">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#5eead4]">About</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">A developer who cares about product clarity.</h2>
        </div>
        <div className="space-y-5 text-lg leading-8 text-gray-300">
          <p>
            I graduated in Computer Science and Engineering from Jahangirnagar University in 2022 and have worked with teams to build practical software solutions across frontend, backend, and deployment workflows.
          </p>
          <p>
            My strength is turning product requirements into clean interfaces, reliable APIs, and maintainable code. I enjoy collaborating with cross-functional teams, improving user experience, and shipping details that make a site feel complete.
          </p>
        </div>
      </div>
    </section>
  );
}
