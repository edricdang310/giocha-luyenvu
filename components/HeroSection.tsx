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

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const textColRef = useRef<HTMLDivElement>(null);
  const imageColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(".hero-anim-el", { opacity: 0, y: 35 });
      gsap.set(imageColRef.current, { opacity: 0, scale: 1.05 });

      // Entrance timeline
      const tl = gsap.timeline({ delay: 0.2 });

      tl.to(imageColRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.4,
        ease: "power3.out",
      })
        .to(
          ".hero-anim-el",
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=1.0"
        );

      // Parallax scroll effect on background image
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
      className="relative overflow-hidden min-h-screen"
      style={{ backgroundColor: "#000000" }}
    >
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
            className="object-cover object-[55%_center] lg:object-[70%_center]"
            sizes="100vw"
          />
        </div>

        {/* Global Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/15 z-10 pointer-events-none" />

        {/* Left gradient blend from dark bg for desktop */}
        <div
          className="absolute inset-0 pointer-events-none hidden lg:block z-10"
          style={{
            background:
              "linear-gradient(to right, #000000 18%, rgba(0,0,0,0.5) 38%, rgba(0,0,0,0.08) 65%, transparent 100%)",
          }}
        />

        {/* Top-to-bottom gradient for mobile */}
        <div
          className="absolute inset-0 pointer-events-none lg:hidden z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.6) 100%)",
          }}
        />

        {/* Steam effects relative to the steaming pot */}
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

      {/* ── CONTENT WRAPPER ── */}
      <div className="relative z-20 flex flex-col justify-between min-h-screen pt-24 pb-6 px-6 md:px-14 lg:px-16 xl:px-24">
        {/* Top Spacer to push content down nicely */}
        <div className="h-4 lg:h-12"></div>

        {/* Main Content Column */}
        <div
          ref={textColRef}
          className="w-full lg:w-[55%] xl:w-[48%] py-4 flex flex-col justify-center select-none"
        >
          <div className="max-w-xl">
            {/* Title - Serif style Playfair Display */}
            <h1 className="mb-4 font-[family-name:var(--font-family-display)] font-semibold text-[42px] sm:text-[54px] md:text-[66px] lg:text-[74px] leading-[1.08] text-left tracking-tight">
              <span className="block text-white hero-anim-el">Giò chả</span>
              <span className="block text-[#c6a15b] hero-anim-el">truyền thống</span>
              <span className="block text-white hero-anim-el">làm mới mỗi ngày</span>
            </h1>

            {/* Elegant Divider Ornament */}
            <div className="hero-anim-el flex items-center gap-3 my-6 text-[#c6a15b] opacity-90 justify-start">
              <span className="h-[1px] w-12 bg-[#c6a15b]/45"></span>
              <svg
                className="w-10 h-3 text-[#c6a15b]"
                viewBox="0 0 40 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Center diamond */}
                <path d="M20 2 L24 6 L20 10 L16 6 Z" fill="currentColor" />
                {/* Left leaf swirl */}
                <path
                  d="M12 6 C12 6 14 4.5 16 6 C14 7.5 12 6 12 6 Z"
                  fill="currentColor"
                />
                <circle cx="8" cy="6" r="1.5" fill="currentColor" />
                {/* Right leaf swirl */}
                <path
                  d="M28 6 C28 6 26 4.5 24 6 C26 7.5 28 6 28 6 Z"
                  fill="currentColor"
                />
                <circle cx="32" cy="6" r="1.5" fill="currentColor" />
              </svg>
              <span className="h-[1px] w-12 bg-[#c6a15b]/45"></span>
            </div>

            {/* Subtitle */}
            <p className="hero-anim-el text-white/80 leading-relaxed mb-9 text-left text-sm sm:text-base md:text-lg font-light tracking-wide font-[family-name:var(--font-family-body)]">
              Hơn 20 năm giữ nghề truyền thống.
              <br />
              Không hàn the, không chất bảo quản.
            </p>

            {/* CTA Buttons */}
            <div className="hero-anim-el flex flex-col sm:flex-row gap-4 w-full max-w-[340px] sm:max-w-none">
              {/* Button 1: Khám Phá Ngay */}
              <button
                onClick={() => scrollToSection("#cau-chuyen")}
                className="relative flex items-center justify-center w-full sm:w-[220px] px-6 py-4 bg-[#c6a15b] hover:bg-[#b08e4f] text-black font-bold rounded-xl text-sm transition-all duration-300 shadow-lg shadow-[#c6a15b]/10 uppercase tracking-widest cursor-pointer"
              >
                {/* Leaf icon */}
                <svg
                  className="w-5 h-5 absolute left-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 1.5 6.5-2.2 11.2A7 7 0 0111 20z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 2c-2.26 4.33-5.27 7.14-8 10"
                  />
                </svg>
                <span>Khám Phá Ngay</span>
                {/* Chevron right */}
                <svg
                  className="w-4 h-4 absolute right-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Button 2: Hotline */}
              <a
                href="tel:0978780261"
                className="relative flex items-center justify-center w-full sm:w-[220px] px-6 py-4 border border-[#c6a15b] hover:bg-[#c6a15b]/5 text-[#c6a15b] font-bold rounded-xl text-sm transition-all duration-300 uppercase tracking-widest"
              >
                {/* Phone icon */}
                <svg
                  className="w-5 h-5 absolute left-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.14-4.118-6.942-6.942l1.293-.97.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <span>0978 780 261</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Area (Commitments & Scroll Down Arrow) */}
        <div className="hero-anim-el w-full flex flex-col items-center select-none">
          {/* Commitments bar */}
          <div className="w-full max-w-2xl mx-auto flex items-stretch justify-center py-6 border-t border-b border-white/10 bg-black/10 backdrop-blur-[1px] rounded-xl my-3">
            {/* Item 1 */}
            <div className="flex-1 flex flex-col items-center text-center px-1">
              <svg
                className="w-8 h-8 text-[#c6a15b] mb-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3c-4.5 0-7 2.5-7 7.5s2 6.5 5 7.5c2 .7 3-.7 4-1.7s2.5-.7 3.5 0c1.5 1 2.5 0 3-1.5s.5-3.5.5-4.3c0-4-3.5-7.5-9-7.5z" />
                <path d="M10 7.5c1 1.5 2 2 3.5 1.5" />
                <path d="M7.5 11c1.5 .5 2.5 2.5 4.5 1.5" />
                <circle cx="15.5" cy="7.5" r="1.2" fill="currentColor" />
              </svg>
              <p className="text-white text-[11px] sm:text-xs md:text-sm font-medium leading-tight">
                Thịt tươi
              </p>
              <p className="text-white/50 text-[10px] sm:text-[11px] md:text-xs mt-0.5 leading-tight">
                trong ngày
              </p>
            </div>

            {/* Separator */}
            <div className="w-[1px] bg-white/15 my-2"></div>

            {/* Item 2 */}
            <div className="flex-1 flex flex-col items-center text-center px-1">
              <svg
                className="w-8 h-8 text-[#c6a15b] mb-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="5" y="4" width="14" height="16" rx="2" />
                <line x1="5" y1="8" x2="19" y2="8" />
                <circle cx="12" cy="14" r="3" />
                <circle cx="12" cy="14" r="0.8" fill="currentColor" />
                <path d="M12 11v1.5" />
              </svg>
              <p className="text-white text-[11px] sm:text-xs md:text-sm font-medium leading-tight">
                Hút chân không
              </p>
              <p className="text-white/50 text-[10px] sm:text-[11px] md:text-xs mt-0.5 leading-tight">
                giữ trọn vị ngon
              </p>
            </div>

            {/* Separator */}
            <div className="w-[1px] bg-white/15 my-2"></div>

            {/* Item 3 */}
            <div className="flex-1 flex flex-col items-center text-center px-1">
              <svg
                className="w-8 h-8 text-[#c6a15b] mb-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="1" y="3" width="15" height="13" rx="2" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
                <line x1="1" y1="9" x2="3" y2="9" />
                <line x1="0" y1="13" x2="2" y2="13" />
              </svg>
              <p className="text-white text-[11px] sm:text-xs md:text-sm font-medium leading-tight">
                Giao hàng
              </p>
              <p className="text-white/50 text-[10px] sm:text-[11px] md:text-xs mt-0.5 leading-tight">
                trong ngày
              </p>
            </div>
          </div>

          {/* Scroll down arrow indicator */}
          <button
            onClick={() => scrollToSection("#cau-chuyen")}
            className="mt-1 text-[#c6a15b]/80 hover:text-[#c6a15b] transition-colors duration-300 animate-bounce focus:outline-none cursor-pointer"
            aria-label="Cuộn xuống dưới"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Soft bottom fade to blend with commitments bar top edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, #000000 100%)",
        }}
      />
    </section>
  );
}
