"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const rooms = [
  {
    name: "The Garden Suite",
    price: "From $280 / night",
    description: "Private terrace opening onto a secluded courtyard garden.",
    size: "68 m²",
    seed: "haven-garden-suite-lush",
  },
  {
    name: "The Terrace Room",
    price: "From $320 / night",
    description: "Wraparound terrace with uninterrupted ocean views at dawn.",
    size: "52 m²",
    seed: "haven-ocean-terrace-room",
  },
  {
    name: "The Penthouse",
    price: "From $680 / night",
    description: "The entire top floor — a private world above the coastline.",
    size: "140 m²",
    seed: "haven-penthouse-luxury-suite",
  },
  {
    name: "The Studio",
    price: "From $210 / night",
    description: "Thoughtfully considered for the solo traveller or couple.",
    size: "38 m²",
    seed: "haven-minimal-studio-hotel",
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="flex items-end justify-between mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <span className="text-[#8B7355] text-xs font-sans tracking-[0.35em] uppercase mb-4 block">
              Accommodation
            </span>
            <h2
              className="font-serif text-[#1A1714] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Our Rooms
            </h2>
          </div>
          <span className="text-[#9C958C] text-xs font-sans tracking-widest uppercase hidden md:block pb-1">
            4 categories
          </span>
        </motion.div>
      </div>

      {/* Desktop: horizontal scroll */}
      <div
        className="rooms-scroll hidden md:flex gap-5 overflow-x-auto pb-8 px-6 md:px-12 lg:px-16"
        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
      >
        {rooms.map((room, i) => (
          <motion.article
            key={room.name}
            className="group flex-shrink-0 w-[360px] lg:w-[400px]"
            style={{ scrollSnapAlign: "start" }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
          >
            {/* Card image */}
            <div
              className="relative w-full overflow-hidden mb-5"
              style={{ height: "480px", borderRadius: "4px" }}
            >
              {/* Photo with zoom on hover */}
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                <Image
                  src={`https://picsum.photos/seed/${room.seed}/800/1100`}
                  alt={room.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Cinematic gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(20,16,12,0.55) 0%, rgba(20,16,12,0.08) 45%, transparent 70%)",
                }}
              />

              {/* Size badge */}
              <div className="absolute top-5 right-5">
                <span
                  className="text-white/80 text-[10px] font-sans tracking-[0.3em] uppercase border border-white/20 px-3 py-1.5"
                  style={{
                    borderRadius: "2px",
                    background: "rgba(26,23,20,0.32)",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                  }}
                >
                  {room.size}
                </span>
              </div>

              {/* Hover CTA overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background:
                    "linear-gradient(to top, rgba(20,16,12,0.6) 0%, transparent 100%)",
                }}
              >
                <span className="text-white/70 text-[10px] font-sans tracking-[0.25em] uppercase">
                  Reserve this room →
                </span>
              </div>
            </div>

            {/* Card info */}
            <div className="px-1">
              <h3 className="font-serif text-[#1A1714] text-xl tracking-tight mb-2">
                {room.name}
              </h3>
              <p className="text-[#9C958C] text-sm font-sans leading-relaxed mb-4">
                {room.description}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-[#EDE8E2]">
                <span className="text-[#8B7355] text-sm font-sans font-medium">
                  {room.price}
                </span>
                <a
                  href="#reserve"
                  className="text-[#9C958C] text-xs font-sans tracking-wide hover:text-[#1A1714] transition-colors duration-200 pb-px border-b border-transparent hover:border-[#1A1714]/20"
                >
                  Reserve →
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Mobile: vertical stack */}
      <div className="flex flex-col gap-10 px-6 md:hidden mt-4">
        {rooms.map((room, i) => (
          <motion.article
            key={room.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
          >
            <div
              className="relative w-full mb-4 overflow-hidden"
              style={{ height: "320px", borderRadius: "4px" }}
            >
              <Image
                src={`https://picsum.photos/seed/${room.seed}/800/900`}
                alt={room.name}
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(20,16,12,0.45) 0%, transparent 60%)",
                }}
              />
              <div
                className="absolute top-4 right-4"
              >
                <span
                  className="text-white/80 text-[10px] font-sans tracking-widest uppercase border border-white/20 px-3 py-1"
                  style={{
                    background: "rgba(26,23,20,0.3)",
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)",
                  }}
                >
                  {room.size}
                </span>
              </div>
            </div>
            <h3 className="font-serif text-[#1A1714] text-xl mb-2 tracking-tight">
              {room.name}
            </h3>
            <p className="text-[#9C958C] text-sm font-sans leading-relaxed mb-3">
              {room.description}
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-[#EDE8E2]">
              <span className="text-[#8B7355] text-sm font-sans font-medium">
                {room.price}
              </span>
              <a
                href="#reserve"
                className="text-[#9C958C] text-xs font-sans hover:text-[#1A1714] transition-colors border-b border-transparent hover:border-[#1A1714]/20 pb-px"
              >
                Reserve →
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
