"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from "@/data/products";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".product-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".product-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      const cards = sectionRef.current?.querySelectorAll(".product-card");
      cards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".products-grid",
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="san-pham"
      ref={sectionRef}
      className="relative bg-[#f5ead4] py-24 scroll-mt-20"
    >
      {/* Cream paper texture suggestion */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c6a15b' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="product-header text-center mb-16">
          <p className="text-[#c6a15b] text-xs tracking-[0.3em] uppercase mb-4">
            Sản Phẩm
          </p>
          <h2
            className="text-[#12351f] text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Sản Phẩm{" "}
            <em className="text-[#c6a15b] font-normal italic">Nổi Bật</em>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-16 h-px bg-[#c6a15b]/40" />
            <svg className="w-5 h-5 text-[#c6a15b]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L9.09 8.26L2 9.27L7 14.14L5.82 21.02L12 17.77L18.18 21.02L17 14.14L22 9.27L14.91 8.26L12 2Z" />
            </svg>
            <div className="w-16 h-px bg-[#c6a15b]/40" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="products-grid grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              id={`product-${product.id}`}
              className="product-card group relative bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[#c6a15b]/10 flex flex-col h-full"
            >
              {/* Kraft paper top bar */}
              <div className="h-1 bg-gradient-to-r from-[#c6a15b] via-[#d4b06a] to-[#c6a15b]" />

              {/* Badge */}
              {product.badge && (
                <div className="absolute top-2 right-2 md:top-4 md:right-4 z-10 bg-[#12351f] text-[#c6a15b] text-[9px] md:text-xs px-2 py-0.5 md:px-3 md:py-1 rounded-full font-medium tracking-wide">
                  {product.badge}
                </div>
              )}

              {/* Image */}
              <Link
                href={`/products/${product.id}`}
                className="relative overflow-hidden h-32 sm:h-40 md:h-52 block cursor-pointer"
              >
                <Image
                  src={product.image}
                  alt={`${product.name} - Giò Chả Luyến Vũ`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                />
              </Link>

              {/* Content */}
              <div className="p-3 md:p-6 flex-1 flex flex-col">
                {/* Tags */}
                <div className="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-3">
                  {product.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[8px] md:text-[10px] text-[#6b4423] border border-[#c6a15b]/30 px-1.5 py-0.5 md:px-2 md:py-0.5 rounded-full tracking-wide whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3
                  className="text-[#12351f] text-sm md:text-xl font-bold mb-1 md:mb-2"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {product.name}
                </h3>

                <p className="text-[#2d261b]/60 text-[10px] md:text-[13px] leading-relaxed mb-3 md:mb-5 line-clamp-3 md:line-clamp-none">
                  {product.desc}
                </p>

                {/* Divider */}
                <div className="mt-auto border-t border-[#c6a15b]/20 pt-2 md:pt-4 flex items-center justify-between gap-1">
                  <span className="text-[#c6a15b] font-semibold text-xs md:text-sm">
                    {product.price}
                  </span>
                  <button
                    id={`order-${product.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      window.dispatchEvent(
                        new CustomEvent("open-order-modal", {
                          detail: { productName: product.name },
                        })
                      );
                    }}
                    className="bg-[#12351f] text-white text-[10px] md:text-xs px-2.5 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-[#1f5b32] transition-colors duration-300 tracking-wide cursor-pointer flex-shrink-0"
                  >
                    Đặt hàng
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-14">
          <button
            id="btn-xem-tat-ca"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(
                new CustomEvent("open-order-modal", {
                  detail: { productName: "Các sản phẩm Giò Chả Luyến Vũ" },
                })
              );
            }}
            className="inline-flex items-center gap-2 border-2 border-[#12351f] text-[#12351f] px-8 py-4 rounded-full font-medium text-sm tracking-wide hover:bg-[#12351f] hover:text-white transition-all duration-300 cursor-pointer"
          >
            Xem tất cả sản phẩm
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
