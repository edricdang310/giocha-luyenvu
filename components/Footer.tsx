"use client";

import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/giochavuluyen",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Zalo",
    href: "https://zalo.me/0978780261",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.49 10.2722v-.4496h1.3467v6.3218h-.7704a.576.576 0 01-.5763-.5729l-.0006.0005a3.273 3.273 0 01-1.9372.6321c-1.8138 0-3.2844-1.4697-3.2844-3.2823 0-1.8125 1.4706-3.2822 3.2844-3.2822a3.273 3.273 0 011.9372.6321l.0006.0005zM6.9188 7.7896v.205c0 .3823-.051.6944-.2995 1.0605l-.03.0343c-.0542.0615-.1815.206-.2421.2843L2.024 14.8h4.8948v.7682a.5764.5764 0 01-.5767.5761H0v-.3622c0-.4436.1102-.6414.2495-.8476L4.8582 9.23H.1922V7.7896h6.7266zm8.5513 8.3548a.4805.4805 0 01-.4803-.4798v-7.875h1.4416v8.3548H15.47zM20.6934 9.6C22.52 9.6 24 11.0807 24 12.9044c0 1.8252-1.4801 3.306-3.3066 3.306-1.8264 0-3.3066-1.4808-3.3066-3.306 0-1.8237 1.4802-3.3044 3.3066-3.3044zm-10.1412 5.253c1.0675 0 1.9324-.8645 1.9324-1.9312 0-1.065-.865-1.9295-1.9324-1.9295s-1.9324.8644-1.9324 1.9295c0 1.0667.865 1.9312 1.9324 1.9312zm10.1412-.0033c1.0737 0 1.945-.8707 1.945-1.9453 0-1.073-.8713-1.9436-1.945-1.9436-1.0753 0-1.945.8706-1.945 1.9436 0 1.0746.8697 1.9453 1.945 1.9453z" />
      </svg>
    ),
  },
  {
    name: "Phone",
    href: "tel:0978780261",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-[#c6a15b]/10">
      {/* Gold top line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c6a15b] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14 select-none">
                <Image
                  src="/images/logo.png"
                  alt="Logo Giò Chả Luyến Vũ"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-[#c6a15b] font-bold text-lg leading-tight" style={{ fontFamily: "Playfair Display, serif" }}>
                  GIÒ CHẢ
                </p>
                <p className="text-white/60 text-sm tracking-[0.15em] uppercase">
                  Luyến Vũ
                </p>
                <p className="text-white/30 text-xs mt-0.5">
                  Hương vị truyền thống
                </p>
              </div>
            </div>

            <p
              className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs"
              style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem" }}
            >
              Nhà làm giò chả truyền thống tại Ninh Bình. Hơn 20 năm gìn giữ hương vị và tâm huyết của nghề truyền thống Việt Nam.
            </p>

            {/* Social */}
            <div>
              <p className="text-white/30 text-xs tracking-[0.2em] uppercase mb-3">
                Kết nối với chúng tôi
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    id={`footer-${social.name.toLowerCase()}`}
                    aria-label={social.name}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#c6a15b] hover:border-[#c6a15b]/40 hover:bg-[#c6a15b]/10 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-[#c6a15b] text-sm font-semibold tracking-[0.15em] uppercase mb-6">
              Thông Tin Liên Hệ
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#c6a15b]/60 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div>
                  <p className="text-white/30 text-xs mb-1">Hotline</p>
                  <a href="tel:0978780261" className="text-white/80 text-sm hover:text-[#c6a15b] transition-colors">
                    0978 780 261
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#c6a15b]/60 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-white/30 text-xs mb-1">Địa chỉ</p>
                  <p className="text-white/80 text-sm">Ninh Bình, Việt Nam</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#c6a15b]/60 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-white/30 text-xs mb-1">Giờ làm việc</p>
                  <p className="text-white/80 text-sm">5:00 – 20:00 (mỗi ngày)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#c6a15b]/60 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <div>
                  <p className="text-white/30 text-xs mb-1">Email</p>
                  <p className="text-white/80 text-sm">giochaluyenvu@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick links column */}
          <div>
            <h3 className="text-[#c6a15b] text-sm font-semibold tracking-[0.15em] uppercase mb-6">
              Khám Phá
            </h3>
            <ul className="space-y-3">
              {[
                { href: "#trang-chu", label: "Trang chủ" },
                { href: "#cau-chuyen", label: "Câu chuyện" },
                { href: "#quy-trinh", label: "Quy trình" },
                { href: "#san-pham", label: "Sản phẩm" },
                { href: "#cam-ket", label: "Cam kết" },
                { href: "#danh-gia", label: "Đánh giá" },
                { href: "#lien-he", label: "Liên hệ" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-[#c6a15b] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-white/20 group-hover:w-5 group-hover:bg-[#c6a15b] transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/20 text-xs text-center sm:text-left">
              © 2024 Giò Chả Luyến Vũ. Tất cả quyền được bảo lưu.
            </p>
            <p className="text-white/20 text-xs flex items-center gap-1">
              <span>Hương vị truyền thống</span>
              <span className="text-[#c6a15b]/40 mx-2">•</span>
              <span>Ninh Bình, Việt Nam</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
