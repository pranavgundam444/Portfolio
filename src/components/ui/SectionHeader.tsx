interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-12 md:mb-16 ${alignClass}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-text tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-px bg-gradient-to-r from-primary/60 to-transparent ${
          align === "center" ? "mx-auto w-16" : "w-16"
        }`}
      />
    </div>
  );
}
