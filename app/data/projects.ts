export interface ProjectProps {
    repo: string;
    role: string;
    github?: string;
    url?: string;
    media: string;
    title: string;
    description: string;
    technologies: string[];
    command: string;
}

export const projects: ProjectProps[] = [
    {
      title: 'E-Commerce Platform',
      repo: 'ecommerce-platform',
      role: 'Full-Stack',
      description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      media: 'ecommerce website',
      github: '#',
      url: '#',
      command: 'npm run url',
    },
    {
      title: 'Task Management App',
      repo: 'taskflow-manager',
      role: 'Frontend Lead',
      description: 'Collaborative project management tool with real-time updates, team chat, and advanced analytics.',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.io', 'Docker'],
      media: 'project management dashboard',
      github: '#',
      url: '#',
      command: 'yarn start',
    },
    {
      title: 'AI Content Generator',
      repo: 'ai-content-studio',
      role: 'Lead Developer',
      description: 'AI-powered content creation platform using advanced language models for marketing and creative writing.',
      technologies: ['Next.js', 'Python', 'FastAPI', 'OpenAI', 'Redis'],
      media: 'ai technology interface',
      github: '#',
      url: '#',
      command: 'npm run dev',
    },
    {
      title: 'Real-Time Analytics Dashboard',
      repo: 'analytics-pro',
      role: 'Full-Stack',
      description: 'Interactive analytics dashboard with real-time data visualization and customizable reports.',
      technologies: ['React', 'TypeScript', 'GraphQL', 'D3.js', 'Firebase'],
      media: 'analytics dashboard',
      github: '#',
      url: '#',
      command: 'pnpm dev',
    },
    {
      title: 'Social Media Platform',
      repo: 'social-connect',
      role: 'Backend Architect',
      description: 'Modern social networking application with posts, stories, messaging, and video calls.',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'WebRTC', 'AWS'],
      media: 'social media app',
      github: '#',
      url: '#',
      command: 'npm start',
    },
    {
      title: 'DevOps Automation Tool',
      repo: 'devops-automator',
      role: 'DevOps Engineer',
      description: 'CI/CD pipeline automation tool with container orchestration and deployment monitoring.',
      technologies: ['Python', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
      media: 'devops automation',
      github: '#',
      url: '#',
      command: 'python run.py',
    },
]