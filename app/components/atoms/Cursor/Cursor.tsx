"use client";

import { motion } from "framer-motion";
import { useCursor } from "@/app/providers";
import { useMousePosition } from "@/app/hooks/useMousePosition";
import { useActiveSection } from "@/app/hooks/useActiveSection";
import { scrollBarSections } from "@/app/data/scrollbar";

export default function Cursor() {
  const { x, y } = useMousePosition();
  const { cursorType } = useCursor();
  const activeSection = useActiveSection();

  const color =
    scrollBarSections.find(s => s.id === activeSection)?.color ??
    "#ffffff";

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
        style={{
          backgroundColor: color,
          x: x - 4,
          y: y - 4,
        }}
        transition={{ type: "tween", duration: 0 }}
      />

      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[9998]"
        style={{
          x: x - 24,
          y: y - 24,
          backgroundColor: color,
        }}
        variants={{
          default: {
            scale: 1,
            opacity: 0.35,
            filter: "blur(10px)",
          },
          link: {
            scale: 2,
            opacity: 0.75,
            filter: "blur(14px)",
          },
        }}
        animate={cursorType}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 20,
        }}
      />
    </>
  );
}
