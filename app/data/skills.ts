import { Boxes, Cloud, Code2, Database, Server, Sparkles } from 'lucide-react';
import { IconType } from 'react-icons';
import { BiLogoSpringBoot } from 'react-icons/bi';
import { FaAws } from 'react-icons/fa6';
import { PiFigmaLogoFill } from 'react-icons/pi';
import {
  RiAngularjsFill,
  RiAppleFill,
  RiBootstrapFill,
  RiCss3Fill,
  RiHtml5Fill,
  RiJavaFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiNodejsFill,
  RiOpenaiFill,
  RiReactjsFill,
  RiSlackFill,
  RiTrelloFill,
  RiWordpressFill,
} from 'react-icons/ri';
import {
  SiAndroid,
  SiAndroidstudio,
  SiAsana,
  SiClaude,
  SiClickup,
  SiDjango,
  SiDocker,
  SiDrupal,
  SiEthereum,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGithubactions,
  SiGitkraken,
  SiGitlab,
  SiGooglecloud,
  SiGraphql,
  SiJetpackcompose,
  SiJira,
  SiKotlin,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNgrx,
  SiPolkadot,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiRedis,
  SiRust,
  SiSentry,
  SiSequelize,
  SiShopify,
  SiSolana,
  SiSolidity,
  SiSourcetree,
  SiSqlite,
  SiStoryblok,
  SiStripe,
  SiSwagger,
  SiSwift,
  SiTailwindcss,
  SiTypeorm,
  SiTypescript,
  SiVite,
  SiWalletconnect,
  SiXcode,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';
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
      { name: 'Angular', icon: RiAngularjsFill },
      { name: 'NgRx', icon: SiNgrx },
      { name: 'React', icon: RiReactjsFill },
      { name: 'Next.js', icon: RiNextjsFill },
      { name: 'Vite', icon: SiVite },
      { name: 'Tailwind', icon: SiTailwindcss },
      { name: 'Bootstrap', icon: RiBootstrapFill },
      { name: 'MUI', icon: SiMui },
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
      { name: 'Node.js', icon: RiNodejsFill },
      { name: 'NestJS', icon: SiNestjs },
      { name: 'Express', icon: SiExpress },
      { name: 'Java', icon: RiJavaFill },
      { name: 'Spring Boot', icon: BiLogoSpringBoot },
      { name: 'Python', icon: SiPython },
      { name: 'Django', icon: SiDjango },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Flask', icon: SiFlask },
      { name: 'Rust', icon: SiRust },
      { name: 'GraphQL', icon: SiGraphql },
      { name: 'Swagger', icon: SiSwagger },
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
      { name: 'Redis', icon: SiRedis },
      { name: 'SQLite', icon: SiSqlite },
      { name: 'Sequelize', icon: SiSequelize },
      { name: 'TypeORM', icon: SiTypeorm },
      { name: 'Drupal', icon: SiDrupal },
      { name: 'Storyblok', icon: SiStoryblok },
      { name: 'Wordpress', icon: RiWordpressFill },
      { name: 'Shopify', icon: SiShopify },
    ],
  },
  {
    id: 'mobile-web3',
    name: 'Mobile & Web3',
    icon: Boxes,
    color: '#f97316',
    gradient: 'from-orange-600 via-amber-500 to-yellow-500',
    borderColor: 'border-orange-500',
    skills: [
      { name: 'Kotlin', icon: SiKotlin },
      { name: 'Compose', icon: SiJetpackcompose },
      { name: 'Android', icon: SiAndroid },
      { name: 'Android Studio', icon: SiAndroidstudio },
      { name: 'Swift', icon: SiSwift },
      { name: 'iOS', icon: RiAppleFill },
      { name: 'Xcode', icon: SiXcode },
      { name: 'Polkadot', icon: SiPolkadot },
      { name: 'Solana', icon: SiSolana },
      { name: 'Ethereum', icon: SiEthereum },
      { name: 'Solidity', icon: SiSolidity },
      { name: 'WalletConnect', icon: SiWalletconnect },
    ],
  },
  {
    id: 'devops',
    name: 'Cloud & DevOps',
    icon: Cloud,
    color: '#10b981',
    gradient: 'from-emerald-600 via-green-500 to-teal-500',
    borderColor: 'border-emerald-500',
    skills: [
      { name: 'Docker', icon: SiDocker },
      { name: 'AWS', icon: FaAws },
      { name: 'Google Cloud', icon: SiGooglecloud },
      { name: 'Azure', icon: VscAzure },
      { name: 'Git', icon: SiGit },
      { name: 'GitLab CI', icon: SiGitlab },
      { name: 'GH Actions', icon: SiGithubactions },
      { name: 'Sentry', icon: SiSentry },
      { name: 'Sourcetree', icon: SiSourcetree },
      { name: 'GitKraken', icon: SiGitkraken },
    ],
  },
  {
    id: 'tools',
    name: 'Tools & AI',
    icon: Sparkles,
    color: '#0ea5e9',
    gradient: 'from-sky-600 via-sky-500 to-indigo-500',
    borderColor: 'border-sky-500',
    skills: [
      { name: 'Claude', icon: SiClaude },
      { name: 'OpenAI', icon: RiOpenaiFill },
      { name: 'Stripe', icon: SiStripe },
      { name: 'Postman', icon: SiPostman },
      { name: 'Figma', icon: PiFigmaLogoFill },
      { name: 'Jira', icon: SiJira },
      { name: 'Slack', icon: RiSlackFill },
      { name: 'Trello', icon: RiTrelloFill },
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