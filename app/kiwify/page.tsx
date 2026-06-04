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
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/* ─── Kiwify payment links ─── */
const MONTHLY_URL   = "https://pay.kiwify.com.br/kgh9YgL";
const QUARTERLY_URL = "https://pay.kiwify.com.br/tq7jbMD";
const ANNUAL_URL    = "https://pay.kiwify.com.br/ob2n8VC";

export default function KiwifyPage() {
  useEffect(() => {
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
    return () => { lenis?.destroy(); };
  }, []);

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className="flex flex-col pb-20 lg:pb-0">
        <div className="order-1"><Hero /></div>
        <div className="order-2"><Clients /></div>
        <div className="order-3 lg:order-6">
          <Pricing
            monthlyUrl={MONTHLY_URL}
            quarterlyUrl={QUARTERLY_URL}
            annualUrl={ANNUAL_URL}
          />
        </div>
        <div className="order-4 lg:order-3"><HowItWorks /></div>
        <div className="order-5 lg:order-4"><Benefits /></div>
        <div className="order-6 lg:order-5"><Features /></div>
        <div className="order-7 lg:order-7"><Dashboard /></div>
        <div className="order-8 lg:order-8"><MobileApp /></div>
        <div className="order-9"><Testimonials /></div>
        <div className="order-10"><FAQ /></div>
        <div className="order-11"><CTA /></div>
      </main>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden mobile-sticky-cta px-4 pt-3 pb-4">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}
          className="w-full btn-primary py-4 rounded-2xl text-base font-bold text-white flex items-center justify-center gap-2.5 shadow-[0_0_28px_rgba(255,122,0,0.35)]"
        >
          Solicitar acesso
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
      <Footer />
    </>
  );
}
