"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bgRef.current || !heroRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to(bgRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Staggered entrance
      const tl = gsap.timeline({ delay: 0.1 });
      tl.from(eyebrowRef.current, {
        y: 16,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .from(
          headlineRef.current,
          { y: 70, opacity: 0, duration: 1.4, ease: "power3.out" },
          "-=0.4"
        )
        .from(
          subtitleRef.current,
          { y: 28, opacity: 0, duration: 0.9, ease: "power2.out" },
          "-=0.8"
        )
        .from(
          ctaRef.current,
          { y: 20, opacity: 0, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        )
        .from(
          scrollIndicatorRef.current,
          { opacity: 0, duration: 0.8 },
          "-=0.2"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleReserve = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#reserve")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRooms = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#rooms")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[100dvh] overflow-hidden"
    >
      {/* ── Parallax background photo ── */}
      <div
        ref={bgRef}
        className="absolute left-0 right-0"
        style={{ top: "-20%", bottom: "-20%" }}
      >
        {/* Photo via CSS background — GSAP moves this div for parallax */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://picsum.photos/seed/haven-coastal-hotel-2024/1920/1200')",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        {/* Warm bronze tone overlay to unify any photo with the brand palette */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(139,115,85,0.18)" }}
        />
      </div>

      {/* ── Multi-stop cinematic overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(20,16,12,0.88) 0%, rgba(20,16,12,0.45) 40%, rgba(20,16,12,0.08) 75%, transparent 100%)",
        }}
      />
      {/* Left edge vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(20,16,12,0.25) 0%, transparent 45%)",
        }}
      />

      {/* ── Content — bottom left ── */}
      <div className="relative z-10 flex flex-col justify-end min-h-[100dvh] pb-16 md:pb-24 px-6 md:px-14 lg:px-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div ref={eyebrowRef} className="flex items-center gap-4 mb-7">
            <div className="w-8 h-px bg-[#D4C4A8]/60" />
            <p className="text-[#D4C4A8] text-[10px] font-sans tracking-[0.4em] uppercase">
              Serenity Bay &nbsp;·&nbsp; Est. 2019
            </p>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-serif text-white leading-[0.91] tracking-tight mb-7"
            style={{ fontSize: "clamp(3.2rem, 8.5vw, 8.5rem)" }}
          >
            Where stillness
            <br />
            meets <em className="text-[#D4C4A8]">luxury</em>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-white/60 text-base md:text-lg font-sans font-light max-w-xs md:max-w-sm mb-11 leading-relaxed"
          >
            24 rooms. One coastline. Designed for those who know the difference
            between a holiday and a restoration.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-5">
            <a
              href="#rooms"
              onClick={handleRooms}
              className="group inline-flex items-center gap-3 bg-white text-[#1A1714] text-sm font-sans font-medium tracking-wide px-7 py-3.5 transition-all duration-300 hover:bg-[#FDFBF7] active:scale-[0.98]"
              style={{ borderRadius: "2px" }}
            >
              Explore rooms
              <span className="w-4 h-px bg-[#8B7355] transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#reserve"
              onClick={handleReserve}
              className="text-white/70 text-sm font-sans tracking-wide hover:text-white transition-colors duration-200 border-b border-white/25 hover:border-white/60 pb-px"
            >
              Reserve a stay
            </a>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 animate-bounce-soft pointer-events-none"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/30 text-[9px] font-sans tracking-[0.3em] uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>

      {/* ── Availability strip ── */}
      <div className="absolute bottom-0 right-0 hidden lg:flex items-center gap-3 px-8 py-4">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
        <span className="text-white/40 text-[10px] font-sans tracking-widest uppercase">
          Rooms available this season
        </span>
      </div>
    </section>
  );
}
