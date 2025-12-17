'use client';

import { useState } from 'react';
import Hero from './components/organisms/Hero/Hero';
import Terminal from './components/organisms/Terminal/Terminal';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import About from './components/organisms/About/About';
import Experiences from './components/organisms/Experiences/Experiences';
import Skills from './components/organisms/Skills/Skills';
import Languages from './components/organisms/Languages/Languages';
import Projects from './components/organisms/Projects/Projects';
import Contacts from './components/organisms/Contacts/Contacts';
import Footer from './components/molecules/Footer/Footer';

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(false);
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [200, 600], [1, 0]);
  const y = useTransform(scrollY, [200, 600], [0, -60]);

  return (
    <main className="relative">
      <AnimatePresence mode="wait">
        {showTerminal ? (
          <motion.div
            key="terminal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
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
          <motion.section
            key="hero"
            className="relative z-10"
            style={{
              opacity,
              y,
            }}
            initial={{ opacity: 1 }}
          >
            <Hero />
          </motion.section>
        )}
      </AnimatePresence>
      <About />
      <Experiences />
      <Skills />
      <Languages />
      <Projects />
      <Contacts />
      <Footer />
    </main>
  );
}
