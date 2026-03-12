"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  { src: "https://static.wixstatic.com/media/2fcf09_886aa7c39bf54c33b875fcd2841be6d5~mv2.jpg", alt: "Latte art" },
  { src: "https://static.wixstatic.com/media/2fcf09_9c1a00da944e44a38c821e2815c29328~mv2_d_4899_3266_s_4_2.jpg", alt: "Fresh pastries" },
  { src: "https://static.wixstatic.com/media/2fcf09_10abbe84be72490792decd5fca5ea38c~mv2.jpg", alt: "Cafe interior" },
  { src: "https://static.wixstatic.com/media/2fcf09_886aa7c39bf54c33b875fcd2841be6d5~mv2.jpg", alt: "Coffee brewing" },
  { src: "https://static.wixstatic.com/media/2fcf09_9c1a00da944e44a38c821e2815c29328~mv2_d_4899_3266_s_4_2.jpg", alt: "Brunch plate" },
  { src: "https://static.wixstatic.com/media/2fcf09_10abbe84be72490792decd5fca5ea38c~mv2.jpg", alt: "Coffee beans" },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-charcoal py-32 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-cafe-accent" />
            <span className="text-cafe-accent uppercase text-xs font-medium tracking-widest">
              Visual Stories
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-serif font-light text-warm-white">
            Gallery
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden cursor-pointer border border-stone/10"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <p className="text-warm-white/70 text-sm mb-3">Follow us on Instagram</p>
          <a
            href="https://instagram.com/cafehagen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-white text-lg underline underline-offset-4 hover:text-cafe-accent transition-colors"
          >
            @cafehagen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
