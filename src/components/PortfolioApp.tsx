"use client";

import { useState, useEffect, useCallback } from "react";
import Header from "./Header";
import About from "./sections/About";
import Resume from "./sections/Resume";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";

export default function PortfolioApp() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSectionChange = useCallback(
    (section: string | null) => {
      if (section === null) {
        setActiveSection(null);
        return;
      }

      if (activeSection === null) {
        // Coming from hero view - need transition delay
        setIsTransitioning(true);
        setActiveSection(section);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 350);
      } else {
        setActiveSection(section);
      }
    },
    [activeSection]
  );

  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      if (hash && hash !== "header") {
        setIsTransitioning(true);
        setActiveSection(hash);
        setTimeout(() => setIsTransitioning(false), 350);
      }
    }
  }, []);

  const isVisible = (id: string) =>
    activeSection === id && !isTransitioning;

  return (
    <>
      <div id="container1"></div>

      <Header
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      <About isVisible={isVisible("about")} />
      <Resume isVisible={isVisible("resume")} />
      <Services isVisible={isVisible("services")} />
      <Portfolio isVisible={isVisible("portfolio")} />
      <Contact isVisible={isVisible("contact")} />

      <div className="credits">
        Designed by <a href="https://bootstrapmade.com/">LeonOhlin</a>
      </div>
    </>
  );
}
