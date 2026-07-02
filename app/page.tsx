import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorytellingSection from "@/components/StorytellingSection";
import KitchenBanner from "@/components/KitchenBanner";
import ProductsSection from "@/components/ProductsSection";
import CommitmentsSection from "@/components/CommitmentsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import GSAPProvider from "@/components/GSAPProvider";

export default function Home() {
  return (
    <GSAPProvider>
      <main>
        <Navbar />
        <HeroSection />
        <StorytellingSection />
        <KitchenBanner />
        <ProductsSection />
        <CommitmentsSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </main>
    </GSAPProvider>
  );
}
