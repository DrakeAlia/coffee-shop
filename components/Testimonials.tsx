"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import AnimatedHeading from "@/components/AnimatedHeading";

const testimonials = [
  {
    quote: "The most authentic Scandinavian cafe experience in Seattle. The cardamom buns are perfection.",
    author: "Emma L.",
    location: "Queen Anne",
  },
  {
    quote: "My morning ritual wouldn't be the same without Cafe Hagen. The staff knows my order by heart.",
    author: "Michael K.",
    location: "SLU",
  },
  {
    quote: "Finally, a place that understands coffee shouldn't be rushed. The pour-over is worth every minute.",
    author: "Sarah P.",
    location: "Bellevue",
  },
  {
    quote: "Beautiful space, incredible pastries, and the best cortado in the city. What more could you want?",
    author: "David R.",
    location: "Dexter",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="bg-cream py-32 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-cafe-accent" />
              <span className="text-cafe-accent uppercase text-xs font-medium tracking-widest">
                What People Say
              </span>
            </div>
            <AnimatedHeading
              text="Testimonials"
              className="text-5xl sm:text-6xl font-serif font-light text-charcoal"
              tag="h2"
            />
          </div>

          {/* Testimonial Slider */}
          <div className="relative min-h-[350px] sm:min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-start justify-center"
              >
                <Quote className="w-10 h-10 text-cafe-accent mb-8" />

                <p className="text-xl sm:text-2xl md:text-3xl font-serif font-light text-charcoal mb-10 leading-loose max-w-prose">
                  {testimonials[currentIndex].quote}
                </p>

                <div className="space-y-1">
                  <p className="font-medium text-charcoal text-sm">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-stone text-xs">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Animated Line Indicators */}
          <div className="flex gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="h-px bg-stone/30 hover:bg-stone/50 overflow-hidden"
                animate={{
                  width: index === currentIndex ? 48 : 32,
                  backgroundColor: index === currentIndex ? "#C4956A" : "rgba(107, 100, 89, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
