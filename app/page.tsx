"use client";

import { motion } from "framer-motion";
import {
  VideoHero,
  FeaturedArtifacts,
  Protocol,
  CollectionCard,
  ArtisanSpotlight,
  JournalTeaser,
  Button,
} from "@/components/qasm";
import {
  featuredArtifacts,
  collections,
  artisans,
  protocolSteps,
  journalPosts,
} from "@/lib/qasm-data";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <VideoHero
        title="Wear Your Ancestry"
        subtitle="Fashion archaeology. Ancient symbols excavated and resurrected as embroidered wearable art."
        videoSrc="/videos/hero-embroidery.mp4"
        ctaText="Begin Excavation"
        ctaHref="/encode"
      />

      {/* Featured Artifacts */}
      <FeaturedArtifacts
        artifacts={featuredArtifacts}
        title="Archaeological Finds"
        subtitle="Each artifact carries symbols from ancient civilizations—meanings lost to time, now stitched back to life."
      />

      {/* Protocol (Co-Creation Process) */}
      <Protocol steps={protocolSteps} />

      {/* Collections */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs text-gold uppercase tracking-overline mb-3">
              Dig Sites
            </p>
            <h2 className="text-3xl md:text-4xl text-white font-medium">
              Explore by Civilization
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {collections.slice(0, 2).map((collection, index) => (
              <CollectionCard
                key={collection.id}
                collection={collection}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Artisan Spotlight */}
      <ArtisanSpotlight artisan={artisans[0]} />

      {/* Mission Statement */}
      <section className="section-cream">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-overline mb-6 text-warm">
              Our Manifesto
            </p>
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-dark-500 mb-8">
              "Fashion is memory made tangible. Every ancient symbol carried meaning:
              protection, fertility, abundance, transcendence. These visual languages
              have been lost to time. We dig them up and stitch them back to life."
            </blockquote>
            <Button href="/about" variant="secondary" className="!text-dark-500 !border-dark-500 hover:!bg-dark-500 hover:!text-cream">
              Our Archaeological Mission
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Journal Teasers */}
      <JournalTeaser posts={journalPosts} />

      {/* CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-warm opacity-90" />
        <div className="absolute inset-0 grain-overlay opacity-10" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Ready to Excavate Your Story?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Choose your dig site. Select symbols that resonate with your ancestry.
              Let master artisans resurrect them as wearable artifacts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/encode" variant="primary" size="lg">
                Commission an Artifact
              </Button>
              <Button href="/archive" variant="outline" size="lg">
                Browse Excavations
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
