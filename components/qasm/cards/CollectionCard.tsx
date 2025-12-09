"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Collection } from "@/lib/qasm-types";

interface CollectionCardProps {
  collection: Collection;
  index?: number;
}

export function CollectionCard({ collection, index = 0 }: CollectionCardProps) {
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
      className="group relative overflow-hidden"
    >
      <Link href={`/collections/${collection.slug}`}>
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={collection.heroImage}
            alt={collection.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-dark-500/40 group-hover:bg-dark-500/60 transition-colors" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <p className="text-xs text-gold uppercase tracking-overline mb-2">
              {collection.artifacts.length} Artifacts
            </p>
            <h3 className="text-2xl md:text-3xl text-white font-medium mb-2">
              {collection.title}
            </h3>
            <p className="text-white/70 text-sm max-w-md">
              {collection.tagline}
            </p>

            {/* Arrow */}
            <div className="mt-4 flex items-center gap-2 text-gold">
              <span className="text-sm">Explore Collection</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </motion.svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
