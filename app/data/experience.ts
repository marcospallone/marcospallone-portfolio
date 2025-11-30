export interface ExperienceProps {
    type: string;
    title: string;
    entity: string;
    image: string;
    period: string;
    description: string;
    technologies: string[];
}

export const experiences: ExperienceProps[] = [
    {
        type: 'work',
        title: 'Senior Full-Stack Developer',
        entity: 'Tech Company Inc.',
        image: '/images/alkemy.jpg',
        period: '2023 - Present',
        description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
        technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL'],
    },
    {
        type: 'work',
        title: 'Full-Stack Developer',
        entity: 'Digital Solutions Ltd.',
        image: '/images/alkemy.jpg',
        period: '2021 - 2023',
        description: 'Developed and maintained multiple client projects, focusing on responsive design and performance optimization.',
        technologies: ['Vue.js', 'Express', 'MongoDB', 'Docker'],
    },
    {
        type: 'education',
        title: 'Master of Computer Science',
        entity: 'University of Technology',
        image: '/images/alkemy.jpg',
        period: '2019 - 2021',
        description: 'Specialized in Software Engineering and Distributed Systems. Graduated with honors.',
        technologies: ['Algorithms', 'System Design', 'Cloud Computing'],
    },
    {
        type: 'education',
        title: 'Bachelor of Computer Science',
        entity: 'State University',
        image: '/images/alkemy.jpg',
        period: '2015 - 2019',
        description: 'Strong foundation in computer science fundamentals, data structures, and software development.',
        technologies: ['Java', 'Python', 'Databases', 'Web Development'],
    },
];