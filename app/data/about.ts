import { Sparkles, Rocket, Zap, Activity, CheckCircle2, Clock, GitPullRequest, Terminal, Layers } from "lucide-react";
import { SubtitleKeyword } from "../models/subtitle-interface";

export interface MetricProps {
  name: string;
  value: number;
  color: string;
  icon: any;
  text: string
}

export interface StatProps {
  title: string;
  description: string;
  icon: any;
  value: string;
  color: string;
}

export const codeString = `
const developer = { // Always learning, always improving
  name: "Marco",
  role: "Full-Stack Engineer",
  focus: ["scalability", "clean architecture", 
    "performance", "user-experience"],
  passions: ["skiing", "AC Milan", "cycling"],
  location: "🌍 Remote",
  openToOpportunities: true,  
  coffee: false,
} as const;`;

export const metrics: MetricProps[] = [
  { name: "Code Quality", value: 95, color: "cyan", icon: Sparkles, text: "Readable, tested, maintainable" },
  { name: "System Design", value: 90, color: "purple", icon: Layers, text: "Scalable & modular architecture" },
  { name: "Performance Focus", value: 99, color: "green", icon: Zap, text: "Optimized for speed & efficiency" },
  { name: "Technical Debt", value: 10, color: "orange", icon: Activity, text: "Actively managed & reduced" },
];

export const stats: StatProps[] = [
  { icon: Terminal, title: 'Production Code', value: '3 years', color: 'cyan', description: 'Working with real-world software' },
  { icon: GitPullRequest, title: 'Code Pushing', value: '1,000+', color: 'purple', description: 'Across different projects' },
  { icon: Clock, title: 'Coding Hours', value: '8,000+', color: 'orange', description: 'For working and personal projects' },
  { icon: CheckCircle2, title: 'Shipped Projects', value: '50+', color: 'green', description: 'From idea to production' },
]

export const subtitleKeywords: SubtitleKeyword[] = [
  { prefix: 'Building', colored: 'scalable products.', suffix: '', color: 'text-cyan-400' },
  { prefix: 'Thinking', colored: 'clean architectures.', suffix: '', color: 'text-purple-400' },
  { prefix: 'Realizing', colored: 'high-performance web apps.', suffix: '', color: 'text-emerald-400' },
  { prefix: 'Creating', colored: 'meaningful user experiences.', suffix: '', color: 'text-rose-400' }
]