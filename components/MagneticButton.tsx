"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(
      "ontouchstart" in window || navigator.maxTouchPoints > 0
    );
  }, []);

  // Early return for touch devices - skip magnetic logic
  if (isTouchDevice) {
    const Component = href ? motion.a : motion.button;
    const isExternal = href && (href.startsWith("http") || href.startsWith("//"));
    const additionalProps = href
      ? {
          href,
          ...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})
        }
      : { onClick };

    return (
      <Component
        {...additionalProps}
        className={className}
        style={{ touchAction: "manipulation" }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </Component>
    );
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    // Only apply magnetic effect if within 80px
    if (distance < 80) {
      setPosition({
        x: distanceX * 0.3,
        y: distanceY * 0.3,
      });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const Component = href ? motion.a : motion.button;
  const isExternal = href && (href.startsWith("http") || href.startsWith("//"));
  const additionalProps = href
    ? {
        href,
        ...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})
      }
    : { onClick };

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Component
        {...additionalProps}
        className={className}
        style={{ touchAction: "manipulation" }}
        animate={{ x: position.x, y: position.y }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
        whileTap={{ scale: 0.88 }}
      >
        {children}
      </Component>
    </div>
  );
}
