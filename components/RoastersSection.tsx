"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Flame, Award, Leaf } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function RoastersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="coffee" className="bg-warm-white py-32 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Side with rotating decorative element */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px] overflow-hidden border border-stone/10"
          >
            <Image
              src="https://static.wixstatic.com/media/2fcf09_9c1a00da944e44a38c821e2815c29328~mv2_d_4899_3266_s_4_2.jpg"
              alt="Coffee roasting process"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Rotating circular element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute top-8 right-8 w-24 h-24 border-2 border-cafe-accent/30 rounded-full flex items-center justify-center"
            >
              <div className="w-16 h-16 border border-cafe-accent/50 rounded-full" />
            </motion.div>
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
                  Hagen Coffee Roasters
                </span>
              </div>

              <h2 className="text-5xl sm:text-6xl font-serif font-light text-charcoal">
                Roasted with <span className="italic font-normal">obsession</span>
              </h2>
            </div>

            <p className="text-stone text-base leading-loose max-w-prose">
              Every bean tells a story. We source directly from sustainable farms across the globe,
              forging relationships with farmers who share our commitment to quality and ethics.
              Our small-batch roasting process brings out the unique character of each origin.
            </p>

            {/* Features - Mobile Accordion */}
            <div className="lg:hidden pt-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-stone/15">
                  <AccordionTrigger className="text-charcoal hover:text-cafe-accent text-sm font-medium">
                    <div className="flex items-center gap-3">
                      <Flame className="w-5 h-5 text-cafe-accent" />
                      Small Batch Roasting
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-stone text-sm leading-relaxed pl-8">
                    Precision roasted in our Seattle facility for maximum freshness
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-stone/15">
                  <AccordionTrigger className="text-charcoal hover:text-cafe-accent text-sm font-medium">
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-cafe-accent" />
                      Direct Trade
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-stone text-sm leading-relaxed pl-8">
                    Building lasting partnerships with coffee farmers worldwide
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-stone/15">
                  <AccordionTrigger className="text-charcoal hover:text-cafe-accent text-sm font-medium">
                    <div className="flex items-center gap-3">
                      <Leaf className="w-5 h-5 text-cafe-accent" />
                      Sustainable Practices
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-stone text-sm leading-relaxed pl-8">
                    Committed to environmental stewardship at every step
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Features - Desktop List */}
            <div className="hidden lg:block space-y-8 pt-4">
              <div className="flex items-start gap-4 border-l-2 border-stone/15 pl-6">
                <Flame className="w-5 h-5 text-cafe-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-charcoal font-medium mb-2 text-sm">
                    Small Batch Roasting
                  </h3>
                  <p className="text-stone text-sm leading-relaxed">
                    Precision roasted in our Seattle facility for maximum freshness
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-l-2 border-stone/15 pl-6">
                <Award className="w-5 h-5 text-cafe-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-charcoal font-medium mb-2 text-sm">
                    Direct Trade
                  </h3>
                  <p className="text-stone text-sm leading-relaxed">
                    Building lasting partnerships with coffee farmers worldwide
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-l-2 border-stone/15 pl-6">
                <Leaf className="w-5 h-5 text-cafe-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-charcoal font-medium mb-2 text-sm">
                    Sustainable Practices
                  </h3>
                  <p className="text-stone text-sm leading-relaxed">
                    Committed to environmental stewardship at every step
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-[#C4956A] text-white hover:bg-[#A37A52] px-10 py-4 uppercase text-xs tracking-widest font-medium transition-colors rounded-none">
              Shop Coffee Beans
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
