import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  onClick?: () => void;
}

export function Card({
  children,
  className = "",
  hover = false,
  glass = false,
  onClick,
}: CardProps) {
  const glassStyle = glass
    ? "bg-card/60 backdrop-blur-sm border border-white/5"
    : "bg-card border border-border";

  return (
    <motion.div
      className={`rounded-2xl p-6 ${glassStyle} ${className}`}
      onClick={onClick}
      whileHover={hover ? { y: -4, borderColor: "rgba(99,102,241,0.3)" } : undefined}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
