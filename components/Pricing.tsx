"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, Star, Crown, ArrowRight, Sparkles, Diamond } from "lucide-react";

/* ─────────────────────────────────────────────
   Plan data
───────────────────────────────────────────── */
const plans = {
  monthly: [
    {
      name: "Starter",
      icon: Zap,
      price: 59,
      desc: "Para barbearias que querem profissionalizar a operação.",
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/10",
      features: [
        "1 barbeiro",
        "Agenda online",
        "Confirmação automática WhatsApp",
        "Gestão de clientes (até 200)",
        "Relatórios básicos",
        "Suporte via chat",
      ],
      cta: "Solicitar acesso",
      payUrl: "https://pay.cakto.com.br/e5dipkg",
      highlight: false,
      tier: "starter" as const,
    },
    {
      name: "Pro",
      icon: Star,
      price: 99,
      desc: "A escolha da maioria. Para barbearias em crescimento acelerado.",
      iconColor: "text-[#FF7A00]",
      iconBg: "bg-[#FF7A00]/15",
      features: [
        "Até 5 barbeiros",
        "Tudo do Starter",
        "WhatsApp automático ilimitado",
        "Clientes ilimitados",
        "Controle financeiro completo",
        "Programa de fidelidade",
        "Relatórios avançados",
        "App mobile premium",
        "Suporte prioritário 24h",
      ],
      cta: "Solicitar acesso",
      payUrl: "https://pay.cakto.com.br/mv2aj5d_895777",
      highlight: true,
      tier: "pro" as const,
    },
    {
      name: "Max White Label",
      icon: Crown,
      price: 179,
      desc: "Seu próprio aplicativo profissional publicado nas lojas oficiais.",
      iconColor: "text-amber-300",
      iconBg: "bg-amber-500/10",
      features: [
        "Barbeiros ilimitados",
        "Tudo do Pro",
        "Aplicativo próprio da sua barbearia",
        "Publicação na Apple Store e Google Play",
        "Personalização exclusiva do sistema",
        "Identidade visual adaptada à sua marca",
        "Multiunidades ilimitadas",
        "Automação avançada com IA",
        "Atendimento prioritário VIP",
      ],
      cta: "Solicitar acesso exclusivo",
      payUrl: "https://pay.cakto.com.br/t9zc2qz",
      highlight: false,
      tier: "max" as const,
    },
  ],
  annual: [
    {
      name: "Starter",
      icon: Zap,
      price: 590,
      priceMonthly: 49,
      desc: "Para barbearias que querem profissionalizar a operação.",
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/10",
      features: [
        "1 barbeiro",
        "Agenda online",
        "Confirmação automática WhatsApp",
        "Gestão de clientes (até 200)",
        "Relatórios básicos",
        "Suporte via chat",
      ],
      cta: "Solicitar acesso",
      payUrl: "https://pay.cakto.com.br/7kjpspu",
      highlight: false,
      tier: "starter" as const,
      badge: "Economize 17%",
    },
    {
      name: "Pro",
      icon: Star,
      price: 990,
      priceMonthly: 82,
      desc: "A escolha da maioria. Economize R$198 por ano.",
      iconColor: "text-[#FF7A00]",
      iconBg: "bg-[#FF7A00]/15",
      features: [
        "Até 5 barbeiros",
        "WhatsApp automático ilimitado",
        "Clientes ilimitados",
        "Controle financeiro completo",
        "Programa de fidelidade",
        "Relatórios avançados",
        "App mobile premium",
        "Suporte prioritário 24h",
      ],
      cta: "Solicitar acesso",
      payUrl: "https://pay.cakto.com.br/gppcti6",
      highlight: true,
      tier: "pro" as const,
      badge: "Economize 17%",
    },
    {
      name: "Max White Label",
      icon: Crown,
      price: 1790,
      priceMonthly: 149,
      desc: "Aplicativo próprio publicado nas lojas. Economize R$358/ano.",
      iconColor: "text-amber-300",
      iconBg: "bg-amber-500/10",
      features: [
        "Barbeiros ilimitados",
        "Aplicativo próprio da sua barbearia",
        "Publicação na Apple Store e Google Play",
        "Personalização exclusiva do sistema",
        "Identidade visual adaptada à sua marca",
        "Multiunidades ilimitadas",
        "Automação avançada com IA",
        "Atendimento prioritário VIP",
      ],
      cta: "Solicitar acesso exclusivo",
      payUrl: "https://pay.cakto.com.br/7khrv86",
      highlight: false,
      tier: "max" as const,
      badge: "Economize 17%",
    },
  ],
};

