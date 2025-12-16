'use client';

import { scrollBarSections } from '@/app/data/scrollbar';
import { useActiveSection } from '@/app/hooks/useActiveSection';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollBar() {
  const { scrollYProgress } = useScroll();
  const activeSection = useActiveSection();
  const BOTTOM_OFFSET = 50; // px
  const [isNearBottom, setIsNearBottom] = useState(false);

  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.2,
  });

  const currentColor =
    scrollBarSections.find((s) => s.id === activeSection)?.color ?? '#ffffff';

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const distanceFromBottom = documentHeight - (scrollY + viewportHeight);

      setIsNearBottom(distanceFromBottom <= BOTTOM_OFFSET);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isVisible = activeSection !== 'hero' && !isNearBottom;

  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.div
          key="scrollbar"
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[40vw] max-w-xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <div className="relative h-[8px] w-full rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full w-full rounded-full"
              style={{
                scaleX: progress,
                transformOrigin: 'left',
                backgroundColor: currentColor,
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
