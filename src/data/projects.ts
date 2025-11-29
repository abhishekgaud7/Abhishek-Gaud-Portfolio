export interface VisionProject {
  title: string
  description: string
  tech: string[]
  link: string
  image: string
}

export const visionProjects: VisionProject[] = [
  {
    title: 'MediGuardia — AI Health Companion',
    description:
      'An intelligent health assistant that analyzes symptoms, tracks vitals, and surfaces personalized health insights in real-time.',
    tech: ['React', 'TypeScript', 'Node.js', 'AI/ML', 'MongoDB'],
    link: 'https://mediguardia.vercel.app/',
    image: '/projects/mediguardia.jpg',
  },
  {
    title: 'Personalized News Aggregator',
    description:
      'News experience tailored to your interests using topic modeling, embeddings, and continuous learning from user behavior.',
    tech: ['Python', 'Flask', 'TensorFlow', 'React'],
    link: '#',
    image: '/projects/news-aggregator.jpg',
  },
  {
    title: 'Secure Password Manager',
    description:
      'Zero-knowledge password vault with AES-256 encryption, secure sharing, and cross-device sync built for privacy.',
    tech: ['Python', 'SQLite', 'Encryption'],
    link: '#',
    image: '/projects/password-manager.jpg',
  },
  {
    title: 'Habit Tracker with Insights',
    description:
      'A full-stack habit tracker with streaks, goals, and beautiful data visualizations to keep you motivated.',
    tech: ['React', 'Node.js', 'Chart.js', 'MongoDB'],
    link: '#',
    image: '/projects/habit-tracker.jpg',
  },
  {
    title: 'Employee Management Platform',
    description:
      'End-to-end platform for onboarding, performance reviews, and payroll approvals with automated notifications.',
    tech: ['Spring Boot', 'Hibernate', 'React', 'MySQL'],
    link: 'https://github.com/abhishekgaud7/employee-management-system',
    image: '/projects/employee-management.jpg',
  },
  {
    title: 'Online Examination System',
    description:
      'Secure exam engine with timed tests, question banks, result analytics, and role-based dashboards.',
    tech: ['Spring MVC', 'Hibernate', 'JWT', 'TypeScript'],
    link: 'https://github.com/abhishekgaud7/online-examination-system',
    image: '/projects/online-exam.jpg',
  },
  {
    title: 'OTP-based Email Verification Service',
    description:
      'Email OTP microservice with tokenized verification, expiry handling, and detailed audit logging for onboarding flows.',
    tech: ['Spring Boot', 'JavaMailSender', 'MySQL'],
    link: 'https://github.com/abhishekgaud7/otp-email-verification',
    image: '/projects/otp-service.jpg',
  },
]


