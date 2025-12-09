"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "../ui/Badge";
import type { Artifact } from "@/lib/qasm-types";

interface ArtifactCardProps {
  artifact: Artifact;
  index?: number;
}

export function ArtifactCard({ artifact, index = 0 }: ArtifactCardProps) {
  const isSoldOut = artifact.availability === "sold_out";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="artifact-card group"
    >
      <Link href={`/artifact/${artifact.slug}`}>
        <div className="artifact-image relative">
          <Image
            src={artifact.images[0]}
            alt={artifact.title}
            fill
            className={`object-cover transition-transform duration-700 ${
              isSoldOut ? "grayscale" : "group-hover:scale-105"
            }`}
          />

          {/* Overlay */}
          {!isSoldOut && (
            <div className="artifact-overlay">
              <span className="px-4 py-2 border border-white text-white text-sm">
                View Artifact
              </span>
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {isSoldOut && <Badge variant="sold-out">Sold Out</Badge>}
            {artifact.availability === "pre_order" && (
              <Badge variant="burgundy">Pre-Order</Badge>
            )}
            {artifact.featured && !isSoldOut && (
              <Badge variant="gold">Featured</Badge>
            )}
          </div>
        </div>

        <div className="artifact-info">
          <p className="artifact-collection">{artifact.collection}</p>
          <h3 className="artifact-title">{artifact.title}</h3>
          <div className="flex items-center gap-2">
            {artifact.compareAtPrice && (
              <span className="text-neutral-500 line-through text-sm">
                ${artifact.compareAtPrice.toLocaleString()}
              </span>
            )}
            <p className={`artifact-price ${isSoldOut ? "text-neutral-500" : ""}`}>
              ${artifact.price.toLocaleString()}
            </p>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
