import { Code2, Cog, Database, Server } from 'lucide-react';
import { IconType } from 'react-icons';
import { BiLogoSpringBoot } from 'react-icons/bi';
import { FaAws } from 'react-icons/fa6';
import { PiFigmaLogoFill } from 'react-icons/pi';
import {
  RiAngularjsFill,
  RiBootstrapFill,
  RiCss3Fill,
  RiHtml5Fill,
  RiJavaFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiNodejsFill,
  RiSlackFill,
  RiTrelloFill,
  RiWordpressFill,
} from 'react-icons/ri';
import {
  SiAsana,
  SiClickup,
  SiDocker,
  SiDrupal,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGitkraken,
  SiGraphql,
  SiJira,
  SiMui,
  SiMysql,
  SiNestjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiShopify,
  SiSourcetree,
  SiSpringboot,
  SiStoryblok,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { TbFileTypeSql } from 'react-icons/tb';
import { SubtitleKeyword } from '../models/subtitle-interface';

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
      { name: 'HTML', icon: RiHtml5Fill },
      { name: 'CSS', icon: RiCss3Fill },
      { name: 'JavaScript', icon: RiJavascriptFill },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Next.js', icon: RiNextjsFill },
      { name: 'MUI', icon: SiMui },
      { name: 'Angular', icon: RiAngularjsFill },
      { name: 'Bootstrap', icon: RiBootstrapFill },
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
      { name: 'Java', icon: RiJavaFill },
      { name: 'Spring Boot', icon: BiLogoSpringBoot },
      { name: 'JavaScript', icon: RiJavascriptFill },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'NestJS', icon: SiNestjs },
      { name: 'Python', icon: SiPython },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Node.js', icon: RiNodejsFill },
      { name: 'Express', icon: SiExpress },
      { name: 'GraphQL', icon: SiGraphql },
    ],
  },
  {
    id: 'databases',
    name: 'Databases & CMS',
    icon: Database,
    color: '#ec4899',
    gradient: 'from-pink-600 via-rose-500 to-fuchsia-500',
    borderColor: 'border-pink-500',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Drupal', icon: SiDrupal },
      { name: 'Storyblok', icon: SiStoryblok },
      { name: 'Wordpress', icon: RiWordpressFill },
      { name: 'Shopify', icon: SiShopify },
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
      { name: 'Sourcetree', icon: SiSourcetree },
      { name: 'GitKraken', icon: SiGitkraken },
      { name: 'Figma', icon: PiFigmaLogoFill },
      { name: 'Jira', icon: SiJira },
      { name: 'Trello', icon: RiTrelloFill },
      { name: 'Slack', icon: RiSlackFill },
      { name: 'Postman', icon: SiPostman },
      { name: 'Asana', icon: SiAsana },
      { name: 'ClickUp', icon: SiClickup },
    ],
  },
];

export const subtitleKeywords: SubtitleKeyword[] = [
  { prefix: 'Frontend precision', colored: 'meets', suffix: 'backend logic.', color: 'text-purple-400' },
  { prefix: '', colored: 'Data, APIs and systems', suffix: 'working together.', color: 'text-cyan-400' },
  { prefix: 'Tools chosen for the', colored: 'problem,', suffix: 'not the trend.', color: 'text-emerald-400' },
  { prefix: 'Engineering decisions driven by', colored: 'context.', suffix: '', color: 'text-rose-400' },
];