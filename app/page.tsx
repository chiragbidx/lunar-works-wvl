import { LayoutHeroSection } from "@/components/home/LayoutHeroSection";
import { LayoutHowItWorksSection } from "@/components/home/LayoutHowItWorksSection";
import { LayoutFeaturesSection } from "@/components/home/LayoutFeaturesSection";
import { LayoutTestimonialsSection } from "@/components/home/LayoutTestimonialsSection";
import { LayoutPricingSection } from "@/components/home/LayoutPricingSection";
import { LayoutFAQSection } from "@/components/home/LayoutFAQSection";
import { LayoutCTASection } from "@/components/home/LayoutCTASection";
import { LayoutFooterSection } from "@/components/home/LayoutFooterSection";

export default function Home() {
  return (
    <>
      <LayoutHeroSection />
      <LayoutHowItWorksSection />
      <LayoutFeaturesSection />
      <LayoutTestimonialsSection />
      <LayoutPricingSection />
      <LayoutFAQSection />
      <LayoutCTASection />
      <LayoutFooterSection />
    </>
  );
}