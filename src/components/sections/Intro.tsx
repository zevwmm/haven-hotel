"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="py-28 md:py-40 lg:py-48">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* 40/60 asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-20 items-start">
          {/* Left 40%: Big italic pull-quote */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="w-8 h-px bg-[#8B7355] mb-8" />
              <blockquote
                className="font-serif italic leading-tight tracking-tight text-[#1A1714]"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
              >
                &ldquo;A sanctuary designed for those who seek beauty in
                simplicity&rdquo;
              </blockquote>
            </motion.div>
          </div>

          {/* Right 60%: Body text + photo */}
          <div className="md:col-span-3 md:pt-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
              className="space-y-6 text-[#9C958C] text-base font-sans font-light leading-relaxed max-w-lg"
            >
              <p>
                Haven was conceived as an antidote to excess. Every room, every
                material, every view was chosen not for spectacle but for the
                quiet pleasure it would bring — the warmth of afternoon light on
                linen, the scent of coastal air drifting through an open window.
              </p>
              <p>
                We believe that true luxury is not about what surrounds you, but
                about how it makes you feel. At Haven, you are invited to slow
                down, to notice, and to simply be present in one of the most
                beautiful corners of the coast.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              className="mt-10 flex items-center gap-4"
            >
              <a
                href="#rooms"
                className="text-[#8B7355] text-sm font-sans tracking-wide border-b border-[#8B7355]/40 hover:border-[#8B7355] transition-colors duration-200 pb-px"
              >
                Discover our rooms →
              </a>
            </motion.div>
          </div>
        </div>

        {/* Editorial photo strip */}
        <motion.div
          className="mt-20 md:mt-28 relative overflow-hidden"
          style={{ height: "340px", borderRadius: "4px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <Image
            src="https://picsum.photos/seed/haven-hotel-coastal-lifestyle-morning/1920/640"
            alt="Haven Hotel — morning on the coast"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 55%" }}
          />
          {/* Warm, light overlay to stay on-palette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "rgba(253,251,247,0.10)" }}
          />
          {/* Left caption */}
          <div className="absolute bottom-6 left-8">
            <p className="text-white/50 text-[10px] font-sans tracking-[0.35em] uppercase">
              Serenity Bay — year-round
            </p>
          </div>
          {/* Right caption */}
          <div className="absolute bottom-6 right-8 hidden md:block">
            <p className="text-white/50 text-[10px] font-sans tracking-[0.35em] uppercase">
              24 rooms &nbsp;·&nbsp; Est. 2019
            </p>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-4 grid grid-cols-3 gap-px bg-[#EDE8E2]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {[
            { value: "24", label: "Rooms & suites" },
            { value: "4.9", label: "Guest rating" },
            { value: "2019", label: "Founded" },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#FDFBF7] py-8 px-6 md:px-10">
              <div
                className="font-serif text-[#1A1714] mb-1"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {stat.value}
              </div>
              <div className="text-[#9C958C] text-xs font-sans tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
