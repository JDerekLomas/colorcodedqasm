"use client";

import { motion } from "framer-motion";
import { Protocol, Testimonials, Button } from "@/components/qasm";
import { protocolSteps, testimonials } from "@/lib/qasm-data";

export default function EncodePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-dark-500 pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-500 via-dark-300 to-dark-500" />
        <div className="absolute inset-0 grain-overlay" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs text-gold uppercase tracking-overline mb-4">
              The Encoding Process
            </p>
            <h1 className="display text-white mb-6">
              Your Vision, Our Code
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
              Every artifact begins with a conversation. Share your vision, and we'll
              translate it through generations of craft knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#start" variant="gold" size="lg">
                Start from Zero
              </Button>
              <Button href="/archive" variant="outline" size="lg">
                Fork an Existing Artifact
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Protocol Timeline */}
      <Protocol
        steps={protocolSteps}
        title="The 44-Day Protocol"
        subtitle="From initial consultation to doorstep delivery, every step is designed for collaboration and transparency."
      />

      {/* What You'll Get */}
      <section className="section-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs text-gold uppercase tracking-overline mb-3">
              Included with Every Artifact
            </p>
            <h2 className="text-3xl md:text-4xl text-white font-medium">
              More Than a Garment
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "📜",
                title: "Certificate of Authenticity",
                description:
                  "Documentation of your artifact's creation, including artisan signatures and technique details.",
              },
              {
                icon: "🎥",
                title: "Creation Journey Video",
                description:
                  "A short film documenting the making of your piece, from design to final stitch.",
              },
              {
                icon: "🧵",
                title: "Material Samples",
                description:
                  "Swatches of all fabrics and threads used, for future care and reference.",
              },
              {
                icon: "📖",
                title: "Artisan Story",
                description:
                  "A written profile of the craftsperson(s) who brought your vision to life.",
              },
              {
                icon: "🔧",
                title: "Lifetime Care",
                description:
                  "Free repairs and alterations for as long as you own your artifact.",
              },
              {
                icon: "🌱",
                title: "Carbon Offset",
                description:
                  "Your purchase includes full carbon offset for production and shipping.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-dark p-8 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg text-white font-medium mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} />

      {/* Start Form CTA */}
      <section id="start" className="section-cream">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium text-dark-500 mb-6">
              Begin Your Encoding
            </h2>
            <p className="text-dark-500/70 mb-10">
              Book a free 30-minute consultation to discuss your vision.
              No commitment required.
            </p>

            <form className="space-y-4 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="px-4 py-3 bg-white border border-dark-500/20 text-dark-500 placeholder:text-dark-500/50 focus:outline-none focus:border-dark-500"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="px-4 py-3 bg-white border border-dark-500/20 text-dark-500 placeholder:text-dark-500/50 focus:outline-none focus:border-dark-500"
                />
              </div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 bg-white border border-dark-500/20 text-dark-500 placeholder:text-dark-500/50 focus:outline-none focus:border-dark-500"
              />
              <textarea
                placeholder="Tell us about your vision..."
                rows={4}
                className="w-full px-4 py-3 bg-white border border-dark-500/20 text-dark-500 placeholder:text-dark-500/50 focus:outline-none focus:border-dark-500 resize-none"
              />
              <button
                type="submit"
                className="w-full px-6 py-4 bg-dark-500 text-white font-medium hover:bg-dark-300 transition-colors"
              >
                Schedule Consultation
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
