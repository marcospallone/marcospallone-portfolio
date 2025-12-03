import { Code2, Cog, Database, Server } from 'lucide-react';
import { IconType } from 'react-icons';
import { FaAws } from 'react-icons/fa6';
import { RiNextjsFill } from 'react-icons/ri';
import { SiDocker, SiFastapi, SiGit, SiMysql, SiPostgresql, SiPython, SiTailwindcss } from 'react-icons/si';

interface SkillProps {
  name: string;
  icon: IconType;
}

export interface SkillSectionProps {
  id: string;
  name: string;
  icon: IconType;
  color: string;
  gradient: string;
  borderColor: string;
  skills: SkillProps[];
}

export const skills: SkillSectionProps[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: Code2,
    color: '#a855f7',
    gradient: 'from-purple-600 via-purple-500 to-violet-500',
    borderColor: 'border-purple-500',
    skills: [
      { name: 'Next.js', icon: RiNextjsFill },
      { name: 'Tailwind', icon: SiTailwindcss },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: Server,
    color: '#06b6d4', 
    gradient: 'from-cyan-600 via-cyan-500 to-blue-500',
    borderColor: 'border-cyan-500',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'FastAPI', icon: SiFastapi },
    ],
  },
  {
    id: 'databases',
    name: 'Databases',
    icon: Database,
    color: '#ec4899',
    gradient: 'from-pink-600 via-rose-500 to-fuchsia-500',
    borderColor: 'border-pink-500',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps & Tools',
    icon: Cog,
    color: '#10b981',
    gradient: 'from-emerald-600 via-green-500 to-teal-500',
    borderColor: 'border-emerald-500',
    skills: [
      { name: 'Docker', icon: SiDocker },
      { name: 'AWS', icon: FaAws },
      { name: 'Git', icon: SiGit },
    ],
  },
];
