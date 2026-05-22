"use client";

import { motion } from "framer-motion";
import {
  Bell,
  Calendar,
  Users,
  CreditCard,
  BarChart3,
  Settings,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Package,
  MessageSquare,
  Star,
  Scissors,
} from "lucide-react";

const navItems = [
  { icon: BarChart3, label: "Dashboard", active: true },
  { icon: Calendar, label: "Agenda" },
  { icon: Users, label: "Clientes" },
  { icon: CreditCard, label: "Financeiro" },
  { icon: Package, label: "Produtos" },
  { icon: Settings, label: "Config." },
];

const appointments = [
  { time: "09:00", name: "Carlos Silva", service: "Corte + Barba", barber: "João", status: "done", value: "R$ 65", avatar: "C" },
  { time: "09:45", name: "Rafael Santos", service: "Degradê", barber: "Pedro", status: "active", value: "R$ 45", avatar: "R" },
  { time: "10:30", name: "Bruno Costa", service: "Corte Social", barber: "João", status: "pending", value: "R$ 40", avatar: "B" },
  { time: "11:15", name: "Marcos Lima", service: "Barba", barber: "Lucas", status: "pending", value: "R$ 30", avatar: "M" },
  { time: "12:00", name: "Felipe Rocha", service: "Corte + Barba", barber: "Pedro", status: "pending", value: "R$ 65", avatar: "F" },
];

const barbers = [
  { name: "João Mendes", cuts: 18, revenue: "R$ 1.240", rating: 4.9, avatar: "JM", pct: 90, color: "from-[#FF7A00] to-[#FFB347]" },
  { name: "Pedro Alves", cuts: 15, revenue: "R$ 980", rating: 4.8, avatar: "PA", pct: 75, color: "from-blue-500 to-blue-400" },
  { name: "Lucas Costa", cuts: 12, revenue: "R$ 720", rating: 4.7, avatar: "LC", pct: 60, color: "from-purple-500 to-purple-400" },
];

