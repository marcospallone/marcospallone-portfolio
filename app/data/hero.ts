import { Ear, Compass, Code2, Rocket, Wrench } from 'lucide-react';
import { SubtitleKeyword } from '../models/subtitle-interface';

interface ProcessStep {
  title: string;
  description: string;
  icon: React.ElementType;
}

export const heroSteps: ProcessStep[] = [
  {
    title: 'Discover',
    description: 'Understanding goals, constraints and real needs',
    icon: Ear,
  },
  {
    title: 'Strategy',
    description: 'Defining architecture, stack and development plan',
    icon: Compass,
  },
  {
    title: 'Build',
    description: 'Writing clean, reliable and maintainable code',
    icon: Code2,
  },
  {
    title: 'Ship',
    description: 'Releasing, testing and monitoring in production',
    icon: Rocket,
  },
  {
    title: 'Maintain',
    description: 'Improving, scaling and supporting over time',
    icon: Wrench,
  },
];

export const titles: SubtitleKeyword[] = [
  { prefix: '', colored: 'Full Stack Engineer', suffix: '', color: 'text-cyan-400' },
  { prefix: '', colored: 'Passionate Developer', suffix: '', color: 'text-purple-400' },
  { prefix: '', colored: 'Software Engineer', suffix: '', color: 'text-rose-400' },
  { prefix: '', colored: 'Friend', suffix: '', color: 'text-emerald-400' }
];
