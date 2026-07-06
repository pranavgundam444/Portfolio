// ─── Navigation ─────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

// ─── Personal Info ───────────────────────────────────────────────────────────
export const PERSONAL_INFO = {
  name: "Pranav Gundam",
  initials: "PG",
  role: "Frontend Developer | MERN Stack Developer",
  subtitle:
    "Frontend Developer with 6 months of internship experience at Kapi Technologies building production-ready React applications and scalable MERN solutions.",
  location: "Hyderabad",
  email: "pranavgundam666@email.com",
  linkedin: "https://linkedin.com/in/pranavgundam",
  github: "https://github.com/pranavgundam444",
  resumeUrl: "https://drive.google.com/file/d/1inHmUvIUyoC0aKtjc6j80fmc7JVuW1Kh/view?usp=sharing",
} as const;

// ─── About Quick Info Cards ─────────────────────────────────────────────────
export const QUICK_INFO = [
  { label: "Location", value: "Hyderabad" },
  { label: "Experience", value: "6 Months" },
  { label: "Education", value: "MCA" },
  { label: "Availability", value: "Immediate" },
] as const;

// ─── Animation Variants ───────────────────────────────────────────────────────
export const ANIMATION_VARIANTS = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  stagger: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  },
} as const;

export const TRANSITION_DEFAULT = { duration: 0.5, ease: "easeInOut" };
