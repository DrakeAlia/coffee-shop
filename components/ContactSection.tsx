"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-charcoal py-32 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* Header */}
          <div>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-cafe-accent" />
              <span className="text-cafe-accent uppercase text-xs font-medium tracking-widest">
                Get In Touch
              </span>
              <div className="h-px w-12 bg-cafe-accent" />
            </div>
            <h2 className="text-5xl sm:text-6xl font-serif font-light text-warm-white mb-6">
              Contact Us
            </h2>
            <p className="text-warm-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Questions, feedback, or wholesale inquiries? We'd love to hear from you.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <Mail className="w-6 h-6 text-cafe-accent mx-auto" />
              <h3 className="text-warm-white font-medium text-sm uppercase tracking-wider">
                Email
              </h3>
              <a
                href="mailto:hello@cafehagen.com"
                className="text-warm-white/80 hover:text-cafe-accent transition-colors text-sm block"
              >
                hello@cafehagen.com
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <Phone className="w-6 h-6 text-cafe-accent mx-auto" />
              <h3 className="text-warm-white font-medium text-sm uppercase tracking-wider">
                Phone
              </h3>
              <a
                href="tel:+12065551234"
                className="text-warm-white/80 hover:text-cafe-accent transition-colors text-sm block"
              >
                (206) 555-1234
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3"
            >
              <MapPin className="w-6 h-6 text-cafe-accent mx-auto" />
              <h3 className="text-warm-white font-medium text-sm uppercase tracking-wider">
                HQ
              </h3>
              <p className="text-warm-white/80 text-sm">
                401 Terry Ave N
                <br />
                Seattle, WA 98109
              </p>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8"
          >
            <MagneticButton
              href="mailto:hello@cafehagen.com"
              className="inline-block bg-[#C4956A] text-white px-10 py-4 uppercase text-xs tracking-widest font-medium hover:bg-[#A37A52] transition-colors rounded-none"
            >
              Send Us a Message
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
