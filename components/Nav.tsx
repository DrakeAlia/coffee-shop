"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#hygge", label: "Our Story" },
  { href: "#menu", label: "Menu" },
  { href: "#locations", label: "Locations" },
  { href: "#coffee", label: "Coffee" },
  { href: "/shop", label: "Shop" },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-warm-white/80 backdrop-blur-md shadow-sm border-b border-stone/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className={`text-2xl font-serif font-bold transition-colors ${
              isScrolled ? "text-charcoal" : "text-warm-white"
            }`}
          >
            Cafe Hagen
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-cafe-accent ${
                  isScrolled ? "text-charcoal" : "text-warm-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/order"
              className="bg-[#C4956A] text-white px-6 py-2.5 text-xs tracking-widest uppercase font-medium hover:bg-[#A37A52] transition-colors rounded-none"
            >
              Order Online
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button
                className={`${
                  isScrolled
                    ? "text-charcoal border border-charcoal/20 hover:bg-charcoal/10"
                    : "text-warm-white border border-warm-white/40 hover:bg-white/10"
                } bg-transparent transition-colors p-2`}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-charcoal border-l border-warm-white/10 w-full sm:w-80 px-6 [&>button]:text-warm-white/60 [&>button]:hover:text-warm-white [&>button]:border-0 [&>button]:bg-transparent [&>button]:hover:bg-warm-white/10 [&>button_svg]:text-warm-white/60 [&>button:hover_svg]:text-warm-white [&>button]:top-6 [&>button]:right-6"
            >
              <SheetHeader className="text-left pb-2 pt-6">
                <SheetTitle className="text-warm-white font-serif text-3xl font-light">
                  Cafe Hagen
                </SheetTitle>
                <div className="h-px w-12 bg-cafe-accent mt-3" />
              </SheetHeader>
              <div className="flex flex-col mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between py-5 border-b border-warm-white/10 text-warm-white/70 hover:text-warm-white transition-all duration-200 text-lg font-light tracking-wide w-full"
                  >
                    {link.label}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                  </Link>
                ))}
                <a
                  href="/order"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-[#C4956A] text-white py-5 text-xs tracking-widest uppercase font-medium hover:bg-[#A37A52] transition-colors text-center mt-10 block rounded-none"
                >
                  Order Online
                </a>
                <p className="text-warm-white/30 text-xs text-center mt-6 pb-8 tracking-widest uppercase">
                  Specialty Coffee · Seattle
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
