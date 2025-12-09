import Image from "next/image";
import type { Pillar } from "@/lib/types";

interface FourPillarsProps {
  pillars: Pillar[];
}

function PillarCard({ pillar }: { pillar: Pillar }) {
  return (
    <div className="text-center">
      <div className="w-28 h-30 mx-auto mb-4 bg-amber-600 rounded-lg flex items-center justify-center">
        <Image
          src={pillar.icon}
          alt=""
          width={48}
          height={48}
          className="w-12 h-12"
        />
      </div>
      <h5 className="font-macropolo uppercase text-amber-600 font-bold mb-2 text-sm tracking-wide">
        {pillar.title}
      </h5>
      <p className="font-bogart text-sm text-gray-700">{pillar.description}</p>
    </div>
  );
}

export function FourPillars({ pillars }: FourPillarsProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-300 via-white to-amber-700 opacity-30" />

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-noise" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          the four pillar<span className="uppercase">S</span> of morni
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <PillarCard key={i} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
