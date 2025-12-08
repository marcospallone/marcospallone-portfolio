"use client";

import { useState } from "react";
import Hero from "./components/organisms/Hero/Hero";
import Terminal from "./components/organisms/Terminal/Terminal";
import { AnimatePresence, motion } from "motion/react";
import About from "./components/organisms/About/About";
import Experiences from "./components/organisms/Experiences/Experiences";
import Skills from "./components/organisms/Skills/Skills";
import Languages from "./components/organisms/Languages/Languages";
import Projects from "./components/organisms/Projects/Projects";
import Contacts from "./components/organisms/Contacts/Contacts";

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(false);

  return (
    <main className="relative">
      <AnimatePresence mode="wait">
        {showTerminal ? (
          <motion.div
            key="terminal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
            className="
              fixed inset-0 z-[9999]
              flex items-center justify-center
              bg-black
            "
          >
            <Terminal onFinish={() => setShowTerminal(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <Hero />
          </motion.div>
        )}
      </AnimatePresence>
      <About />
      <Experiences />
      <Skills />
      <Languages />
      <Projects />
      <Contacts />
    </main>
  );
}
