"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Traditional Vietnamese star/circle pattern watermark
const TraditionalWatermark = () => (
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[750px] md:h-[750px] opacity-[0.03] pointer-events-none select-none z-0">
    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" className="w-full h-full text-[#12351f]">
      <circle cx="100" cy="100" r="96" strokeWidth="0.5" strokeDasharray="3 3" />
      <circle cx="100" cy="100" r="88" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="84" strokeWidth="0.25" />
      <circle cx="100" cy="100" r="55" strokeWidth="0.5" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="20" strokeWidth="0.5" />
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        return (
          <line
            key={i}
            x1="100"
            y1="100"
            x2="100"
            y2="12"
            strokeWidth="0.25"
            transform={`rotate(${angle} 100 100)`}
          />
        );
      })}
    </svg>
  </div>
);

// SVG Icons for Timeline
const HomeIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-5.5 h-5.5 text-[#c6a15b]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

const StarShieldIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-5.5 h-5.5 text-[#c6a15b]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.195-.405.654-.627 1.077-.521.423.106.716.483.716.92v2.793c0 .548.423.999.97 1.053A3.75 3.75 0 0118 11.25a3.75 3.75 0 01-3.75 3.75c-1.229 0-2.316-.593-3-1.507-.684.914-1.771 1.507-3 1.507A3.75 3.75 0 014.5 11.25a3.75 3.75 0 013.064-3.508 1.002 1.002 0 00.936-.993V3.9c0-.437.293-.814.716-.92.423-.106.882.116 1.077.52l1.187 2.47a.75.75 0 001.078.368l1.187-2.47z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75V21M9 18h6" />
  </svg>
);

const LeafIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-5.5 h-5.5 text-[#c6a15b]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M12 3c4.97 0 9 4.03 9 9s-4.03 9-9 9M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9" />
  </svg>
);

const PeopleIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-5.5 h-5.5 text-[#c6a15b]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0110.089 21c-2.213 0-4.302-.576-6.124-1.587A5.99 5.99 0 014 18.725V18.7c0-1.603.626-3.059 1.644-4.116M14.214 16.058A5.996 5.996 0 0010 14.25a5.996 5.996 0 00-4.214 1.808M12 6.25a3 3 0 11-6 0 3 3 0 016 0zm7.5 1.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
);

// SVG Icons for bottom commitments
const ShieldCheckIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-5.5 h-5.5 text-[#c6a15b]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const HeartIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-5.5 h-5.5 text-[#c6a15b]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const ThumbsUpIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="w-5.5 h-5.5 text-[#c6a15b]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.602.729H13.5m-7.5-11.25H3.75A1.5 1.5 0 002.25 12v6a1.5 1.5 0 001.5 1.5H6m0-11.25V18" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#c6a15b] flex-shrink-0">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

export default function StorytellingSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Block Animation
      gsap.fromTo(
        ".story-intro-text, .story-intro-img",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".story-intro-block",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Timeline Header Animation
      gsap.fromTo(
        ".story-timeline-header-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".story-timeline-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Timeline Cards Animation
      gsap.fromTo(
        ".timeline-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".story-timeline-grid",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Recipe Block Animation
      gsap.fromTo(
        ".story-recipe-img, .story-recipe-text",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".story-recipe-block",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Commitments Box Animation
      gsap.fromTo(
        ".story-commitments-box",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".story-commitments-box",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="cau-chuyen"
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden z-10 bg-[#f5ead4] scroll-mt-20"
    >
      {/* Decorative Traditional Watermark removed */}

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 z-10 space-y-20 lg:space-y-28">
        
        {/* ΓöÇΓöÇ BLOCK 1: INTRO ABOUT US ΓöÇΓöÇ */}
        <div className="story-intro-block flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Text */}
          <div className="story-intro-text w-full lg:w-[50%] space-y-6 text-left">
            <span className="text-[#c6a15b] text-xs font-semibold tracking-[0.25em] uppercase block">
              C├óu Chuyß╗çn
            </span>
            <h2
              className="text-[#12351f] text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              H╞ín 20 n─âm g├¼n giß╗»<br />nghß╗ü truyß╗ün thß╗æng
            </h2>
            <div className="space-y-4 text-[#2d261b]/90 text-sm md:text-base leading-relaxed">
              <p>
                Tß╗½ mß╗Öt c╞í sß╗ƒ nhß╗Å tß║íi v├╣ng ─æß║Ñt Ninh B├¼nh, Gi├▓ Chß║ú Luyß║┐n V┼⌐ bß║»t ─æß║ºu h├ánh tr├¼nh h╞ín 20 n─âm g├¼n giß╗» v├á ph├ít triß╗ân nghß╗ü l├ám gi├▓ chß║ú truyß╗ün thß╗æng cß╗ºa cha ├┤ng.
              </p>
              <p>
                Trß║úi qua bao th─âng trß║ºm, ch├║ng t├┤i vß║½n lu├┤n ki├¬n ─æß╗ïnh vß╗¢i ph╞░╞íng ch├óm: lß╗▒a chß╗ìn nguy├¬n liß╗çu t╞░╞íi ngon nhß║Ñt, chß║┐ biß║┐n tß╗ë mß╗ë v├á giß╗» trß╗ìn h╞░╞íng vß╗ï truyß╗ün thß╗æng trong tß╗½ng sß║ún phß║⌐m.
              </p>
              <p className="font-bold text-[#12351f] pt-2">
                Gi├▓ Chß║ú Luyß║┐n V┼⌐ ΓÇô Tinh hoa tß╗½ t├óm, ngon l├ánh gß╗¡i trß╗ìn niß╗üm tin.
              </p>
            </div>
            <button
              onClick={() => scrollToSection("#quy-trinh")}
              className="group bg-[#12351f] border border-[#12351f] text-[#f5ead4] hover:bg-[#c6a15b] hover:border-[#c6a15b] hover:text-[#12351f] px-7 py-3.5 text-xs font-semibold tracking-wider transition-all duration-300 rounded-xs uppercase cursor-pointer flex items-center gap-2"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              T├¼m Hiß╗âu Th├¬m
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
            </button>
          </div>

          {/* Right Image */}
          <div className="story-intro-img w-full lg:w-[50%]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl shadow-lg border border-[#c6a15b]/20">
              <Image
                src="/images/hero.png"
                alt="Nghß╗ç nh├ón g├│i gi├▓ - Gi├▓ Chß║ú Luyß║┐n V┼⌐"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* ΓöÇΓöÇ BLOCK 2: DEVELOPMENT TIMELINE ΓöÇΓöÇ */}
        <div className="story-timeline-block space-y-10">
          {/* Header Line */}
          <div className="story-timeline-header flex items-center gap-4">
            <h3 className="text-[#c6a15b] text-xs font-bold tracking-[0.25em] uppercase whitespace-nowrap">
              H├ÇNH TR├îNH PH├üT TRIß╗éN
            </h3>
            <div className="story-timeline-header-line h-[1px] bg-[#c6a15b]/30 flex-1" />
          </div>

          {/* 4 Milestones Columns */}
          <div className="story-timeline-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            
            {/* Milestone 1 */}
            <div className="timeline-card relative pl-0 lg:pl-8 lg:border-l lg:border-[#c6a15b]/25 first:border-0 space-y-4 text-left">
              <div className="w-11 h-11 rounded-full border border-[#c6a15b]/50 flex items-center justify-center bg-[#f5ead4]/50">
                <HomeIcon />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#12351f] mb-1" style={{ fontFamily: "Playfair Display, serif" }}>
                  2000+
                </h4>
                <h5 className="text-sm font-bold text-[#2d261b] tracking-wide uppercase">
                  Khß╗ƒi nguß╗ôn
                </h5>
              </div>
              <p className="text-[#2d261b]/80 text-sm leading-relaxed">
                Bß║»t ─æß║ºu tß╗½ mß╗Öt c╞í sß╗ƒ nhß╗Å vß╗¢i t├¼nh y├¬u nghß╗ü v├á mong muß╗æn mang ─æß║┐n nhß╗»ng ─æ├▓n gi├▓ chß║ú th╞ím ngon, an to├án cho gia ─æ├¼nh v├á ng╞░ß╗¥i th├ón.
              </p>
            </div>

            {/* Milestone 2 */}
            <div className="timeline-card relative pl-0 lg:pl-8 lg:border-l lg:border-[#c6a15b]/25 space-y-4 text-left">
              <div className="w-11 h-11 rounded-full border border-[#c6a15b]/50 flex items-center justify-center bg-[#f5ead4]/50">
                <StarShieldIcon />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#12351f] mb-1" style={{ fontFamily: "Playfair Display, serif" }}>
                  2005+
                </h4>
                <h5 className="text-sm font-bold text-[#2d261b] tracking-wide uppercase">
                  G├óy dß╗▒ng uy t├¡n
                </h5>
              </div>
              <p className="text-[#2d261b]/80 text-sm leading-relaxed">
                Nhß╗¥ chß║Ñt l╞░ß╗úng ß╗òn ─æß╗ïnh v├á h╞░╞íng vß╗ï ─æß║╖c tr╞░ng, sß║ún phß║⌐m dß║ºn ─æ╞░ß╗úc kh├ích h├áng tin t╞░ß╗ƒng v├á y├¬u mß║┐n, mß╗ƒ rß╗Öng thß╗ï tr╞░ß╗¥ng tß║íi ─æß╗ïa ph╞░╞íng.
              </p>
            </div>

            {/* Milestone 3 */}
            <div className="timeline-card relative pl-0 lg:pl-8 lg:border-l lg:border-[#c6a15b]/25 space-y-4 text-left">
              <div className="w-11 h-11 rounded-full border border-[#c6a15b]/50 flex items-center justify-center bg-[#f5ead4]/50">
                <LeafIcon />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#12351f] mb-1" style={{ fontFamily: "Playfair Display, serif" }}>
                  2015+
                </h4>
                <h5 className="text-sm font-bold text-[#2d261b] tracking-wide uppercase">
                  ─Éß╗òi mß╗¢i ΓÇô Ph├ít triß╗ân
                </h5>
              </div>
              <p className="text-[#2d261b]/80 text-sm leading-relaxed">
                Kh├┤ng ngß╗½ng cß║úi tiß║┐n quy tr├¼nh sß║ún xuß║Ñt, ─æß║ºu t╞░ thiß║┐t bß╗ï hiß╗çn ─æß║íi nh╞░ng vß║½n giß╗» nguy├¬n b├¡ quyß║┐t truyß╗ün thß╗æng ─æß╗â n├óng cao chß║Ñt l╞░ß╗úng sß║ún phß║⌐m.
              </p>
            </div>

            {/* Milestone 4 */}
            <div className="timeline-card relative pl-0 lg:pl-8 lg:border-l lg:border-[#c6a15b]/25 space-y-4 text-left">
              <div className="w-11 h-11 rounded-full border border-[#c6a15b]/50 flex items-center justify-center bg-[#f5ead4]/50">
                <PeopleIcon />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#12351f] mb-1" style={{ fontFamily: "Playfair Display, serif" }}>
                  Hiß╗çn tß║íi
                </h4>
                <h5 className="text-sm font-bold text-[#2d261b] tracking-wide uppercase">
                  V╞░╞ín xa ΓÇô Bß╗ün vß╗»ng
                </h5>
              </div>
              <p className="text-[#2d261b]/80 text-sm leading-relaxed">
                Gi├▓ Chß║ú Luyß║┐n V┼⌐ ─æ├ú trß╗ƒ th├ánh th╞░╞íng hiß╗çu ─æ╞░ß╗úc nhiß╗üu kh├ích h├áng tin chß╗ìn, h╞░ß╗¢ng tß╗¢i ph├ít triß╗ân bß╗ün vß╗»ng v├á mang ─æß║╖c sß║ún Ninh B├¼nh ─æß║┐n mß╗ìi miß╗ün.
              </p>
            </div>

          </div>
        </div>

        {/* ΓöÇΓöÇ BLOCK 3: SECRET RECIPE ΓöÇΓöÇ */}
        <div id="quy-trinh" className="story-recipe-block flex flex-col lg:flex-row items-center gap-10 lg:gap-16 pt-4 scroll-mt-24">
          {/* Left Image */}
          <div className="story-recipe-img w-full lg:w-[50%]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl shadow-lg border border-[#c6a15b]/20">
              <Image
                src="/images/products.png"
                alt="M├óm gi├▓ chß║ú th╞ím ngon - Gi├▓ Chß║ú Luyß║┐n V┼⌐"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="story-recipe-text w-full lg:w-[50%] space-y-6 text-left">
            <span className="text-[#c6a15b] text-xs font-semibold tracking-[0.25em] uppercase block">
              B├ì QUYß║╛T L├ÇM N├èN H╞»╞áNG Vß╗è ─Éß║╢C TR╞»NG
            </span>
            <h2
              className="text-[#12351f] text-3xl md:text-4xl font-bold leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Tß╗ë mß╗ë trong tß╗½ng c├┤ng ─æoß║ín
            </h2>
            <p
              className="text-[#2d261b]/90 text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
            >
              Ch├║ng t├┤i tin rß║▒ng, mß╗Öt sß║ún phß║⌐m ngon phß║úi bß║»t ─æß║ºu tß╗½ nhß╗»ng nguy├¬n liß╗çu tß╗æt nhß║Ñt v├á sß╗▒ tß╗ë mß╗ë trong tß╗½ng c├┤ng ─æoß║ín.
            </p>
            
            {/* Checklist */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-[#2d261b]/95 text-sm md:text-base">
                <CheckIcon />
                <span>Lß╗▒a chß╗ìn nguy├¬n liß╗çu t╞░╞íi ngon, r├╡ nguß╗ôn gß╗æc</span>
              </div>
              <div className="flex items-center gap-3 text-[#2d261b]/95 text-sm md:text-base">
                <CheckIcon />
                <span>Chß║┐ biß║┐n theo c├┤ng thß╗⌐c gia truyß╗ün, n├¬m nß║┐m vß╗½a vß║╖n</span>
              </div>
              <div className="flex items-center gap-3 text-[#2d261b]/95 text-sm md:text-base">
                <CheckIcon />
                <span>Giß╗» trß╗ìn vß╗ï ngß╗ìt tß╗▒ nhi├¬n, th╞ím ngon v├á an to├án cho sß╗⌐c khß╗Åe</span>
              </div>
            </div>
          </div>
        </div>

        {/* ΓöÇΓöÇ BLOCK 4: FOUR COMMITMENTS BOX ΓöÇΓöÇ */}
        <div className="story-commitments-box border border-[#c6a15b]/45 rounded-lg p-6 md:p-8 lg:p-10 bg-[#f5ead4]/15 backdrop-blur-[1px] shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Commitment 1 */}
            <div className="flex items-start gap-4 text-left">
              <div className="w-10 h-10 rounded-full border border-[#c6a15b]/40 flex items-center justify-center flex-shrink-0 bg-[#f5ead4]/40">
                <ShieldCheckIcon />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-[#12351f] tracking-wide">
                  An to├án vß╗ç sinh
                </h4>
                <p className="text-[#2d261b]/80 text-[13px] leading-relaxed">
                  Sß║ún xuß║Ñt trong m├┤i tr╞░ß╗¥ng ─æß║úm bß║úo vß╗ç sinh v├á an to├án thß╗▒c phß║⌐m.
                </p>
              </div>
            </div>

            {/* Commitment 2 */}
            <div className="flex items-start gap-4 text-left">
              <div className="w-10 h-10 rounded-full border border-[#c6a15b]/40 flex items-center justify-center flex-shrink-0 bg-[#f5ead4]/40">
                <LeafIcon />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-[#12351f] tracking-wide">
                  Nguy├¬n liß╗çu t╞░╞íi ngon
                </h4>
                <p className="text-[#2d261b]/80 text-[13px] leading-relaxed">
                  Cam kß║┐t sß╗¡ dß╗Ñng nguy├¬n liß╗çu t╞░╞íi mß╗¢i mß╗ùi ng├áy, kh├┤ng chß║Ñt bß║úo quß║ún ─æß╗Öc hß║íi.
                </p>
              </div>
            </div>

            {/* Commitment 3 */}
            <div className="flex items-start gap-4 text-left">
              <div className="w-10 h-10 rounded-full border border-[#c6a15b]/40 flex items-center justify-center flex-shrink-0 bg-[#f5ead4]/40">
                <HeartIcon />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-[#12351f] tracking-wide">
                  Giß╗» trß╗ìn h╞░╞íng vß╗ï
                </h4>
                <p className="text-[#2d261b]/80 text-[13px] leading-relaxed">
                  G├¼n giß╗» c├┤ng thß╗⌐c truyß╗ün thß╗æng ─æß╗â mang ─æß║┐n h╞░╞íng vß╗ï th╞ím ngon, ─æß║¡m ─æ├á ─æß║╖c tr╞░ng.
                </p>
              </div>
            </div>

            {/* Commitment 4 */}
            <div className="flex items-start gap-4 text-left">
              <div className="w-10 h-10 rounded-full border border-[#c6a15b]/40 flex items-center justify-center flex-shrink-0 bg-[#f5ead4]/40">
                <ThumbsUpIcon />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-[#12351f] tracking-wide">
                  Uy t├¡n & Chß║Ñt l╞░ß╗úng
                </h4>
                <p className="text-[#2d261b]/80 text-[13px] leading-relaxed">
                  H╞ín 20 n─âm kinh nghiß╗çm l├á nß╗ün tß║úng cß╗ºa niß╗üm tin tß╗½ kh├ích h├áng.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom decorative divider line matching mockup */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#12351f] z-20" />
    </section>
  );
}
