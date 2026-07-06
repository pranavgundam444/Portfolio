import type { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    id: "emp-management",
    title: "Employee Management System",
    description:
      "A production-ready full-stack employee management platform featuring JWT authentication, role-based access control, leave management, department management, and a comprehensive admin dashboard with responsive UI.",
    longDescription:
      "Built with a modern MERN stack, this platform supports multi-role authentication (Admin, Manager, Employee), complete employee CRUD operations, leave application and approval workflows, department structuring, and real-time dashboard analytics.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
    liveUrl: "https://mern-frontend-58au.onrender.com",
    githubUrl: "https://github.com/pranavgundam444/Mern-Stack/",
    featured: true,
    category: "Full Stack",
  },
  {
    id: "nirog-gyan",
    title: "NirogGyan",
    description:
      "Hospital Management MERN application with JWT authentication, patient management, appointment scheduling, and an admin dashboard for healthcare professionals.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "https://niroggyan-frontend.onrender.com",
    githubUrl: "https://github.com/pranavgundam444/nirogGyan",
    featured: false,
    category: "Full Stack",
  },
  {
    id: "bill-splitter",
    title: "Bill Splitter",
    description:
      "A smart bill splitting application built with Next.js and TypeScript. Easily split expenses among friends with real-time calculations and a clean, intuitive interface.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/pranavgundam444/bill-splitter",
    featured: false,
    category: "Frontend",
  },
];

export const INTERNSHIP_CONTRIBUTIONS = [
  {
    id: "milkekhareedo",
    product: "Milkekhareedo",
    type: "Real Estate SaaS",
    description:
      "Contributed to building a production-grade Real Estate SaaS platform. Developed reusable React components, integrated REST APIs using Axios, built responsive UI layouts, and worked on authentication flows.",
    contributions: [
      "Built reusable React component library for property listings",
      "Integrated REST APIs using Axios for dynamic data fetching",
      "Developed responsive UI layouts with mobile-first approach",
      "Worked on user authentication and session management",
    ],
    technologies: ["React", "Axios", "REST API", "Responsive Design"],
  },
  {
    id: "schoolbag",
    product: "SchoolBag",
    type: "School Management System",
    description:
      "Contributed to a comprehensive School Management System. Built complex form components with validation, integrated backend APIs, and ensured responsive design across all school management modules.",
    contributions: [
      "Built complex form components with client-side validation",
      "Integrated backend APIs for student and staff data management",
      "Implemented responsive UI for admin and teacher dashboards",
      "Collaborated in Agile sprint cycles and code reviews",
    ],
    technologies: ["React", "Forms & Validation", "REST API", "Responsive UI"],
  },
];
