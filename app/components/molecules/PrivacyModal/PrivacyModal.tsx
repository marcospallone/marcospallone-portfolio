'use client';

import { privacyText } from '@/app/data/privacy';
import { useCursor } from '@/app/providers';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function PrivacyModal({ isOpen, onClose }: Props) {
  const { setCursorType } = useCursor();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 
                 bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-3xl max-h-[80vh] rounded-2xl 
                   bg-neutral-900 text-neutral-100 shadow-xl 
                   overflow-hidden flex flex-col"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <h2 className="text-lg font-semibold">Privacy Policy</h2>
              <button
                onClick={() => {
                  setCursorType('default');
                  onClose();
                }}
                onMouseEnter={() => setCursorType('link')}
                onMouseLeave={() => setCursorType('default')}
              >
                ✕
              </button>
            </div>

            <div className="px-6 py-4 overflow-y-auto text-sm whitespace-pre-line">
              {privacyText}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
