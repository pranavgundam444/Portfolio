import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";
import { SectionWrapper } from "../components/ui/SectionWrapper";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Badge } from "../components/ui/Badge";
import { ANIMATION_VARIANTS, TRANSITION_DEFAULT } from "../data/constants";

const RESPONSIBILITIES = [
  "Developed production React applications from scratch",
  "Built reusable UI component libraries used across projects",
  "Integrated REST APIs using Axios for dynamic data management",
  "Implemented responsive layouts with mobile-first approach",
  "Worked on user authentication and session management flows",
  "Collaborated in Agile sprint teams with daily standups and code reviews",
];

const PRODUCTS = [
  {
    name: "Milkekhareedo",
    description: "Real Estate SaaS Platform",
  },
  {
    name: "SchoolBag",
    description: "School Management System",
  },
];

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="experience">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Experience"
          subtitle="My professional journey so far"
        />

        <div ref={ref} className="max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

            {/* Timeline Item */}
            <motion.div
              className="relative pl-16 pb-2"
              variants={ANIMATION_VARIANTS.fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={TRANSITION_DEFAULT}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/40 -translate-x-1/2" />

              {/* Card */}
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-border-light transition-colors duration-300">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                  <div>
                    <h3 className="text-text font-bold text-xl">
                      Frontend Developer Intern
                    </h3>
                    <div className="flex items-center gap-2 mt-1.5">
                      <Building2 size={14} className="text-primary" />
                      <span className="text-primary font-semibold text-sm">
                        Kapi Technologies
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 sm:items-end">
                    <div className="flex items-center gap-1.5 text-muted text-sm">
                      <Calendar size={13} />
                      <span>Jan 2026 – Jul 2026</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-muted text-sm">
                      <MapPin size={13} />
                      <span>Hyderabad</span>
                    </div>
                    <Badge variant="success">6 Months</Badge>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-text/60 text-xs font-semibold uppercase tracking-wider mb-3">
                    Responsibilities
                  </h4>
                  <ul className="space-y-2.5">
                    {RESPONSIBILITIES.map((item) => (
                      <motion.li
                        key={item}
                        className="flex items-start gap-3 text-text/75 text-sm leading-relaxed"
                        variants={ANIMATION_VARIANTS.fadeLeft}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ ...TRANSITION_DEFAULT, delay: 0.1 }}
                      >
                        <CheckCircle2
                          size={15}
                          className="text-primary mt-0.5 shrink-0"
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Products */}
                <div>
                  <h4 className="text-text/60 text-xs font-semibold uppercase tracking-wider mb-3">
                    Products Contributed To
                  </h4>
                  <p className="text-muted text-xs mb-3 italic">
                    These are products I contributed to during my internship at Kapi Technologies.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {PRODUCTS.map((product) => (
                      <div
                        key={product.name}
                        className="bg-background border border-border rounded-xl px-4 py-3"
                      >
                        <p className="text-text font-semibold text-sm">
                          {product.name}
                        </p>
                        <p className="text-muted text-xs mt-0.5">
                          {product.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
