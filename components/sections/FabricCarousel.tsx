import { FabricCard } from "@/components/cards/FabricCard";
import type { Fabric } from "@/lib/types";

interface FabricCarouselProps {
  fabrics: Fabric[];
  title?: string;
}

export function FabricCarousel({ fabrics, title }: FabricCarouselProps) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className="text-2xl font-semibold mb-6 px-6 uppercase tracking-wide">
            {title}
          </h2>
        )}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-6 scrollbar-hide">
          {fabrics.map((fabric) => (
            <FabricCard key={fabric.id} fabric={fabric} />
          ))}
        </div>
      </div>
    </section>
  );
}
