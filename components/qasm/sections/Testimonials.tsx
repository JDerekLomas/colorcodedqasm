"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Testimonial } from "@/lib/qasm-types";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="section-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs text-gold uppercase tracking-overline mb-3">
            Voices from the Archive
          </p>
          <h2 className="text-3xl md:text-4xl text-white font-medium">
            Stories from Our Community
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="card-dark p-8"
            >
              {/* Quote */}
              <blockquote className="text-neutral-300 leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-dark-100">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-medium">{testimonial.name}</p>
                  <p className="text-sm text-neutral-500">{testimonial.location}</p>
                </div>
              </div>

              {/* Artifact */}
              {testimonial.artifact && (
                <div className="mt-6 pt-6 border-t border-dark-50">
                  <p className="text-xs text-gold uppercase tracking-overline">
                    Their Artifact
                  </p>
                  <p className="text-sm text-neutral-400 mt-1">
                    {testimonial.artifact}
                  </p>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
