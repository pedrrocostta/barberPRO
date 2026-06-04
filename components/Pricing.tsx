"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  Sparkles,
  Flame,
  Globe,
  Smartphone,
  Tablet,
  Wand2,
  Server,
  Gift,
} from "lucide-react";
import { StripePricingButton } from "@/components/ui/StripePricingButton";

/* ─────────────────────────────────────────────
   Payment URLs — defaults (Cakto)
───────────────────────────────────────────── */
const DEFAULT_MONTHLY_URL   = "https://pay.cakto.com.br/rukuppq_900664";
const DEFAULT_QUARTERLY_URL = "https://pay.cakto.com.br/geyz34y";
const DEFAULT_ANNUAL_URL    = "https://pay.cakto.com.br/34gc6ai";

/* ─────────────────────────────────────────────
   Plan features
───────────────────────────────────────────── */
const monthlyFeatures = [
  "Agendamento inteligente",
  "Gestão completa",
  "WhatsApp automático",
  "Dashboard premium",
  "Clientes ilimitados",
];

const quarterlyExtras = [
  "Tudo do plano mensal",
  "Melhor valor mensal",
  "Prioridade em atualizações",
  "Melhor equilíbrio custo-benefício",
];

const annualExtras = [
  "Tudo do trimestral",
  "Prioridade nas personalizações",
  "Melhor investimento de longo prazo",
];

/* Bônus inclusos apenas no anual */
const annualBundle = [
  { icon: Server, label: "VPS + infraestrutura premium" },
  { icon: Globe,  label: "Domínio personalizado" },
  { icon: Gift,   label: "Onboarding assistido pela equipe" },
];

/* ─────────────────────────────────────────────
   Add-ons
───────────────────────────────────────────── */
const addons = [
  {
    id: "vps",
    Icon: Server,
    title: "Hospedagem VPS",
    desc: "Infraestrutura dedicada e premium para sua plataforma BarberPro. Incluso gratuitamente no plano Anual.",
    price: "",
    period: "",
    cta: "Consultar valor",
  },
  {
    id: "domain",
    Icon: Globe,
    title: "Domínio personalizado",
    desc: "Acesse com seu próprio domínio. Identidade completa para sua barbearia. Incluso no plano Anual.",
    price: "R$50",
    period: "/mês",
    cta: null,
  },
  {
    id: "google",
    Icon: Smartphone,
    title: "Publicação Google Play",
    desc: "Seu app publicado na Google Play Store com identidade visual da sua marca.",
    price: "R$150",
    period: "",
    cta: null,
  },
  {
    id: "apple",
    Icon: Tablet,
    title: "Publicação Apple Store",
    desc: "Seu app disponível na App Store, aprovado e publicado pela nossa equipe.",
    price: "R$500",
    period: "",
    cta: null,
  },
  {
    id: "custom",
    Icon: Wand2,
    title: "Personalização exclusiva",
    desc: "Adaptamos o sistema completamente à identidade visual e operação da sua barbearia.",
    price: "Sob consulta",
    period: "",
    cta: "Falar com consultor",
  },
] as const;

