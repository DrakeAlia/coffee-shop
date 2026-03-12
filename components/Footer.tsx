"use client";

import { useRef } from "react";
import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { motion, useInView } from "framer-motion";

const locations = [
  { name: "SLU", href: "/locations/slu" },
  { name: "Queen Anne", href: "/locations/queen-anne" },
  { name: "Dexter", href: "/locations/dexter" },
  { name: "Uptown", href: "/locations/uptown" },
  { name: "Bellevue", href: "/locations/bellevue" },
  { name: "Kirkland", href: "/locations/kirkland" },
];

const navLinks = [
  { name: "Our Story", href: "/our-story" },
  { name: "Menu", href: "/menu" },
  { name: "Coffee", href: "/coffee" },
  { name: "Shop", href: "/shop" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Accessibility", href: "/accessibility" },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const footerColumns = [
    "brand",
    "locations",
    "navigation",
    "contact"
  ];

  return (
    <footer ref={ref} className="bg-charcoal text-warm-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0 * 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-serif font-bold">Cafe Hagen</h3>
            <p className="text-warm-white/70 text-sm leading-relaxed">
              Bringing the warmth of Scandinavian coffee culture to Seattle.
              Find your hygge in every cup, every visit, every moment.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/cafehagen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-white/70 hover:text-cafe-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/cafehagen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-white/70 hover:text-cafe-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/cafehagen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-white/70 hover:text-cafe-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Locations Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1 * 0.1 }}
          >
            <h4 className="text-lg font-medium mb-6">Locations</h4>
            <ul className="space-y-3">
              {locations.map((location) => (
                <li key={location.name}>
                  <Link
                    href={location.href}
                    className="text-warm-white/70 hover:text-cafe-accent transition-colors text-sm"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Navigation Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 2 * 0.1 }}
          >
            <h4 className="text-lg font-medium mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-warm-white/70 hover:text-cafe-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 3 * 0.1 }}
          >
            <h4 className="text-lg font-medium mb-6">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@cafehagen.com"
                  className="text-warm-white/70 hover:text-cafe-accent transition-colors"
                >
                  hello@cafehagen.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+12065551234"
                  className="text-warm-white/70 hover:text-cafe-accent transition-colors"
                >
                  (206) 555-1234
                </a>
              </li>
              <li className="pt-6 border-t border-warm-white/10">
                <p className="text-warm-white/70 mb-3 mt-2">Newsletter</p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-warm-white/10 border border-warm-white/20 rounded-none text-sm text-warm-white placeholder:text-warm-white/50 focus:outline-none focus:border-cafe-accent"
                  />
                  <button className="bg-[#C4956A] text-white px-5 py-2 text-sm font-medium hover:bg-[#A37A52] transition-colors rounded-none">
                    Join
                  </button>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-warm-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-warm-white/60">
            <p>&copy; {new Date().getFullYear()} Cafe Hagen. All rights reserved.</p>
            <div className="flex gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-cafe-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
