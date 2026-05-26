"use client";

import { motion } from "framer-motion";
import { Send, SlidersHorizontal, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    Icon: Send,
    title: "Solicite acesso",
    desc: "Preencha o formulário. Nossa equipe entra em contato em até 24h para iniciar o processo de ativação.",
    color: "rgba(255,122,0,1)",
    glow: "rgba(255,122,0,0.18)",
    border: "rgba(255,122,0,0.22)",
    bg: "rgba(255,122,0,0.08)",
  },
  {
    number: "02",
    Icon: SlidersHorizontal,
    title: "Configure sua barbearia",
    desc: "Personalize o sistema com seus serviços, equipe e identidade. Nossa equipe te guia em cada etapa do setup.",
    color: "rgba(255,153,51,1)",
    glow: "rgba(255,122,0,0.14)",
    border: "rgba(255,122,0,0.18)",
    bg: "rgba(255,122,0,0.06)",
  },
  {
    number: "03",
    Icon: TrendingUp,
    title: "Gerencie e cresça",
    desc: "Agendamentos, pagamentos e relatórios em um só lugar. Tudo automatizado para você focar no que importa.",
    color: "rgba(255,180,80,1)",
    glow: "rgba(255,122,0,0.12)",
    border: "rgba(255,122,0,0.14)",
    bg: "rgba(255,122,0,0.04)",
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      {/* Ambient center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(255,122,0,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 lg:mb-16"
        >
          <div className="badge-orange inline-flex mb-5">Como funciona</div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Do zero ao{" "}
            <span className="gradient-text">profissional</span>
            <br />
            em 3 passos.
          </h2>
          <p className="text-base text-[#555] max-w-sm mx-auto">
            Simples, rápido e com suporte em cada etapa.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="absolute top-[52px] left-[calc(16.66%+32px)] right-[calc(16.66%+32px)] h-px hidden lg:block pointer-events-none"
            style={{
              background: "linear-gradient(90deg, rgba(255,122,0,0.35), rgba(255,122,0,0.18), rgba(255,122,0,0.10))",
            }}
          >
            {/* Traveling dot on the line */}
            <motion.div
              animate={{ x: ["0%", "100%", "0%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
              style={{ background: "#FF7A00", boxShadow: "0 0 8px rgba(255,122,0,0.8)", left: 0 }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="relative group"
              >
                {/* Card */}
                <div
                  className="rounded-[20px] p-6 lg:p-7 h-full transition-all duration-300"
                  style={{
                    background: "linear-gradient(145deg, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0.008) 100%)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
                  }}
                >
                  {/* Number + Icon row */}
                  <div className="flex items-center gap-4 mb-6">
                    {/* Step number */}
                    <div
                      className="text-[11px] font-black tracking-[0.12em] tabular-nums"
                      style={{ color: "rgba(255,122,0,0.25)" }}
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{
                        background: step.bg,
                        border: `1px solid ${step.border}`,
                        boxShadow: `0 0 20px ${step.glow}`,
                      }}
                    >
                      <step.Icon className="w-5 h-5" style={{ color: step.color }} />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-3" style={{ letterSpacing: "-0.02em" }}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#555] leading-relaxed">{step.desc}</p>

                  {/* Bottom accent line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-0 left-6 right-6 h-px origin-left"
                    style={{
                      background: `linear-gradient(90deg, ${step.color}40, transparent)`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-[#444] mb-5">
            Ativação em até{" "}
            <span className="text-[#FF7A00] font-semibold">24 horas</span>
            {" "}após a solicitação.
          </p>
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary px-8 py-3.5 rounded-2xl text-sm font-bold text-white inline-flex items-center gap-2 shadow-[0_0_24px_rgba(255,122,0,0.28)]"
          >
            Começar agora
            <TrendingUp className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
