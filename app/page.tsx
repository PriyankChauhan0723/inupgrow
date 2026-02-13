import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSlider from "@/components/StatsSlider";
import BlogSection from "@/components/BlogSection";
import JoinGroupSection from "@/components/JoinGroupSection";
import KeyFeaturesSection from "@/components/KeyFeaturesSection";
import PainPointsSection from "@/components/PainPointsSection";
import StepsToJoinSection from "@/components/StepsToJoinSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <div className="min-h-screen min-w-[320px] max-w-[100vw] bg-[#2563EB] relative overflow-x-hidden">
      <div className="relative w-full">
        <div className="absolute inset-x-0 top-0 bottom-0 z-0 min-h-[90vh]" aria-hidden="true">
          <Image
            src="/Rectangle 34625349.png"
            alt=""
            fill
            className="object-cover object-top w-full h-full"
            sizes="100vw"
            priority
          />
        </div>
        <Header />
        <HeroSection />
      </div>

      <PainPointsSection />
      <StatsSlider variant="light" />
      <StepsToJoinSection />
      <KeyFeaturesSection />
      <TestimonialSection />
      <JoinGroupSection />
      <BlogSection />
      <StatsSlider />
      <Footer />
    </div>
  );
}
