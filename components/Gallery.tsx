"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import AnimatedHeading from "@/components/AnimatedHeading";

const galleryImages = [
  { src: "https://static.wixstatic.com/media/3cf4b9_79a4e73385b647f6874d50278a0836f9~mv2.jpg/v1/fill/w_980,h_1470,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3cf4b9_79a4e73385b647f6874d50278a0836f9~mv2.jpg", alt: "Salmon breakfast bun" },
  { src: "https://static.wixstatic.com/media/3cf4b9_2128aa9a95d941c1bce007f7b4a92531~mv2.jpg/v1/fill/w_980,h_653,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3cf4b9_2128aa9a95d941c1bce007f7b4a92531~mv2.jpg", alt: "Brunch spread" },
  { src: "https://static.wixstatic.com/media/3cf4b9_35fe7452d8df44bebe68fb9033337aa7~mv2.jpg/v1/fill/w_980,h_1470,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3cf4b9_35fe7452d8df44bebe68fb9033337aa7~mv2.jpg", alt: "Brunch board" },
  { src: "https://static.wixstatic.com/media/3cf4b9_4b547ddae32f47c789a853d7e1241033~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3cf4b9_4b547ddae32f47c789a853d7e1241033~mv2.jpg", alt: "Cocktails" },
  { src: "https://static.wixstatic.com/media/3cf4b9_4aa00082f0f644029de34d3ea863397c~mv2.jpg/v1/fill/w_980,h_1470,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3cf4b9_4aa00082f0f644029de34d3ea863397c~mv2.jpg", alt: "Waffle and fruit" },
  { src: "https://static.wixstatic.com/media/3cf4b9_e73d3f392ce8475abb0d60694d7507dd~mv2.jpg/v1/fill/w_980,h_1470,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3cf4b9_e73d3f392ce8475abb0d60694d7507dd~mv2.jpg", alt: "Salmon mousse toast" },
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
          <AnimatedHeading
            text="Gallery"
            className="text-5xl sm:text-6xl font-serif font-light text-warm-white"
            tag="h2"
          />
        </motion.div>

        {/* Gallery Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 auto-rows-[400px]">
          {/* Row 1: Wide brunch spread + tall image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.5, delay: 0 }}
            className="group relative overflow-hidden cursor-pointer border border-stone/10 col-span-1 sm:col-span-2 row-span-1"
          >
            <Image
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 640px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden cursor-pointer border border-stone/10 col-span-1 row-span-2"
          >
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />
          </motion.div>

          {/* Row 2: Tall + square + tall */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative overflow-hidden cursor-pointer border border-stone/10 col-span-1 row-span-1"
          >
            <Image
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative overflow-hidden cursor-pointer border border-stone/10 col-span-1 row-span-1"
          >
            <Image
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300" />
          </motion.div>
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
