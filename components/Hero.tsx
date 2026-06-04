"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Calendar,
  Bell,
  CreditCard,
  BarChart3,
  Clock,
  CheckCircle,
  AlertCircle,
  Shield,
  Award,
  CheckCircle2,
} from "lucide-react";

const floatingCards = [
  {
    icon: Calendar,
    label: "Agendamentos hoje",
    value: "24",
    sub: "+3 novos",
    iconBg: "bg-[#FF7A00]/12",
    iconColor: "text-[#FF7A00]",
    border: "border-[#FF7A00]/12",
    pos: "top-[18%] -left-6 xl:left-[1%]",
    delay: 0,
    dur: 4.5,
  },
  {
    icon: TrendingUp,
    label: "Faturamento mensal",
    value: "R$14.280",
    sub: "↑ 23% vs anterior",
    iconBg: "bg-emerald-500/12",
    iconColor: "text-emerald-400",
    border: "border-emerald-500/12",
    pos: "top-[8%] -right-6 xl:right-[1%]",
    delay: 0.5,
    dur: 5,
  },
  {
    icon: Users,
    label: "Clientes ativos",
    value: "312",
    sub: "+18 este mês",
    iconBg: "bg-blue-500/12",
    iconColor: "text-blue-400",
    border: "border-blue-500/12",
    pos: "bottom-[28%] -left-6 xl:left-[2%]",
    delay: 0.9,
    dur: 5.5,
  },
  {
    icon: Star,
    label: "Avaliação média",
    value: "4.9 ★",
    sub: "1.240 avaliações",
    iconBg: "bg-yellow-500/12",
    iconColor: "text-yellow-400",
    border: "border-yellow-500/12",
    pos: "bottom-[22%] -right-6 xl:right-[2%]",
    delay: 0.7,
    dur: 4,
  },
];

const appointments = [
  { time: "09:45", client: "Rafael Santos", service: "Degradê", status: "active" },
  { time: "10:30", client: "Bruno Costa", service: "Corte Social", status: "pending" },
  { time: "11:15", client: "Marcos Lima", service: "Barba", status: "confirmed" },
];

const chartData = [30, 48, 40, 65, 55, 78, 62, 85, 70, 90, 75, 100];

