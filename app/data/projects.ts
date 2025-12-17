import { SubtitleKeyword } from '../models/subtitle-interface';

export interface ProjectProps {
  repo: string;
  role: string;
  github?: string;
  url?: string;
  media: string;
  imageSize?: string;
  title: string;
  description: string;
  technologies: string[];
  command: string;
}

export const projects: ProjectProps[] = [
  {
    title: 'Treccani',
    repo: 'treccani-frontend',
    role: 'Frontend Developer',
    description:
      'Frontend development for the official Treccani website, focusing on performance, accessibility and content-driven architecture using a modern headless CMS approach.',
    technologies: ['TypeScript', 'Next.js', 'MUI', 'Storyblok', 'Figma', 'Git', 'Jira'],
    media: '/images/treccani.png',
    url: 'https://www.treccani.it',
    command: 'npm run dev',
  },
  {
    title: 'Juriam',
    repo: 'juriam',
    role: 'Full-Stack Developer',
    description:
      'Full-stack development of an AI-powered legal platform designed to support lawyers in daily activities, automating document creation, legal workflows and certified communications.',
    technologies: ['Angular', 'NestJS', 'Bootstrap', 'Git', 'AWS', 'Asana'],
    media: '/images/juriam.jpeg',
    url: 'https://juriam.it/',
    command: 'ng serve',
  },
  {
    title: 'Università degli Studi di Padova',
    repo: 'unipd-frontend',
    role: 'Frontend Developer',
    description:
      'Frontend development for the University of Padua website, focused on scalable design systems, accessibility standards and seamless integration with an enterprise CMS.',
    technologies: ['TypeScript', 'Next.js', 'MUI', 'Drupal', 'Figma', 'Git', 'Jira'],
    media: '/images/unipd.jpg',
    imageSize: 'contain',
    command: 'pnpm dev',
  },
  {
    title: 'Termoricambi',
    repo: 'termoricambi',
    role: 'Full-Stack Engineer',
    description:
      'Full-stack engineering of two interconnected e-commerce platforms, built with different technologies and strategies to support distinct business models within the same domain.',
    technologies: ['Liquid', 'Shopify', 'GraphQL', 'PrestaShop', 'PHP'],
    media: '/images/termoricambi.png',
    imageSize: 'contain',
    command: 'shopify app dev',
  },
  {
    title: 'Texting and Driving',
    repo: 'texting-and-driving',
    role: 'Full-Stack Engineer',
    description:
      'Research-driven project exploring computer vision and mobile sensing to detect driving conditions and automatically restrict smartphone usage for improved road safety.',
    technologies: ['Python', 'Keras', 'Tensorflow', 'Object Detection', 'AWS'],
    media: '/images/unibo.png',
    command: 'yarn start',
  },
  {
    title: 'RINA',
    repo: 'rina',
    role: 'Full-Stack Developer',
    description:
      'Frontend development of an RINA new website with different components variants and management with Sitecore integration.',
    technologies: ['Pug', 'JavaScript', 'Bootstrap', 'Sitecore', 'Git', 'Jira'],
    media: '/images/rina.png',
    command: 'pnpm build',
  },
];

export const subtitleKeywords: SubtitleKeyword[] = [
  {
    prefix: 'Projects focused on',
    colored: 'real-world impact,',
    suffix: 'not just demos.',
    color: 'text-cyan-400',
  },
  {
    prefix: '',
    colored: 'Selected words',
    suffix: 'that showcase my expertise.',
    color: 'text-purple-400',
  },
  {
    prefix: 'Each project driven by',
    colored: 'engineering decisions,',
    suffix: 'not shortcuts.',
    color: 'text-emerald-400',
  },
  {
    prefix: 'Building solutions with',
    colored: 'purpose,',
    suffix: 'clarity and ownership.',
    color: 'text-rose-400',
  },
];
