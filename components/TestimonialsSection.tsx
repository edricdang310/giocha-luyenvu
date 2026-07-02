"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    id: "mai-lan",
    name: "Chị Mai Lan",
    location: "Hà Nội",
    avatar: "M",
    avatarBg: "#1f5b32",
    rating: 5,
    text: "Giò thơm, dai giòn, không bở tí nào. Mua về là cả nhà tấm tắc khen liền. Chả quế thơm lắm, có mùi quế thật chứ không phải hương liệu. Sẽ ủng hộ lâu dài!",
    detail: "Khách hàng thân thiết 3 năm",
  },
  {
    id: "tuan-anh",
    name: "Anh Tuấn Anh",
    location: "Hải Phòng",
    avatar: "T",
    avatarBg: "#6b4423",
    rating: 5,
    text: "Mấy lần đặt Tết đều rất ưng ý. Giò lụa Luyến Vũ đúng kiểu giò nhà làm truyền thống Ninh Bình, không phải giò siêu thị bình thường. Chat booking cũng nhanh, tận tâm.",
    detail: "Khách hàng từ năm 2021",
  },
  {
    id: "thu-huong",
    name: "Chị Thu Hương",
    location: "Ninh Bình",
    avatar: "H",
    avatarBg: "#c6a15b",
    rating: 5,
    text: "Đồng giá cả tâm, giá hàng chất, giò ngon chuẩn truyền thống. Mình đặt mỗi tuần cho gia đình dùng. Yên tâm về chất lượng vì họ làm tươi mỗi ngày, không để qua hôm sau.",
    detail: "Khách hàng địa phương",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-[#c6a15b]" : "text-[#c6a15b]/20"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonial-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".testimonial-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      const cards = sectionRef.current?.querySelectorAll(".testimonial-card");
      cards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".testimonials-grid",
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
      id="danh-gia"
      ref={sectionRef}
      className="relative bg-[#fdfaf4] py-24 overflow-hidden scroll-mt-20"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #c6a15b 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="testimonial-header text-center mb-16">
          <p className="text-[#c6a15b] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Khách Hàng
          </p>
          <h2
            className="text-[#12351f] text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Khách Hàng Nói Gì{" "}
            <em className="text-[#c6a15b] font-normal italic">Về Chúng Tôi</em>
          </h2>
          <p
            className="text-[#2d261b]/70 text-base max-w-md mx-auto"
            style={{ fontFamily: "Cormorant Garamond, serif" }}
          >
            Hơn 20 năm, mỗi lời khen của khách hàng là động lực để chúng tôi tiếp tục gìn giữ nghề truyền thống.
          </p>
        </div>

        {/* Cards */}
        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              id={`testimonial-${t.id}`}
              className="testimonial-card relative bg-[#fdfbf7]/90 border border-[#c6a15b]/30 rounded-2xl p-8 hover:bg-white hover:border-[#c6a15b]/60 hover:shadow-lg transition-all duration-500 group"
            >
              {/* Quote mark */}
              <div
                className="absolute top-6 right-6 text-5xl text-[#c6a15b]/20 leading-none"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                &ldquo;
              </div>

              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Review text */}
              <p
                className="text-[#2d261b]/85 text-sm leading-relaxed mt-5 mb-8 italic"
                style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1rem" }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="border-t border-[#c6a15b]/15 pt-6 flex items-center gap-4">
                {/* Avatar */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg flex-shrink-0 shadow-lg"
                  style={{ backgroundColor: t.avatarBg }}
                >
                  {t.avatar}
                </div>

                <div>
                  <p
                    className="text-[#12351f] font-semibold text-sm"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {t.name}
                  </p>
                  <p className="text-[#c6a15b] text-xs mt-0.5">{t.location}</p>
                  <p className="text-[#2d261b]/50 text-[10px] mt-0.5">{t.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
