"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Steam particle
function SteamParticle({
  style,
}: {
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="absolute w-10 h-28 rounded-full steam-particle pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(255,255,255,0.18) 0%, transparent 70%)",
        filter: "blur(10px)",
        ...style,
      }}
    />
  );
}

// Vietnamese red seal stamp SVG component
function RedSeal() {
  return (
    <div className="relative w-16 h-16 select-none" aria-label="Con dấu Giò Chả Luyến Vũ">
      <svg viewBox="0 0 80 80" className="w-full h-full">
        {/* Outer red circle */}
        <circle cx="40" cy="40" r="38" fill="#c0392b" />
        <circle cx="40" cy="40" r="33" fill="none" stroke="#f5ead4" strokeWidth="1.5" />
        {/* Inner text lines */}
        <text
          x="40"
          y="30"
          textAnchor="middle"
          fill="#f5ead4"
          fontSize="10"
          fontFamily="serif"
          fontWeight="bold"
          letterSpacing="2"
        >
          GIÒ
        </text>
        <text
          x="40"
          y="44"
          textAnchor="middle"
          fill="#f5ead4"
          fontSize="10"
          fontFamily="serif"
          fontWeight="bold"
          letterSpacing="2"
        >
          TẠO
        </text>
        <text
          x="40"
          y="58"
          textAnchor="middle"
          fill="#f5ead4"
          fontSize="10"
          fontFamily="serif"
          fontWeight="bold"
          letterSpacing="2"
        >
          VỊ
        </text>
      </svg>
    </div>
  );
}

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(
        [
          titleLine1Ref.current,
          titleLine2Ref.current,
          subtitleRef.current,
          btnRef.current,
        ],
        { opacity: 0, y: 50 }
      );
      gsap.set(imageColRef.current, { opacity: 0, scale: 1.05 });

      // Entrance timeline
      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(imageColRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.6,
        ease: "power3.out",
      })
        .to(
          titleLine1Ref.current,
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=1.1"
        )
        .to(
          titleLine2Ref.current,
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
          "-=0.7"
        )
        .to(
          subtitleRef.current,
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .to(
          btnRef.current,
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.4"
        );

      // Subtle parallax on image background
      gsap.to(".hero-image-inner", {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="trang-chu"
      ref={heroRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* ── HERO MAIN AREA ── */}
      <div className="relative flex min-h-[calc(100vh-0px)] overflow-hidden">
        {/* ── BACKGROUND IMAGE (FULL WIDTH) ── */}
        <div
          ref={imageColRef}
          className="absolute inset-0 w-full h-full z-0 overflow-hidden"
        >
          {/* Main image */}
          <div className="hero-image-inner absolute inset-0 scale-105">
            <Image
              src="/images/banner1.png"
              alt="Bàn tay gói giò chả lá chuối - Giò Chả Luyến Vũ"
              fill
              priority
              className="object-cover object-center lg:object-[70%_center]"
              sizes="100vw"
            />
          </div>

          {/* Left gradient blend from dark bg for desktop - lightened black gradient */}
          <div
            className="absolute inset-0 pointer-events-none hidden lg:block z-10"
            style={{
              background:
                "linear-gradient(to right, #000000 0%, rgba(0,0,0,0.88) 20%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)",
            }}
          />

          {/* Top-to-bottom gradient for mobile - lightened black gradient */}
          <div
            className="absolute inset-0 pointer-events-none lg:hidden z-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.1) 100%)",
            }}
          />

          {/* Steam effects relative to the steaming pot in the background */}
          <div className="absolute top-[32%] left-[45%] lg:left-[36%] z-20">
            <SteamParticle style={{ animationDelay: "0s" }} />
            <SteamParticle
              style={{ animationDelay: "1.2s", marginLeft: "18px" }}
            />
            <SteamParticle
              style={{ animationDelay: "2.2s", marginLeft: "-12px" }}
            />
          </div>
        </div>

        {/* ── LEFT: Text column ── */}
        <div
          ref={textColRef}
          className="relative z-10 flex flex-col justify-center px-8 md:px-14 lg:px-16 xl:px-24 pt-28 pb-10 lg:pt-0 lg:pb-0 lg:w-[50%] xl:w-[46%]"
          style={{ background: "transparent" }}
        >
          <div className="relative z-20 max-w-xl">
            {/* H1 Title — calligraphy style */}
            <h1 className="mb-5 leading-none" aria-label="Giò Chả Luyến Vũ">
              {/* Line 1: Giò Chả */}
              <span
                ref={titleLine1Ref}
                className="block text-[#c6a15b]"
                style={{
                  fontFamily: "'Charm', 'Great Vibes', 'Alex Brush', cursive",
                  fontSize: "clamp(4.2rem, 9.5vw, 7rem)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  textShadow: "0 2px 20px rgba(198,161,91,0.25)",
                  paddingBottom: "0.15em",
                }}
              >
                Giò Chả
              </span>

              {/* Line 2: Luyến Vũ + seal */}
              <div
                ref={titleLine2Ref}
                className="flex items-center gap-4 mt-1"
              >
                <span
                  className="text-white"
                  style={{
                    fontFamily:
                      "'Charm', 'Great Vibes', 'Alex Brush', cursive",
                    fontSize: "clamp(4.2rem, 9.5vw, 7rem)",
                    fontWeight: 700,
                    lineHeight: 1.1,
                    textShadow: "0 2px 20px rgba(255,255,255,0.1)",
                    paddingBottom: "0.15em",
                  }}
                >
                  Luyến Vũ
                </span>

                {/* Red seal stamp */}
                <div className="flex-shrink-0 -mt-2">
                  {/* <RedSeal /> */}
                </div>
              </div>
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-white/75 leading-relaxed mb-9"
              style={{
                fontFamily: "'Be Vietnam Pro', sans-serif",
                fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)",
              }}
            >
              Hương vị truyền thống,
              <br />
              được gìn giữ hơn 20 năm
            </p>

            {/* CTA Button */}
            <button
              ref={btnRef}
              id="btn-kham-pha"
              onClick={() => scrollToSection("#cau-chuyen")}
              className="group flex items-center gap-3 border border-white/40 text-white px-7 py-3.5 text-sm font-semibold tracking-[0.15em] uppercase hover:border-[#c6a15b] hover:text-[#c6a15b] transition-all duration-400"
              style={{ letterSpacing: "0.12em" }}
            >
              Khám Phá Ngay
              {/* Arrow in circle */}
              <span className="w-7 h-7 rounded-full border border-white/40 group-hover:border-[#c6a15b] flex items-center justify-center transition-all duration-300 group-hover:bg-[#c6a15b]/10">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Soft bottom fade to blend with commitments bar top edge - black gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, #000000 100%)",
          }}
        />
      </div>


    </section>
  );
}
