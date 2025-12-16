"use client";

import React, { createContext, useContext, useState } from "react";

type CursorType = "default" | "link" | "button";

type CursorContextValue = {
  cursorType: CursorType;
  setCursorType: (t: CursorType) => void;
};

const CursorContext = createContext<CursorContextValue | null>(null);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorType, setCursorType] = useState<CursorType>("default");

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const ctx = useContext(CursorContext);
  if (!ctx) throw new Error("useCursor must be used inside <CursorProvider>");
  return ctx;
}
