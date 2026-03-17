"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import AnimatedHeading from "@/components/AnimatedHeading";
import MagneticButton from "@/components/MagneticButton";

export default function HyggeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Scroll-linked text reveal
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.9", "end 0.4"],
  });

  const text =
    "In Danish, hygge means a quality of coziness that makes one feel content and comfortable. It's the warm glow of candlelight on a winter evening, the comfort of your favorite chair, the presence of good friends. At Cafe Hagen, we've cultivated spaces across Seattle where you can find your own hygge. Whether you're savoring our carefully crafted espresso, enjoying a leisurely brunch, or simply finding a quiet moment with a book, we're here to make you feel at home.";

  const words = text.split(" ");
  const wordOpacities = words.map((_, i) => {
    const start = i / words.length - 0.05;
    const end = i / words.length + 0.15;
    return useTransform(scrollYProgress, [start, end], [0.15, 1]);
  });

  return (
    <section ref={ref} id="hygge" className="bg-warm-white py-32 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image with hover zoom */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03 }}
            className="relative h-64 lg:h-[600px] overflow-hidden border border-stone/10 cursor-pointer"
          >
            <Image
              src="https://static.wixstatic.com/media/2fcf09_fecbe3658cd848da944feb652ad88256~mv2.jpg/v1/fill/w_976,h_423,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/W%20%2B%20M-8842-2.jpg"
              alt="Cozy cafe interior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-cafe-accent" />
                <span className="text-cafe-accent uppercase text-xs font-medium tracking-widest">
                  Our Philosophy
                </span>
              </div>

              <AnimatedHeading
                text="Welcome to your hygge"
                className="text-5xl sm:text-6xl font-serif font-light text-charcoal"
                tag="h2"
              />
            </div>

            <div
              ref={textRef}
              className="text-stone text-base leading-loose max-w-prose"
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  style={{ opacity: wordOpacities[i] }}
                  className="mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            <MagneticButton className="bg-[#C4956A] text-white hover:bg-[#A37A52] px-10 py-4 uppercase text-xs tracking-widest font-medium transition-colors rounded-none">
              Our Story
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
