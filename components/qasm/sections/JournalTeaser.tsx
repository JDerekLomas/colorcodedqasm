"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import type { JournalPost } from "@/lib/qasm-types";

interface JournalTeaserProps {
  posts: JournalPost[];
}

export function JournalTeaser({ posts }: JournalTeaserProps) {
  return (
    <section className="section-secondary">
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
              From the Journal
            </p>
            <h2 className="text-3xl md:text-4xl text-white font-medium">
              Stories & Insights
            </h2>
          </div>

          <Button href="/journal" variant="outline" size="sm">
            Read All
          </Button>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <Link href={`/journal/${post.slug}`}>
                <div className="relative aspect-[16/10] overflow-hidden bg-dark-300 mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-neutral-500">
                    <span className="text-gold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.readTime} read</span>
                  </div>

                  <h3 className="text-lg text-white font-medium group-hover:text-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-neutral-400 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