const trustSignals = [
  { icon: Shield, text: "Dados protegidos com criptografia" },
  { icon: Award, text: "Implementação assistida" },
  { icon: CheckCircle2, text: "Suporte dedicado" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  /* Spotlight + 3D tilt via direct DOM — sem useState, sem re-renders */
  useEffect(() => {
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = sectionRef.current;
        const sp = spotlightRef.current;
        const mk = mockupRef.current;
        if (!el || !sp) return;
        const rect = el.getBoundingClientRect();
        sp.style.left = e.clientX - rect.left + "px";
        sp.style.top = e.clientY - rect.top + "px";

        // 3D tilt on mockup
        if (mk) {
          const mr = mk.getBoundingClientRect();
          const cx = mr.left + mr.width / 2;
          const cy = mr.top + mr.height / 2;
          const dx = (e.clientX - cx) / (mr.width / 2);
          const dy = (e.clientY - cy) / (mr.height / 2);
          const rotX = -dy * 4;
          const rotY = dx * 5;
          mk.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.01,1.01,1.01)`;
        }
      });
    };
    const onLeave = () => {
      if (mockupRef.current) {
        mockupRef.current.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 hero-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/50 to-[#111111]" />

      {/* Ambient glows — smaller, lighter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[700px] h-[500px] rounded-full bg-[#FF7A00]/[0.045] blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[280px] h-[280px] rounded-full bg-[#FF7A00]/[0.07] blur-[60px] pointer-events-none animate-pulse-glow" />

      {/* Spotlight — direct DOM, zero re-renders */}
      <div ref={spotlightRef} className="spotlight pointer-events-none" style={{ opacity: 0.65 }} />

      {/* Particles — CSS only, fewer, no Framer Motion */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: (i % 2 === 0 ? 2 : 3) + "px",
            height: (i % 2 === 0 ? 2 : 3) + "px",
            left: (i * 12 + 4) % 94 + "%",
            top: (i * 17 + 6) % 88 + "%",
            opacity: 0.12 + (i % 3) * 0.06,
            animation: `float ${5 + i}s ease-in-out ${i * 0.5}s infinite`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-20">
        {/* Hero copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-7">
            <div className="badge-orange inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] animate-pulse shrink-0" />
              Plataforma profissional para barbearias premium
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-[82px] font-black leading-[1.04] mb-6"
            style={{ letterSpacing: "-0.03em" }}
          >
            A solução exclusiva
            <br />
            <span className="gradient-text glow-orange-text">para barbearias</span>
            <br />
            de alto padrão.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg sm:text-xl text-[#888] leading-relaxed mb-10"
          >
            Tecnologia proprietária que transforma sua barbearia em uma operação
            profissional e escalável — do agendamento ao financeiro.
          </motion.p>

          {/* Single CTA */}
          <motion.div variants={itemVariants} className="flex justify-center mb-10 lg:mb-14 px-2 sm:px-0">
            <motion.button
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.location.href = 'https://deividfortunato.shop/registro'}
              className="btn-primary w-full sm:w-auto px-10 py-4 rounded-2xl text-base font-bold text-white flex items-center justify-center gap-2.5 group shadow-[0_0_32px_rgba(255,122,0,0.3)]"
            >
              Solicitar acesso
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm text-[#444]"
          >
            {trustSignals.map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <item.icon className="w-3.5 h-3.5 text-[#FF7A00]/55" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 64, scale: 0.93 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-12 lg:mt-20 max-w-5xl mx-auto"
        >
          {/* Floating cards */}
          {floatingCards.map((card, i) => (
            <motion.div
              key={i}
              className={`absolute z-20 glass-card border ${card.border} rounded-2xl p-3.5 w-48 hidden xl:block ${card.pos}`}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: card.dur, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
            >
              <div className={`w-9 h-9 rounded-xl ${card.iconBg} flex items-center justify-center mb-2.5`}>
                <card.icon style={{ width: 18, height: 18 }} className={card.iconColor} />
              </div>
              <div className="text-[11px] text-[#555] mb-0.5 font-medium">{card.label}</div>
              <div className="text-[17px] font-bold text-white leading-tight">{card.value}</div>
              <div className={`text-xs font-medium mt-0.5 ${card.iconColor}`}>{card.sub}</div>
            </motion.div>
          ))}

          {/* 3D glow ring */}
          <div className="absolute -inset-px rounded-[32px] bg-gradient-to-b from-[#FF7A00]/20 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -inset-4 rounded-[36px] bg-[#FF7A00]/[0.06] blur-2xl pointer-events-none" />

          {/* 3D Mockup wrapper — receives mouse tilt */}
          <div
            ref={mockupRef}
            style={{ transition: 'transform 0.15s ease-out', transformStyle: 'preserve-3d' }}
          >
          {/* Browser window */}
          <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_32px_80px_rgba(0,0,0,0.85),0_0_40px_rgba(255,122,0,0.08),inset_0_1px_0_rgba(255,255,255,0.06)]">
            {/* Chrome */}
            <div className="bg-[#181818] border-b border-white/[0.06] px-4 py-3.5 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
              </div>
              <div className="flex-1 bg-[#111]/70 rounded-lg px-3 py-1.5 text-xs text-[#555] flex items-center gap-2 max-w-[200px]">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                app.barberpro.com.br
              </div>
              <div className="ml-auto flex items-center gap-2.5">
                <div className="relative">
                  <Bell className="w-4 h-4 text-[#555]" />
                  <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#FF7A00] text-[8px] text-white flex items-center justify-center font-bold">3</div>
                </div>
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#FF9933] flex items-center justify-center text-xs font-bold text-white">A</div>
              </div>
            </div>

            {/* Dashboard */}
            <div className="bg-[#111111] flex">
              {/* Sidebar */}
              <div className="hidden sm:flex flex-col gap-1 py-4 px-2 w-14 border-r border-white/[0.04]">
                {[BarChart3, Calendar, Users, CreditCard, Bell].map((Icon, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      i === 0 ? "bg-[#FF7A00]/12 text-[#FF7A00]" : "text-[#444]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="flex-1 p-5 space-y-3">
                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { label: "Faturamento hoje", value: "R$ 890", delta: "+12%", color: "text-emerald-400" },
                    { label: "Agendamentos", value: "24", delta: "7 pendentes", color: "text-blue-400" },
                    { label: "Ticket médio", value: "R$ 52", delta: "+R$8", color: "text-[#FF7A00]" },
                    { label: "Novos clientes", value: "5", delta: "Esta semana", color: "text-purple-400" },
                  ].map((stat, i) => (
                    <div key={i} className="glass rounded-xl p-3 border border-white/[0.04]">
                      <div className="text-[10px] text-[#555] mb-1 uppercase tracking-wide">{stat.label}</div>
                      <div className="text-[17px] font-bold text-white leading-tight">{stat.value}</div>
                      <div className={`text-xs font-medium ${stat.color} mt-0.5`}>{stat.delta}</div>
                    </div>
                  ))}
                </div>

                {/* Chart + Agenda */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                  <div className="lg:col-span-2 glass rounded-xl p-4 border border-white/[0.04]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm font-semibold text-white">Faturamento do Mês</div>
                      <div className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> +23.4%
                      </div>
                    </div>
                    <div className="flex items-end gap-1.5 h-20">
                      {chartData.map((h, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 rounded-t-sm"
                          style={{
                            background: i === chartData.length - 1
                              ? "linear-gradient(to top, #FF7A00, #FFB347)"
                              : "rgba(255,122,0,0.18)",
                          }}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.7 + i * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="glass rounded-xl p-4 border border-white/[0.04]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm font-semibold text-white">Agenda</div>
                      <span className="text-[10px] text-[#FF7A00]">Ver tudo →</span>
                    </div>
                    <div className="space-y-2">
                      {appointments.map((appt, i) => (
                        <div key={i} className={`flex items-center gap-2.5 py-1.5 ${i < appointments.length - 1 ? "border-b border-white/[0.04]" : ""}`}>
                          <span className="text-[10px] text-[#555] w-10 shrink-0 font-mono">{appt.time}</span>
                          <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            appt.status === "active" ? "bg-[#FF7A00] animate-pulse" :
                            appt.status === "confirmed" ? "bg-emerald-500" : "bg-[#444]"
                          }`} />
                          <div className="flex-1 min-w-0">
                            <div className="text-[11px] font-medium text-white truncate">{appt.client}</div>
                            <div className="text-[10px] text-[#555]">{appt.service}</div>
                          </div>
                          {appt.status === "active" && <Clock className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" />}
                          {appt.status === "confirmed" && <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                          {appt.status === "pending" && <AlertCircle className="w-3.5 h-3.5 text-[#555] shrink-0" />}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom glow */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-1/2 h-16 bg-[#FF7A00]/[0.06] blur-[48px] pointer-events-none" />
          </div>{/* end 3D wrapper */}
        </motion.div>
      </div>
    </section>
  );
}
