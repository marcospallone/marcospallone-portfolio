import { Sparkles, Rocket, Zap, Activity, CheckCircle2, Clock, GitPullRequest, Terminal } from "lucide-react";

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
const developer = {
  name: "Marco",
  role: "Full-Stack Developer",
  passion: "Building amazing things",
  location: "🌍 Remote",
  coffee: true,
};
`;

export const metrics: MetricProps[] = [
  { name: "Clean Code", value: 98, color: "cyan", icon: Sparkles, text: "Excellence achieved" },
  { name: "Deploy Frequency", value: 95, color: "purple", icon: Rocket, text: "Excellence achieved" },
  { name: "Performance", value: 99, color: "green", icon: Zap, text: "Excellence achieved" },
  { name: "Bug Rate", value: 5, color: "orange", icon: Activity, text: "Minimal issues" },
];

export const stats: StatProps[] = [
  { icon: Terminal, title: 'Lines of Code', value: '500K+', color: 'cyan', description: 'Written across projects' },
  { icon: GitPullRequest, title: 'Pull Requests', value: '1,200+', color: 'purple', description: 'Merged successfully' },
  { icon: Clock, title: 'Coding Hours', value: '8,000+', color: 'orange', description: 'In the last year alone' },
  { icon: CheckCircle2, title: 'Projects', value: '50+', color: 'green', description: 'Delivered on time' },
]