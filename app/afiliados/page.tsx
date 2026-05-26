"use client";

import { motion } from "framer-motion";
import {
  ImageIcon,
  FileText,
  Video,
  BookOpen,
  Target,
  Palette,
  Layers,
  BarChart3,
  ArrowRight,
  Star,
  Zap,
  Users,
  TrendingUp,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";

/* ─── WhatsApp group link ─── */
const WA_GROUP = "https://chat.whatsapp.com/DS7MPqN5jrY3uEgf8ZbGwR";

/* ─── Materials affiliates receive ─── */
const materials = [
  {
    icon: ImageIcon,
    title: "Artes Premium",
    desc: "Designs profissionais prontos para postar.",
  },
  {
    icon: FileText,
    title: "Copies Prontas",
    desc: "Textos de vendas validados que convertem.",
  },
  {
    icon: Video,
    title: "Hooks para Reels",
    desc: "Ganchos que prendem a atenção nos primeiros 3 segundos.",
  },
  {
    icon: BookOpen,
    title: "Roteiros Estratégicos",
    desc: "Scripts completos para vídeos de alta performance.",
  },
  {
    icon: Target,
    title: "CTAs de Conversão",
    desc: "Chamadas para ação que geram cliques e vendas.",
  },
  {
    icon: Palette,
    title: "Brand Guidelines",
    desc: "Manual completo da marca BarberPro para usar certo.",
  },
  {
    icon: Layers,
    title: "Mockups Profissionais",
    desc: "Templates editáveis para apresentar o produto.",
  },
  {
    icon: BarChart3,
    title: "Materiais Meta Ads",
    desc: "Criativos otimizados para Facebook e Instagram Ads.",
  },
];

/* ─── Stats ─── */
const stats = [
  { icon: Users,      value: "3.000+", label: "Barbearias na plataforma" },
  { icon: TrendingUp, value: "R$150+", label: "Por indicação convertida" },
  { icon: Zap,        value: "24h",    label: "Para receber seus materiais" },
];

/* ─── Page ─── */
export default function Afiliados() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: "#0A0A0A" }}>

      {/* Backgrounds */}
      <div className="absolute inset-0 hero-grid opacity-[0.10] pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center top, rgba(255,122,0,0.11) 0%, transparent 65%)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF7A00]/25 to-transparent" />

      {/* Floating particles */}
      {[
        { w: 2, l: "8%",  t: "15%", o: 0.12, dur: 6   },
        { w: 3, l: "88%", t: "22%", o: 0.10, dur: 7   },
        { w: 2, l: "15%", t: "70%", o: 0.08, dur: 5.5 },
        { w: 3, l: "78%", t: "65%", o: 0.11, dur: 6.5 },
        { w: 2, l: "50%", t: "85%", o: 0.09, dur: 7.5 },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#FF7A00] pointer-events-none"
          style={{
            width: p.w, height: p.w,
            left: p.l, top: p.t, opacity: p.o,
            animation: `float ${p.dur}s ease-in-out ${i * 0.8}s infinite`,
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center px-4 py-12 sm:py-16">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <Logo size={32} />
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 badge-orange mb-6">
            <Star className="w-3 h-3 fill-[#FF7A00]" />
            Programa de Afiliados
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5"
            style={{ letterSpacing: "-0.035em", lineHeight: 1.08 }}
          >
            Indique. Ganhe.
            <br />
            <span className="gradient-text">Cresça com a gente.</span>
          </h1>

          {/* Motivational copy */}
          <p className="text-base sm:text-lg text-[#555] leading-relaxed max-w-xl mx-auto mb-3">
            Você acaba de dar o primeiro passo para fazer parte de algo maior.
            O mercado de barbearias está em expansão — e você pode liderar essa transformação.
          </p>
          <p className="text-sm text-[#3A3A3A] max-w-lg mx-auto">
            Cada barbearia que você indicar ao BarberPro é uma história de sucesso que você ajudou a escrever.
            E é claro — você é recompensado por isso.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="grid grid-cols-3 gap-3 sm:gap-5 w-full max-w-2xl mb-12"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-4 sm:p-5 text-center"
              style={{
                background: "rgba(255,255,255,0.018)",
                border: "1px solid rgba(255,255,255,0.055)",
              }}
            >
              <s.icon className="w-4 h-4 text-[#FF7A00] mx-auto mb-2" />
              <div className="text-lg sm:text-xl font-black text-white mb-0.5" style={{ letterSpacing: "-0.02em" }}>
                {s.value}
              </div>
              <div className="text-[10px] sm:text-xs text-[#444] leading-tight">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Materials section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
          className="w-full max-w-2xl mb-12"
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#FF7A00]/20" />
            <span className="text-[11px] font-semibold text-[#FF7A00]/50 uppercase tracking-[0.16em]">
              O que você recebe
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#FF7A00]/20" />
          </div>

          {/* Materials grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {materials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 + i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-3.5 rounded-2xl p-4 group transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.018)",
                  border: "1px solid rgba(255,255,255,0.045)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,122,0,0.2)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,122,0,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.045)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.018)";
                }}
              >
                {/* Icon */}
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "rgba(255,122,0,0.08)",
                    border: "1px solid rgba(255,122,0,0.14)",
                  }}
                >
                  <item.icon className="w-4 h-4 text-[#FF7A00]" />
                </div>
                {/* Text */}
                <div>
                  <div className="text-sm font-semibold text-white mb-0.5">{item.title}</div>
                  <div className="text-xs text-[#444] leading-relaxed">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
          className="w-full max-w-sm text-center"
        >
          {/* Motivational line above button */}
          <p className="text-sm text-[#444] mb-5 leading-relaxed">
            O grupo já está reunindo os melhores afiliados.
            <br />
            <span className="text-[#FF7A00]">Sua vaga está esperando por você.</span>
          </p>

          {/* WhatsApp CTA */}
          <motion.a
            href={WA_GROUP}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-3 w-full py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-bold text-white mb-3"
            style={{
              background: "linear-gradient(135deg, #25D366 0%, #1DA851 100%)",
              boxShadow: "0 0 48px rgba(37,211,102,0.38), 0 8px 24px rgba(0,0,0,0.3)",
            }}
          >
            {/* WhatsApp SVG */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Entrar no Grupo de Afiliados
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          <p className="text-xs text-[#2A2A2A]">
            Grupo exclusivo · Acesso gratuito · Materiais liberados imediatamente
          </p>
        </motion.div>

        {/* Bottom motivational message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-14 text-center max-w-sm"
        >
          <div
            className="rounded-2xl px-6 py-5"
            style={{
              background: "rgba(255,122,0,0.04)",
              border: "1px solid rgba(255,122,0,0.1)",
            }}
          >
            <p className="text-sm text-[#444] leading-relaxed italic">
              "O sucesso não é um destino, é uma jornada compartilhada.
              Bem-vindo à nossa comunidade — agora você faz parte disso."
            </p>
            <p className="text-xs text-[#FF7A00]/50 mt-3 font-medium">— Equipe BarberPro</p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="text-xs text-[#1E1E1E] mt-10"
        >
          © {new Date().getFullYear()} BarberPro · Todos os direitos reservados
        </motion.p>
      </div>
    </div>
  );
}
