import React from "react";
import { HeroSection } from "@/features/portfolio/components/hero-section";
import { CareerJourneySection } from "@/features/portfolio/components/career-journey-section";
import { MyWorkSection } from "@/features/portfolio/components/my-work-section";
import { ExperienceEducationSection } from "@/features/portfolio/components/experience-education-section";
import { ToolsIntegrationSection } from "@/features/portfolio/components/tools-integration-section";
import { AboutMeSection } from "@/features/portfolio/components/about-me-section";
import { TestimonialsSection } from "@/features/portfolio/components/testimonials-section";
import { InnerCircleCtaSection } from "@/features/portfolio/components/inner-circle-cta-section";
import { FooterSection } from "@/features/portfolio/components/footer-section";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6 sm:gap-12 pb-16 bg-[#050101] overflow-x-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Career Journey Overview */}
      <CareerJourneySection />

      {/* 3. My Work Showcase */}
      <MyWorkSection />

      {/* 4. Experience & Education Timeline */}
      <ExperienceEducationSection />

      {/* 5. Tools Integration Cloud */}
      <ToolsIntegrationSection />

      {/* 6. About Me & Journey Bento */}
      <AboutMeSection />

      {/* 7. Testimonials Feedback */}
      <TestimonialsSection />

      {/* 8. Inner Circle CTA */}
      <InnerCircleCtaSection />

      {/* 9. Vision & Footer */}
      <FooterSection />
    </div>
  );
}