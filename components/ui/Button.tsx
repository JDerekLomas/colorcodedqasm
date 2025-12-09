import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "cta";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: ButtonVariant;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-black text-white hover:bg-gray-800",
  secondary:
    "border border-black text-black hover:bg-black hover:text-white",
  cta:
    "bg-gray-600 text-white border-2 border-blue-300 hover:bg-gray-700",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-block px-8 py-3 rounded-md transition-colors ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
