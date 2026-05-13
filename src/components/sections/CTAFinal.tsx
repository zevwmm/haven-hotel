"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTAFinal() {
  return (
    <section
      id="reserve"
      className="py-28 md:py-44 relative overflow-hidden"
    >
      {/* Background photo at very low opacity */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://picsum.photos/seed/haven-coastal-bay-aerial-view/1920/1080"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 60%" }}
          aria-hidden="true"
        />
        {/* Ivory wash — keeps light theme */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(253,251,247,0.91)" }}
        />
        {/* Bronze radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(139,115,85,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Top ornament */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-12 bg-[#8B7355]/20" />
            <div
              className="w-1.5 h-1.5 rounded-full bg-[#8B7355]/35"
            />
            <div className="h-px w-12 bg-[#8B7355]/20" />
          </div>

          <span className="text-[#8B7355] text-xs font-sans tracking-[0.35em] uppercase mb-6 block">
            Reserve your stay
          </span>

          <h2
            className="font-serif text-[#1A1714] leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2.8rem, 6vw, 6rem)" }}
          >
            Your escape
            <br />
            <em className="text-[#8B7355]">awaits</em>
          </h2>

          <p className="text-[#9C958C] font-sans text-base font-light leading-relaxed max-w-sm mx-auto mb-12">
            Availability is limited. Each season at Haven is a distinct and
            unrepeatable experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="inline-block bg-[#8B7355] text-white text-sm font-sans font-medium tracking-widest uppercase px-10 py-4 rounded-full transition-all duration-300 hover:bg-[#7A6348] hover:scale-[1.03] active:scale-[0.98]"
            >
              Reserve Now
            </a>
            <a
              href="#"
              className="text-[#9C958C] text-sm font-sans tracking-wide hover:text-[#1A1714] transition-colors duration-200 border-b border-[#EDE8E2] hover:border-[#9C958C]/50 pb-px"
            >
              Check availability
            </a>
          </div>

          {/* Bottom details */}
          <div className="flex items-center justify-center gap-6 mt-14">
            <div className="h-px w-10 bg-[#8B7355]/18" />
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/70" />
              <span className="text-[#9C958C] text-[10px] font-sans tracking-widest uppercase">
                Rooms available
              </span>
            </div>
            <div className="h-px w-10 bg-[#8B7355]/18" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
