import Image from "next/image";
import type { Fabric } from "@/lib/types";

interface FabricCardProps {
  fabric: Fabric;
}

export function FabricCard({ fabric }: FabricCardProps) {
  return (
    <div className="flex-shrink-0 w-64 snap-center">
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
        <Image
          src={fabric.image}
          alt={`${fabric.name} in ${fabric.material}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-3">
        <p className="font-medium">{fabric.name}</p>
        <p className="text-sm text-gray-500">{fabric.material}</p>
      </div>
    </div>
  );
}
