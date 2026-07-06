import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { SectionWrapper } from "../components/ui/SectionWrapper";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Badge } from "../components/ui/Badge";
import { PROJECTS } from "../data/projects";
import { ANIMATION_VARIANTS, TRANSITION_DEFAULT } from "../data/constants";
import { GithubIcon, LinkedinIcon } from "../components/ui/SocialIcons";
import type { Project } from "../types";

function ProjectImagePlaceholder({ title, featured }: { title: string; featured?: boolean }) {
  const colors = [
    "from-indigo-900/60 to-violet-900/60",
    "from-blue-900/60 to-indigo-900/60",
    "from-violet-900/60 to-purple-900/60",
  ];
  const colorIndex = title.length % colors.length;

  return (
    <div
      className={`relative w-full ${featured ? "h-48 md:h-56" : "h-40"} rounded-xl bg-gradient-to-br ${colors[colorIndex]} border border-border overflow-hidden flex items-center justify-center`}
    >
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="relative z-10 text-center px-4">
        <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-2">
          <div className="w-4 h-4 rounded-sm bg-primary/60" />
        </div>
        <p className="text-text/40 text-xs font-medium">{title}</p>
      </div>
    </div>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="group relative bg-card border border-border rounded-2xl p-6 md:p-8 overflow-hidden"
      whileHover={{ y: -4, borderColor: "rgba(99,102,241,0.35)" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {/* Featured label */}
      <div className="flex items-center justify-between mb-5">
        <Badge variant="primary">
          <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          Featured Project
        </Badge>
        <Badge variant="muted">{project.category}</Badge>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Left: Content */}
        <div className="space-y-4">
          <div>
            <h3 className="text-text font-bold text-xl md:text-2xl group-hover:text-primary transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed mt-2">
              {project.longDescription ?? project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium text-muted bg-background border border-border rounded-lg px-2.5 py-1"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-1">
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-primary hover:bg-primary-hover px-4 py-2 rounded-lg transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink size={14} />
              Live Demo
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-text border border-border-light hover:border-primary/40 px-4 py-2 rounded-lg transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <GithubIcon size={14} />
              GitHub
            </motion.a>
          </div>
        </div>

        {/* Right: Image */}
        <ProjectImagePlaceholder title={project.title} featured />
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="group relative bg-card border border-border rounded-2xl p-5 md:p-6 flex flex-col overflow-hidden"
      variants={ANIMATION_VARIANTS.fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ ...TRANSITION_DEFAULT, delay }}
      whileHover={{ y: -4, borderColor: "rgba(99,102,241,0.35)" }}
    >
      {/* Image */}
      <ProjectImagePlaceholder title={project.title} />

      {/* Content */}
      <div className="flex-1 flex flex-col gap-4 mt-4">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-text font-bold text-lg group-hover:text-primary transition-colors duration-200 leading-tight">
              {project.title}
            </h3>
            <ArrowUpRight
              size={16}
              className="text-muted group-hover:text-primary transition-colors duration-200 shrink-0 mt-0.5"
            />
          </div>
          <p className="text-muted text-sm leading-relaxed mt-2">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium text-muted bg-background border border-border rounded-md px-2 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-2.5 mt-auto pt-1">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-white hover:bg-primary border border-primary/30 hover:border-primary px-3 py-1.5 rounded-lg transition-all duration-200"
          >
            <ExternalLink size={12} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-text border border-border-light hover:border-border-light px-3 py-1.5 rounded-lg transition-all duration-200"
          >
            <GithubIcon size={12} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const featured = PROJECTS.find((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Projects"
          subtitle="Things I've built with passion and precision"
        />

        <div ref={ref} className="space-y-6">
          {/* Featured */}
          {featured && (
            <motion.div
              variants={ANIMATION_VARIANTS.fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={TRANSITION_DEFAULT}
            >
              <FeaturedProjectCard project={featured} />
            </motion.div>
          )}

          {/* Other Projects */}
          <div className="grid sm:grid-cols-2 gap-5">
            {others.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
