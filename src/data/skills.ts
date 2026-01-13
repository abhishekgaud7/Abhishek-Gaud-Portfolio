import { Skill } from '../types';

export const skillsData: Skill[] = [
    {
        category: 'Data Science & Machine Learning',
        description: 'Extracting insights and building predictive models.',
        items: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib', 'TensorFlow', 'Jupyter']
    },
    {
        category: 'Data Structures & Algorithms',
        description: 'Problem-solving core for optimized and efficient code.',
        items: ['Recursion', 'Dynamic Programming', 'Graph Algorithms', 'Trees & Heaps', 'Sorting & Searching', 'Complexity Analysis']
    },
    {
        category: 'Programming Languages',
        description: 'Day-to-day stack for building performant product features.',
        items: ['Java (Advanced)', 'Python', 'JavaScript', 'TypeScript', 'SQL']
    },
    {
        category: 'Spring & Backend Frameworks',
        description: 'Hands-on with Spring ecosystem for secure, production APIs.',
        items: ['Spring Boot', 'Spring MVC', 'Hibernate ORM', 'Microservices', 'REST APIs', 'Spring Security']
    },
    {
        category: 'Tools & Platforms',
        description: 'Collaboration, DevOps, and deployment workflows.',
        items: ['Git/GitHub', 'Docker', 'AWS', 'Postman', 'Maven/Gradle', 'Linux']
    }
];
