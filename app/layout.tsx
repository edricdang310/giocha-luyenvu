import type { Metadata } from "next";
import "./globals.css";
import OrderModal from "@/components/OrderModal";

export const metadata: Metadata = {
  metadataBase: new URL("https://giochaluyenvu.shop"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Giò Chả Luyến Vũ | Hương Vị Truyền Thống Hơn 20 Năm",
    template: "%s | Giò Chả Luyến Vũ",
  },
  description:
    "Giò Chả Luyến Vũ – Nhà làm giò chả truyền thống tại Ninh Bình hơn 20 năm. 100% thịt nạc tươi, không hàn the, không chất bảo quản. Đặt hàng: 0978 780 261",
  keywords: [
    "giò chả Luyến Vũ",
    "giò chả Ninh Bình",
    "giò lụa truyền thống",
    "giò thúc ngon",
    "giò thúc Ninh Bình",
    "giò lòng đặc sản",
    "chả mỡ nướng",
    "mọc trắng",
    "mọc nấm hương",
    "nem chua rán sạch",
    "ruốc heo bông tơi",
    "thịt heo gác bếp",
    "giò chả không hàn the",
    "đặc sản Ninh Bình",
    "nhà làm giò chả",
  ],
  authors: [{ name: "Giò Chả Luyến Vũ" }],
  creator: "Giò Chả Luyến Vũ",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://giochaluyenvu.shop",
    siteName: "Giò Chả Luyến Vũ",
    title: "Giò Chả Luyến Vũ | Hương Vị Truyền Thống Hơn 20 Năm",
    description:
      "Nhà làm giò chả truyền thống tại Ninh Bình. 100% thịt nạc tươi, không hàn the, không chất bảo quản.",
    images: [
      {
        url: "/banner-link.png",
        width: 1200,
        height: 630,
        alt: "Giò Chả Luyến Vũ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Giò Chả Luyến Vũ | Hương Vị Truyền Thống Hơn 20 Năm",
    description: "Giò Chả Luyến Vũ – Nhà làm giò chả truyền thống tại Ninh Bình hơn 20 năm. 100% thịt nạc tươi, không hàn the, không chất bảo quản.",
    images: ["/banner-link.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "OQsITGVWNtdjeQpHCE6Qkbw6AXMfBkYayuyNgG15e3Q",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Giò Chả Luyến Vũ",
  image: "https://giochaluyenvu.shop/banner-link.png",
  description:
    "Nhà làm giò chả truyền thống tại Ninh Bình hơn 20 năm. 100% thịt nạc tươi, không hàn the, không chất bảo quản.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ninh Bình",
    addressCountry: "VN",
  },
  telephone: "0978780261",
  url: "https://giochaluyenvu.shop",
  priceRange: "$$",
  servesCuisine: "Vietnamese",
  hasMap: "https://maps.google.com/?q=Ninh+Binh+Vietnam",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "05:00",
    closes: "20:00",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Be+Vietnam+Pro:wght@300;400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Charm:wght@400;700&family=Alex+Brush&family=Great+Vibes&family=Kolker+Brush&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var host = window.location.hostname;
                var d1 = 'giocha';
                var d2 = 'luyenvu';
                var d3 = 'shop';
                var targetDomain = [d1, d2].join('') + '.' + d3;
                var wwwTarget = 'www.' + targetDomain;
                if (host && host !== targetDomain && host !== wwwTarget && !host.endsWith('.vercel.app') && host !== 'localhost' && host !== '127.0.0.1') {
                  window.location.replace('https://' + targetDomain + window.location.pathname + window.location.search);
                }
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <OrderModal />
      </body>
    </html>
  );
}
