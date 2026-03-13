"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

export default function BellevueSpotlight() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-cream py-32 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-cafe-accent" />
                <span className="text-cafe-accent uppercase text-xs font-medium tracking-widest">
                  Featured Location
                </span>
              </div>

              <h2 className="text-5xl sm:text-6xl font-serif font-light text-charcoal">
                Visit Us in Bellevue
              </h2>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-cafe-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-charcoal font-medium mb-1 text-sm">Address</p>
                  <p className="text-stone text-base">
                    10500 NE 8th St, Bellevue, WA 98004
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-cafe-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-charcoal font-medium mb-1 text-sm">Hours</p>
                  <p className="text-stone text-base">
                    Mon - Fri: 6am - 5pm
                    <br />
                    Sat - Sun: 7am - 5pm
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-cafe-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-charcoal font-medium mb-1 text-sm">Phone</p>
                  <a
                    href="tel:+14255550123"
                    className="text-stone text-base hover:text-cafe-accent transition-colors"
                  >
                    (425) 555-0123
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=10500+NE+8th+St+Bellevue+WA+98004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C4956A] text-white px-8 py-3 uppercase text-xs tracking-widest font-medium hover:bg-[#A37A52] transition-colors rounded-none"
            >
              Get Directions
            </a>
          </motion.div>

          {/* Map Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px] overflow-hidden border border-stone/10 bg-charcoal flex flex-col items-center justify-center p-8 text-center space-y-8"
          >
            <MapPin className="w-16 h-16 text-cafe-accent" />
            <div>
              <h3 className="text-3xl sm:text-4xl font-serif font-light text-warm-white mb-4">
                Visit Us
              </h3>
              <p className="text-warm-white/90 text-lg mb-2">
                10500 NE 8th St
              </p>
              <p className="text-warm-white/90 text-lg">
                Bellevue, WA 98004
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=10500+NE+8th+St+Bellevue+WA+98004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C4956A] text-white px-10 py-4 uppercase text-xs tracking-widest font-medium hover:bg-[#A37A52] transition-colors rounded-none"
            >
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
