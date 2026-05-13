"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const schedule = [
  { label: "Breakfast", time: "7:00 – 10:30" },
  { label: "Dinner", time: "19:00 – 22:00" },
  { label: "Private Dining", time: "By arrangement" },
];

export default function Dining() {
  return (
    <section
      id="dining"
      className="py-24 md:py-40"
      style={{ background: "#1A1714" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center">
          {/* Left 60%: Real photo */}
          <motion.div
            className="md:col-span-3 order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "4/3", borderRadius: "4px" }}
            >
              <Image
                src="https://picsum.photos/seed/haven-coastal-restaurant-evening/1200/900"
                alt="The Coastal Table — Haven's restaurant"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                style={{ objectFit: "cover", objectPosition: "center 30%" }}
              />
              {/* Warm bronze tone overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "rgba(139,115,85,0.07)" }}
              />
              {/* Bottom caption */}
              <div
                className="absolute bottom-0 left-0 right-0 px-7 py-5"
                style={{
                  background:
                    "linear-gradient(to top, rgba(26,23,20,0.88) 0%, transparent 100%)",
                }}
              >
                <p className="text-[#9C958C] text-[10px] font-sans tracking-[0.35em] uppercase">
                  The Coastal Table — open nightly
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right 40%: Text */}
          <motion.div
            className="md:col-span-2 order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          >
            <span className="text-[#8B7355] text-xs font-sans tracking-[0.35em] uppercase mb-6 block">
              Dining
            </span>

            <h2
              className="font-serif italic text-white leading-tight tracking-tight mb-8"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}
            >
              Farm to Table
            </h2>

            <div className="space-y-5 text-[#9C958C] text-sm font-sans font-light leading-relaxed mb-10">
              <p>
                Our kitchen is guided by the season and the sea. Every morning,
                produce arrives from farms within sixty kilometres. Our fish
                comes from fishermen we know by name.
              </p>
              <p>
                The result is a menu that cannot be the same twice — only
                better, depending on what the coast offers that day.
              </p>
            </div>

            {/* Schedule */}
            <div
              className="space-y-3 mb-10 pt-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              {schedule.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between"
                >
                  <span className="text-[#D4C4A8]/60 text-xs font-sans tracking-wide">
                    {item.label}
                  </span>
                  <span className="text-[#9C958C] text-xs font-sans">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="relative inline-block text-sm font-sans tracking-wide text-[#D4C4A8] group"
            >
              View Menu →
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#D4C4A8] transition-all duration-300 group-hover:w-full" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
