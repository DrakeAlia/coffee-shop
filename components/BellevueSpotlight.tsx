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
                    10500 NE 8th St
                    <br />
                    Bellevue, WA 98004
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

            <button className="bg-[#C4956A] text-white px-8 py-3 uppercase text-xs tracking-widest font-medium hover:bg-[#A37A52] transition-colors rounded-none">
              Get Directions
            </button>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px] overflow-hidden border border-stone/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.1234!2d-122.2!3d47.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDM2JzAwLjAiTiAxMjLCsDEyJzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cafe Hagen Bellevue Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
