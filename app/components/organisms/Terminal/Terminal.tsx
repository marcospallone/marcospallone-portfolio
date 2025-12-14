"use client";

import { terminalCommands } from "@/app/data/terminal";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export interface TerminalProps {
  onFinish: () => void;
}

export interface LineProps {
  text: string;
  delay: number;
  isSuccess?: boolean;
  isCommand?: boolean;
  typedText?: string;
}

const Terminal: React.FC<TerminalProps> = ({ onFinish }) => {
  const [lines, setLines] = useState<LineProps[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= terminalCommands.length) {
      setTimeout(() => onFinish(), 500);
      return;
    }
    const line = terminalCommands[index];
    const timer = setTimeout(() => {
      if (!line.isCommand) {
        setLines((prev) => [...prev, line]);
        setIndex(index + 1);
        return;
      }

      let currentText = "";
      let charIndex = 0;
      const typedLine = { ...line, typedText: "" };
      setLines((prev) => [...prev, typedLine]);
      const typingInterval = setInterval(() => {
        currentText += line.text[charIndex];
        charIndex++;
        setLines((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            ...typedLine,
            typedText: currentText,
          };
          return updated;
        });

        if (charIndex >= line.text.length) {
          clearInterval(typingInterval);
          setIndex(index + 1);
        }
      }, 40);

      return () => clearInterval(typingInterval);
    }, line.delay);

    return () => clearTimeout(timer);
  }, [index, onFinish]);

  return (
    <Box className="relative group">
      <Box className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
      <Box className="relative bg-black/90 backdrop-blur-xl border border-cyan-500/30 rounded-lg overflow-hidden shadow-2xl w-[700px]">
        <Box className="flex items-center gap-2 px-4 py-3 bg-black/60 border-b border-cyan-500/20">
          <Box className="flex gap-2">
            <Box className="w-3 h-3 rounded-full bg-red-500" />
            <Box className="w-3 h-3 rounded-full bg-yellow-500" />
            <Box className="w-3 h-3 rounded-full bg-green-500" />
          </Box>
          <span className="text-zinc-400 text-sm ml-4 font-mono">
            marco@dev: ~
          </span>
        </Box>

        <Box className="p-6 font-code text-sm min-h-[400px]">
          {lines.map((line, i) => (
            <Box
              key={i}
              className={`mb-2 ${
                line.isSuccess
                  ? "text-green-400"
                  : line.isCommand
                  ? "text-cyan-400"
                  : "text-zinc-300"
              }`}
            >
              {line.isCommand ? line.typedText ?? "" : line.text}
            </Box>
          ))}
          <Box className="mt-2 animate-pulse text-cyan-400">█</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Terminal;
