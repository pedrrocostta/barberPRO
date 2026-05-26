"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MessageSquare,
  DollarSign,
  Users,
  BarChart3,
  Gift,
  UsersRound,
  Package,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Agenda Inteligente",
    description:
      "Gerenciamento visual de horários com múltiplos barbeiros, bloqueios automáticos e visão semanal/mensal.",
    tag: "Mais usado",
    highlight: true,
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automático",
    description:
      "Confirmações, lembretes e pós-atendimento enviados automaticamente. Reduza faltas em 80%.",
    tag: "Novo",
    highlight: false,
  },
  {
    icon: DollarSign,
    title: "Gestão Financeira",
    description:
      "Controle de caixa, comissões automáticas, despesas e relatórios de lucratividade em tempo real.",
    tag: null,
    highlight: false,
  },
  {
    icon: Users,
    title: "Controle de Clientes",
    description:
      "CRM completo: histórico de cortes, preferências, fotos, aniversários e dados de contato.",
    tag: null,
    highlight: false,
  },
  {
    icon: BarChart3,
    title: "Relatórios Avançados",
    description:
      "Dashboards com faturamento, ticket médio, serviços mais vendidos e performance por barbeiro.",
    tag: null,
    highlight: false,
  },
  {
    icon: Gift,
    title: "Programa de Fidelidade",
    description:
      "Sistema de pontos personalizável. Retenha clientes com recompensas automáticas e cashback.",
    tag: null,
    highlight: false,
  },
  {
    icon: UsersRound,
    title: "Controle de Equipe",
    description:
      "Perfis por barbeiro, comissões individuais, metas, horários de trabalho e controle de acesso.",
    tag: null,
    highlight: false,
  },
  {
    icon: Package,
    title: "Controle de Produtos",
    description:
      "Estoque com alertas de reposição, vendas de produtos, fornecedores e histórico completo.",
    tag: null,
    highlight: false,
  },
];

/* ─── Mobile Carousel ─── */
function MobileCarousel() {
  const [current, setCurrent] = useState(0);
  const [dragging, setDragging] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = features.length;

  const resetAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 3200);
  };

  useEffect(() => {
    resetAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, []);

  const goTo = (idx: number) => {
    setCurrent(idx);
    resetAuto();
  };

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -40) goTo((current + 1) % total);
    else if (info.offset.x > 40) goTo((current - 1 + total) % total);
  };

  const f = features[current];

  return (
    <div className="lg:hidden">
      {/* Card stage */}
      <div className="overflow-hidden relative" style={{ touchAction: "pan-y" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 48, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -48, scale: 0.97 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.18}
            onDragStart={() => setDragging(true)}
            onDragEnd={(e, info) => { setDragging(false); handleDragEnd(e, info); }}
            onClick={(e) => { if (dragging) e.preventDefault(); }}
            className={`relative rounded-2xl p-6 border select-none cursor-grab active:cursor-grabbing ${
              f.highlight
                ? "bg-gradient-to-br from-[#FF7A00]/10 to-[#FF7A00]/5 border-[#FF7A00]/30"
                : "glass border-white/[0.06]"
            }`}
            style={{ minHeight: 196 }}
          >
            {f.tag && (
              <div
                className={`absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full ${
                  f.tag === "Novo"
                    ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
                    : "bg-[#FF7A00]/15 text-[#FF7A00] border border-[#FF7A00]/20"
                }`}
              >
                {f.tag}
              </div>
            )}

            <div
              className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4 ${
                f.highlight ? "bg-[#FF7A00]/20" : "bg-white/[0.05]"
              }`}
            >
              <f.icon
                className={`w-5 h-5 ${f.highlight ? "text-[#FF7A00]" : "text-[#666]"}`}
              />
            </div>

            <h3 className="text-base font-semibold text-white mb-2">{f.title}</h3>
            <p className="text-sm text-[#666] leading-relaxed">{f.description}</p>

            {/* Glow */}
            {f.highlight && (
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(255,122,0,0.08), transparent 60%)",
                }}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots + counter */}
      <div className="flex items-center justify-center gap-3 mt-5">
        <span className="text-xs text-[#333] tabular-nums w-10 text-right">
          {current + 1}/{total}
        </span>
        <div className="flex items-center gap-1.5">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all duration-300"
              style={{
                width: i === current ? 20 : 6,
                height: 6,
                borderRadius: 9999,
                background:
                  i === current
                    ? "#FF7A00"
                    : "rgba(255,255,255,0.12)",
              }}
            />
          ))}
        </div>
        <span className="text-xs text-[#333] w-10 text-left opacity-0 select-none">
          {current + 1}/{total}
        </span>
      </div>

      {/* Swipe hint — shown only on first render */}
      <motion.p
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 2.5, duration: 1.2 }}
        className="text-center text-[11px] text-[#2A2A2A] mt-2 pointer-events-none"
      >
        Deslize para navegar
      </motion.p>
    </div>
  );
}

/* ─── Main section ─── */
export function Features() {
  return (
    <section id="funcionalidades" className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="badge-orange inline-flex items-center gap-2 mb-4">
            Funcionalidades
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Um sistema completo,
            <br />
            <span className="gradient-text">do agendamento ao financeiro</span>
          </h2>
          <p className="text-lg text-[#B3B3B3] max-w-2xl mx-auto">
            Todas as ferramentas que você precisa em um único lugar.
            Sem integrações complicadas, sem cobranças extras.
          </p>
        </motion.div>

        {/* Mobile: carousel | Desktop: grid */}
        <MobileCarousel />

        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative group rounded-2xl p-5 border transition-all duration-300 cursor-default ${
                feature.highlight
                  ? "bg-gradient-to-br from-[#FF7A00]/10 to-[#FF7A00]/5 border-[#FF7A00]/30 hover:border-[#FF7A00]/60 hover:shadow-[0_0_40px_rgba(255,122,0,0.15)]"
                  : "glass border-white/[0.06] hover:border-[#FF7A00]/20 hover:bg-white/[0.03] hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
              }`}
            >
              {feature.tag && (
                <div
                  className={`absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded-full ${
                    feature.tag === "Novo"
                      ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20"
                      : "bg-[#FF7A00]/15 text-[#FF7A00] border border-[#FF7A00]/20"
                  }`}
                >
                  {feature.tag}
                </div>
              )}

              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
                  feature.highlight ? "bg-[#FF7A00]/20" : "bg-white/[0.05] group-hover:bg-[#FF7A00]/10"
                }`}
              >
                <feature.icon
                  className={`w-5 h-5 transition-colors duration-300 ${
                    feature.highlight ? "text-[#FF7A00]" : "text-[#666] group-hover:text-[#FF7A00]"
                  }`}
                />
              </div>

              <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-[#666] leading-relaxed group-hover:text-[#B3B3B3] transition-colors">
                {feature.description}
              </p>

              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(255,122,0,0.06), transparent 60%)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
