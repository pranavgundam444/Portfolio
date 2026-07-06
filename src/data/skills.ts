import type { SkillCategory } from "../types";

export const SKILLS: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "monitor",
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "React Router",
    ],
  },
  {
    category: "Backend",
    icon: "server",
    skills: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    icon: "database",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Tools & DevOps",
    icon: "wrench",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Axios",
      "Render",
      "Vercel",
      "JWT Authentication",
    ],
  },
];
