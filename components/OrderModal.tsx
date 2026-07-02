"use client";

import { useEffect, useState } from "react";

export default function OrderModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [productName, setProductName] = useState("");

  useEffect(() => {
    const handleOpen = (e: Event) => {
      const customEvent = e as CustomEvent<{ productName?: string }>;
      setProductName(customEvent.detail?.productName || "Giò Chả Luyến Vũ");
      setIsOpen(true);
    };

    window.addEventListener("open-order-modal", handleOpen);
    return () => window.removeEventListener("open-order-modal", handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => setAnimate(true), 10);
      return () => {
        clearTimeout(timer);
      };
    } else {
      document.body.style.overflow = "unset";
      setAnimate(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setAnimate(false);
    // Allow closing animation to play before unmounting
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
        animate ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`relative w-full max-w-lg overflow-hidden rounded-2xl bg-black/60 backdrop-blur-md border border-[#c6a15b]/30 p-8 md:p-10 shadow-2xl transition-all duration-300 transform ${
          animate ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-4 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold top border decor */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#c6a15b] via-[#d4b06a] to-[#c6a15b]" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-white/50 hover:text-[#c6a15b] transition-colors p-2 rounded-full hover:bg-white/5"
          aria-label="Đóng cửa sổ"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="text-center mb-8">
          <p className="text-[#c6a15b] text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-2">
            Liên hệ đặt hàng
          </p>
          <h3
            className="text-white text-2xl sm:text-3xl font-bold"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Thông Tin Đặt Hàng
          </h3>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-10 h-px bg-[#c6a15b]/20" />
            <svg className="w-4 h-4 text-[#c6a15b]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L9.09 8.26L2 9.27L7 14.14L5.82 21.02L12 17.77L18.18 21.02L17 14.14L22 9.27L14.91 8.26L12 2Z" />
            </svg>
            <div className="w-10 h-px bg-[#c6a15b]/20" />
          </div>
        </div>

        {/* Modal Content */}
        <div className="space-y-6">
          {productName && (
            <div className="bg-black/25 border border-white/5 rounded-xl p-4 text-center">
              <p className="text-white/40 text-xs mb-1">Sản phẩm quý khách đang chọn:</p>
              <p className="text-[#c6a15b] text-lg font-bold" style={{ fontFamily: "Playfair Display, serif" }}>
                {productName}
              </p>
            </div>
          )}

          <p
            className="text-white/70 text-sm sm:text-base text-center leading-relaxed max-w-sm mx-auto"
            style={{ fontFamily: "Be Vietnam Pro, sans-serif" }}
          >
            Để nhận được giò chả tươi nóng, làm mới mỗi ngày và giao hàng nhanh nhất, quý khách vui lòng liên hệ với nhà làm <strong>Giò Chả Luyến Vũ</strong> qua các kênh dưới đây:
          </p>

          {/* Contact Channels Grid */}
          <div className="grid grid-cols-1 gap-4 pt-2">
            {/* Zalo Button */}
            <a
              href="https://zalo.me/0978780261"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 border border-white/10 hover:border-[#c6a15b]/40 hover:bg-[#c6a15b]/10 p-4 rounded-xl text-white transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#0068ff]/10 text-[#0068ff] group-hover:bg-[#0068ff]/20 flex items-center justify-center flex-shrink-0 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.49 10.2722v-.4496h1.3467v6.3218h-.7704a.576.576 0 01-.5763-.5729l-.0006.0005a3.273 3.273 0 01-1.9372.6321c-1.8138 0-3.2844-1.4697-3.2844-3.2823 0-1.8125 1.4706-3.2822 3.2844-3.2822a3.273 3.273 0 011.9372.6321l.0006.0005zM6.9188 7.7896v.205c0 .3823-.051.6944-.2995 1.0605l-.03.0343c-.0542.0615-.1815.206-.2421.2843L2.024 14.8h4.8948v.7682a.5764.5764 0 01-.5767.5761H0v-.3622c0-.4436.1102-.6414.2495-.8476L4.8582 9.23H.1922V7.7896h6.7266zm8.5513 8.3548a.4805.4805 0 01-.4803-.4798v-7.875h1.4416v8.3548H15.47zM20.6934 9.6C22.52 9.6 24 11.0807 24 12.9044c0 1.8252-1.4801 3.306-3.3066 3.306-1.8264 0-3.3066-1.4808-3.3066-3.306 0-1.8237 1.4802-3.3044 3.3066-3.3044zm-10.1412 5.253c1.0675 0 1.9324-.8645 1.9324-1.9312 0-1.065-.865-1.9295-1.9324-1.9295s-1.9324.8644-1.9324 1.9295c0 1.0667.865 1.9312 1.9324 1.9312zm10.1412-.0033c1.0737 0 1.945-.8707 1.945-1.9453 0-1.073-.8713-1.9436-1.945-1.9436-1.0753 0-1.945.8706-1.945 1.9436 0 1.0746.8697 1.9453 1.945 1.9453z" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-semibold group-hover:text-[#c6a15b] transition-colors">Nhắn tin qua Zalo</p>
                <p className="text-white/40 text-xs mt-0.5">SĐT Zalo: 0978 780 261 (Phản hồi nhanh)</p>
              </div>
              <svg className="w-5 h-5 text-white/20 group-hover:text-[#c6a15b] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Facebook Button */}
            <a
              href="https://www.facebook.com/giochavuluyen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/5 border border-white/10 hover:border-[#c6a15b]/40 hover:bg-[#c6a15b]/10 p-4 rounded-xl text-white transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-[#1877f2]/10 text-[#1877f2] group-hover:bg-[#1877f2]/20 flex items-center justify-center flex-shrink-0 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-semibold group-hover:text-[#c6a15b] transition-colors">Nhắn tin qua Facebook</p>
                <p className="text-white/40 text-xs mt-0.5">Fanpage: Giò Chả Vũ Luyến</p>
              </div>
              <svg className="w-5 h-5 text-white/20 group-hover:text-[#c6a15b] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Hotline Call Button */}
            <a
              href="tel:0978780261"
              className="flex items-center gap-4 bg-[#c6a15b] hover:bg-[#d4b06a] p-4 rounded-xl text-[#12351f] font-semibold transition-all duration-300 group shadow-lg hover:shadow-[#c6a15b]/20"
            >
              <div className="w-12 h-12 rounded-full bg-white/25 text-[#12351f] flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-bold text-[#12351f]">Gọi điện trực tiếp</p>
                <p className="text-[#12351f]/80 text-xs mt-0.5">Hotline: 0978 780 261 (24/7)</p>
              </div>
              <svg className="w-5 h-5 text-[#12351f]/40 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer info */}
        <div className="text-center mt-8 pt-4 border-t border-white/5">
          <button
            onClick={handleClose}
            className="text-white/40 hover:text-white text-xs underline decoration-dotted transition-colors"
          >
            Quay lại trang chủ
          </button>
        </div>
      </div>
    </div>
  );
}
