"use client";

import { useEffect, useState } from "react";
import { scrollBarSections } from "../data/scrollbar";

const TRIGGER_OFFSET = 350;

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY + TRIGGER_OFFSET;
        let current = "hero";
        for (const section of scrollBarSections) {
          const el = document.getElementById(section.id);
          if (!el) continue;
          if (scrollY >= el.offsetTop) {
            current = section.id;
          }
        }
        setActiveSection(current);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return activeSection;
}
