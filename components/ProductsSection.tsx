"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const products = [
  {
    id: "gio-lua",
    name: "Giò Lụa",
    desc: "Giò lụa truyền thống thơm mịn, dai giòn tự nhiên, vị ngọt đậm đà từ thịt heo nóng trong ngày.",
    price: "Liên hệ",
    image: "/products/gio-lua.png",
    badge: "Bán chạy",
    tags: ["Tươi nóng", "Không hàn the"],
  },
  {
    id: "gio-thuc",
    name: "Giò Thúc",
    desc: "Giò thúc giòn sần sật, béo ngậy vừa vặn, thơm nồng hạt tiêu đen và nước mắm cốt truyền thống.",
    price: "Liên hệ",
    image: "/products/gio-thuc.png",
    badge: null,
    tags: ["Giòn sần sật", "Gia truyền"],
  },
  {
    id: "gio-long",
    name: "Giò Lòng",
    desc: "Đặc sản độc đáo kết hợp giữa lòng non dai giòn chọn lọc và thịt giò thơm ngon quết mịn tay.",
    price: "Liên hệ",
    image: "/products/gio-long.png",
    badge: "Độc đáo",
    tags: ["Món mới", "Đặc sản"],
  },
  {
    id: "cha-mo",
    name: "Chả Mỡ",
    desc: "Chả mỡ nướng vàng ươm, vị bùi béo ngậy tự nhiên, ăn kèm xôi nóng hoặc cơm trắng đều tuyệt đỉnh.",
    price: "Liên hệ",
    image: "/products/cha-mo.png",
    badge: "Yêu thích",
    tags: ["Bùi ngậy", "Vỏ giòn"],
  },
  {
    id: "moc-trang",
    name: "Mọc Trắng",
    desc: "Mọc sống quết nhuyễn mịn màng, viên canh dẻo dai, giữ nguyên vị ngọt thanh khiết của thịt heo sạch.",
    price: "Liên hệ",
    image: "/products/moc-trang.png",
    badge: null,
    tags: ["Thanh ngọt", "Tiện lợi"],
  },
  {
    id: "moc-nam",
    name: "Mọc Nấm",
    desc: "Mọc heo kết hợp nấm hương khô thơm lừng, giòn sần sật, gia tăng hương vị tự nhiên cho bát canh lẩu.",
    price: "Liên hệ",
    image: "/products/moc-nam.png",
    badge: null,
    tags: ["Nấm hương", "Thơm bùi"],
  },
  {
    id: "nem-chua-ran",
    name: "Nem Chua Rán",
    desc: "Nem rán giòn ruộm bên ngoài, dẻo dai ngọt thịt bên trong, là món ăn vặt hấp dẫn của mọi lứa tuổi.",
    price: "Liên hệ",
    image: "/products/nem-chua.png",
    badge: "Ăn vặt",
    tags: ["Giòn ngậy", "Được yêu thích"],
  },
  {
    id: "ruoc-heo",
    name: "Ruốc Heo",
    desc: "Ruốc bông tơi xốp, thơm lừng vị mắm cốt, ngọt thịt thăn, cực kỳ tiện lợi cho bữa sáng gia đình.",
    price: "Liên hệ",
    image: "/products/ruoc-heo.png",
    badge: null,
    tags: ["Thịt thăn sạch", "Tiện lợi"],
  },
  {
    id: "thit-heo-gac-bep",
    name: "Thịt Heo Gác Bếp",
    desc: "Thịt heo thăn xé sợi đượm mùi khói bếp Tây Bắc, kết hợp hạt dổi, mắc khén cay thơm nồng nàn.",
    price: "Liên hệ",
    image: "/products/thit-lon-say.png",
    badge: "Đặc sản",
    tags: ["Mắc khén", "Lai rai"],
  },
];

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
        <div className="products-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              id={`product-${product.id}`}
              className="product-card group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[#c6a15b]/10 flex flex-col h-full"
            >
              {/* Kraft paper top bar */}
              <div className="h-1 bg-gradient-to-r from-[#c6a15b] via-[#d4b06a] to-[#c6a15b]" />

              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 right-4 z-10 bg-[#12351f] text-[#c6a15b] text-xs px-3 py-1 rounded-full font-medium tracking-wide">
                  {product.badge}
                </div>
              )}

              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <Image
                  src={product.image}
                  alt={`${product.name} - Giò Chả Luyến Vũ`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Tags */}
                <div className="flex gap-2 mb-3">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-[#6b4423] border border-[#c6a15b]/30 px-2 py-0.5 rounded-full tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3
                  className="text-[#12351f] text-xl font-bold mb-2"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {product.name}
                </h3>

                <p className="text-[#2d261b]/60 text-sm leading-relaxed mb-5">
                  {product.desc}
                </p>

                {/* Divider */}
                <div className="mt-auto border-t border-[#c6a15b]/20 pt-4 flex items-center justify-between">
                  <span className="text-[#c6a15b] font-semibold text-sm">
                    {product.price}
                  </span>
                  <a
                    href="tel:0978780261"
                    id={`order-${product.id}`}
                    className="bg-[#12351f] text-white text-xs px-4 py-2 rounded-full hover:bg-[#1f5b32] transition-colors duration-300 tracking-wide"
                  >
                    Đặt hàng
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-14">
          <a
            id="btn-xem-tat-ca"
            href="tel:0978780261"
            className="inline-flex items-center gap-2 border-2 border-[#12351f] text-[#12351f] px-8 py-4 rounded-full font-medium text-sm tracking-wide hover:bg-[#12351f] hover:text-white transition-all duration-300"
          >
            Xem tất cả sản phẩm
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
