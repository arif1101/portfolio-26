import React from "react";
import { HeroSection } from "@/components/portfolio/hero-section";
import { CareerJourneySection } from "@/components/portfolio/career-journey-section";
import { MyWorkSection } from "@/components/portfolio/my-work-section";
import { ExperienceEducationSection } from "@/components/portfolio/experience-education-section";
import { ToolsIntegrationSection } from "@/components/portfolio/tools-integration-section";
import { AboutMeSection } from "@/components/portfolio/about-me-section";
import { TestimonialsSection } from "@/components/portfolio/testimonials-section";
import { InnerCircleCtaSection } from "@/components/portfolio/inner-circle-cta-section";
import { FooterSection } from "@/components/portfolio/footer-section";

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
