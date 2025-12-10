'use client';

import { navItems } from '@/app/data/menu';
import { Search } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface HeaderCommandPaletteProps {
  showCommandPalette: boolean;
}

const HeaderCommandPalette: React.FC<HeaderCommandPaletteProps> = ({
  showCommandPalette,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string) => {
    const id = section.toLowerCase();
    const element = document.getElementById(id);

    if (!element) {
      console.warn(`Section with id "${id}" not found`);
      return;
    }

    setIsOpen(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const header = document.querySelector('header') as HTMLElement | null;
        const headerOffset = header?.offsetHeight ?? 80;
        const rect = element.getBoundingClientRect();
        const target = rect.top + window.scrollY - headerOffset + 20;
        window.scrollTo({
          top: target,
          behavior: 'smooth',
        });
      });
    });
  };

  const filteredItems = navItems.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % filteredItems.length);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        const selected = filteredItems[activeIndex];
        if (selected) {
          setQuery(selected);
          scrollToSection(selected);
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, activeIndex]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!containerRef.current) return;

      if (!containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  return (
    <AnimatePresence>
      {showCommandPalette && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-2 left-1/2 -translate-x-1/2 z-[9999] w-full flex justify-center"
        >
          <div ref={containerRef} className="relative w-[360px]">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-xl" />
            <div className="relative bg-black/90 backdrop-blur-xl border border-cyan-500/40 rounded-lg shadow-2xl overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-cyan-500/20">
                <Search className="w-4 h-4 text-cyan-400" />

                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setIsOpen(true)}
                  placeholder="Quick navigation..."
                  className="bg-transparent text-gray-200 text-sm w-full focus:outline-none"
                />
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex flex-col p-2"
                  >
                    {filteredItems.map((item, index) => (
                      <motion.button
                        key={item}
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => {
                          setQuery(item);
                          scrollToSection(item);
                        }}
                        className={`
                            text-left px-3 py-2 border rounded mb-1 transition-all 
                            ${
                              activeIndex === index
                                ? 'bg-cyan-600/30 border-cyan-400'
                                : 'bg-black/60 border-cyan-500/30 hover:border-cyan-500 hover:bg-cyan-500/10'
                            }
                        `}
                      >
                        <span className="text-gray-300 text-xs font-mono">{item}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeaderCommandPalette;
