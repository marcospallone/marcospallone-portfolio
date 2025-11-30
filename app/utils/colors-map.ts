export const COLOR_MAP: Record<string, string> = {
  "cyan-400": "border-cyan-400 text-cyan-400",
  "purple-500": "border-purple-500 text-purple-500",
};

const techColorMap = new Map<string, string>();

const colors = [
  'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
  'bg-blue-500/10 border-blue-500/30 text-blue-400',
  'bg-purple-500/10 border-purple-500/30 text-purple-400',
  'bg-rose-500/10 border-rose-500/30 text-rose-400',
  'bg-pink-500/10 border-pink-500/30 text-pink-400',
  'bg-violet-500/10 border-violet-500/30 text-violet-400',
  'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
  'bg-teal-500/10 border-teal-500/30 text-teal-400',
  'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
  'bg-green-500/10 border-green-500/30 text-green-400',
  'bg-lime-500/10 border-lime-500/30 text-lime-400',
  'bg-yellow-500/10 border-yellow-500/30 text-yellow-400',
  'bg-amber-500/10 border-amber-500/30 text-amber-400',
  'bg-orange-500/10 border-orange-500/30 text-orange-400',
  'bg-red-500/10 border-red-500/30 text-red-400',
  'bg-rose-500/10 border-rose-500/30 text-rose-400',
];

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

export function getTechColor(tech: string): string {
  const normalizedTech = tech.toLowerCase().trim();
  
  if (!techColorMap.has(normalizedTech)) {
    const hash = hashString(normalizedTech);
    const colorIndex = hash % colors.length;
    techColorMap.set(normalizedTech, colors[colorIndex]);
  }
  
  return techColorMap.get(normalizedTech)!;
}
