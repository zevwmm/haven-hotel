"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Haven did not feel like a hotel. It felt like the most beautiful house I had ever been a guest in — one where the owners had thought of everything and then quietly disappeared.",
    name: "Margaux T.",
    location: "Paris, France",
    date: "April 2025",
    seed: "haven-guest-portrait-woman-paris-1",
  },
  {
    quote:
      "The kind of silence you don't know you've been missing until you arrive. I booked for three nights and stayed for ten. The coast does something to you here.",
    name: "Oliver R.",
    location: "London, United Kingdom",
    date: "March 2025",
    seed: "haven-guest-portrait-man-london-2",
  },
  {
    quote:
      "Each morning we woke to a different light on the water. The staff remembered our names from the first day and our preferences from the first hour.",
    name: "Elena V.",
    location: "Milan, Italy",
    date: "January 2025",
    seed: "haven-guest-portrait-woman-milan-3",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="py-28 md:py-40 relative overflow-hidden">
      {/* Decorative oversized quotation mark */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 font-serif text-[#8B7355] select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(12rem, 24vw, 22rem)", opacity: 0.05 }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center relative z-10">
        {/* Guest avatar */}
        <motion.div
          key={`avatar-${active}`}
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div
            className="relative overflow-hidden"
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: "1.5px solid rgba(139,115,85,0.25)",
            }}
          >
            <Image
              src={`https://picsum.photos/seed/${t.seed}/160/160`}
              alt={t.name}
              fill
              sizes="56px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </motion.div>

        {/* Quote */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <blockquote
              className="font-serif italic text-[#1A1714] leading-tight tracking-tight mb-10"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
            >
              {t.quote}
            </blockquote>

            <footer className="flex flex-col items-center gap-1">
              <div className="w-6 h-px bg-[#8B7355]/35 mb-4" />
              <cite className="not-italic text-[#1A1714] font-sans text-sm font-medium">
                {t.name}
              </cite>
              <p className="text-[#9C958C] font-sans text-xs tracking-wide">
                {t.location} &nbsp;—&nbsp; {t.date}
              </p>
            </footer>
          </motion.div>
        </AnimatePresence>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              className="transition-all duration-300"
              style={{
                width: i === active ? "24px" : "6px",
                height: "6px",
                borderRadius: i === active ? "3px" : "50%",
                background:
                  i === active ? "#8B7355" : "rgba(139,115,85,0.25)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
