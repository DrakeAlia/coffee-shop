"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import MagneticButton from "@/components/MagneticButton";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative h-screen w-full flex items-end overflow-hidden pt-8 sm:pt-9">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="https://static.wixstatic.com/media/2fcf09_2562d324625648e79efc8c6facc7024a~mv2.jpg"
          alt="Cafe Hagen interior"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Reduced Overlay - 40% */}
        <div className="absolute inset-0 bg-charcoal/40" />
      </motion.div>

      {/* Content - Bottom Left */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24 lg:pb-32">
        <div className="max-w-3xl">
          {/* Horizontal Rule with animated width */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="h-px bg-warm-white/40 mb-6"
          />

          {/* Eyebrow Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-warm-white/90 text-xs uppercase tracking-widest mb-4 font-medium"
          >
            Specialty Coffee · Seattle
          </motion.p>

          {/* Headline */}
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[88px] font-serif font-light text-warm-white mb-8 leading-[1.05]"
            >
              Find your <span className="italic font-normal">hygge</span> here.
            </motion.h1>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm sm:text-base text-warm-white/80 mb-10 max-w-prose leading-relaxed font-light"
          >
            Specialty coffee, fresh pastries, and warm hospitality in the heart of Seattle
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 items-center"
          >
            <MagneticButton
              href="#locations"
              className="bg-[#C4956A] text-white px-10 py-4 uppercase text-xs tracking-widest font-medium hover:bg-[#A37A52] transition-colors rounded-none w-full sm:w-auto text-center"
            >
              Find a Location
            </MagneticButton>
            <a href="#hygge" className="text-warm-white text-sm underline underline-offset-4 hover:text-warm-white/80 transition-colors">
              Our Story
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
