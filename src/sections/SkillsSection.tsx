import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";
import { Monitor, Server, Database, Wrench } from "lucide-react";
import { SectionWrapper } from "../components/ui/SectionWrapper";
import { SectionHeader } from "../components/ui/SectionHeader";
import { SKILLS } from "../data/skills";
import { ANIMATION_VARIANTS, TRANSITION_DEFAULT } from "../data/constants";

const CATEGORY_ICONS: Record<string, ReactNode> = {
  monitor: <Monitor size={18} className="text-primary" />,
  server: <Server size={18} className="text-primary" />,
  database: <Database size={18} className="text-primary" />,
  wrench: <Wrench size={18} className="text-primary" />,
};

const SKILL_COLORS: string[] = [
  "from-blue-500/10 to-blue-600/5",
  "from-violet-500/10 to-violet-600/5",
  "from-emerald-500/10 to-emerald-600/5",
  "from-amber-500/10 to-amber-600/5",
];

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Skills"
          subtitle="Technologies and tools I work with"
        />

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {SKILLS.map((category, catIndex) => (
            <motion.div
              key={category.category}
              className={`relative rounded-2xl bg-gradient-to-br ${SKILL_COLORS[catIndex]} border border-border p-6 overflow-hidden`}
              variants={ANIMATION_VARIANTS.fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ ...TRANSITION_DEFAULT, delay: catIndex * 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(99,102,241,0.3)" }}
            >
              {/* Icon + Category */}
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  {CATEGORY_ICONS[category.icon]}
                </div>
                <h3 className="text-text font-semibold text-sm">
                  {category.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="text-xs font-medium text-text/70 bg-background/60 border border-border-light rounded-lg px-2.5 py-1 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 cursor-default"
                    variants={ANIMATION_VARIANTS.fadeUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                      ...TRANSITION_DEFAULT,
                      delay: catIndex * 0.1 + skillIndex * 0.04,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
