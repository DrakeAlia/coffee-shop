"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const locations = [
  {
    name: "SLU",
    neighborhood: "South Lake Union",
    address: "401 Terry Ave N",
    hours: "6am - 8pm Daily",
  },
  {
    name: "Queen Anne",
    neighborhood: "Upper Queen Anne",
    address: "15 W Highland Dr",
    hours: "7am - 7pm Daily",
  },
  {
    name: "Dexter",
    neighborhood: "Dexter Avenue",
    address: "1121 Dexter Ave N",
    hours: "6:30am - 6pm Daily",
  },
  {
    name: "Uptown",
    neighborhood: "Lower Queen Anne",
    address: "512 1st Ave N",
    hours: "7am - 9pm Daily",
  },
  {
    name: "Bellevue",
    neighborhood: "Downtown Bellevue",
    address: "777 108th Ave NE, Bellevue, WA 98004",
    hours: "6am - 8pm Daily",
  },
  {
    name: "Kirkland",
    neighborhood: "Downtown Kirkland",
    address: "98 Kirkland Ave",
    hours: "7am - 7pm Daily",
  },
];

export default function Locations() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getMapUrl = (location: typeof locations[0]) => {
    if (location.name === "Bellevue") {
      return "https://www.google.com/maps?sca_esv=5176837d497f6a28&output=search&q=cafe+hagen+bellevue&source=lnms&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpUrv6YeyJhXfuYqj4Fj6c1U4Z6Yq0xAU8tFlmuJvKXCuCpPJN5Ow4lqJLeH5KKHuHmsErR-gxmpUSArNcd6DRYQ-Zi-zw8uKivhfqeezelRQqEYypuDsfSXneL-73ztgq2R0jRCR6S24NoBcpaiN_YJimzWIBtIp_nrkjPQ5lhhS7lyV1QRE2-1cA2CaXpDNB7b1Z3g&entry=mc&ved=1t:200715&ictx=111";
    }
    const encodedAddress = encodeURIComponent(location.address);
    return `https://maps.google.com/?q=${encodedAddress}+Seattle+WA`;
  };

  return (
    <section ref={ref} id="locations" className="bg-charcoal py-32 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-cafe-accent" />
            <span className="text-cafe-accent uppercase text-xs font-medium tracking-widest">
              Find Us
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-serif font-light text-warm-white mb-8">
            Our Locations
          </h2>
          <Separator className="bg-warm-white/10" />
        </motion.div>

        <div className="h-12" />

        {/* List */}
        <TooltipProvider>
          <div className="space-y-0">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={getMapUrl(location)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block py-8 px-4 border-b border-stone/15 hover:bg-warm-white/5 transition-colors relative"
                    >
                {/* Animated hover line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-px bg-cafe-accent origin-left"
                  style={{ width: "100%" }}
                />
                {/* Mobile Layout (< sm) */}
                <div className="sm:hidden space-y-3">
                  <div className="flex items-baseline gap-4">
                    <span className="text-warm-white/40 font-serif text-lg">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-warm-white text-2xl font-serif font-light group-hover:text-cafe-accent transition-colors">
                      {location.name}
                    </h3>
                  </div>
                  <div className="pl-10 space-y-2">
                    <p className="text-warm-white/70 text-sm">
                      {location.neighborhood}
                    </p>
                    <p className="text-warm-white/70 text-sm">
                      {location.hours}
                    </p>
                  </div>
                </div>

                {/* Desktop Layout (sm and above) */}
                <div className="hidden sm:grid grid-cols-12 gap-6 items-center">
                  {/* Number */}
                  <div className="col-span-1">
                    <span className="text-warm-white/40 font-serif text-2xl">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Location Name */}
                  <div className="col-span-4">
                    <h3 className="text-warm-white text-2xl font-serif font-light group-hover:text-cafe-accent transition-colors">
                      {location.name}
                    </h3>
                  </div>

                  {/* Neighborhood */}
                  <div className="col-span-4">
                    <p className="text-warm-white/70 text-sm">
                      {location.neighborhood}
                    </p>
                    <p className="text-warm-white/50 text-sm mt-1">
                      {location.address}
                    </p>
                  </div>

                  {/* Hours */}
                  <div className="col-span-3 text-right">
                    <p className="text-warm-white/70 text-sm">
                      {location.hours}
                    </p>
                  </div>
                </div>
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className="bg-[#C4956A] text-white text-xs px-3 py-1.5 rounded-none border-none"
              sideOffset={5}
            >
              Open in Maps →
            </TooltipContent>
          </Tooltip>
        </motion.div>
      ))}
    </div>
  </TooltipProvider>
      </div>
    </section>
  );
}
