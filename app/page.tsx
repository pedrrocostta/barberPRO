"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
import { Benefits } from "@/components/Benefits";
import { Features } from "@/components/Features";
import { Dashboard } from "@/components/Dashboard";
import { MobileApp } from "@/components/MobileApp";
import { Pricing } from "@/components/Pricing";
import { Comparison } from "@/components/Comparison";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  useEffect(() => {
    // Lenis smooth scroll
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;

    const initLenis = async () => {
      try {
        const LenisLib = await import("lenis");
        const Lenis = LenisLib.default;
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          smoothWheel: true,
        } as ConstructorParameters<typeof Lenis>[0]);

        function raf(time: number) {
          lenis?.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      } catch {
        // Lenis not available, use native scroll
      }
    };

    initLenis();
    return () => {
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Benefits />
        <Features />
        <Dashboard />
        <MobileApp />
        <Pricing />
        <Comparison />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
