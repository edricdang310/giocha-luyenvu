"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-content > *",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="lien-he"
      ref={sectionRef}
      className="relative min-h-[600px] overflow-hidden flex items-center scroll-mt-20"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/products.png"
          alt="Thưởng thức giò chả truyền thống"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/70" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-8 right-8 opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="99" stroke="#c6a15b" strokeWidth="1" />
          <circle cx="100" cy="100" r="80" stroke="#c6a15b" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" stroke="#c6a15b" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="cta-content">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#c6a15b]/40 rounded-full px-4 py-2 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c6a15b] animate-pulse" />
              <span className="text-[#c6a15b] text-xs tracking-[0.2em] uppercase">
                Đặt Hàng Ngay Hôm Nay
              </span>
            </div>

            <h2
              className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Thưởng thức{" "}
              <em className="text-[#c6a15b] font-normal italic block">hương vị truyền thống</em>
              ngay hôm nay.
            </h2>

            <p
              className="text-white/60 text-lg mb-10 leading-relaxed max-w-md"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Đặt hàng qua hotline để được tư vấn và giao hàng tận nơi. Sản phẩm làm mới mỗi ngày, giao hàng sáng sớm.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                id="btn-dat-hang-cta"
                href="tel:0978780261"
                className="flex items-center justify-center gap-3 bg-[#c6a15b] text-[#12351f] px-8 py-4 rounded-full font-bold text-base hover:bg-[#d4b06a] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#c6a15b]/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Đặt hàng ngay
              </a>
              <a
                id="btn-hotline-cta"
                href="tel:0978780261"
                className="flex items-center justify-center gap-3 border-2 border-white/30 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-white/10 transition-all duration-300"
              >
                Hotline: 0978 780 261
              </a>
            </div>

            {/* Fast delivery info */}
            <div className="flex flex-wrap gap-6">
              {[
                { icon: "⚡", text: "Giao hàng trong ngày" },
                { icon: "🌿", text: "Làm mới mỗi ngày" },
                { icon: "🛡️", text: "Đảm bảo chất lượng" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-white/60 text-sm">
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
