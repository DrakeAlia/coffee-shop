"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

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
              className="bg-warm-white border-l border-stone/10"
            >
              <SheetHeader>
                <SheetTitle className="text-2xl font-serif font-bold text-charcoal">
                  Cafe Hagen
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-charcoal hover:text-cafe-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="/order"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#C4956A] text-white px-6 py-2.5 text-xs tracking-widest uppercase font-medium hover:bg-[#A37A52] transition-colors mt-4 inline-block text-center rounded-none"
                >
                  Order Online
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
