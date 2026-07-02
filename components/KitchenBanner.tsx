"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function KitchenBanner() {
  const bannerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade/slide in text elements sequentially
      gsap.fromTo(
        ".banner-fade-in",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Subtle zoom effect on background image on scroll
      gsap.fromTo(
        bgRef.current,
        { scale: 1.06 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={bannerRef}
      className="relative min-h-[350px] sm:min-h-[420px] md:min-h-[500px] lg:min-h-[580px] overflow-hidden flex items-center bg-[#121c15]"
    >
      {/* Background image container with subtle parallax scale */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full">
        <Image
          src="/images/banner-beplua.png"
          alt="Không gian bếp lửa truyền thống làm giò chả Luyến Vũ"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        {/* Soft dark vignette gradient to ensure perfect readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-[#12351f]/15 mix-blend-color-burn" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-28">
        <div className="max-w-md md:max-w-xl text-left select-none">
          
          <h2
            className="banner-fade-in text-[#f5ead4] text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] font-bold leading-tight tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Giò Chả Luyến Vũ
          </h2>

          <p
            className="banner-fade-in text-[#c6a15b] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal mt-2 md:mt-3"
            style={{ fontFamily: "'Charm', cursive" }}
          >
            Hương vị truyền thống
          </p>

          {/* Decorative Divider Line */}
          <div className="banner-fade-in flex items-center gap-3 my-4 md:my-5">
            <span className="w-16 h-[1.5px] bg-[#c6a15b]" />
            <span className="text-[#c6a15b] text-xs">✦</span>
            <span className="w-4 h-[1.5px] bg-[#c6a15b]" />
          </div>

          {/* Sub-headings */}
          <div 
            className="banner-fade-in space-y-1 text-[#f5ead4]/90 text-sm sm:text-base md:text-[17px] font-light tracking-wider"
            style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
          >
            <p>Nguyên liệu tươi ngon</p>
            <p>Chế biến theo công thức gia truyền</p>
          </div>

        </div>
      </div>
    </section>
  );
}
