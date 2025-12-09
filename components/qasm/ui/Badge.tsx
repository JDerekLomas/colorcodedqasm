type BadgeVariant = "gold" | "burgundy" | "outline" | "sold-out";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variants: Record<BadgeVariant, string> = {
  gold: "bg-gold text-dark-500",
  burgundy: "bg-burgundy text-white",
  outline: "border border-white/30 text-white",
  "sold-out": "bg-dark-100 text-neutral-400",
};

export function Badge({ children, variant = "gold", className = "" }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-2 py-1
        text-xs font-medium uppercase tracking-overline
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
