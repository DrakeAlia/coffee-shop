"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  tag: "h1" | "h2" | "h3";
}

export default function AnimatedHeading({
  text,
  className = "",
  tag: Tag,
}: AnimatedHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [isMobile, setIsMobile] = useState(true); // Default to mobile for SSR

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Check on mount
    checkMobile();

    // Check on resize
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Split by line breaks or "/" character on desktop, treat as single line on mobile
  const lines = isMobile
    ? [text]
    : text.split(/\n|\//).map((line) => line.trim());

  const yStart = isMobile ? 20 : "100%";
  const staggerDelay = isMobile ? 0.08 : 0.12;

  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, index) => (
        <div key={index} style={{ overflow: "hidden" }} className="pb-[0.15em]">
          <motion.span
            style={{ display: "block" }}
            initial={{ y: yStart, opacity: 0 }}
            animate={
              isInView
                ? { y: 0, opacity: 1 }
                : { y: yStart, opacity: 0 }
            }
            transition={{
              duration: 0.75,
              delay: index * staggerDelay,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            {line}
          </motion.span>
        </div>
      ))}
    </Tag>
  );
}
