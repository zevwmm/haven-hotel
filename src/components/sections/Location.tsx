"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

export default function Location() {
  return (
    <section className="py-20 md:py-32 border-t border-[#EDE8E2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-[#8B7355] text-xs font-sans tracking-[0.35em] uppercase mb-4 block">
            Find Us
          </span>
          <h2
            className="font-serif text-[#1A1714] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Getting here
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <div className="flex gap-4">
              <MapPin
                className="w-4 h-4 text-[#8B7355] mt-0.5 shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <p className="text-[#1A1714] font-sans font-medium text-sm mb-1">
                  Address
                </p>
                <p className="text-[#9C958C] font-sans text-sm leading-relaxed">
                  42 Coastal Drive
                  <br />
                  Serenity Bay, CA 92101
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock
                className="w-4 h-4 text-[#8B7355] mt-0.5 shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <p className="text-[#1A1714] font-sans font-medium text-sm mb-1">
                  Check-in / Check-out
                </p>
                <p className="text-[#9C958C] font-sans text-sm leading-relaxed">
                  Check-in from 3:00 PM
                  <br />
                  Check-out by 12:00 PM
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone
                className="w-4 h-4 text-[#8B7355] mt-0.5 shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <p className="text-[#1A1714] font-sans font-medium text-sm mb-1">
                  Contact
                </p>
                <p className="text-[#9C958C] font-sans text-sm leading-relaxed">
                  +1 (619) 847–3920
                  <br />
                  hello@havenserenity.co
                </p>
              </div>
            </div>

            <div className="border-t border-[#EDE8E2] pt-8">
              <p className="text-[#9C958C] font-sans text-xs leading-relaxed mb-5">
                Complimentary airport transfers available. Contact us after
                booking to arrange.
              </p>
              <a
                href="https://wa.me/16198473920"
                className="text-[#8B7355] text-sm font-sans border-b border-[#8B7355]/30 hover:border-[#8B7355] transition-colors duration-200 pb-px"
              >
                WhatsApp concierge →
              </a>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          >
            <div
              className="relative w-full overflow-hidden"
              style={{
                aspectRatio: "4/3",
                borderRadius: "8px",
                background:
                  "linear-gradient(145deg, #EDE8E2 0%, #E0D8CC 50%, #D4C8B8 100%)",
              }}
            >
              {/* Grid pattern */}
              <svg
                className="absolute inset-0 w-full h-full opacity-20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="location-grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="#8B7355"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#location-grid)" />
              </svg>

              {/* Inner glow */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 45%, rgba(139,115,85,0.1) 0%, transparent 60%)",
                }}
              />

              {/* Pin */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-[#8B7355]" />
                  <div
                    className="absolute -inset-2.5 rounded-full border border-[#8B7355]/40 animate-ping"
                    style={{ animationDuration: "2.5s" }}
                  />
                  {/* Label */}
                  <div
                    className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white border border-[#EDE8E2] px-3 py-1.5 whitespace-nowrap"
                    style={{ borderRadius: "4px" }}
                  >
                    <p className="text-[#8B7355] text-xs font-sans font-medium">
                      HAVEN
                    </p>
                  </div>
                </div>
              </div>

              {/* Serenity Bay label */}
              <div className="absolute bottom-5 left-6">
                <p className="text-[#9C958C] text-xs font-sans tracking-widest uppercase">
                  Serenity Bay
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
