"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ProtocolStep } from "@/lib/qasm-types";

interface ProtocolProps {
  steps: ProtocolStep[];
  title?: string;
  subtitle?: string;
}

export function Protocol({
  steps,
  title = "The Protocol",
  subtitle = "Your vision, encoded into artifact through generations of craft knowledge.",
}: ProtocolProps) {
  return (
    <section className="section-secondary">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs text-gold uppercase tracking-overline mb-3">
            44 Days to Creation
          </p>
          <h2 className="text-3xl md:text-4xl text-white font-medium mb-4">
            {title}
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="protocol-step"
            >
              {/* Icon Column */}
              <div className="flex flex-col items-center">
                <div className="protocol-icon">
                  <Image
                    src={step.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="w-6 h-6 invert"
                  />
                </div>
                {index < steps.length - 1 && <div className="protocol-line flex-1" />}
              </div>

              {/* Content Column */}
              <div className="pb-12 flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="protocol-days">{step.days}</span>
                  <span className="w-6 h-6 rounded-full bg-white/10 text-white text-xs flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl text-white font-medium mb-2">{step.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
