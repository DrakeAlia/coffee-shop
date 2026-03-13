"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function MoodSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://static.wixstatic.com/media/2fcf09_dc5b2a2b28dc42b58ced4bb81d3f9e22~mv2.jpg"
          alt="Cafe Hagen exterior"
          fill
          className="object-cover"
          quality={90}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-charcoal/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-[20vw] font-light text-warm-white/15 tracking-widest italic leading-none mb-8"
        >
          hygge
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="h-px w-24 bg-cafe-accent" />
          <p className="text-warm-white/80 text-sm tracking-widest uppercase">
            Where every cup tells a story.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
