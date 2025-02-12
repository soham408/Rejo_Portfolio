import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ReviewsMovingCardsDemo from "@/components/ReviewsMovingCardsDemo";
import QuickPortfolio from "@/components/QuickPortfolio";
import Aboutus from "@/components/Aboutus";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <QuickPortfolio />
      <Aboutus />
      <ReviewsMovingCardsDemo />
      <Footer />
    </main>
  );
}
