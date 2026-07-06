import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Briefcase, GraduationCap, Zap } from "lucide-react";
import { SectionWrapper } from "../components/ui/SectionWrapper";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Card } from "../components/ui/Card";
import { QUICK_INFO, ANIMATION_VARIANTS, TRANSITION_DEFAULT } from "../data/constants";

const QUICK_ICONS = [
  <MapPin size={16} className="text-primary" />,
  <Briefcase size={16} className="text-primary" />,
  <GraduationCap size={16} className="text-primary" />,
  <Zap size={16} className="text-primary" />,
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="About Me"
          subtitle="A little about who I am and what I do"
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Text */}
          <motion.div
            className="space-y-5"
            variants={ANIMATION_VARIANTS.fadeLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={TRANSITION_DEFAULT}
          >
            <p className="text-text/80 text-base md:text-lg leading-relaxed">
              I'm a{" "}
              <span className="text-text font-semibold">Frontend Developer</span>{" "}
              with{" "}
              <span className="text-primary font-semibold">
                6 months of internship experience
              </span>{" "}
              at Kapi Technologies, where I contributed to real-world production
              applications serving actual users.
            </p>

            <p className="text-text/80 text-base leading-relaxed">
              During my internship, I gained hands-on experience building production
              React applications, integrating REST APIs with Axios, implementing
              user authentication, creating reusable UI component libraries, and
              developing fully responsive web applications from design to deployment.
            </p>

            <p className="text-text/80 text-base leading-relaxed">
              I'm now actively looking for opportunities as a{" "}
              <span className="text-text font-medium">Frontend Developer</span>,{" "}
              <span className="text-text font-medium">React Developer</span>, or{" "}
              <span className="text-text font-medium">MERN Stack Developer</span>{" "}
              at product companies and startups where I can continue to grow and
              contribute meaningfully from day one.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-sm text-primary font-medium bg-primary/10 border border-primary/20 rounded-lg px-4 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for immediate joining
              </div>
            </div>
          </motion.div>

          {/* Right: Quick Info Cards */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={ANIMATION_VARIANTS.stagger}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {QUICK_INFO.map((info, i) => (
              <motion.div
                key={info.label}
                variants={ANIMATION_VARIANTS.fadeUp}
                transition={{ ...TRANSITION_DEFAULT, delay: i * 0.08 }}
              >
                <Card hover glass className="h-full">
                  <div className="flex flex-col gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      {QUICK_ICONS[i]}
                    </div>
                    <div>
                      <p className="text-muted text-xs font-medium uppercase tracking-wider mb-1">
                        {info.label}
                      </p>
                      <p className="text-text font-semibold text-lg">{info.value}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
