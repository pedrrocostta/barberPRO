"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Scissors } from "lucide-react";

const logos = [
  "Barbearia Crown",
  "The Black Barber",
  "Studio Masculino",
  "Barber House SP",
  "G.O.A.T. Barbers",
  "Estilo Único",
  "Premium Cuts",
  "Blade & Fade",
  "Urban Barber",
  "Classic Studio",
];

/* ── CountUp hook ── */
function useCountUp(to: number, duration = 2, decimals = 0, enabled = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let startTime: number | null = null;
    let raf: number;

    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / (duration * 1000), 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * to).toFixed(decimals)));
      if (progress < 1) raf = requestAnimationFrame(step);
      else setValue(to);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [enabled, to, duration, decimals]);

  return value;
}

/* ── Single animated stat ── */
interface StatConfig {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  /** format number with pt-BR thousands separator (e.g. 3.000) */
  ptFormat?: boolean;
  label: string;
  color: string;
  duration?: number;
}

function AnimatedStat({ stat, delay }: { stat: StatConfig; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [started, setStarted] = useState(false);

  // Delay start slightly so stagger feels natural
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(t);
  }, [inView, delay]);

  const raw = useCountUp(stat.to, stat.duration ?? 2, stat.decimals ?? 0, started);

  const formatted = stat.ptFormat
    ? Math.floor(raw).toLocaleString("pt-BR")
    : stat.decimals
    ? raw.toFixed(stat.decimals)
    : Math.floor(raw).toString();

  const display = `${stat.prefix ?? ""}${formatted}${stat.suffix ?? ""}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-2xl p-6 text-center border border-white/[0.06] card-hover"
    >
      <div className={`text-3xl font-bold mb-1 tabular-nums ${stat.color}`}>
        {display}
      </div>
      <div className="text-sm text-[#666]">{stat.label}</div>
    </motion.div>
  );
}

const stats: StatConfig[] = [
  { to: 3000, ptFormat: true, suffix: "+",  label: "Barbearias ativas",       color: "text-[#FF7A00]",  duration: 2.2 },
  { to: 500,                  suffix: "k+", label: "Agendamentos/mês",         color: "text-blue-400",   duration: 1.8 },
  { to: 80,   prefix: "R$",   suffix: "M+", label: "Faturamento gerenciado",   color: "text-emerald-400",duration: 2   },
  { to: 4.9,  decimals: 1,    suffix: "★",  label: "Avaliação média",          color: "text-yellow-400", duration: 1.6 },
];

export function Clients() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-[#666] uppercase tracking-widest mb-2">
            Confiado por mais de
          </p>
          <p className="text-3xl font-bold text-white">
            <span className="gradient-text">3.000+</span> barbearias no Brasil
          </p>
        </motion.div>

        {/* Scrolling logos */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {[...logos, ...logos].map((name, i) => (
              <div
                key={i}
                className="shrink-0 glass border border-white/[0.06] rounded-2xl px-6 py-4 flex items-center gap-3 hover:border-[#FF7A00]/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FF7A00]/10 flex items-center justify-center">
                  <Scissors className="w-4 h-4 text-[#FF7A00]" />
                </div>
                <span className="text-sm font-medium text-[#B3B3B3] whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats — animated count-up */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <AnimatedStat key={i} stat={stat} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}
