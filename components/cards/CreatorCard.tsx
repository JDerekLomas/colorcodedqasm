import Image from "next/image";
import type { Creator } from "@/lib/types";

interface CreatorCardProps {
  creator: Creator;
}

export function CreatorCard({ creator }: CreatorCardProps) {
  return (
    <div className="flex-shrink-0 w-32 md:w-40 snap-center">
      <div className="relative aspect-square rounded-full overflow-hidden">
        <Image
          src={creator.image}
          alt={creator.name}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-center mt-2 text-sm">{creator.name}</p>
      {creator.role && (
        <p className="text-center text-xs text-gray-500">{creator.role}</p>
      )}
    </div>
  );
}
