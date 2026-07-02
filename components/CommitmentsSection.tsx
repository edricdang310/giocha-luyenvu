"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ── CUSTOM LOGOS & STAMPS ──



// Round Red Stamp for the bottom quote
function QuoteStamp() {
  return (
    <div className="relative w-14 h-14 select-none rotate-[-6deg] ml-3 inline-block align-middle flex-shrink-0">
      <svg viewBox="0 0 60 60" className="w-full h-full text-[#a91d22] fill-current">
        <circle cx="30" cy="30" r="28" fill="none" stroke="currentColor" strokeWidth="1.75" strokeDasharray="4 2" />
        <circle cx="30" cy="30" r="25" fill="none" stroke="currentColor" strokeWidth="0.75" />
        <text x="30" y="23" textAnchor="middle" dominantBaseline="middle" className="text-[7.5px] font-extrabold font-serif fill-[#a91d22] tracking-widest">LUYẾN</text>
        <text x="30" y="37" textAnchor="middle" dominantBaseline="middle" className="text-[7.5px] font-extrabold font-serif fill-[#a91d22] tracking-widest">VŨ</text>
        <path d="M 16 30 Q 30 34 44 30" fill="none" stroke="currentColor" strokeWidth="0.75" />
      </svg>
    </div>
  );
}

// Tiny Round Stamp for Card Footers
function TinyCardStamp() {
  return (
    <div className="w-3.5 h-3.5 rounded-full border border-[#a91d22]/80 flex items-center justify-center rotate-[12deg] flex-shrink-0">
      <span className="text-[#a91d22] font-serif font-extrabold text-[5px] scale-90">LV</span>
    </div>
  );
}


// ── CARD ICONS ──

// Meat Icon (Steak)
function CardMeatIcon() {
  return (
    <svg className="w-8 h-8 text-[#a91d22]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.5 2 3 5.5 3 11c0 3.5 1.5 6.5 4.5 8 1 .5 2.5-.5 3.5-1.5s2-2 3.5-1.5 2.5 1.5 3.5.5S21 13 21 11c0-5.5-3.5-9-9-9zm-2.5 6.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm4 4c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
    </svg>
  );
}

// Ban Icon (No Borax)
function CardBanIcon() {
  return (
    <svg className="w-8 h-8 text-[#a91d22]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <circle cx="12" cy="12" r="9" />
      <line x1="5.6" y1="5.6" x2="18.4" y2="18.4" />
    </svg>
  );
}

// Leaves Icon (No Preservatives)
function CardLeavesIcon() {
  return (
    <svg className="w-8 h-8 text-[#2e5a36]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17 8c.5-1.5-.5-3.5-2.5-4.5S10.5 3 10 4.5s.5 3.5 2.5 4.5S16.5 9.5 17 8zm-8 6c.5-1.5-.5-3.5-2.5-4.5S2.5 9 2 10.5s.5 3.5 2.5 4.5S8.5 15.5 9 14zm8-2c-2.5 0-5 2.5-5 5.5s2 4.5 4.5 4.5 5.5-2.5 5.5-5.5-2.5-4.5-5-4.5z" />
    </svg>
  );
}

// Shield Check Icon (Hygiene Standard)
function CardShieldCheckIcon() {
  return (
    <svg className="w-8 h-8 text-[#2e5a36]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" fillOpacity="0.1" />
      <path d="M9 11l2 2 4-4" />
    </svg>
  );
}


// ── BOTTOM PILL BAR ICONS ──

function FreshIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
    </svg>
  );
}

function HotMeatIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2c0 0-4 4.5-4 7.5c0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5C17 6.5 13 2 13 2z" />
    </svg>
  );
}

function PackageIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  );
}

function ChemicalBanIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}


// ── MAIN COMPONENT ──

const commitments = [
  {
    id: "fresh-meat",
    icon: <CardMeatIcon />,
    iconColor: "border-[#a91d22]/40 bg-[#a91d22]/5",
    title: "100% THỊT TƯƠI",
    desc: "Chúng tôi chỉ sử dụng thịt nóng trong ngày, không dùng thịt đông lạnh hay thịt tồn kho.",
  },
  {
    id: "no-borax",
    icon: <CardBanIcon />,
    iconColor: "border-[#a91d22]/40 bg-[#a91d22]/5",
    title: "KHÔNG HÀN THE",
    desc: "Tuyệt đối không sử dụng hàn the, không pha phụ gia tạo giòn, giữ nguyên kỹ thuật quết giò truyền thống.",
  },
  {
    id: "no-preservatives",
    icon: <CardLeavesIcon />,
    iconColor: "border-[#2e5a36]/40 bg-[#2e5a36]/5",
    title: "KHÔNG CHẤT BẢO QUẢN",
    desc: "Sản phẩm được làm mới mỗi ngày, không sử dụng chất bảo quản, đảm bảo an toàn cho mọi thành viên.",
  },
  {
    id: "food-safety",
    icon: <CardShieldCheckIcon />,
    iconColor: "border-[#2e5a36]/40 bg-[#2e5a36]/5",
    title: "ĐẠT CHUẨN VỆ SINH",
    desc: "Quy trình sản xuất sạch, đạt tiêu chuẩn vệ sinh thực phẩm, đảm bảo nguồn gốc rõ ràng.",
  },
];

