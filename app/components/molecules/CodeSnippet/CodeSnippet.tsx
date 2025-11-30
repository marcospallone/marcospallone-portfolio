"use client";

import { codeString } from "@/app/data/about";
import { customTheme } from "@/app/styles/prism-themes/customTheme";
import { Highlight } from "prism-react-renderer";

const CodeSnippet: React.FC = () => {
  return (
    <>
      <div className="relative bg-black/60 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-zinc-400 text-sm font-mono ml-auto">
            developer.js
          </span>
        </div>
        <Highlight code={codeString} language="javascript" theme={customTheme}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} font-mono text-sm`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </>
  );
};

export default CodeSnippet;
