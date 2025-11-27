import { Sparkles, Rocket, Zap, Activity } from "lucide-react";

export interface MetricProps {
  name: string;
  value: number;
  color: string;
  icon: any;
  text: string
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
