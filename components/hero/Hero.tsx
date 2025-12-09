import Link from "next/link";

interface HeroProps {
  tagline: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  centered?: boolean;
}

export function Hero({
  tagline,
  subtitle,
  ctaText,
  ctaHref,
  centered = true,
}: HeroProps) {
  return (
    <section className="relative py-20 px-6 bg-gray-100">
      <div
        className={`max-w-4xl mx-auto ${centered ? "text-center" : "text-left"}`}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          {tagline}
        </h1>
        {subtitle && (
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {ctaText && ctaHref && (
          <Link
            href={ctaHref}
            className="inline-block px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
