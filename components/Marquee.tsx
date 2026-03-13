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
  // Create marquee items with separators - each dot has equal spacing on both sides
  const marqueeItems = marqueeText.flatMap((text, index) => [
    <span key={`text-${index}`} className="text-warm-white text-lg font-medium">
      {text}
    </span>,
    <span key={`dot-${index}`} className="text-cafe-accent text-2xl mx-6">
      ·
    </span>
  ]);

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
          className="flex items-center flex-shrink-0"
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
          className="flex items-center flex-shrink-0"
        >
          {marqueeItems}
        </motion.div>
      </div>
    </div>
  );
}