/* ─────────────────────────────────────────────
   Feature row
───────────────────────────────────────────── */
function FeatureItem({
  text,
  delay = 0,
  accent = "dim",
}: {
  text: string;
  delay?: number;
  accent?: "orange" | "gold" | "dim";
}) {
  const colors = {
    orange: { bg: "rgba(255,122,0,0.14)", border: "rgba(255,122,0,0.28)", text: "rgba(255,153,51,0.9)" },
    gold:   { bg: "rgba(201,168,76,0.12)", border: "rgba(201,168,76,0.25)", text: "rgba(201,168,76,0.85)" },
    dim:    { bg: "rgba(255,122,0,0.07)", border: "rgba(255,122,0,0.15)", text: "rgba(179,179,179,1)" },
  };
  const c = colors[accent];

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-3"
    >
      <div
        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
        style={{ background: c.bg, border: `1px solid ${c.border}` }}
      >
        <Check className="w-2.5 h-2.5 text-[#FF7A00]" />
      </div>
      <span className="text-sm leading-snug" style={{ color: c.text }}>
        {text}
      </span>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Add-on card with toggle
───────────────────────────────────────────── */
function AddonCard({ addon, index }: { addon: (typeof addons)[number]; index: number }) {
  const [active, setActive] = useState(false);
  const { Icon } = addon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => !addon.cta && setActive(!active)}
      className={`relative rounded-2xl p-5 transition-all duration-300 ${!addon.cta ? "cursor-pointer" : "cursor-default"}`}
      style={{
        background: active
          ? "linear-gradient(135deg, rgba(255,122,0,0.07) 0%, rgba(255,122,0,0.02) 100%)"
          : "rgba(255,255,255,0.018)",
        border: active ? "1px solid rgba(255,122,0,0.32)" : "1px solid rgba(255,255,255,0.055)",
        boxShadow: active
          ? "0 0 24px rgba(255,122,0,0.07), inset 0 1px 0 rgba(255,255,255,0.04)"
          : "inset 0 1px 0 rgba(255,255,255,0.025)",
      }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{
              background: active ? "rgba(255,122,0,0.14)" : "rgba(255,255,255,0.04)",
              border: active ? "1px solid rgba(255,122,0,0.22)" : "1px solid rgba(255,255,255,0.06)",
              transition: "all 0.3s ease",
            }}
          >
            <Icon className="w-4 h-4 transition-colors duration-300" style={{ color: active ? "#FF7A00" : "#555" }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-white mb-1">{addon.title}</div>
            <div className="text-xs text-[#555] leading-relaxed">{addon.desc}</div>
          </div>
        </div>

        {addon.cta ? (
          <motion.a
            href="#"
            onClick={(e) => { e.stopPropagation(); document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" }); }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 text-xs font-semibold text-[#FF7A00] border border-[#FF7A00]/25 px-3 py-1.5 rounded-xl transition-all whitespace-nowrap"
            style={{ background: "rgba(255,122,0,0)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,122,0,0.07)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,122,0,0)")}
          >
            {addon.cta}
          </motion.a>
        ) : (
          <div
            className="shrink-0 w-10 h-6 rounded-full relative"
            style={{
              background: active ? "#FF7A00" : "rgba(255,255,255,0.08)",
              border: active ? "1px solid #FF7A00" : "1px solid rgba(255,255,255,0.1)",
              transition: "all 0.3s ease",
            }}
          >
            <motion.div
              animate={{ x: active ? 16 : 2 }}
              transition={{ type: "spring", stiffness: 420, damping: 30 }}
              className="absolute top-[3px] w-[14px] h-[14px] bg-white rounded-full shadow-sm"
              style={{ left: 0 }}
            />
          </div>
        )}
      </div>

      <AnimatePresence initial={false}>
        {active && !addon.cta && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 14 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-3.5 border-t border-[#FF7A00]/12 flex items-center justify-between">
              <span className="text-xs text-[#444]">Valor do recurso</span>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black text-[#FF7A00]">{addon.price}</span>
                {addon.period && <span className="text-xs text-[#555]">{addon.period}</span>}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main section
───────────────────────────────────────────── */
interface PricingProps {
  monthlyUrl?:   string;
  quarterlyUrl?: string;
  annualUrl?:    string;
  useStripe?:    boolean;
}

export function Pricing({
  monthlyUrl   = DEFAULT_MONTHLY_URL,
  quarterlyUrl = DEFAULT_QUARTERLY_URL,
  annualUrl    = DEFAULT_ANNUAL_URL,
  useStripe    = false,
}: PricingProps = {}) {
  const MONTHLY_URL   = monthlyUrl;
  const QUARTERLY_URL = quarterlyUrl;
  const ANNUAL_URL    = annualUrl;
  return (
    <section id="planos" className="py-16 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0D0D0D]" />
      <div className="absolute inset-0 orange-gradient-bg pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 lg:mb-16"
        >
          <div className="badge-orange inline-flex mb-5">Planos & Preços</div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Simples.{" "}
            <span className="gradient-text">Profissional.</span>
            <br />
            Sem surpresas.
          </h2>
          <p className="text-base lg:text-lg text-[#555] max-w-md mx-auto">
            Uma plataforma. Três escolhas.
            <br />
            Toda a infraestrutura premium à sua disposição.
          </p>
        </motion.div>

        {/* ── Plans grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 mb-6 items-start">

          {/* ═══════════════════════ MENSAL ═══════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            style={{ paddingTop: "22px" }}
          >
            {/* Spacer to align with badged cards on desktop */}
            <div className="h-[22px] hidden md:block" />

            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[22px] p-6 lg:p-7"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <div className="text-[11px] font-semibold text-[#3A3A3A] uppercase tracking-[0.15em] mb-6">Mensal</div>

              <div className="mb-1">
                <span className="text-[44px] lg:text-[50px] font-black text-white leading-none" style={{ letterSpacing: "-0.04em" }}>
                  R$99
                </span>
                <span className="text-[#3A3A3A] text-sm font-medium ml-1.5">/mês</span>
              </div>
              <p className="text-xs text-[#333] mb-7">VPS disponível como add-on</p>

              {useStripe ? (
                <StripePricingButton
                  plan="mensal"
                  label="Assinar agora"
                  className="w-full py-3 rounded-xl text-sm font-bold mb-7 flex items-center justify-center gap-2 text-white btn-secondary"
                />
              ) : (
                <motion.a
                  href={MONTHLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl text-sm font-bold mb-7 flex items-center justify-center gap-2 text-white btn-secondary"
                >
                  Começar agora
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.a>
              )}

              <div className="h-px bg-white/[0.04] mb-6" />

              <div className="space-y-3">
                {monthlyFeatures.map((f, i) => (
                  <FeatureItem key={i} text={f} delay={i * 0.04} accent="dim" />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ═══════════════════════ TRIMESTRAL — HERO ═══════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            style={{ paddingTop: "22px" }}
          >
            {/* Badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap">
              <div
                className="text-white text-[11px] font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5"
                style={{
                  background: "linear-gradient(135deg, #FF8C1A 0%, #FF7A00 55%, #E06D00 100%)",
                  boxShadow: "0 0 28px rgba(255,122,0,0.65), 0 4px 14px rgba(0,0,0,0.35)",
                }}
              >
                <Flame className="w-3 h-3" />
                MAIS ESCOLHIDO
              </div>
            </div>

            {/* Breathing glow */}
            <motion.div
              animate={{ opacity: [0.32, 0.65, 0.32] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-6 rounded-[40px] pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, rgba(255,122,0,0.2) 0%, transparent 68%)" }}
            />

            <div
              className="relative rounded-[22px] overflow-hidden"
              style={{
                border: "1px solid rgba(255,122,0,0.38)",
                boxShadow: "0 0 0 1px rgba(255,122,0,0.07), 0 24px 64px rgba(0,0,0,0.55), 0 0 40px rgba(255,122,0,0.14)",
              }}
            >
              {/* Living line */}
              <div className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none" style={{ height: "1px", zIndex: 10 }}>
                <motion.div
                  animate={{ x: ["-130%", "330%"] }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                  style={{
                    position: "absolute", top: 0, left: 0, width: "30%", height: "100%",
                    background: "linear-gradient(90deg, transparent, rgba(255,180,80,0.7), rgba(255,240,200,0.55), rgba(255,180,80,0.7), transparent)",
                  }}
                />
              </div>

              <div className="absolute inset-0" style={{ background: "linear-gradient(155deg, rgba(255,122,0,0.12) 0%, #130D00 30%, #0F0F0F 100%)" }} />
              <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 50% at 50% 0%, rgba(255,122,0,0.14) 0%, transparent 65%)" }} />

              <div className="relative z-10 p-6 lg:p-7">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-[11px] font-semibold text-[#FF7A00]/65 uppercase tracking-[0.15em]">Trimestral</div>
                  <div
                    className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(255,122,0,0.12)", border: "1px solid rgba(255,122,0,0.25)", color: "#FF9940" }}
                  >
                    Economize R$47
                  </div>
                </div>

                <div className="mb-1">
                  <span className="text-[44px] lg:text-[50px] font-black text-white leading-none" style={{ letterSpacing: "-0.04em" }}>
                    R$250
                  </span>
                  <span className="text-[#555] text-sm font-medium ml-1.5">/trimestre</span>
                </div>
                <div className="text-xs font-medium mb-1" style={{ color: "rgba(255,122,0,0.6)" }}>
                  equivalente a R$83/mês
                </div>
                <p className="text-xs text-[#333] mb-7">VPS disponível como add-on</p>

                {useStripe ? (
                  <StripePricingButton
                    plan="trimestral"
                    label="Assinar agora"
                    className="w-full py-3.5 rounded-xl text-sm font-bold mb-7 flex items-center justify-center gap-2 btn-primary text-white shadow-[0_0_32px_rgba(255,122,0,0.35)]"
                  />
                ) : (
                  <motion.a
                    href={QUARTERLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 rounded-xl text-sm font-bold mb-7 flex items-center justify-center gap-2 btn-primary text-white shadow-[0_0_32px_rgba(255,122,0,0.35)]"
                  >
                    Assinar agora
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.a>
                )}

                <div className="h-px mb-6" style={{ background: "linear-gradient(90deg, transparent, rgba(255,122,0,0.25), transparent)" }} />

                <div className="space-y-3">
                  {monthlyFeatures.map((f, i) => (
                    <FeatureItem key={i} text={f} delay={i * 0.04} accent="dim" />
                  ))}
                </div>

                <div className="mt-4 pt-4 space-y-3" style={{ borderTop: "1px solid rgba(255,122,0,0.12)" }}>
                  {quarterlyExtras.map((f, i) => (
                    <FeatureItem key={i} text={f} delay={0.3 + i * 0.05} accent="orange" />
                  ))}
                </div>

                <p className="mt-5 text-[11px] leading-relaxed text-center" style={{ color: "rgba(255,122,0,0.38)" }}>
                  O plano preferido pelas barbearias que desejam<br />crescer com previsibilidade.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ═══════════════════════ ANUAL — PREMIUM ═══════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            style={{ paddingTop: "22px" }}
          >
            {/* Badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap">
              <div
                className="text-[11px] font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%)",
                  border: "1px solid rgba(201,168,76,0.35)",
                  color: "#C9A84C",
                  boxShadow: "0 0 18px rgba(201,168,76,0.18), 0 2px 8px rgba(0,0,0,0.3)",
                }}
              >
                <Sparkles className="w-3 h-3" />
                MELHOR VALOR
              </div>
            </div>

            {/* Subtle glow */}
            <motion.div
              animate={{ opacity: [0.18, 0.38, 0.18] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 rounded-[38px] pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.10) 0%, transparent 70%)" }}
            />

            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-[22px] overflow-hidden"
              style={{
                border: "1px solid rgba(201,168,76,0.18)",
                boxShadow: "0 0 0 1px rgba(201,168,76,0.04), 0 20px 52px rgba(0,0,0,0.48), 0 0 24px rgba(201,168,76,0.06)",
              }}
            >
              <div className="absolute inset-0" style={{ background: "linear-gradient(150deg, rgba(201,168,76,0.07) 0%, #0F0C00 28%, #0F0F0F 100%)" }} />
              <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 60%)" }} />

              <div className="relative z-10 p-6 lg:p-7">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.15em]" style={{ color: "rgba(201,168,76,0.6)" }}>
                    Anual
                  </div>
                  <div
                    className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                    style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.18)", color: "#34d399" }}
                  >
                    Economize 2 meses
                  </div>
                </div>

                <div className="mb-1">
                  <span className="text-[44px] lg:text-[50px] font-black text-white leading-none" style={{ letterSpacing: "-0.04em" }}>
                    R$1.500
                  </span>
                  <span className="text-[#3A3A3A] text-sm font-medium ml-1.5">/ano</span>
                </div>
                <div className="text-xs font-medium mb-1" style={{ color: "rgba(201,168,76,0.5)" }}>
                  equivalente a R$125/mês
                </div>
                <p className="text-xs text-[#333] mb-7">Pacote completo — tudo incluso</p>

                {useStripe ? (
                  <StripePricingButton
                    plan="anual"
                    label="Solicitar acesso"
                    className="w-full py-3.5 rounded-xl text-sm font-bold mb-7 flex items-center justify-center gap-2 text-white"
                    style={{
                      background: "linear-gradient(135deg, rgba(201,168,76,0.18) 0%, rgba(201,168,76,0.08) 100%)",
                      border: "1px solid rgba(201,168,76,0.28)",
                      boxShadow: "0 0 18px rgba(201,168,76,0.1)",
                      transition: "all 0.25s ease",
                    }}
                  />
                ) : (
                  <motion.a
                    href={ANNUAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 rounded-xl text-sm font-bold mb-7 flex items-center justify-center gap-2 text-white"
                    style={{
                      background: "linear-gradient(135deg, rgba(201,168,76,0.18) 0%, rgba(201,168,76,0.08) 100%)",
                      border: "1px solid rgba(201,168,76,0.28)",
                      boxShadow: "0 0 18px rgba(201,168,76,0.1)",
                      transition: "all 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 28px rgba(201,168,76,0.2)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.42)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 18px rgba(201,168,76,0.1)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.28)";
                    }}
                  >
                    Solicitar acesso
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.a>
                )}

                <div className="h-px mb-6" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.18), transparent)" }} />

                <div className="space-y-3">
                  {monthlyFeatures.map((f, i) => (
                    <FeatureItem key={i} text={f} delay={i * 0.04} accent="dim" />
                  ))}
                </div>

                <div className="mt-4 pt-4 space-y-3" style={{ borderTop: "1px solid rgba(201,168,76,0.10)" }}>
                  {annualExtras.map((f, i) => (
                    <FeatureItem key={i} text={f} delay={0.3 + i * 0.05} accent="gold" />
                  ))}
                </div>

                {/* ── Bundle incluído ── */}
                <div
                  className="mt-5 rounded-xl p-4"
                  style={{
                    background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)",
                    border: "1px solid rgba(201,168,76,0.18)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Gift className="w-3.5 h-3.5" style={{ color: "#C9A84C" }} />
                    <span className="text-[11px] font-bold uppercase tracking-[0.12em]" style={{ color: "#C9A84C" }}>
                      Incluído neste plano
                    </span>
                  </div>
                  <div className="space-y-2.5">
                    {annualBundle.map(({ icon: BundleIcon, label }, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <BundleIcon className="w-3.5 h-3.5 shrink-0" style={{ color: "rgba(201,168,76,0.6)" }} />
                        <span className="text-xs" style={{ color: "rgba(201,168,76,0.75)" }}>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Bottom message ── */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="text-center text-sm text-[#333] mb-20 lg:mb-24 px-4"
        >
          A equipe Barberpro adapta a solução de acordo com a operação da sua barbearia.
        </motion.p>

        {/* ── Recursos Premium ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-[#FF7A00]/25" />
              <span className="text-[11px] font-semibold text-[#FF7A00]/50 uppercase tracking-[0.16em]">Expansão</span>
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-transparent to-[#FF7A00]/25" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3" style={{ letterSpacing: "-0.025em" }}>
              Recursos Premium
            </h3>
            <p className="text-sm text-[#444] max-w-sm mx-auto leading-relaxed">
              Expanda sua operação com serviços exclusivos desenvolvidos pela equipe BarberPro.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
            {addons.map((addon, i) => (
              <AddonCard key={addon.id} addon={addon} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
