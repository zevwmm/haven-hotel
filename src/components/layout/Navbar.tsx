"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#rooms", label: "Rooms" },
  { href: "#experience", label: "Experience" },
  { href: "#dining", label: "Dining" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Floating pill — visible after scroll ── */}
      <motion.nav
        className="fixed top-5 inset-x-0 z-50 hidden md:flex justify-center"
        style={{ pointerEvents: scrolled ? "auto" : "none" }}
        initial={{ opacity: 0, y: -16 }}
        animate={scrolled ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        aria-label="Primary navigation"
      >
        <div
          className="flex items-center gap-10 px-8 py-3 border border-[#EDE8E2]"
          style={{
            borderRadius: "9999px",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            background: "rgba(253,251,247,0.90)",
            boxShadow:
              "0 4px 32px rgba(26,23,20,0.07), 0 1px 0 rgba(255,255,255,0.6) inset",
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
            className="font-serif text-[#1A1714] text-sm font-medium tracking-[0.32em] uppercase hover:text-[#8B7355] transition-colors duration-300"
          >
            HAVEN
          </a>

          <div className="w-px h-4 bg-[#EDE8E2]" />

          {/* Nav links */}
          <div className="flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-[#9C958C] text-xs font-sans tracking-wide hover:text-[#1A1714] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="w-px h-4 bg-[#EDE8E2]" />

          {/* Reserve CTA */}
          <a
            href="#reserve"
            onClick={(e) => { e.preventDefault(); handleNavClick("#reserve"); }}
            className="text-xs font-sans tracking-widest uppercase text-[#FDFBF7] bg-[#8B7355] px-5 py-2 transition-all duration-300 hover:bg-[#7A6348] active:scale-[0.97]"
            style={{ borderRadius: "9999px" }}
          >
            Reserve
          </a>
        </div>
      </motion.nav>

      {/* ── Top bar — visible only before scroll ── */}
      <motion.div
        className="fixed top-0 inset-x-0 z-40 flex items-center justify-between px-6 md:px-12 h-16 md:h-20"
        animate={{ opacity: scrolled ? 0 : 1 }}
        style={{ pointerEvents: scrolled ? "none" : "auto" }}
        transition={{ duration: 0.35 }}
      >
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }}
          className="font-serif text-white text-sm tracking-[0.32em] uppercase"
        >
          HAVEN
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-white/70 text-xs font-sans tracking-wide hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reserve"
            onClick={(e) => { e.preventDefault(); handleNavClick("#reserve"); }}
            className="relative text-white/80 text-xs font-sans tracking-widest uppercase group"
          >
            Reserve
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden p-2 text-white"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </motion.div>

      {/* ── Mobile fullscreen overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center"
            style={{
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              background: "rgba(253,251,247,0.97)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 p-2 text-[#9C958C] hover:text-[#1A1714] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>

            <div className="flex flex-col items-center gap-10">
              {[...navLinks, { href: "#reserve", label: "Reserve" }].map(
                (link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="font-serif text-5xl text-[#1A1714] hover:text-[#8B7355] transition-colors duration-200 tracking-tight"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: i * 0.08 + 0.05, ease: "easeOut" }}
                  >
                    {link.label}
                  </motion.a>
                )
              )}
            </div>

            <div className="absolute bottom-10 text-[#9C958C] text-xs font-sans tracking-widest uppercase">
              Serenity Bay · Est. 2019
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
