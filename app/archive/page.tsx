"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArtifactCard, Button } from "@/components/qasm";
import { artifacts, collections } from "@/lib/qasm-data";

export default function ArchivePage() {
  const [filter, setFilter] = useState<string>("all");

  const filteredArtifacts =
    filter === "all"
      ? artifacts
      : artifacts.filter((a) => a.collectionSlug === filter);

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-dark-500">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs text-gold uppercase tracking-overline mb-4">
              The Archive
            </p>
            <h1 className="text-4xl md:text-5xl text-white font-medium mb-4">
              All Artifacts
            </h1>
            <p className="text-neutral-400 max-w-2xl">
              Browse our collection of handcrafted pieces. Each artifact can be
              purchased as-is or customized through our encoding process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6 bg-dark-300 border-y border-dark-50 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 text-sm transition-colors ${
                filter === "all"
                  ? "bg-white text-dark-500"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              All
            </button>
            {collections.map((collection) => (
              <button
                key={collection.slug}
                onClick={() => setFilter(collection.slug)}
                className={`px-4 py-2 text-sm transition-colors ${
                  filter === collection.slug
                    ? "bg-white text-dark-500"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {collection.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredArtifacts.map((artifact, index) => (
              <ArtifactCard key={artifact.id} artifact={artifact} index={index} />
            ))}
          </div>

          {filteredArtifacts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-400">No artifacts found in this collection.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-secondary border-t border-dark-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl text-white font-medium mb-4">
              Don't See What You're Looking For?
            </h2>
            <p className="text-neutral-400 mb-8">
              Start the encoding process to create something entirely unique.
            </p>
            <Button href="/encode" variant="gold">
              Create Custom Artifact
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
