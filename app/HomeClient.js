"use client";

import { useEffect } from "react";
import Hero from "@layouts/components/Hero";
import {
  PlanningSection,
  PricingSection,
  PracticesSection,
  ClubSection,
  TestimonialsSection,
  FaqSection,
  ContactSection,
} from "@layouts/sections";
import { handleInitialScroll } from "@lib/utils/scrollToElement";

export default function HomeClient() {
  useEffect(() => {
    handleInitialScroll();
  }, []);

  return (
    <main>
      <Hero />
      <PlanningSection />
      <PricingSection />
      <PracticesSection />
      <ClubSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}

