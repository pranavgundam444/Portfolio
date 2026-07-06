import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Info } from "lucide-react";
import { SectionWrapper } from "../components/ui/SectionWrapper";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Badge } from "../components/ui/Badge";
import { INTERNSHIP_CONTRIBUTIONS } from "../data/projects";
import { ANIMATION_VARIANTS, TRANSITION_DEFAULT } from "../data/constants";

export function InternshipSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="internship">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Professional Experience"
          subtitle="Products I contributed to during my internship at Kapi Technologies"
        />

        {/* Disclaimer banner */}
        <motion.div
          className="flex items-start gap-3 bg-primary/5 border border-primary/20 rounded-xl px-4 py-3 mb-8 max-w-2xl mx-auto"
          variants={ANIMATION_VARIANTS.fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={TRANSITION_DEFAULT}
        >
          <Info size={16} className="text-primary shrink-0 mt-0.5" />
          <p className="text-muted text-sm leading-relaxed">
            The following are{" "}
            <span className="text-text font-medium">
              products I contributed to during my internship
            </span>{" "}
            at Kapi Technologies. These are not personal projects — they represent
            my professional work experience.
          </p>
        </motion.div>

        <div ref={ref} className="grid sm:grid-cols-2 gap-6">
          {INTERNSHIP_CONTRIBUTIONS.map((item, index) => (
            <motion.div
              key={item.id}
              className="group bg-card border border-border rounded-2xl p-6 md:p-7 hover:border-border-light transition-colors duration-300"
              variants={ANIMATION_VARIANTS.fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ ...TRANSITION_DEFAULT, delay: index * 0.12 }}
              whileHover={{ y: -3 }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-text font-bold text-xl group-hover:text-primary transition-colors duration-200">
                    {item.product}
                  </h3>
                  <p className="text-muted text-sm mt-0.5">{item.type}</p>
                </div>
                <Badge variant="primary">Contributed</Badge>
              </div>

              {/* Description */}
              <p className="text-text/70 text-sm leading-relaxed mb-5">
                {item.description}
              </p>

              {/* Contributions */}
              <div className="mb-5">
                <h4 className="text-text/50 text-xs font-semibold uppercase tracking-wider mb-3">
                  My Contributions
                </h4>
                <ul className="space-y-2">
                  {item.contributions.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2.5 text-text/70 text-sm"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-primary shrink-0 mt-0.5"
                      />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-muted bg-background border border-border rounded-md px-2 py-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
