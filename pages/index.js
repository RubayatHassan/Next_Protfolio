import Head from "next/head";
import { useState } from "react";
import AboutSection from "../components/portfolio/AboutSection";
import ContactSection from "../components/portfolio/ContactSection";
import ExpertiseSection from "../components/portfolio/ExpertiseSection";
import Footer from "../components/portfolio/Footer";
import HeroSection from "../components/portfolio/HeroSection";
import Navbar from "../components/portfolio/Navbar";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import StackSection from "../components/portfolio/StackSection";
import { siteMeta } from "../data/portfolio";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>{siteMeta.title}</title>
        <meta name="description" content={siteMeta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-[#f7f4ee] text-[#1f2933] dark:bg-[#101314] dark:text-[#f4f1ea]">
        <Navbar
          darkMode={darkMode}
          onToggleDarkMode={() => setDarkMode((currentMode) => !currentMode)}
        />
        <HeroSection />
        <StackSection />
        <ExpertiseSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
