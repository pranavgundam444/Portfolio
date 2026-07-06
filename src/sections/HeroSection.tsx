import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { PERSONAL_INFO, ANIMATION_VARIANTS, TRANSITION_DEFAULT } from "../data/constants";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { GithubIcon, LinkedinIcon } from "../components/ui/SocialIcons";

export function HeroSection() {
  const handleScroll = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-violet-600/6 rounded-full blur-[100px] animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/10 rounded-full blur-[140px]"
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={ANIMATION_VARIANTS.stagger}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Open to Work Badge */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeUp}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.1 }}
          >
            <Badge variant="success" className="px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
              Open to Work
            </Badge>
          </motion.div>

          {/* Greeting */}
          <motion.p
            className="text-muted text-lg md:text-xl font-medium"
            variants={ANIMATION_VARIANTS.fadeUp}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.15 }}
          >
            Hi, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-text leading-none"
            variants={ANIMATION_VARIANTS.fadeUp}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.2 }}
          >
            <span className="bg-gradient-to-b from-text to-text/70 bg-clip-text text-transparent">
              PRANAV
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-violet-400 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              GUNDAM
            </span>
          </motion.h1>

          {/* Role */}
          <motion.div
            className="flex items-center gap-3 flex-wrap justify-center"
            variants={ANIMATION_VARIANTS.fadeUp}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.25 }}
          >
            <span className="text-muted text-base md:text-lg font-medium">
              Frontend Developer
            </span>
            <span className="w-1 h-1 rounded-full bg-border-light" />
            <span className="text-muted text-base md:text-lg font-medium">
              MERN Stack Developer
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-muted/80 text-base md:text-lg max-w-2xl leading-relaxed"
            variants={ANIMATION_VARIANTS.fadeUp}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.3 }}
          >
            {PERSONAL_INFO.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mt-2"
            variants={ANIMATION_VARIANTS.fadeUp}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.35 }}
          >
            <Button
              variant="primary"
              size="lg"
              href="#projects"
              icon={<ExternalLink size={16} />}
              iconPosition="right"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("#projects");
              }}
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              href={PERSONAL_INFO.resumeUrl}
              external
              icon={<Download size={16} />}
            >
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-3 mt-1"
            variants={ANIMATION_VARIANTS.fadeUp}
            transition={{ ...TRANSITION_DEFAULT, delay: 0.4 }}
          >
            <Button
              variant="ghost"
              size="sm"
              href={PERSONAL_INFO.linkedin}
              external
              icon={<LinkedinIcon size={15} />}
              className="text-muted hover:text-text"
            >
              LinkedIn
            </Button>
            <span className="w-px h-4 bg-border-light" />
            <Button
              variant="ghost"
              size="sm"
              href={PERSONAL_INFO.github}
              external
              icon={<GithubIcon size={15} />}
              className="text-muted hover:text-text"
            >
              GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted/50"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
