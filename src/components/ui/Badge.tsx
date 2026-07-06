import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "primary" | "success" | "muted";
  className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variants = {
    default: "bg-border text-muted border border-border-light",
    primary: "bg-primary/10 text-primary border border-primary/20",
    success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    muted: "bg-card text-muted border border-border",
  };

  return (
    <motion.span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.span>
  );
}
