"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Artisan } from "@/lib/qasm-types";

interface ArtisanCardProps {
  artisan: Artisan;
  index?: number;
}

export function ArtisanCard({ artisan, index = 0 }: ArtisanCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <Link href={`/artisans/${artisan.id}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-dark-300">
          <Image
            src={artisan.image}
            alt={artisan.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-500 via-transparent to-transparent" />

          {/* Quote Overlay */}
          {artisan.quote && (
            <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <blockquote className="text-sm text-white/90 italic">
                "{artisan.quote}"
              </blockquote>
            </div>
          )}
        </div>

        <div className="mt-4 space-y-1">
          <p className="text-xs text-gold uppercase tracking-overline">
            {artisan.craft}
          </p>
          <h3 className="text-lg text-white font-medium group-hover:text-gold transition-colors">
            {artisan.name}
          </h3>
          <p className="text-sm text-neutral-500">
            {artisan.region}
            {artisan.yearsOfExperience && (
              <span className="mx-2">•</span>
            )}
            {artisan.yearsOfExperience && (
              <span>{artisan.yearsOfExperience} years</span>
            )}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
