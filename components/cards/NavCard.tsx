import Link from "next/link";
import Image from "next/image";

interface NavCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
}

export function NavCard({ image, title, description, href }: NavCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-xl bg-white/50 backdrop-blur p-6 hover:bg-white/80 transition-colors"
    >
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-medium group-hover:underline truncate">
            {title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </Link>
  );
}
