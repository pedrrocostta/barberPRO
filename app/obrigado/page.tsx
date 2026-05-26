"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, Zap, Settings, Rocket } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

/* ─── WhatsApp config ─── */
const WA_NUMBER = "5531982802872";
const WA_MESSAGE = encodeURIComponent(
  "Olá! Acabei de realizar o pagamento do BarberPro e gostaria de ativar minha conta! 🚀"
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

/* ─── Steps ─── */
const steps = [
  {
    icon: MessageCircle,
    title: "Acesse o WhatsApp",
    desc: "Clique no botão e caia direto no nosso assistente",
  },
  {
    icon: Settings,
    title: "Configure com nossa equipe",
    desc: "Em até 24h tudo estará pronto para usar",
  },
  {
    icon: Rocket,
    title: "Comece a receber agendamentos",
    desc: "Sua barbearia profissional no ar",
  },
];

/* ─── Animated checkmark SVG ─── */
function AnimatedCheck() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer pulse ring */}
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-32 h-32 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,122,0,0.18) 0%, transparent 70%)" }}
      />
      {/* Inner glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-20 h-20 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,122,0,0.22) 0%, transparent 70%)" }}
      />
      {/* SVG circle + check */}
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="relative z-10">
        {/* Background circle */}
        <circle cx="40" cy="40" r="38" fill="rgba(255,122,0,0.08)" stroke="rgba(255,122,0,0.2)" strokeWidth="1" />
        {/* Animated circle stroke */}
        <motion.circle
          cx="40"
          cy="40"
          r="34"
          stroke="#FF7A00"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="213.6"
          initial={{ strokeDashoffset: 213.6 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{ transformOrigin: "center", rotate: "-90deg" }}
        />
        {/* Animated checkmark */}
        <motion.path
          d="M24 40 L35 51 L56 30"
          stroke="#FF7A00"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="44"
          initial={{ strokeDashoffset: 44 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.95 }}
        />
      </svg>
    </div>
  );
}

/* ─── Page ─── */
export default function Obrigado() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* Background glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(255,122,0,0.09) 0%, transparent 65%)",
        }}
      />
      <div className="absolute inset-0 hero-grid opacity-[0.12] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF7A00]/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 py-16 text-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <Logo size={32} />
        </motion.div>

        {/* Check animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mb-8"
        >
          <AnimatedCheck />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="mb-4"
        >
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3"
            style={{ letterSpacing: "-0.03em" }}
          >
            Pagamento{" "}
            <span className="gradient-text">confirmado!</span>
          </h1>
          <p className="text-base sm:text-lg text-[#555] max-w-sm mx-auto leading-relaxed">
            Sua conta BarberPro está sendo preparada.
            <br />
            O próximo passo é simples — fale com a gente agora.
          </p>
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
          className="mt-8 mb-4 w-full max-w-xs sm:max-w-sm"
        >
          <motion.a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-3 w-full py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-bold text-white"
            style={{
              background: "linear-gradient(135deg, #25D366 0%, #1DA851 100%)",
              boxShadow:
                "0 0 40px rgba(37,211,102,0.35), 0 8px 24px rgba(0,0,0,0.3)",
            }}
          >
            {/* WhatsApp icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Ativar minha conta agora
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-xs text-[#333] mt-3"
          >
            Nossa equipe responde em até{" "}
            <span className="text-[#FF7A00]">24 horas</span>
          </motion.p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center gap-4 w-full max-w-xs sm:max-w-sm my-8"
        >
          <div className="flex-1 h-px bg-white/[0.05]" />
          <span className="text-xs text-[#2A2A2A] uppercase tracking-widest">próximos passos</span>
          <div className="flex-1 h-px bg-white/[0.05]" />
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 rounded-2xl p-4 text-left"
              style={{
                background: "rgba(255,255,255,0.018)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                {/* Number */}
                <span
                  className="text-[11px] font-black tabular-nums"
                  style={{ color: "rgba(255,122,0,0.3)" }}
                >
                  0{i + 1}
                </span>
                {/* Icon */}
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(255,122,0,0.08)",
                    border: "1px solid rgba(255,122,0,0.14)",
                  }}
                >
                  <step.icon className="w-4 h-4 text-[#FF7A00]" />
                </div>
              </div>
              <p className="text-sm font-semibold text-white mb-1">{step.title}</p>
              <p className="text-xs text-[#444] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-xs text-[#252525] mt-12"
        >
          Dúvidas? Fale diretamente pelo WhatsApp{" "}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF7A00]/50 hover:text-[#FF7A00] transition-colors"
          >
            (31) 98280-2872
          </a>
        </motion.p>
      </div>
    </div>
  );
}
