"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#trang-chu", label: "Trang chủ" },
  { href: "#cau-chuyen", label: "Câu chuyện" },
  { href: "#quy-trinh", label: "Quy trình" },
  { href: "#san-pham", label: "Sản phẩm" },
  { href: "#cam-ket", label: "Cam kết" },
  { href: "#danh-gia", label: "Đánh giá" },
  { href: "#lien-he", label: "Liên hệ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
        ? "bg-black/90 backdrop-blur-md shadow-xl"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            {/* Logo image replacing the SVG */}
            <div className="relative w-[52px] h-[52px] flex-shrink-0 select-none">
              <Image
                src="/images/logo.png"
                alt="Logo Giò Chả Luyến Vũ"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Brand text */}
            <div className="leading-none">
              <p
                className="text-[#c6a15b] font-bold text-[13px] sm:text-sm tracking-[0.08em] leading-[1.1]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                GIÒ CHẢ
              </p>
              <p
                className="text-[#c6a15b] font-bold text-[13px] sm:text-sm tracking-[0.08em] leading-[1.1]"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                LUYẾN VŨ
              </p>
              <p
                className="tracking-wider mt-0.5"
                style={{
                  fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
                  fontStyle: "italic",
                  color: "rgba(198, 161, 91, 0.75)",
                  fontSize: "10px",
                  letterSpacing: "0.02em",
                }}
              >
                Tinh hoa nghề truyền thống
              </p>
            </div>
          </Link>

          {/* Desktop Nav — centered */}
          <ul className="hidden lg:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-sm transition-colors duration-300 relative group pb-1 ${i === 0
                    ? "text-white font-medium"
                    : "text-white/70 hover:text-white"
                    }`}
                >
                  {link.label}
                  {/* Active underline for first item */}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-white transition-all duration-300 ${i === 0
                      ? "w-full"
                      : "w-0 group-hover:w-full bg-[#c6a15b]"
                      }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Hotline button */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:0978780261"
              id="nav-hotline"
              className="flex items-center gap-2 border border-[#c6a15b]/50 text-[#c6a15b] px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#c6a15b] hover:text-[#12351f] transition-all duration-300 tracking-wide"
            >
              {/* Phone icon */}
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              0978 780 261
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-btn"
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-black/90 backdrop-blur-md px-6 py-5 border-t border-white/10">
          <ul className="flex flex-col gap-4 mb-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-white/75 hover:text-[#c6a15b] text-sm tracking-wide transition-colors duration-300 block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="tel:0978780261"
            className="flex items-center gap-2 border border-[#c6a15b]/50 text-[#c6a15b] px-5 py-2.5 rounded-full text-sm w-fit"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            0978 780 261
          </a>
        </div>
      </div>
    </nav>
  );
}
