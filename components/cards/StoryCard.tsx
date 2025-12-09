import Image from "next/image";
import type { Story } from "@/lib/types";

interface StoryCardProps {
  story: Story;
}

export function StoryCard({ story }: StoryCardProps) {
  return (
    <a
      href={story.href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative aspect-square overflow-hidden rounded-lg group"
    >
      <Image
        src={story.image}
        alt={story.name}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
      <span className="absolute bottom-3 left-3 text-white font-medium">
        {story.name}
      </span>
    </a>
  );
}
