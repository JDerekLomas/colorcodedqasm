"use client";

import { CreatorCard } from "@/components/cards/CreatorCard";
import type { Creator } from "@/lib/types";

interface CreatorCarouselProps {
  creators: Creator[];
}

export function CreatorCarousel({ creators }: CreatorCarouselProps) {
  // Double the creators for infinite scroll effect
  const doubledCreators = [...creators, ...creators];

  return (
    <section className="py-12 overflow-hidden">
      <div className="flex gap-4 animate-scroll hover:pause">
        {doubledCreators.map((creator, i) => (
          <CreatorCard key={`${creator.id}-${i}`} creator={creator} />
        ))}
      </div>
    </section>
  );
}
