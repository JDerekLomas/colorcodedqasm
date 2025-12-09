"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "gold" | "outline";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

const variants: Record<ButtonVariant, string> = {
  primary: "bg-cream text-dark-500 hover:bg-white",
  secondary: "bg-dark-100 text-white border border-dark-50 hover:border-white/30",
  gold: "bg-gradient-gold text-dark-500 hover:shadow-gold-glow",
  outline: "border border-white/30 text-white hover:bg-white hover:text-dark-500",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  disabled = false,
  size = "md",
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center font-medium
    transition-all duration-300 ease-out
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  const motionProps = {
    whileHover: { scale: disabled ? 1 : 1.02 },
    whileTap: { scale: disabled ? 1 : 0.98 },
  };

  if (href) {
    return (
      <motion.div {...motionProps}>
        <Link href={href} className={baseStyles}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      onClick={onClick}
      disabled={disabled}
      className={baseStyles}
    >
      {children}
    </motion.button>
  );
}
