'use client';

import { motion } from 'motion/react';
import { useCallback, useEffect, useState } from 'react';
import Scrollbar from './components/atoms/Scrollbar/Scrollbar';
import Footer from './components/molecules/Footer/Footer';
import Header from './components/molecules/Header/Header';
import About from './components/organisms/About/About';
import Contacts from './components/organisms/Contacts/Contacts';
import Experiences from './components/organisms/Experiences/Experiences';
import Hero from './components/organisms/Hero/Hero';
import Languages from './components/organisms/Languages/Languages';
import Projects from './components/organisms/Projects/Projects';
import Skills from './components/organisms/Skills/Skills';
import Terminal from './components/organisms/Terminal/Terminal';

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(true);

  useEffect(() => {
    if (!showTerminal) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showTerminal]);

  const handleTerminalFinish = useCallback(() => {
    window.scrollTo(0, 0);
    setShowTerminal(false);
  }, []);

  return (
    <>
      {showTerminal && (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
        >
          <Terminal onFinish={handleTerminalFinish} />
        </motion.div>
      )}

      <div
        aria-hidden={showTerminal}
        inert={showTerminal}
        className={showTerminal ? 'invisible pointer-events-none' : 'visible'}
      >
        <Scrollbar />

        <header className="fixed z-20 w-full">
          <Header />
        </header>

        <main className="relative">
          <Hero />
          <About />
          <Experiences />
          <Skills />
          <Languages />
          <Projects />
          <Contacts />
          <Footer />
        </main>
      </div>
    </>
  );
}
