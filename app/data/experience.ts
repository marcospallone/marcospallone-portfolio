import { SubtitleKeyword } from '../models/subtitle-interface';

export interface ExperienceProps {
  type: string;
  title: string;
  entity: string;
  image: string;
  period: string;
  location: string;
  countryCode: string;
  description: string;
  technologies: string[];
}

export const experiences: ExperienceProps[] = [
  {
    type: 'work',
    title: 'Full-Stack Developer',
    entity: 'ALMC.DIGITAL SAGL',
    image: '/images/almc.png',
    period: 'June 2025 - Present',
    location: 'Lugano, Ticino, Switzerland',
    countryCode: 'CH',
    description:
      'Engineering and development of modern web applications using Angular, NestJS, and cloud architectures. Configuring instance of Broadcom Clarity PPM for public entities.',
    technologies: [
      'Angular',
      'NestJS',
      'PostgreSQL',
      'AWS',
      'Clarity PPM',
      'NSQL',
      'GEL scripting',
    ],
  },
  {
    type: 'work',
    title: 'Full-Stack Developer',
    entity: 'Alkemy S.p.A.',
    image: '/images/alkemy.jpg',
    period: 'September 2023 - January 2026',
    location: 'Milan, Lombardia, Italy',
    countryCode: 'IT',
    description:
      'Leading development of scalable web applications using React, Next.js, and different CMSs. Collaborating with different teams and customers and implementing best practices.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Drupal',
      'Storyblok',
      'Docker',
      'Agile',
    ],
  },
  {
    type: 'work',
    title: 'Full-Stack Developer',
    entity: 'SI2001 S.p.A.',
    image: '/images/si2001.jpeg',
    period: 'January 2023 - January 2026',
    location: 'Pescara, Abruzzo, Italy',
    countryCode: 'IT',
    description:
      'Development and maintaining of internal intranet and projects, focusing on responsive design and performance optimization. Consulting for different customers, especially for Alkemy.',
    technologies: ['Angular', 'Java', 'Spring Boot', 'MySQL', 'Vue.js'],
  },
  {
    type: 'work',
    title: 'Mobile Developer',
    entity: 'TecnoSistemi S.r.l.',
    image: '/images/tecnosistemi.png',
    period: 'September 2021 - March 2022',
    location: 'Sulmona, Abruzzo, Italy',
    countryCode: 'IT',
    description:
      'Curricular Internship for Bachelor degree. Development and engineering of cross-platform mobile application for internal use.',
    technologies: ['C#', '.NET', 'Xamarin'],
  },
  {
    type: 'work',
    title: 'Waiter and Barman',
    entity: 'Rifugio Lo Scoiattolo',
    image: '/images/scoiattolo.jpg',
    period: 'July 2017 - January 2023',
    location: 'Passo Godi, Abruzzo, Italy',
    countryCode: 'IT',
    description:
      'Management of bar and restaurant room in mountain refuge. Work carried out in conjunction with university studies.',
    technologies: ['Customer Focus', 'Payments Management', 'Service Management'],
  },
  {
    type: 'education',
    title: 'Master in Software Engineering',
    entity: 'Free Univeristy of Bozen - Bolzano',
    image: '/images/unibz.png',
    period: 'October 2023 - October 2025',
    location: 'Bozen, Südtirol, Italy',
    countryCode: 'IT',
    description:
      'Specialization in Software Engineering, with courses on different topics such as System Security, Cloud Engineering, Software Requirements, Human Computer Interaction, Test Driven Development and more. Thesis title: Prompt Injection Attacks Against AI.',
    technologies: [
      'AWS',
      'System Design',
      'Cloud Computing',
      'UI/UX',
      'System Security',
      'Agile methodologies',
      'Software Metrics',
      'Software Quality',
    ],
  },
  {
    type: 'education',
    title: 'Bachelor in Computer Science',
    entity: 'Alma Mater Studiorum - University of Bologna',
    image: '/images/unibo.png',
    period: 'September 2018 - July 2022',
    location: 'Bologna, Emilia-Romagna, Italy',
    countryCode: 'IT',
    description:
      'Strong foundation in computer science fundamentals, data structures, and software development. Thesis title: Texting and Driving, Detecting Smartphone Use While Driving Through Object Detection and Machine Learning.',
    technologies: [
      'Alghoritms',
      'C++',
      'Maths',
      'Algebra and Geometry',
      'Network Protocols and Structure',
      'HTML',
      'CSS',
      'Javascript',
      'Probability Computation',
      'C',
      'Linux',
      'Java',
      'Python',
      'Machine Learning',
      'Deep Learning',
      'Object Detection',
    ],
  },
];

export const subtitleKeywords: SubtitleKeyword[] = [
  {
    prefix: 'Build experience through',
    colored: 'real-world projects.',
    suffix: '',
    color: 'text-cyan-400',
  },
  {
    prefix: 'Build experience through',
    colored: 'production systems.',
    suffix: '',
    color: 'text-purple-400',
  },
  {
    prefix: 'Build experience through',
    colored: 'academic foundations.',
    suffix: '',
    color: 'text-emerald-400',
  },
  {
    prefix: 'Build experience through',
    colored: 'continuous growth.',
    suffix: '',
    color: 'text-rose-400',
  },
];
