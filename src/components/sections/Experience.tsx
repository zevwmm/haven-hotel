"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    key: "spa",
    name: "Spa & Wellness",
    description:
      "Holistic treatments rooted in coastal botanicals. A full day of restoration awaits.",
    seed: "haven-spa-massage-stones-candles",
  },
  {
    key: "dining",
    name: "Private Dining",
    description: "Chef's table experience for up to eight guests.",
    seed: "haven-fine-dining-candlelight-table",
  },
  {
    key: "rooftop",
    name: "Rooftop Lounge",
    description: "Sunset aperitivo above the bay. Open to guests nightly.",
    seed: "haven-rooftop-cocktails-sunset-view",
  },
  {
    key: "cultural",
    name: "Cultural Tours",
    description:
      "Private guides to the region's finest art, architecture, and hidden markets. Each itinerary is crafted specifically for your stay.",
    seed: "haven-museum-art-architecture-tour",
  },
  {
    key: "fitness",
    name: "Fitness Center",
    description: "Dawn-to-dusk access. Open-air terrace overlooking the water.",
    seed: "haven-gym-fitness-oceanview-modern",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

export default function Experience() {
  const byKey = (k: string) => experiences.find((e) => e.key === k)!;

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="mb-14 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-[#8B7355] text-xs font-sans tracking-[0.35em] uppercase mb-4 block">
            The Experience
          </span>
          <h2
            className="font-serif text-[#1A1714] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Curated for the senses
          </h2>
        </motion.div>

        {/* Desktop Bento Grid */}
        <motion.div
          className="hidden md:grid gap-3"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateAreas: `
              "spa    dining   rooftop"
              "spa    cultural cultural"
              "fitness cultural cultural"
            `,
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ExperienceCard
            item={byKey("spa")}
            style={{ gridArea: "spa", minHeight: "340px" }}
            large
          />
          <ExperienceCard
            item={byKey("dining")}
            style={{ gridArea: "dining" }}
          />
          <ExperienceCard
            item={byKey("rooftop")}
            style={{ gridArea: "rooftop" }}
          />
          <ExperienceCard
            item={byKey("cultural")}
            style={{ gridArea: "cultural" }}
            wide
          />
          <ExperienceCard
            item={byKey("fitness")}
            style={{ gridArea: "fitness" }}
          />
        </motion.div>

        {/* Mobile: single column stack */}
        <div className="flex flex-col gap-3 md:hidden">
          {experiences.map((item) => (
            <ExperienceCard key={item.key} item={item} mobile />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ExperienceCardProps {
  item: (typeof experiences)[0];
  style?: React.CSSProperties;
  large?: boolean;
  wide?: boolean;
  mobile?: boolean;
}

function ExperienceCard({ item, style, large, wide, mobile }: ExperienceCardProps) {
  const minHeight = mobile ? "220px" : large ? "100%" : wide ? "220px" : "170px";

  return (
    <motion.article
      variants={mobile ? undefined : cardVariants}
      initial={mobile ? { opacity: 0, y: 20 } : undefined}
      whileInView={mobile ? { opacity: 1, y: 0 } : undefined}
      viewport={mobile ? { once: true } : undefined}
      transition={mobile ? { duration: 0.8, ease: "easeOut" } : undefined}
      className="group relative overflow-hidden cursor-default"
      style={{
        ...style,
        minHeight,
        borderRadius: "4px",
      }}
    >
      {/* Photo — zooms in slightly on hover */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.05]">
        <Image
          src={`https://picsum.photos/seed/${item.seed}/900/700`}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Cinematic gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(20,16,12,0.84) 0%, rgba(20,16,12,0.28) 55%, rgba(20,16,12,0.10) 100%)",
        }}
      />

      {/* Content — anchored to bottom */}
      <div
        className="relative z-10 p-6 md:p-7 flex flex-col"
        style={{ minHeight }}
      >
        <div className="flex-1" />

        <div>
          <h3
            className={`font-serif text-white tracking-tight mb-2 ${
              wide ? "text-xl md:text-2xl" : "text-lg"
            }`}
          >
            {item.name}
          </h3>
          {(large || wide || mobile) && (
            <p className="text-white/55 text-sm font-sans leading-relaxed max-w-xs">
              {item.description}
            </p>
          )}
          <a
            href="#"
            className="inline-block mt-3 text-white/50 text-[11px] font-sans tracking-wide hover:text-white/90 transition-all duration-300 border-b border-white/20 hover:border-white/50 pb-px opacity-0 group-hover:opacity-100"
          >
            Learn more →
          </a>
        </div>
      </div>
    </motion.article>
  );
}
