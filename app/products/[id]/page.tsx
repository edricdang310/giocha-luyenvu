"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProductDetailPage({
  params,
}: {
  params: React.Usable<{ id: string }>;
}) {
  const resolvedParams = React.use(params);
  const id = resolvedParams.id;
  const product = products.find((p) => p.id === id);

  const [isZoomed, setIsZoomed] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsZoomed(false);
      }
    };
    if (isZoomed) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isZoomed]);

  if (!product) {
    return (
      <div className="bg-[#f5ead4] min-h-screen flex flex-col justify-between">
        <Navbar hideNavLinks={true} />
        <main className="max-w-7xl mx-auto px-6 py-32 text-center flex-1 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-[#12351f] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>
            Không tìm thấy sản phẩm
          </h1>
          <p className="text-[#2d261b]/70 mb-8">Sản phẩm quý khách yêu cầu không tồn tại hoặc đã được thay đổi.</p>
          <Link
            href="/#san-pham"
            className="bg-[#12351f] text-white px-6 py-3 rounded-full hover:bg-[#1f5b32] transition-colors"
          >
            Quay lại trang chủ
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Get other products for related grid (excluding current one, limit to 3)
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  const handleOrder = () => {
    window.dispatchEvent(
      new CustomEvent("open-order-modal", {
        detail: { productName: product.name },
      })
    );
  };

  return (
    <div className="bg-[#f5ead4] min-h-screen flex flex-col justify-between">
      <Navbar hideNavLinks={true} />

      <main className="flex-grow pt-20 pb-12 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumbs / Back button */}
          <div className="mb-6">
            <Link
              href="/#san-pham"
              className="inline-flex items-center gap-2 text-sm text-[#12351f]/70 hover:text-[#12351f] font-medium transition-colors group"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
              Quay lại danh mục sản phẩm
            </Link>
          </div>

          {/* Product main detail card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#c6a15b]/10 p-6 md:p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
              
              {/* Left Column: Product Image */}
              <div 
                onClick={() => setIsZoomed(true)}
                className="lg:col-span-5 relative aspect-square w-full max-w-[280px] lg:max-w-none mx-auto lg:mx-0 rounded-xl overflow-hidden shadow-md border border-[#c6a15b]/15 bg-[#fcfcfc] cursor-zoom-in group"
              >
                <Image
                  src={product.image}
                  alt={`${product.name} - Giò Chả Luyến Vũ`}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
                
                {/* Magnifier Glass overlay on hover */}
                <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="bg-black/50 text-white rounded-full p-3 backdrop-blur-sm border border-white/20 transform scale-90 group-hover:scale-100 transition-all duration-300">
                    <svg className="w-5 h-5 text-[#c6a15b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Right Column: Information */}
              <div className="lg:col-span-7 flex flex-col h-full space-y-4 text-left">
                {/* Badges & Tags */}
                <div className="flex flex-wrap items-center gap-2">
                  {product.badge && (
                    <span className="bg-[#12351f] text-[#c6a15b] text-[10px] px-2.5 py-0.5 rounded-full font-semibold tracking-wide">
                      {product.badge}
                    </span>
                  )}
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-[#6b4423] border border-[#c6a15b]/30 px-2 py-0.5 rounded-full tracking-wide font-medium bg-[#fdf6e3]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Name */}
                <h1
                  className="text-[#12351f] text-2xl md:text-3xl font-bold leading-tight"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {product.name}
                </h1>

                {/* Divider & Price */}
                <div className="border-t border-[#c6a15b]/20 pt-3.5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-white/0 text-[9px] uppercase tracking-widest text-[#2d261b]/40 mb-0.5">Giá bán</p>
                    <p className="text-[#c6a15b] text-xl md:text-2xl font-bold tracking-wide">{product.price}</p>
                  </div>
                  
                  {/* Order Button */}
                  <button
                    onClick={handleOrder}
                    className="bg-[#12351f] text-white hover:bg-[#1f5b32] px-6 py-3 rounded-full font-bold text-xs tracking-wider uppercase transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-[#12351f]/20 cursor-pointer"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    Đặt Hàng Ngay
                  </button>
                </div>

                {/* Long Description */}
                <p
                  className="text-[#2d261b]/80 text-sm leading-relaxed pt-1"
                  style={{ fontFamily: "Be Vietnam Pro, sans-serif" }}
                >
                  {product.longDesc}
                </p>

                {/* Technical Specs Accordion-like cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3">
                  {/* Spec 1 */}
                  <div className="bg-[#fdf6e3] rounded-lg p-3 border border-[#c6a15b]/10">
                    <p className="text-[#c6a15b] text-[11px] font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                      <span>🌿</span> Thành phần
                    </p>
                    <p className="text-[#2d261b] text-[11px] leading-relaxed font-medium">{product.ingredients}</p>
                  </div>

                  {/* Spec 2 */}
                  <div className="bg-[#fdf6e3] rounded-lg p-3 border border-[#c6a15b]/10">
                    <p className="text-[#c6a15b] text-[11px] font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                      <span>❄️</span> Bảo quản
                    </p>
                    <p className="text-[#2d261b] text-[11px] leading-relaxed font-medium">{product.storage}</p>
                  </div>

                  {/* Spec 3 */}
                  <div className="bg-[#fdf6e3] rounded-lg p-3 border border-[#c6a15b]/10">
                    <p className="text-[#c6a15b] text-[11px] font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                      <span>🍽️</span> Thưởng thức
                    </p>
                    <p className="text-[#2d261b] text-[11px] leading-relaxed font-medium">{product.serving}</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Related Products Grid */}
          <div>
            <div className="text-center mb-10">
              <h3
                className="text-[#12351f] text-2xl md:text-3xl font-bold"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Các sản phẩm khác
              </h3>
              <div className="w-16 h-0.5 bg-[#c6a15b]/40 mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {relatedProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-md border border-[#c6a15b]/10 flex flex-col h-full group"
                >
                  <div className="h-1 bg-[#c6a15b]" />
                  
                  {/* Image Link */}
                  <Link href={`/products/${p.id}`} className="relative h-28 sm:h-36 md:h-48 overflow-hidden block">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 33vw"
                    />
                  </Link>

                  <div className="p-3 md:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-[#12351f] text-sm md:text-lg font-bold mb-1" style={{ fontFamily: "Playfair Display, serif" }}>
                        {p.name}
                      </h4>
                      <p className="text-[#2d261b]/60 text-[10px] md:text-xs leading-relaxed line-clamp-2 mb-3">
                        {p.desc}
                      </p>
                    </div>
                    
                    <div className="border-t border-[#c6a15b]/20 pt-3 flex items-center justify-between">
                      <span className="text-[#c6a15b] font-semibold text-xs md:text-sm">{p.price}</span>
                      <Link
                        href={`/products/${p.id}`}
                        className="text-[#12351f] text-xs font-semibold hover:text-[#c6a15b] transition-colors"
                      >
                        Chi tiết →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />

      {/* Lightbox / Zoomed Image Overlay */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-[150] flex items-center justify-center bg-black/90 backdrop-blur-md transition-all duration-300 animate-fade-in"
          onClick={() => setIsZoomed(false)}
        >
          {/* Close button */}
          <button 
            onClick={() => setIsZoomed(false)}
            className="absolute top-4 right-4 z-10 text-white/80 hover:text-white text-3xl font-bold bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer shadow-lg border border-white/15"
            aria-label="Đóng"
          >
            &times;
          </button>
          
          {/* Zoomed Image Container */}
          <div 
            className="relative w-full h-full max-w-[90vw] max-h-[85vh] p-4 flex items-center justify-center animate-scale-in"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image content
          >
            <div className="relative w-full h-full">
              <Image
                src={product.image}
                alt={`${product.name} - Phóng to`}
                fill
                className="object-contain select-none"
                sizes="90vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
