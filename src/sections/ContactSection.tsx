import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Download, MapPin, MessageCircle } from "lucide-react";
import { SectionWrapper } from "../components/ui/SectionWrapper";
import { PERSONAL_INFO, ANIMATION_VARIANTS, TRANSITION_DEFAULT } from "../data/constants";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { GithubIcon, LinkedinIcon } from "../components/ui/SocialIcons";

const CONTACT_LINKS = [
  {
    label: "Send Email",
    href: `mailto:${PERSONAL_INFO.email}`,
    icon: <Mail size={18} />,
    description: PERSONAL_INFO.email,
    variant: "primary" as const,
  },
  {
    label: "LinkedIn",
    href: PERSONAL_INFO.linkedin,
    icon: <LinkedinIcon size={18} />,
    description: "Connect with me",
    variant: "outline" as const,
    external: true,
  },
  {
    label: "GitHub",
    href: PERSONAL_INFO.github,
    icon: <GithubIcon size={18} />,
    description: "See my code",
    variant: "outline" as const,
    external: true,
  },
  {
    label: "Resume",
    href: PERSONAL_INFO.resumeUrl,
    icon: <Download size={18} />,
    description: "Download PDF",
    variant: "outline" as const,
    external: true,
  },
];

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-2xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={TRANSITION_DEFAULT}
            className="flex justify-center mb-6"
          >
            <Badge variant="success">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
              Open to Opportunities
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-text tracking-tight mb-4"
            variants={ANIMATION_VARIANTS.fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.08 }}
          >
            Let's Work{" "}
            <span className="bg-gradient-to-r from-primary to-violet-400 bg-clip-text text-transparent">
              Together
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="text-muted text-base md:text-lg leading-relaxed mb-4"
            variants={ANIMATION_VARIANTS.fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.12 }}
          >
            I'm actively looking for Frontend Developer, React Developer, or MERN Stack
            Developer roles. Whether you have a full-time opportunity or just want to
            connect — I'd love to hear from you.
          </motion.p>

          {/* Location */}
          <motion.div
            className="flex items-center justify-center gap-1.5 text-muted text-sm mb-10"
            variants={ANIMATION_VARIANTS.fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.16 }}
          >
            <MapPin size={14} />
            <span>Based in {PERSONAL_INFO.location}, India</span>
          </motion.div>

          {/* Contact Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            variants={ANIMATION_VARIANTS.stagger}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {CONTACT_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`group flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 text-left ${
                  link.variant === "primary"
                    ? "bg-primary border-primary hover:bg-primary-hover shadow-lg shadow-primary/20"
                    : "bg-card border-border hover:border-border-light hover:bg-card/80"
                }`}
                variants={ANIMATION_VARIANTS.fadeUp}
                transition={{ ...TRANSITION_DEFAULT, delay: i * 0.08 }}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    link.variant === "primary"
                      ? "bg-white/20 text-white"
                      : "bg-primary/10 border border-primary/20 text-primary"
                  }`}
                >
                  {link.icon}
                </div>
                <div>
                  <p
                    className={`font-semibold text-sm ${
                      link.variant === "primary" ? "text-white" : "text-text"
                    }`}
                  >
                    {link.label}
                  </p>
                  <p
                    className={`text-xs mt-0.5 ${
                      link.variant === "primary" ? "text-white/70" : "text-muted"
                    }`}
                  >
                    {link.description}
                  </p>
                </div>
                <MessageCircle
                  size={14}
                  className={`ml-auto shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 ${
                    link.variant === "primary" ? "text-white/50" : "text-muted"
                  }`}
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
