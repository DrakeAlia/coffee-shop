"use client";

import { motion } from "framer-motion";

const marqueeText = [
  "Specialty Coffee",
  "Brunch & Lunch",
  "Wine & Cocktails",
  "Hagen Coffee Roasters",
  "SLU",
  "Queen Anne",
  "Dexter",
  "Uptown",
  "Bellevue",
  "Kirkland",
];

export default function Marquee() {
  // Create marquee items with separators
  const marqueeItems = marqueeText.map((text, index) => (
    <div key={index} className="flex items-center gap-8">
      <span className="text-warm-white text-lg font-medium">
        {text}
      </span>
      <span className="text-cafe-accent text-2xl">·</span>
    </div>
  ));

  return (
    <div className="bg-charcoal py-6 overflow-hidden">
      <div className="flex">
        {/* First set */}
        <motion.div
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
          className="flex items-center gap-8 flex-shrink-0"
        >
          {marqueeItems}
        </motion.div>
        {/* Second set for seamless loop */}
        <motion.div
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
          className="flex items-center gap-8 flex-shrink-0"
        >
          {marqueeItems}
        </motion.div>
      </div>
    </div>
  );
}
