import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";
import { ANIMATION_VARIANTS, TRANSITION_DEFAULT } from "../../data/constants";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className = "", id }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`py-20 md:py-28 ${className}`}
      variants={ANIMATION_VARIANTS.fadeUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={TRANSITION_DEFAULT}
    >
      {children}
    </motion.section>
  );
}
