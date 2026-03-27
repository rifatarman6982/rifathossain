import { useState, useEffect } from "react";
import { Sidebar } from "../components/Sidebar";
import { HomeSection } from "../components/sections/HomeSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ResumeSection } from "../components/sections/ResumeSection";
import { PortfolioSection } from "../components/sections/PortfolioSection";
import { ContactSection } from "../components/sections/ContactSection";
import { ScrollProgress } from "../components/ScrollProgress";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "resume", "portfolio", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <ScrollProgress />
      <Sidebar activeSection={activeSection} />
      <main className="lg:mr-80">
        <HomeSection />
        <AboutSection />
        <ResumeSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </div>
  );
}