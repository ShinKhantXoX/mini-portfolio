"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AboutUs } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skill";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const totalSections = 3; // Hero and AboutUs

  const sectionNames = ["home", "about"]; // Maps to index 0, 1

  const handleNext = () => {
    setActiveSection((prev) => {
      const next = Math.min(prev + 1, totalSections - 1);
      setTimeout(() => dispatchSectionChange(next), 0);
      return next;
    });
  };

  const handlePrev = () => {
    setActiveSection((prev) => {
      const next = Math.max(prev - 1, 0);
      setTimeout(() => dispatchSectionChange(next), 0);
      return next;
    });
  };

  const dispatchSectionChange = (index: number) => {
    const event = new CustomEvent('sectionChange', { detail: sectionNames[index] });
    window.dispatchEvent(event);
  };

  useEffect(() => {
    const handleNavigate = (e: Event) => {
      const customEvent = e as CustomEvent;
      const index = sectionNames.indexOf(customEvent.detail);
      if (index !== -1) {
        setActiveSection(index);
      }
    };

    window.addEventListener('navigateSection', handleNavigate);
    return () => window.removeEventListener('navigateSection', handleNavigate);
  }, []);

  return (
    <section className="h-screen overflow-hidden relative">
      <motion.div
        animate={{ x: `-${activeSection * 100}vw` }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="flex w-[200vw] h-full"
      >
        <div className="w-screen h-full shrink-0">
          <Hero />
        </div>
        <div className="w-screen h-full shrink-0">
          <AboutUs />
        </div>
        <div className="w-screen h-full shrink-0">
          <Skills />
        </div>
      </motion.div>

      {/* Navigation Controls */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        <button
          onClick={handlePrev}
          disabled={activeSection === 0}
          className={`p-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm transition-all ${
            activeSection === 0 
              ? 'opacity-30 cursor-not-allowed' 
              : 'hover:bg-white/10 cursor-pointer'
          }`}
          aria-label="Previous section"
        >
          <ChevronUp className="w-6 h-6 text-white" />
        </button>
        
        <button
          onClick={handleNext}
          disabled={activeSection === totalSections - 1}
          className={`p-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm transition-all ${
            activeSection === totalSections - 1 
              ? 'opacity-30 cursor-not-allowed' 
              : 'hover:bg-white/10 cursor-pointer'
          }`}
          aria-label="Next section"
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
}