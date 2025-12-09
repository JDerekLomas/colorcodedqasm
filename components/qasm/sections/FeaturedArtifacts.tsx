"use client";

import { motion } from "framer-motion";
import { ArtifactCard } from "../cards/ArtifactCard";
import { Button } from "../ui/Button";
import type { Artifact } from "@/lib/qasm-types";

interface FeaturedArtifactsProps {
  artifacts: Artifact[];
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
}

export function FeaturedArtifacts({
  artifacts,
  title = "Featured Artifacts",
  subtitle,
  showViewAll = true,
}: FeaturedArtifactsProps) {
  return (
    <section className="section-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-xs text-gold uppercase tracking-overline mb-3">
              The Archive
            </p>
            <h2 className="text-3xl md:text-4xl text-white font-medium">
              {title}
            </h2>
            {subtitle && (
              <p className="text-neutral-400 mt-2 max-w-lg">{subtitle}</p>
            )}
          </div>

          {showViewAll && (
            <Button href="/archive" variant="outline" size="sm">
              View All Artifacts
            </Button>
          )}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {artifacts.map((artifact, index) => (
            <ArtifactCard key={artifact.id} artifact={artifact} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
