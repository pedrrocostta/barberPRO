"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  Sparkles,
  Globe,
  Smartphone,
  Tablet,
  Wand2,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Payment URLs
───────────────────────────────────────────── */
const MONTHLY_URL = "https://pay.cakto.com.br/mv2aj5d_895777";
const ANNUAL_URL  = "https://pay.cakto.com.br/gppcti6";

/* ─────────────────────────────────────────────
   Plan features
───────────────────────────────────────────── */
const monthlyFeatures = [
  "Agendamento inteligente",
  "Gestão completa",
  "WhatsApp automático",
  "Dashboard premium",
  "Clientes ilimitados",
  "Infraestrutura premium inclusa",
];

const annualExtras = [
  "Tudo do plano mensal",
  "Melhor custo-benefício",
  "Prioridade em atualizações",
];

/* ─────────────────────────────────────────────
   Add-ons
───────────────────────────────────────────── */
const addons = [
  {
    id: "domain",
    Icon: Globe,
    title: "Domínio personalizado",
    desc: "Acesse com seu próprio domínio. Identidade completa para sua barbearia.",
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
  highlight = false,
}: {
  text: string;
  delay?: number;
  highlight?: boolean;
}) {
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
        style={{
          background: highlight ? "rgba(255,122,0,0.22)" : "rgba(255,122,0,0.12)",
          border: highlight ? "1px solid rgba(255,122,0,0.35)" : "1px solid rgba(255,122,0,0.22)",
        }}
      >
        <Check className="w-2.5 h-2.5 text-[#FF7A00]" />
      </div>
      <span
        className="text-sm"
        style={{ color: highlight ? "rgba(255,153,51,0.85)" : "rgba(179,179,179,1)" }}
      >
        {text}
      </span>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Add-on card with toggle
───────────────────────────────────────────── */
function AddonCard({
  addon,
  index,
}: {
  addon: (typeof addons)[number];
  index: number;
}) {
  const [active, setActive] = useState(false);
  const { Icon } = addon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => !addon.cta && setActive(!active)}
      className={`relative rounded-2xl p-5 transition-all duration-350 ${!addon.cta ? "cursor-pointer" : "cursor-default"}`}
      style={{
        background: active
          ? "linear-gradient(135deg, rgba(255,122,0,0.07) 0%, rgba(255,122,0,0.02) 100%)"
          : "rgba(255,255,255,0.018)",
        border: active
          ? "1px solid rgba(255,122,0,0.32)"
          : "1px solid rgba(255,255,255,0.055)",
        boxShadow: active
          ? "0 0 24px rgba(255,122,0,0.07), inset 0 1px 0 rgba(255,255,255,0.04)"
          : "inset 0 1px 0 rgba(255,255,255,0.025)",
        transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div className="flex items-start justify-between gap-4">
        {/* Icon + text */}
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{
              background: active ? "rgba(255,122,0,0.14)" : "rgba(255,255,255,0.04)",
              border: active
                ? "1px solid rgba(255,122,0,0.22)"
                : "1px solid rgba(255,255,255,0.06)",
              transition: "background 0.3s ease, border-color 0.3s ease",
            }}
          >
            <Icon
              className="w-4 h-4 transition-colors duration-300"
              style={{ color: active ? "#FF7A00" : "#555" }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-white mb-1">{addon.title}</div>
            <div className="text-xs text-[#555] leading-relaxed">{addon.desc}</div>
          </div>
        </div>

        {/* Action: CTA link OR toggle switch */}
        {addon.cta ? (
          <motion.a
            href="#"
            onClick={(e) => {
              e.stopPropagation();
              document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 text-xs font-semibold text-[#FF7A00] border border-[#FF7A00]/25 px-3 py-1.5 rounded-xl transition-all whitespace-nowrap"
            style={{ background: "rgba(255,122,0,0)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,122,0,0.07)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,122,0,0)")
            }
          >
            {addon.cta}
          </motion.a>
        ) : (
          /* Toggle switch */
          <div
            className="shrink-0 w-10 h-6 rounded-full relative"
            style={{
              background: active ? "#FF7A00" : "rgba(255,255,255,0.08)",
              border: active
                ? "1px solid #FF7A00"
                : "1px solid rgba(255,255,255,0.1)",
              transition: "background 0.3s ease, border-color 0.3s ease",
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

      {/* Price reveal on toggle */}
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
                {addon.period && (
                  <span className="text-xs text-[#555]">{addon.period}</span>
                )}
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
export function Pricing() {
  return (
    <section id="planos" className="py-16 lg:py-28 relative overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-[#0D0D0D]" />
      <div className="absolute inset-0 orange-gradient-bg pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

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
            Uma plataforma. Uma escolha.
            <br />
            Toda a infraestrutura premium inclusa.
          </p>
        </motion.div>

        {/* ── Plans grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 mb-6 items-start">

          {/* ────── MENSAL ────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[24px] p-7 lg:p-8"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow:
                "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            {/* Label */}
            <div className="text-xs font-semibold text-[#444] uppercase tracking-[0.14em] mb-7">
              Mensal
            </div>

            {/* Price */}
            <div className="mb-1">
              <span
                className="text-[52px] lg:text-[58px] font-black text-white leading-none"
                style={{ letterSpacing: "-0.04em" }}
              >
                R$149
              </span>
              <span className="text-[#444] text-base font-medium ml-2">/mês</span>
            </div>
            <p className="text-xs text-[#3A3A3A] mb-8">Infraestrutura premium inclusa</p>

            {/* CTA */}
            <motion.a
              href={MONTHLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-2xl text-sm font-bold mb-8 flex items-center justify-center gap-2 text-white btn-secondary"
            >
              Começar agora
              <ArrowRight className="w-4 h-4" />
            </motion.a>

            {/* Divider */}
            <div className="h-px bg-white/[0.04] mb-7" />

            {/* Features */}
            <div className="space-y-3.5">
              {monthlyFeatures.map((f, i) => (
                <FeatureItem key={i} text={f} delay={i * 0.05} />
              ))}
            </div>
          </motion.div>

          {/* ────── ANUAL ────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
            style={{ paddingTop: "22px" }}
          >
            {/* RECOMENDADO badge — outside card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
              <div
                className="text-white text-[11px] font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5"
                style={{
                  background:
                    "linear-gradient(135deg, #FF8C1A 0%, #FF7A00 50%, #E06D00 100%)",
                  boxShadow:
                    "0 0 22px rgba(255,122,0,0.55), 0 4px 12px rgba(0,0,0,0.3)",
                }}
              >
                <Sparkles className="w-3 h-3" />
                RECOMENDADO
              </div>
            </div>

            {/* Breathing ambient glow */}
            <motion.div
              animate={{ opacity: [0.28, 0.58, 0.28] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-5 rounded-[36px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(255,122,0,0.15) 0%, transparent 70%)",
              }}
            />

            {/* Card */}
            <div
              className="relative rounded-[24px] overflow-hidden"
              style={{
                border: "1px solid rgba(255,122,0,0.32)",
                boxShadow:
                  "0 0 0 1px rgba(255,122,0,0.06), 0 24px 64px rgba(0,0,0,0.55), 0 0 32px rgba(255,122,0,0.1)",
              }}
            >
              {/* Living line — top edge */}
              <div
                className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden"
                style={{ height: "1px", zIndex: 10 }}
              >
                <motion.div
                  animate={{ x: ["-120%", "320%"] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    repeatDelay: 3.5,
                    ease: "easeInOut",
                  }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "28%",
                    height: "100%",
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,180,80,0.65), rgba(255,240,200,0.5), rgba(255,180,80,0.65), transparent)",
                  }}
                />
              </div>

              {/* Card bg */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(150deg, rgba(255,122,0,0.09) 0%, #120C00 35%, #0F0F0F 100%)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 45% at 50% 0%, rgba(255,122,0,0.11) 0%, transparent 60%)",
                }}
              />

              <div className="relative z-10 p-7 lg:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-7">
                  <div className="text-xs font-semibold text-[#FF7A00]/60 uppercase tracking-[0.14em]">
                    Anual
                  </div>
                  <div
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(52,211,153,0.10)",
                      border: "1px solid rgba(52,211,153,0.20)",
                      color: "#34d399",
                    }}
                  >
                    Economize 2 meses
                  </div>
                </div>

                {/* Price */}
                <div className="mb-1">
                  <span
                    className="text-[52px] lg:text-[58px] font-black text-white leading-none"
                    style={{ letterSpacing: "-0.04em" }}
                  >
                    R$1.500
                  </span>
                  <span className="text-[#555] text-base font-medium ml-2">/ano</span>
                </div>
                <div
                  className="text-xs font-medium mb-1"
                  style={{ color: "rgba(255,122,0,0.55)" }}
                >
                  equivalente a R$125/mês
                </div>
                <p className="text-xs text-[#3A3A3A] mb-8">Infraestrutura premium inclusa</p>

                {/* CTA */}
                <motion.a
                  href={ANNUAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-2xl text-sm font-bold mb-8 flex items-center justify-center gap-2 btn-primary text-white shadow-[0_0_28px_rgba(255,122,0,0.3)]"
                >
                  Solicitar acesso
                  <ArrowRight className="w-4 h-4" />
                </motion.a>

                {/* Divider */}
                <div
                  className="h-px mb-7"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,122,0,0.22), transparent)",
                  }}
                />

                {/* Monthly features */}
                <div className="space-y-3.5">
                  {monthlyFeatures.map((f, i) => (
                    <FeatureItem key={i} text={f} delay={i * 0.04} />
                  ))}
                </div>

                {/* Annual extras */}
                <div
                  className="mt-5 pt-5 space-y-3.5"
                  style={{ borderTop: "1px solid rgba(255,122,0,0.12)" }}
                >
                  {annualExtras.map((f, i) => (
                    <FeatureItem
                      key={i}
                      text={f}
                      delay={0.35 + i * 0.05}
                      highlight
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom message ── */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="text-center text-sm text-[#3A3A3A] mb-20 lg:mb-24 px-4"
        >
          A equipe Barberpro adapta a solução de acordo com a operação da sua barbearia.
        </motion.p>

        {/* ──────────────────────────────────
            RECURSOS PREMIUM / ADD-ONS
        ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Add-ons header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-[#FF7A00]/25" />
              <span className="text-[11px] font-semibold text-[#FF7A00]/50 uppercase tracking-[0.16em]">
                Expansão
              </span>
              <div className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-transparent to-[#FF7A00]/25" />
            </div>
            <h3
              className="text-2xl sm:text-3xl font-black text-white mb-3"
              style={{ letterSpacing: "-0.025em" }}
            >
              Recursos Premium
            </h3>
            <p className="text-sm text-[#444] max-w-sm mx-auto leading-relaxed">
              Expanda sua operação com serviços exclusivos
              desenvolvidos pela equipe BarberPro.
            </p>
          </div>

          {/* Add-on cards */}
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
