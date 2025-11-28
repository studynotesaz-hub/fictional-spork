import { Project, Experience, Skill, SocialLink } from './types';
import { Github, Linkedin, Twitter, Mail, Code, Layout, Database, Server } from 'lucide-react';

export const HERO_DATA = {
  name: "Alex Devson",
  role: "Senior Full Stack Engineer",
  tagline: "Crafting exceptional digital experiences with clean code and modern design.",
  availability: "Available for freelance projects",
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com", icon: Github },
  { platform: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  { platform: "Twitter", url: "https://twitter.com", icon: Twitter },
  { platform: "Email", url: "mailto:hello@example.com", icon: Mail },
];

export const SKILLS: Skill[] = [
  { name: "React", category: "Frontend", level: 95 },
  { name: "TypeScript", category: "Frontend", level: 90 },
  { name: "Tailwind CSS", category: "Frontend", level: 95 },
  { name: "Node.js", category: "Backend", level: 85 },
  { name: "PostgreSQL", category: "Backend", level: 80 },
  { name: "GraphQL", category: "Backend", level: 75 },
  { name: "Docker", category: "Tools", level: 70 },
  { name: "Figma", category: "Design", level: 65 },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Senior Frontend Engineer",
    company: "TechFlow Solutions",
    period: "2021 - Present",
    description: [
      "Led the migration of a legacy jQuery application to React 18, improving load times by 40%.",
      "Architected a reusable component library used across 5 different internal products.",
      "Mentored 3 junior developers and conducted code reviews to ensure best practices."
    ]
  },
  {
    id: "2",
    role: "Full Stack Developer",
    company: "Creative Spark Agency",
    period: "2018 - 2021",
    description: [
      "Developed custom e-commerce solutions for high-profile clients using Next.js and Shopify API.",
      "Implemented CI/CD pipelines using GitHub Actions, reducing deployment errors by 90%.",
      "Collaborated closely with designers to implement pixel-perfect responsive UIs."
    ]
  },
  {
    id: "3",
    role: "Junior Web Developer",
    company: "StartUp Inc",
    period: "2016 - 2018",
    description: [
      "Built landing pages and marketing sites using HTML, CSS, and Vanilla JavaScript.",
      "Assisted in backend API development using Express.js and MongoDB.",
      "Optimized images and assets for web performance."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Nexus Dashboard",
    description: "A comprehensive analytics dashboard for visualizing complex datasets. Features include real-time data updates, customizable widgets, and exportable reports.",
    imageUrl: "https://picsum.photos/800/600?random=1",
    technologies: ["React", "TypeScript", "D3.js", "Tailwind"],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: "2",
    title: "TaskMaster Pro",
    description: "A collaborative project management tool designed for remote teams. Supports drag-and-drop kanban boards, real-time comments, and file sharing.",
    imageUrl: "https://picsum.photos/800/600?random=2",
    technologies: ["Next.js", "Supabase", "Framer Motion"],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: "3",
    title: "EcoMarket",
    description: "An eco-friendly e-commerce marketplace connecting sustainable brands with conscious consumers. Built with a focus on accessibility and performance.",
    imageUrl: "https://picsum.photos/800/600?random=3",
    technologies: ["React", "Redux Toolkit", "Stripe API"],
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: "4",
    title: "DevDocs AI",
    description: "An intelligent documentation search engine that uses natural language processing to help developers find answers faster within their codebase.",
    imageUrl: "https://picsum.photos/800/600?random=4",
    technologies: ["Python", "FastAPI", "React", "OpenAI"],
    demoUrl: "#",
    repoUrl: "#"
  }
];

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];