export default function CommitmentsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".commit-header-anim",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".commit-header-anim",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Card stamp animation
      const cards = sectionRef.current?.querySelectorAll(".stamp-card");
      cards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            scale: 1.15,
            rotation: -4 + Math.random() * 8,
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.9,
            delay: i * 0.18,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: ".stamps-grid",
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Bottom components animation
      gsap.fromTo(
        ".commit-bottom-anim",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".commit-bottom-trigger",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="cam-ket"
      ref={sectionRef}
      className="relative py-12 md:py-16 overflow-hidden bg-[#f3ede0] scroll-mt-20"
    >
      {/* Top and Bottom Divider Lines */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[#c6a15b]/25" />
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c6a15b]/25" />



      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ── HEADER SECTION ── */}
        <div className="text-center mb-10 md:mb-12 space-y-3">
          <div className="commit-header-anim flex items-center justify-center gap-3">
            <span className="w-10 h-[1.5px] bg-[#c6a15b]" />
            <span className="text-[#c6a15b] text-[11px] md:text-xs font-semibold tracking-[0.3em] uppercase">
              CAM KẾT
            </span>
            <span className="w-10 h-[1.5px] bg-[#c6a15b]" />
          </div>

          <h2
            className="commit-header-anim text-[#12351f] text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight select-none"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Cam Kết
            <br />
            <span
              className="text-[#c6a15b] font-normal italic inline-block"
              style={{ fontFamily: "'Charm', cursive" }}
            >
              Của Chúng Tôi
            </span>
          </h2>

          <p
            className="commit-header-anim text-[#2d261b]/90 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light"
            style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
          >
            Không chỉ bán giò chả, chúng tôi trao đến khách hàng sự <br />
            an tâm trong từng bữa cơm gia đình.
          </p>
        </div>

        {/* ── STAMPS GRID (CARDS) ── */}
        <div className="stamps-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((item) => (
            <div
              key={item.id}
              className="stamp-card relative group flex flex-col h-full"
            >
              {/* Paper texture card frame */}
              <div className="relative flex-1 bg-[#fbf8f0]/92 backdrop-blur-[2px] border border-[#c6a15b]/55 rounded-xl p-5 md:p-6.5 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden">
                {/* Inner dashed stamp line */}
                <div className="absolute inset-1.5 border border-dashed border-[#c6a15b]/35 rounded pointer-events-none" />

                {/* Card Main Content */}
                <div className="relative z-10 space-y-3">
                  {/* Icon wrapped in a beautiful circular frame */}
                  <div className={`w-12 h-12 rounded-full border-2 ${item.iconColor} flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300`}>
                    {item.icon}
                  </div>

                  <h3
                    className="text-[#12351f] font-bold text-base md:text-lg tracking-wider"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-[#2d261b]/85 text-xs md:text-[13px] leading-relaxed font-light"
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Card Footer (Stamp seal marker) */}
                <div className="relative z-10 mt-4.5 pt-2.5 border-t border-[#c6a15b]/25 flex items-center justify-center gap-1.5 select-none">
                  <span
                    className="text-[11px] text-[#2d261b]/60 italic tracking-wider font-semibold"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Cam kết Luyến Vũ
                  </span>
                  <TinyCardStamp />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── BOTTOM TRIGGER ANCHOR FOR GSAP ── */}
        <div className="commit-bottom-trigger mt-10 md:mt-14 text-center space-y-4">

          {/* Quote Block */}
          <div className="commit-bottom-anim inline-block relative px-8 select-none">
            <span className="absolute left-1.5 top-[-12px] text-[#c6a15b]/30 text-5xl font-serif">&ldquo;</span>
            <p
              className="text-[#12351f] text-lg sm:text-xl md:text-2xl italic font-light max-w-2xl leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Chúng tôi làm giò chả như làm cho chính gia đình mình ăn.
            </p>
            <span className="absolute right-1.5 bottom-[-24px] text-[#c6a15b]/30 text-5xl font-serif">&rdquo;</span>
          </div>

          {/* Cursive text with round stamp */}
          <div className="commit-bottom-anim flex items-center justify-center gap-2 pt-2">
            <div className="text-right">
              <p
                className="text-[#c6a15b] text-2xl md:text-3xl font-semibold leading-none"
                style={{ fontFamily: "'Charm', cursive" }}
              >
                Tươi. Sạch. Thật.
              </p>
              <p
                className="text-[#2d261b]/75 text-[11px] md:text-xs tracking-[0.25em] mt-2 uppercase font-semibold"
                style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
              >
                — GIA ĐÌNH LUYẾN VŨ —
              </p>
            </div>
            <QuoteStamp />
          </div>

          {/* ── RESPONSIVE BOTTOM PILL BAR ── */}
          <div className="commit-bottom-anim mt-10 md:mt-12 max-w-6xl mx-auto px-2">
            <div className="bg-[#fdfaf4]/85 backdrop-blur-md border border-[#c6a15b]/45 rounded-2xl md:rounded-full py-4.5 px-6 md:px-8 shadow-lg">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-6 lg:gap-y-0 items-center justify-items-center">

                {/* Item 1 */}
                <div className="flex items-center gap-2.5 w-full max-w-[165px] sm:max-w-[190px] mx-auto justify-start lg:px-2 lg:mx-0 lg:max-w-none border-r-0 lg:border-r border-[#c6a15b]/20 last:border-r-0">
                  <div className="w-8 h-8 rounded-full border border-[#2e5a36]/40 bg-[#2e5a36]/5 flex items-center justify-center text-[#2e5a36] flex-shrink-0">
                    <FreshIcon />
                  </div>
                  <div className="text-left select-none">
                    <p className="text-[#12351f] text-xs font-bold leading-tight">Làm mới</p>
                    <p className="text-[#2d261b]/60 text-[9px] uppercase tracking-wider mt-0.5 font-medium">mỗi ngày</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-2.5 w-full max-w-[165px] sm:max-w-[190px] mx-auto justify-start lg:px-4 lg:mx-0 lg:max-w-none border-r-0 lg:border-r border-[#c6a15b]/20 last:border-r-0">
                  <div className="w-8 h-8 rounded-full border border-[#a91d22]/40 bg-[#a91d22]/5 flex items-center justify-center text-[#a91d22] flex-shrink-0">
                    <HotMeatIcon />
                  </div>
                  <div className="text-left select-none">
                    <p className="text-[#12351f] text-xs font-bold leading-tight">Nguyên liệu</p>
                    <p className="text-[#2d261b]/60 text-[9px] uppercase tracking-wider mt-0.5 font-medium">tuyển chọn</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-center gap-2.5 w-full max-w-[165px] sm:max-w-[190px] mx-auto justify-start lg:px-4 lg:mx-0 lg:max-w-none border-r-0 lg:border-r border-[#c6a15b]/20 last:border-r-0">
                  <div className="w-8 h-8 rounded-full border border-[#2e5a36]/40 bg-[#2e5a36]/5 flex items-center justify-center text-[#2e5a36] flex-shrink-0">
                    <PackageIcon />
                  </div>
                  <div className="text-left select-none">
                    <p className="text-[#12351f] text-xs font-bold leading-tight">Đóng gói</p>
                    <p className="text-[#2d261b]/60 text-[9px] uppercase tracking-wider mt-0.5 font-medium">Hút chân không</p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="flex items-center gap-2.5 w-full max-w-[165px] sm:max-w-[190px] mx-auto justify-start lg:px-4 lg:mx-0 lg:max-w-none border-r-0 lg:border-r border-[#c6a15b]/20 last:border-r-0">
                  <div className="w-8 h-8 rounded-full border border-[#a91d22]/40 bg-[#a91d22]/5 flex items-center justify-center text-[#a91d22] flex-shrink-0">
                    <ChemicalBanIcon />
                  </div>
                  <div className="text-left select-none">
                    <p className="text-[#12351f] text-xs font-bold leading-tight">Không sử dụng</p>
                    <p className="text-[#2d261b]/60 text-[9px] uppercase tracking-wider mt-0.5 font-medium">phụ gia</p>
                  </div>
                </div>

                {/* Item 5 */}
                <div className="flex items-center gap-2.5 w-full max-w-[165px] sm:max-w-[190px] mx-auto justify-start lg:px-4 lg:mx-0 lg:max-w-none border-r-0 lg:border-r border-[#c6a15b]/20 last:border-r-0">
                  <div className="w-8 h-8 rounded-full border border-[#2e5a36]/40 bg-[#2e5a36]/5 flex items-center justify-center text-[#2e5a36] flex-shrink-0">
                    <TruckIcon />
                  </div>
                  <div className="text-left select-none">
                    <p className="text-[#12351f] text-xs font-bold leading-tight">Giao hàng</p>
                    <p className="text-[#2d261b]/60 text-[9px] uppercase tracking-wider mt-0.5 font-medium">trong ngày</p>
                  </div>
                </div>

                {/* Item 6 */}
                <div className="flex items-center gap-2.5 w-full max-w-[165px] sm:max-w-[190px] mx-auto justify-start lg:px-4 lg:mx-0 lg:max-w-none border-r-0 last:border-r-0">
                  <div className="w-8 h-8 rounded-full border border-[#2e5a36]/40 bg-[#2e5a36]/5 flex items-center justify-center text-[#2e5a36] flex-shrink-0">
                    <ShieldIcon />
                  </div>
                  <div className="text-left select-none">
                    <p className="text-[#12351f] text-xs font-bold leading-tight">Đổi trả</p>
                    <p className="text-[#2d261b]/60 text-[9px] uppercase tracking-wider mt-0.5 font-medium">nếu lỗi</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
