"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import type { Artisan } from "@/lib/qasm-types";

interface ArtisanSpotlightProps {
  artisan: Artisan;
}

export function ArtisanSpotlight({ artisan }: ArtisanSpotlightProps) {
  return (
    <section className="section-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src={artisan.image}
              alt={artisan.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-500/80 via-transparent to-transparent" />

            {/* Techniques Tags */}
            <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
              {artisan.techniques.map((technique) => (
                <span
                  key={technique}
                  className="px-3 py-1 bg-dark-500/80 backdrop-blur-sm text-xs text-white uppercase tracking-wider"
                >
                  {technique}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs text-gold uppercase tracking-overline mb-4">
              Artisan Spotlight
            </p>

            <h2 className="text-3xl md:text-4xl text-white font-medium mb-2">
              {artisan.name}
            </h2>

            <p className="text-neutral-400 mb-6">
              {artisan.craft} • {artisan.region}
              {artisan.yearsOfExperience && (
                <span> • {artisan.yearsOfExperience} years of practice</span>
              )}
            </p>

            <p className="text-neutral-300 leading-relaxed mb-8">
              {artisan.bio}
            </p>

            {artisan.quote && (
              <blockquote className="border-l-2 border-gold pl-6 mb-8">
                <p className="text-xl text-white/90 italic leading-relaxed">
                  "{artisan.quote}"
                </p>
              </blockquote>
            )}

            <Button href="/artisans" variant="outline">
              Meet All Artisans
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