const activity = [
  { icon: MessageSquare, text: "WhatsApp enviado para Carlos Silva", time: "2m", color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { icon: Star, text: "Rafael Santos avaliou com 5 estrelas", time: "14m", color: "text-yellow-400", bg: "bg-yellow-500/10" },
  { icon: Bell, text: "Novo agendamento: Marcos Lima 11:15", time: "32m", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Scissors, text: "Corte + Barba finalizado — João", time: "1h", color: "text-[#FF7A00]", bg: "bg-[#FF7A00]/10" },
  { icon: CreditCard, text: "Pagamento R$65 recebido — PIX", time: "1h", color: "text-purple-400", bg: "bg-purple-500/10" },
];

const chartData = [30, 50, 40, 70, 55, 80, 65, 90, 72, 85, 78, 100];

export function Dashboard() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0D0D0D]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-[#FF7A00]/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="badge-orange inline-flex mb-5">Dashboard</div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Visão completa do seu
            <br />
            <span className="gradient-text">negócio em tempo real</span>
          </h2>
          <p className="text-lg text-[#888] max-w-xl mx-auto">
            Acompanhe tudo que acontece na sua barbearia com dados atualizados automaticamente.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl overflow-hidden border border-white/[0.07] shadow-[0_0_120px_rgba(0,0,0,0.95),0_0_60px_rgba(255,122,0,0.06)] max-w-6xl mx-auto"
        >
          {/* Window chrome */}
          <div className="bg-[#161616] border-b border-white/[0.06] px-5 py-4 flex items-center gap-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
            </div>
            <div className="flex-1 bg-[#0F0F0F] rounded-lg px-3 py-1.5 flex items-center gap-2 max-w-[220px]">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs text-[#555]">app.barberpro.com.br</span>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <div className="relative cursor-pointer">
                <Bell className="w-4 h-4 text-[#555] hover:text-white transition-colors" />
                <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#FF7A00] text-[7px] text-white flex items-center justify-center font-bold">3</div>
              </div>
              <div className="hidden sm:flex items-center gap-2 glass border border-white/[0.05] rounded-xl px-3 py-1.5">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#FF9933] flex items-center justify-center text-xs font-bold text-white">A</div>
                <span className="text-xs text-[#888]">Admin</span>
              </div>
            </div>
          </div>

          {/* App layout */}
          <div className="bg-[#111111] flex" style={{ height: 620 }}>
            {/* Sidebar */}
            <div className="w-16 lg:w-56 bg-[#131313] border-r border-white/[0.04] flex flex-col py-5 shrink-0">
              <div className="px-4 mb-5 hidden lg:block">
                <div className="text-[9px] text-[#333] uppercase tracking-[0.15em] font-semibold px-2">Navegação</div>
              </div>
              <nav className="flex flex-col gap-0.5 px-2 flex-1">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-default transition-all ${
                      item.active
                        ? "bg-[#FF7A00]/10 text-[#FF7A00] border border-[#FF7A00]/15"
                        : "text-[#444] hover:text-[#888] hover:bg-white/[0.025]"
                    }`}
                  >
                    <item.icon className="w-4 h-4 shrink-0" />
                    <span className="text-[13px] font-medium hidden lg:block">{item.label}</span>
                    {item.active && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#FF7A00] hidden lg:block" />
                    )}
                  </div>
                ))}
              </nav>
              {/* User at bottom */}
              <div className="px-2 hidden lg:block">
                <div className="flex items-center gap-2.5 p-3 rounded-xl glass border border-white/[0.05]">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#FF9933] flex items-center justify-center text-xs font-bold text-white shrink-0">A</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[11px] font-semibold text-white truncate">Admin</div>
                    <div className="text-[9px] text-[#444]">Dono</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 overflow-auto p-5 space-y-4 min-w-0">
              {/* Header */}
              <div className="flex items-center justify-between mb-1">
                <div>
                  <h3 className="text-base font-bold text-white">Bom dia, Admin 👋</h3>
                  <p className="text-xs text-[#444]">Quarta-feira, 22 de maio · 10:30</p>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <div className="glass border border-white/[0.05] rounded-xl px-3 py-1.5 text-xs text-[#555]">Hoje</div>
                  <div className="glass border border-white/[0.05] rounded-xl px-3 py-1.5 text-xs text-[#555]">Semana</div>
                  <div className="glass border border-[#FF7A00]/20 bg-[#FF7A00]/05 rounded-xl px-3 py-1.5 text-xs text-[#FF7A00]">Mês</div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { label: "Faturamento Hoje", value: "R$ 890", delta: "+12%", trend: "up", icon: TrendingUp, colorCls: "text-emerald-400", bgCls: "bg-emerald-500/10" },
                  { label: "Agendamentos", value: "24", delta: "7 pendentes", trend: "neutral", icon: Calendar, colorCls: "text-blue-400", bgCls: "bg-blue-500/10" },
                  { label: "Ticket Médio", value: "R$ 52", delta: "+R$ 8 hoje", trend: "up", icon: CreditCard, colorCls: "text-[#FF7A00]", bgCls: "bg-[#FF7A00]/10" },
                  { label: "Novos Clientes", value: "5", delta: "Esta semana", trend: "neutral", icon: Users, colorCls: "text-purple-400", bgCls: "bg-purple-500/10" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 + 0.2 }}
                    className="glass-card rounded-2xl p-4 border border-white/[0.05]"
                  >
                    <div className="flex items-start justify-between mb-2.5">
                      <span className="text-[10px] text-[#444] uppercase tracking-wide">{stat.label}</span>
                      <div className={`w-7 h-7 rounded-xl flex items-center justify-center ${stat.bgCls}`}>
                        <stat.icon className={`w-3.5 h-3.5 ${stat.colorCls}`} />
                      </div>
                    </div>
                    <div className="text-[22px] font-black text-white" style={{ letterSpacing: "-0.02em" }}>{stat.value}</div>
                    <div className={`text-xs font-medium mt-0.5 flex items-center gap-1 ${stat.trend === "up" ? "text-emerald-400" : "text-[#444]"}`}>
                      {stat.trend === "up" && <TrendingUp className="w-3 h-3" />}
                      {stat.delta}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Charts + activity row */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
                {/* Revenue chart */}
                <div className="lg:col-span-2 glass-card rounded-2xl p-4 border border-white/[0.05]">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm font-bold text-white">Faturamento do Mês</div>
                      <div className="text-[10px] text-[#444]">Janeiro 2025</div>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-400 text-xs font-semibold">
                      <TrendingUp className="w-3 h-3" /> +23.4%
                    </div>
                  </div>
                  <div className="flex items-end gap-1.5 h-24">
                    {chartData.map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-t-md relative overflow-hidden"
                        style={{
                          background:
                            i === chartData.length - 1
                              ? "linear-gradient(to top, #FF7A00, #FFB347)"
                              : "rgba(255,122,0,0.18)",
                        }}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.04, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {i === chartData.length - 1 && (
                          <div className="absolute inset-0 shimmer" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-1.5 text-[9px] text-[#333]">
                    <span>Jan 1</span>
                    <span>Jan 15</span>
                    <span>Hoje</span>
                  </div>
                </div>

                {/* Top Barbers */}
                <div className="glass-card rounded-2xl p-4 border border-white/[0.05]">
                  <div className="text-sm font-bold text-white mb-4">Top Barbeiros</div>
                  <div className="space-y-3.5">
                    {barbers.map((barber, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF7A00]/50 to-[#FF7A00]/15 flex items-center justify-center text-[9px] font-bold text-[#FF7A00] shrink-0 border border-[#FF7A00]/20">
                          {barber.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[11px] font-semibold text-white">{barber.name}</span>
                            <span className="text-[10px] font-bold text-[#FF7A00]">{barber.revenue}</span>
                          </div>
                          <div className="text-[9px] text-[#444] mb-1">{barber.cuts} cortes · {barber.rating}★</div>
                          <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${barber.color} rounded-full`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${barber.pct}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activity feed */}
                <div className="glass-card rounded-2xl p-4 border border-white/[0.05]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-bold text-white">Atividade</div>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="space-y-3">
                    {activity.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.07 }}
                        className="flex items-start gap-2"
                      >
                        <div className={`w-5 h-5 rounded-lg ${item.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                          <item.icon className={`w-2.5 h-2.5 ${item.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[9px] text-[#888] leading-relaxed">{item.text}</div>
                          <div className="text-[8px] text-[#444] mt-0.5">{item.time} atrás</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Appointments */}
              <div className="glass-card rounded-2xl p-4 border border-white/[0.05]">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-bold text-white">Agenda de Hoje</div>
                  <button className="text-xs text-[#FF7A00] hover:text-[#FFB347] transition-colors">
                    Ver todos os horários →
                  </button>
                </div>
                <div className="space-y-1.5">
                  {appointments.map((appt, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + i * 0.07 }}
                      className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors ${
                        appt.status === "active"
                          ? "bg-[#FF7A00]/[0.07] border border-[#FF7A00]/15"
                          : "hover:bg-white/[0.02] border border-transparent"
                      }`}
                    >
                      <span className="text-[10px] text-[#444] w-11 shrink-0 font-mono">{appt.time}</span>
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold shrink-0 ${
                          appt.status === "active"
                            ? "bg-[#FF7A00]/20 text-[#FF7A00]"
                            : "bg-white/[0.06] text-[#555]"
                        }`}
                      >
                        {appt.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[12px] font-semibold text-white truncate">{appt.name}</div>
                        <div className="text-[10px] text-[#444]">{appt.service} · {appt.barber}</div>
                      </div>
                      <div className="text-[11px] font-bold text-white shrink-0">{appt.value}</div>
                      <div className={`shrink-0 ${
                        appt.status === "done" ? "text-emerald-400" :
                        appt.status === "active" ? "text-[#FF7A00]" : "text-[#333]"
                      }`}>
                        {appt.status === "done" ? <CheckCircle className="w-3.5 h-3.5" /> :
                         appt.status === "active" ? <Clock className="w-3.5 h-3.5" /> :
                         <AlertCircle className="w-3.5 h-3.5" />}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
