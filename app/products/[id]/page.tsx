import { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);
  
  if (!product) {
    return {
      title: "Không tìm thấy sản phẩm | Giò Chả Luyến Vũ",
      description: "Sản phẩm không tồn tại hoặc đã được gỡ bỏ.",
    };
  }

  const cleanDescription = product.desc || product.longDesc.slice(0, 155) + "...";

  return {
    title: `${product.name} | Giò Chả Luyến Vũ`,
    description: cleanDescription,
    alternates: {
      canonical: `/products/${product.id}`,
    },
    openGraph: {
      title: `${product.name} | Hương Vị Truyền Thống Hơn 20 Năm`,
      description: cleanDescription,
      url: `https://giochaluyenvu.shop/products/${product.id}`,
      type: "website",
      siteName: "Giò Chả Luyến Vũ",
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: `${product.name} - Giò Chả Luyến Vũ`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Giò Chả Luyến Vũ`,
      description: cleanDescription,
      images: [product.image],
    },
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);
  
  if (!product) {
    notFound();
  }

  // Get other products for related grid (excluding current one, limit to 3)
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": `https://giochaluyenvu.shop${product.image}`,
    "description": product.desc,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "VND",
      "availability": "https://schema.org/InStock",
      "url": `https://giochaluyenvu.shop/products/${product.id}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
    </>
  );
}