type Plan = (typeof plans.monthly)[number] & { priceMonthly?: number; badge?: string; payUrl: string };

/* ─────────────────────────────────────────────
   PRO card — tilt 3D + premium thin energy border
   Breathing glow + living line on top edge
   Badge fora do overflow-hidden para não cortar
───────────────────────────────────────────── */
function ProCard({ plan, billing }: { plan: Plan; billing: "monthly" | "annual" }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    setTilt({
      x: ((e.clientY - r.top - r.height / 2) / (r.height / 2)) * -6,
      y: ((e.clientX - r.left - r.width / 2) / (r.width / 2)) * 6,
    });
  };

  const displayPrice = billing === "annual" && plan.priceMonthly ? plan.priceMonthly : plan.price;

  return (
    /* Outer wrapper — overflow visible so badge is never clipped */
    <div
      ref={cardRef}
      className="relative"
      style={{ perspective: "1000px", paddingTop: "22px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false); }}
    >
      {/* ── "MAIS ESCOLHIDO" badge — outside overflow-hidden ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap">
        <div className="bg-gradient-to-r from-[#FF7A00] to-[#FF9933] text-white text-[11px] font-bold px-4 py-1.5 rounded-full shadow-[0_0_16px_rgba(255,122,0,0.45)] flex items-center gap-1.5">
          <Sparkles className="w-3 h-3" />
          MAIS ESCOLHIDO
        </div>
      </div>

      {/* Annual badge — outside overflow-hidden */}
      {billing === "annual" && plan.badge && (
        <div className="absolute top-6 right-3 z-30">
          <div className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
            -17%
          </div>
        </div>
      )}

      {/* Breathing ambient glow — opacity only, GPU-friendly */}
      <motion.div
        animate={{ opacity: [0.32, 0.62, 0.32] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-6 rounded-[36px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,122,0,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Lift wrapper — card rises gently on hover */}
      <motion.div
        animate={{ y: hovered ? -5 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Premium thin energy border */}
        <div
          style={{
            position: "relative",
            borderRadius: "24px",
            border: hovered
              ? "1px solid rgba(255,122,0,0.46)"
              : "1px solid rgba(255,122,0,0.24)",
            boxShadow: hovered
              ? "0 0 0 1px rgba(255,122,0,0.07), 0 20px 48px rgba(0,0,0,0.52), 0 0 28px rgba(255,122,0,0.15)"
              : "0 0 0 1px rgba(255,122,0,0.03), 0 8px 24px rgba(0,0,0,0.36), 0 0 14px rgba(255,122,0,0.06)",
            transition: "border-color 0.45s ease, box-shadow 0.45s ease",
          }}
        >
          {/* Living line — subtle traveling light along top edge */}
          <div
            className="pointer-events-none overflow-hidden"
            style={{
              position: "absolute",
              top: "-1px",
              left: 0,
              right: 0,
              height: "1px",
              zIndex: 20,
              borderRadius: "24px 24px 0 0",
            }}
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
                  "linear-gradient(90deg, transparent 0%, rgba(255,180,80,0.55) 30%, rgba(255,240,200,0.45) 50%, rgba(255,180,80,0.55) 70%, transparent 100%)",
              }}
            />
          </div>

          {/* Tilt card — 3D perspective + overflow-hidden for bg gradients */}
          <motion.div
            style={{
              rotateX: tilt.x,
              rotateY: tilt.y,
              transformStyle: "preserve-3d",
              borderRadius: "23px",
              overflow: "hidden",
            }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#1E1600] via-[#1A1200] to-[#181818]" />
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top, rgba(255,122,0,0.12) 0%, transparent 55%)" }} />

            <div className="relative z-10 px-7 pb-8 pt-7">
              {/* Plan header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#FF7A00]/15 flex items-center justify-center border border-[#FF7A00]/20 shrink-0">
                  <Star className="w-5 h-5 text-[#FF7A00]" />
                </div>
                <div>
                  <div className="text-base font-black text-white">{plan.name}</div>
                  <div className="text-xs text-[#555] mt-0.5">{plan.desc}</div>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-[44px] font-black text-white leading-none" style={{ letterSpacing: "-0.03em" }}>
                  R${displayPrice}
                </span>
                <span className="text-[#555] text-sm mb-1">/mês</span>
              </div>
              {billing === "annual" && (
                <div className="text-xs text-[#444] mb-5">R${plan.price} cobrado anualmente</div>
              )}

              <motion.a
                href={plan.payUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-2xl text-sm font-bold mt-5 mb-7 flex items-center justify-center gap-2 btn-primary text-white shadow-[0_0_24px_rgba(255,122,0,0.3)]"
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <div className="h-px bg-gradient-to-r from-transparent via-[#FF7A00]/20 to-transparent mb-6" />

              <div className="space-y-3">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#FF7A00]/18 border border-[#FF7A00]/20 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#FF7A00]" />
                    </div>
                    <span className="text-sm text-[#C0C0C0]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAX WHITE LABEL card — badge EXCLUSIVO
   Mais premium que Pro, naturalmente mais alto
───────────────────────────────────────────── */
function MaxCard({ plan, billing }: { plan: Plan; billing: "monthly" | "annual" }) {
  const [hovered, setHovered] = useState(false);
  const displayPrice = billing === "annual" && plan.priceMonthly ? plan.priceMonthly : plan.price;

  return (
    /* Outer wrapper — paddingTop para badge */
    <div
      className="relative"
      style={{ paddingTop: "22px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── "EXCLUSIVO" badge ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap">
        <div
          className="text-white text-[11px] font-black px-4 py-1.5 rounded-full flex items-center gap-1.5"
          style={{
            background: "linear-gradient(135deg, #92700A 0%, #D4A017 35%, #E8B830 55%, #C48A10 80%, #92700A 100%)",
            boxShadow: "0 0 18px rgba(212,160,23,0.55), 0 0 36px rgba(255,122,0,0.15)",
          }}
        >
          <Diamond className="w-3 h-3" />
          EXCLUSIVO
        </div>
      </div>

      {/* Annual badge */}
      {billing === "annual" && plan.badge && (
        <div className="absolute top-6 right-3 z-30">
          <div className="text-[10px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
            -17%
          </div>
        </div>
      )}

      {/* Multi-layer ambient glow */}
      <div
        className="absolute -inset-8 rounded-[44px] pointer-events-none transition-opacity duration-600"
        style={{
          background: "radial-gradient(ellipse at center, rgba(212,160,23,0.14) 0%, rgba(255,122,0,0.06) 50%, transparent 70%)",
          opacity: hovered ? 1 : 0.55,
        }}
      />

      {/* Premium animated border */}
      <div
        className="absolute inset-x-[-3px] bottom-[-3px] rounded-[27px] pointer-events-none overflow-hidden"
        style={{ top: "20px" }}
      >
        <div
          style={{
            position: "absolute", inset: 0,
            background: "conic-gradient(from 0deg, rgba(212,160,23,0.9), rgba(255,180,50,0.6), rgba(255,220,100,0.85), rgba(255,122,0,0.5), rgba(212,160,23,0.9))",
            animation: "spin 7s linear infinite",
          }}
        />
      </div>
      <div
        className="absolute inset-x-[-3px] bottom-[-3px] rounded-[27px] pointer-events-none"
        style={{ top: "20px", background: "#111111", zIndex: 0 }}
      />

      {/* Card body */}
      <motion.div
        animate={{ y: hovered ? -3 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 rounded-[24px] overflow-hidden"
      >
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(155deg, #181000 0%, #110D00 40%, #0F0F0F 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 90% 50% at 50% 0%, rgba(212,160,23,0.09) 0%, transparent 55%)",
          }}
        />

        <div className="relative z-10 px-7 pb-8 pt-7">
          {/* Plan header */}
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(212,160,23,0.18) 0%, rgba(255,122,0,0.08) 100%)",
                border: "1px solid rgba(212,160,23,0.28)",
              }}
            >
              <Crown className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="text-base font-black text-white">Max White Label</div>
              <div className="text-[10px] font-medium" style={{ color: "rgba(212,160,23,0.6)" }}>
                Exclusivo · Personalizado · Sob consulta
              </div>
            </div>
          </div>

          {/* Strategic phrase */}
          <p
            className="text-[11px] italic leading-relaxed mb-5 pl-3"
            style={{
              color: "rgba(212,160,23,0.45)",
              borderLeft: "2px solid rgba(212,160,23,0.25)",
            }}
          >
            A equipe BarberPro personaliza o sistema exclusivamente para sua barbearia.
          </p>

          {/* Price */}
          <div className="flex items-baseline gap-1 mb-1">
            <span className="font-black text-white leading-none" style={{ fontSize: 42, letterSpacing: "-0.03em" }}>
              R${displayPrice}
            </span>
            <span className="text-[#555] text-sm mb-1">/mês</span>
          </div>
          {billing === "annual" && (
            <div className="text-xs text-[#444] mb-4">R${plan.price} cobrado anualmente</div>
          )}

          {/* CTA */}
          <motion.a
            href={plan.payUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3.5 rounded-2xl text-sm font-black mt-4 mb-7 flex items-center justify-center gap-2 text-white relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #92700A 0%, #C4920E 30%, #E8B830 55%, #C4920E 75%, #92700A 100%)",
              boxShadow: "0 0 24px rgba(212,160,23,0.35), 0 4px 14px rgba(0,0,0,0.3)",
            }}
          >
            {plan.cta}
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          {/* Divider */}
          <div
            className="h-px mb-6"
            style={{ background: "linear-gradient(90deg, transparent, rgba(212,160,23,0.28), transparent)" }}
          />

          {/* Features */}
          <div className="space-y-3">
            {plan.features.map((feature, j) => (
              <div key={j} className="flex items-center gap-2.5">
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(212,160,23,0.12)",
                    border: "1px solid rgba(212,160,23,0.22)",
                  }}
                >
                  <Check className="w-2.5 h-2.5 text-amber-300" />
                </div>
                <span className="text-sm" style={{ color: "#C0B08A" }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   STARTER / regular card
───────────────────────────────────────────── */
function RegularCard({ plan, billing }: { plan: Plan; billing: "monthly" | "annual" }) {
  const displayPrice = billing === "annual" && plan.priceMonthly ? plan.priceMonthly : plan.price;

  return (
    <div style={{ paddingTop: "22px" }}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="relative glass-card rounded-3xl border border-white/[0.07] overflow-hidden"
      >
        {billing === "annual" && "badge" in plan && plan.badge && (
          <div className="absolute top-4 right-4 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full z-10">
            -17%
          </div>
        )}

        <div className="px-6 pb-8 pt-6">
          <div
            className={`w-10 h-10 rounded-2xl ${plan.iconBg} flex items-center justify-center mb-5 border border-white/[0.06]`}
          >
            <plan.icon className={`w-5 h-5 ${plan.iconColor}`} />
          </div>

          <div className="text-base font-black text-white mb-1">{plan.name}</div>
          <div className="text-sm text-[#555] mb-6">{plan.desc}</div>

          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-[42px] font-black text-white leading-none" style={{ letterSpacing: "-0.03em" }}>
              R${displayPrice}
            </span>
            <span className="text-[#555] text-sm mb-1">/mês</span>
          </div>
          {billing === "annual" && "priceMonthly" in plan && (
            <div className="text-xs text-[#444] mb-4">R${plan.price} cobrado anualmente</div>
          )}

          <motion.a
            href={plan.payUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 rounded-2xl text-sm font-bold mt-5 mb-7 flex items-center justify-center gap-2 btn-secondary text-white"
          >
            {plan.cta}
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          <div className="h-px bg-white/[0.05] mb-6" />

          <div className="space-y-2.5">
            {plan.features.map((feature, j) => (
              <div key={j} className="flex items-center gap-2.5">
                <div className="w-4 h-4 rounded-full bg-white/[0.06] flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#555]" />
                </div>
                <span className="text-sm text-[#777]">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Section
───────────────────────────────────────────── */
export function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const currentPlans = plans[billing];

  return (
    <section id="planos" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0D0D0D]" />
      <div className="absolute inset-0 orange-gradient-bg pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="badge-orange inline-flex mb-5">Planos & Preços</div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Escolha sua solução
            <br />
            <span className="gradient-text">profissional</span>
          </h2>
          <p className="text-lg text-[#666] max-w-xl mx-auto mb-10">
            Plataformas premium para cada estágio da sua barbearia.
            Acesso mediante solicitação e aprovação.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-1 glass border border-white/[0.07] rounded-2xl p-1.5">
            {(["monthly", "annual"] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  billing === b ? "bg-white text-black shadow-sm" : "text-[#555] hover:text-white"
                }`}
              >
                {b === "monthly" ? "Mensal" : "Anual"}
                {b === "annual" && (
                  <span
                    className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
                      billing === "annual" ? "text-emerald-700 bg-emerald-100" : "text-emerald-500 bg-emerald-500/10"
                    }`}
                  >
                    -17%
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards grid — items-start: Max grows naturally */}
        <AnimatePresence mode="wait">
          <motion.div
            key={billing}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start"
          >
            {currentPlans.map((plan, i) => {
              const p = plan as Plan;

              if (p.tier === "pro") {
                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="md:mt-0"
                  >
                    <ProCard plan={p} billing={billing} />
                  </motion.div>
                );
              }

              if (p.tier === "max") {
                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <MaxCard plan={p} billing={billing} />
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <RegularCard plan={p} billing={billing} />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Max callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 max-w-2xl mx-auto"
        >
          <div
            className="rounded-2xl px-6 py-4 text-center border"
            style={{
              background: "linear-gradient(135deg, rgba(212,160,23,0.04) 0%, rgba(255,122,0,0.02) 100%)",
              borderColor: "rgba(212,160,23,0.12)",
            }}
          >
            <Diamond className="w-4 h-4 mx-auto mb-2.5" style={{ color: "rgba(212,160,23,0.5)" }} />
            <p className="text-sm text-[#555] leading-relaxed">
              <span style={{ color: "rgba(212,160,23,0.65)" }} className="font-semibold">Max White Label</span>{" "}
              é uma solução exclusiva e personalizada. Nossa equipe adapta o sistema
              e publica o aplicativo com a identidade da sua barbearia nas lojas oficiais.
            </p>
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-center"
        >
          <div className="inline-flex items-center gap-3 glass border border-white/[0.06] rounded-2xl px-6 py-4">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">Implementação assistida pela equipe</div>
              <div className="text-xs text-[#555]">
                Nossos especialistas configuram tudo para você desde o primeiro acesso.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
