"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import { LogoIcon } from "@/components/ui/Logo";

const trustItems = [
  { icon: Shield, text: "Dados protegidos com criptografia" },
  { icon: Award, text: "Implementação assistida pela equipe" },
  { icon: Users, text: "Suporte dedicado em português" },
];

/* Static particle positions — no random on each render */
const PARTICLES = [
  { w: 2, l: "8%", t: "12%", o: 0.1, dur: 5, delay: 0 },
  { w: 3, l: "23%", t: "28%", o: 0.14, dur: 6, delay: 1 },
  { w: 2, l: "41%", t: "7%", o: 0.09, dur: 7, delay: 0.5 },
  { w: 3, l: "57%", t: "72%", o: 0.12, dur: 5.5, delay: 2 },
  { w: 2, l: "68%", t: "18%", o: 0.1, dur: 6.5, delay: 0.8 },
  { w: 3, l: "79%", t: "55%", o: 0.14, dur: 5, delay: 1.5 },
  { w: 2, l: "88%", t: "38%", o: 0.09, dur: 7, delay: 0.3 },
  { w: 3, l: "14%", t: "65%", o: 0.12, dur: 6, delay: 2.2 },
  { w: 2, l: "33%", t: "82%", o: 0.1, dur: 5.5, delay: 1.1 },
  { w: 3, l: "93%", t: "22%", o: 0.11, dur: 6.5, delay: 0.6 },
];

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* Parallax — only opacity + scale, GPU-friendly */
  const orb1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.1, 0.92]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} className="py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />

      {/* Main center glow */}
      <motion.div
        style={{
          scale: orb1Scale,
          background: "radial-gradient(ellipse at center, rgba(255,122,0,0.15) 0%, rgba(255,122,0,0.05) 45%, transparent 70%)",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
      />

      {/* Secondary orb with parallax */}
      <motion.div
        style={{
          y: orb2Y,
          background: "radial-gradient(circle, rgba(255,153,51,0.07) 0%, transparent 65%)",
          filter: "blur(32px)",
        }}
        className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
      />

      {/* Grid */}
      <div className="absolute inset-0 hero-grid opacity-12 pointer-events-none" />

      {/* Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF7A00]/18 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF7A00]/18 to-transparent" />

      {/* Particles — CSS animation only, no Framer Motion per particle */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#FF7A00] pointer-events-none"
          style={{
            width: p.w + "px",
            height: p.w + "px",
            left: p.l,
            top: p.t,
            opacity: p.o,
            animation: `float ${p.dur}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Logo */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center justify-center mx-auto mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#FF7A00]/15 blur-2xl scale-[1.4] animate-pulse-glow" />
              <LogoIcon size={88} glow />
            </div>
          </motion.div>

          {/* Badge */}
          <div className="flex justify-center mb-7">
            <div className="badge-orange inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] animate-pulse" />
              Plataforma profissional — acesso sob solicitação
            </div>
          </div>

          {/* Headline */}
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-[76px] font-black tracking-tight leading-[1.06] mb-7"
            style={{ letterSpacing: "-0.034em" }}
          >
            Eleve o padrão
            <br />
            <span className="gradient-text glow-orange-text">da sua barbearia</span>
            <br />
            para outro nível.
          </h2>

          <p className="text-xl text-[#666] max-w-xl mx-auto mb-12 leading-relaxed">
            Mais de 3.000 barbearias já escolheram o BarberPro como plataforma
            de gestão profissional. Solicite acesso e conheça a solução completa.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <motion.button
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary px-12 py-5 rounded-2xl text-lg font-bold text-white flex items-center gap-3 shadow-[0_0_48px_rgba(255,122,0,0.38),0_6px_24px_rgba(255,122,0,0.16)] group"
            >
              Solicitar acesso
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary px-10 py-5 rounded-2xl text-lg font-semibold text-white"
            >
              Falar com consultor
            </motion.button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {trustItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center gap-2 text-sm text-[#444]"
              >
                <item.icon className="w-3.5 h-3.5 text-[#FF7A00]/55" />
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
