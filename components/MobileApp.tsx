"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Bell,
  Users,
  ChevronRight,
  Star,
  CheckCircle,
  MessageSquare,
  BarChart3,
  Scissors,
  Wifi,
  Battery,
  Signal,
} from "lucide-react";

function AgendaScreen() {
  const slots = [
    { time: "09:00", client: "Carlos Silva", service: "Corte + Barba", status: "done" },
    { time: "09:45", client: "Rafael Santos", service: "Degradê", status: "active" },
    { time: "10:30", client: "Bruno Costa", service: "Corte Social", status: "upcoming" },
    { time: "11:15", client: "Marcos Lima", service: "Barba", status: "upcoming" },
  ];
  return (
    <div className="space-y-1.5">
      {slots.map((slot, i) => (
        <div
          key={i}
          className={`flex items-center gap-2 px-2 py-1.5 rounded-xl text-left ${
            slot.status === "active"
              ? "bg-[#FF7A00]/12 border border-[#FF7A00]/20"
              : "bg-white/[0.03]"
          }`}
        >
          <span className="text-[9px] text-[#555] w-9 font-mono shrink-0">{slot.time}</span>
          <div
            className={`w-1.5 h-1.5 rounded-full shrink-0 ${
              slot.status === "done"
                ? "bg-emerald-500"
                : slot.status === "active"
                ? "bg-[#FF7A00] animate-pulse"
                : "bg-[#333]"
            }`}
          />
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-semibold text-white truncate">{slot.client}</div>
            <div className="text-[8px] text-[#555]">{slot.service}</div>
          </div>
          {slot.status === "active" && (
            <span className="text-[8px] text-[#FF7A00] font-bold bg-[#FF7A00]/10 px-1.5 py-0.5 rounded-full shrink-0">
              AGORA
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function ClientesScreen() {
  const clients = [
    { name: "Carlos Silva", visits: 12, spend: "R$780", avatar: "C", color: "from-orange-500/30 to-orange-600/10" },
    { name: "Rafael Santos", visits: 8, spend: "R$480", avatar: "R", color: "from-blue-500/30 to-blue-600/10" },
    { name: "Bruno Costa", visits: 5, spend: "R$275", avatar: "B", color: "from-purple-500/30 to-purple-600/10" },
    { name: "Marcos Lima", visits: 3, spend: "R$120", avatar: "M", color: "from-emerald-500/30 to-emerald-600/10" },
  ];
  return (
    <div className="space-y-1.5">
      {clients.map((c, i) => (
        <div key={i} className="flex items-center gap-2 px-2 py-1.5 rounded-xl bg-white/[0.03]">
          <div
            className={`w-7 h-7 rounded-full bg-gradient-to-br ${c.color} flex items-center justify-center text-[9px] font-bold text-white shrink-0`}
          >
            {c.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] font-semibold text-white truncate">{c.name}</div>
            <div className="text-[8px] text-[#555]">{c.visits} visitas · {c.spend}</div>
          </div>
          <ChevronRight className="w-3 h-3 text-[#333] shrink-0" />
        </div>
      ))}
    </div>
  );
}

function NotificacoesScreen() {
  const notifs = [
    { icon: CheckCircle, text: "Carlos confirmou para as 09:00", time: "2m", color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { icon: Bell, text: "Novo agendamento: Bruno Costa", time: "15m", color: "text-blue-400", bg: "bg-blue-500/10" },
    { icon: Star, text: "Rafael deixou 5 estrelas ★★★★★", time: "1h", color: "text-yellow-400", bg: "bg-yellow-500/10" },
    { icon: MessageSquare, text: "Lembrete automático enviado via WhatsApp", time: "2h", color: "text-purple-400", bg: "bg-purple-500/10" },
  ];
  return (
    <div className="space-y-1.5">
      {notifs.map((n, i) => (
        <div key={i} className="flex items-start gap-2 px-2 py-1.5 rounded-xl bg-white/[0.03]">
          <div className={`w-5 h-5 rounded-lg ${n.bg} flex items-center justify-center shrink-0 mt-0.5`}>
            <n.icon className={`w-2.5 h-2.5 ${n.color}`} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[9px] text-[#B3B3B3] leading-relaxed">{n.text}</div>
          </div>
          <span className="text-[8px] text-[#444] shrink-0">{n.time}</span>
        </div>
      ))}
    </div>
  );
}

const screens = [
  { title: "Agenda", icon: Calendar, gradient: "from-[#FF7A00] to-[#FF9933]", content: "agenda" as const, navActive: 0 },
  { title: "Clientes", icon: Users, gradient: "from-blue-500 to-blue-700", content: "clientes" as const, navActive: 1 },
  { title: "Notificações", icon: Bell, gradient: "from-purple-500 to-purple-700", content: "notificacoes" as const, navActive: 2 },
];

function PhoneMockup({ screen, index }: { screen: (typeof screens)[0]; index: number }) {
  const isCenter = index === 1;
  return (
    <motion.div
      initial={{ opacity: 0, y: 70, scale: 0.9 }}
      whileInView={{ opacity: isCenter ? 1 : 0.75, y: 0, scale: isCenter ? 1 : 0.88 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${isCenter ? "z-10" : "z-0"}`}
    >
      <motion.div
        animate={{ y: isCenter ? [0, -12, 0] : [0, -7, 0] }}
        transition={{
          duration: isCenter ? 4 : 5 + index,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.6,
        }}
        className="relative"
      >
        {/* Glow under center phone */}
        {isCenter && (
          <div className="absolute -inset-4 bottom-0 rounded-[40px] bg-[#FF7A00]/15 blur-2xl pointer-events-none" />
        )}

        {/* Phone shell */}
        <div
          className={`relative rounded-[36px] overflow-hidden ${
            isCenter
              ? "w-[220px] shadow-[0_0_60px_rgba(255,122,0,0.3),0_40px_80px_rgba(0,0,0,0.9)]"
              : "w-[185px] shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
          }`}
          style={{
            border: isCenter
              ? "2px solid rgba(255,122,0,0.4)"
              : "1.5px solid rgba(255,255,255,0.08)",
            background: "#0A0A0A",
          }}
        >
          {/* Status bar */}
          <div className="bg-[#0A0A0A] px-4 pt-3 pb-1 flex items-center justify-between">
            <span className="text-[9px] text-white font-semibold">9:41</span>
            <div className="absolute left-1/2 -translate-x-1/2 w-14 h-4 bg-[#0A0A0A] rounded-b-2xl" />
            <div className="flex items-center gap-1">
              <Signal className="w-2.5 h-2.5 text-white" />
              <Wifi className="w-2.5 h-2.5 text-white" />
              <Battery className="w-3 h-3 text-white" />
            </div>
          </div>

          {/* App content */}
          <div className="bg-[#111111] px-3 pb-4">
            {/* App header */}
            <div className="flex items-center gap-2 py-2.5">
              <div
                className={`w-7 h-7 rounded-xl bg-gradient-to-br ${screen.gradient} flex items-center justify-center shrink-0`}
              >
                <screen.icon className="w-3.5 h-3.5 text-white" />
              </div>
              <span className={`font-bold text-white ${isCenter ? "text-sm" : "text-xs"}`}>
                {screen.title}
              </span>
              <div className="ml-auto w-5 h-5 rounded-full bg-[#FF7A00]/15 flex items-center justify-center relative">
                <Bell className="w-2.5 h-2.5 text-[#FF7A00]" />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#FF7A00] text-[6px] text-white flex items-center justify-center font-bold">3</div>
              </div>
            </div>

            {/* Screen content */}
            {screen.content === "agenda" && <AgendaScreen />}
            {screen.content === "clientes" && <ClientesScreen />}
            {screen.content === "notificacoes" && <NotificacoesScreen />}

            {/* Bottom nav */}
            <div className="mt-3 pt-3 border-t border-white/[0.05] flex items-center justify-around">
              {[Calendar, Users, BarChart3, Scissors].map((Icon, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center gap-0.5 ${
                    i === screen.navActive ? "text-[#FF7A00]" : "text-[#333]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {i === screen.navActive && (
                    <div className="w-1 h-1 rounded-full bg-[#FF7A00]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function MobileApp() {
  return (
    <section id="app" className="py-28 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[#FF7A00]/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="badge-orange inline-flex mb-6">App Mobile</div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6"
              style={{ letterSpacing: "-0.03em" }}
            >
              Gerencie tudo
              <br />
              <span className="gradient-text">na palma da mão</span>
            </h2>
            <p className="text-lg text-[#888] leading-relaxed mb-10">
              App completo para iOS e Android. Notificações em tempo real, gestão de agenda,
              clientes e financeiro — disponível de qualquer lugar.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { icon: Bell, label: "Notificações instantâneas", desc: "Alertas de novos agendamentos em segundos" },
                { icon: Calendar, label: "Agenda offline", desc: "Acesse sua agenda mesmo sem internet" },
                { icon: Users, label: "Histórico de clientes", desc: "Perfil completo de cada cliente na tela" },
                { icon: BarChart3, label: "Relatórios no celular", desc: "Dashboard completo na palma da mão" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#FF7A00]/10 border border-[#FF7A00]/15 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[#FF7A00]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-0.5">{item.label}</div>
                    <div className="text-sm text-[#666]">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Store buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="glass-card border border-white/[0.08] px-4 py-3.5 rounded-2xl text-sm font-semibold text-white flex items-center gap-2.5 justify-center hover:border-white/20 transition-all w-full"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left min-w-0">
                  <div className="text-[9px] text-[#666] leading-tight">Disponível na</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="glass-card border border-white/[0.08] px-4 py-3.5 rounded-2xl text-sm font-semibold text-white flex items-center gap-2.5 justify-center hover:border-white/20 transition-all w-full"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.31.17.67.19 1.01.08l12.2-7.04-2.64-2.64-10.57 9.6zM20.7 10.06L17.5 8.18 14.6 11l2.95 2.95 3.15-1.89a1.74 1.74 0 000-2.98v-.02zM1.53.15A1.74 1.74 0 001 1.4V22.6a1.74 1.74 0 00.53 1.25l.07.06L13.23 12l.02-.01L1.6.08l-.07.07zM4.19.16L16.4 7.2l-2.64 2.64L1.54.16c.19-.1.41-.16.65-.16.7 0 1.38.35 2 .16z" />
                </svg>
                <div className="text-left min-w-0">
                  <div className="text-[9px] text-[#666] leading-tight">Disponível no</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </motion.button>
            </div>
          </motion.div>

          {/* Right: Phone mockups */}
          <div className="flex items-end justify-center gap-3 py-10 lg:py-16 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,122,0,0.07)_0%,transparent_70%)] pointer-events-none" />

            {screens.map((screen, i) => (
              /* Laterais: só aparecem no desktop (lg+) */
              <div key={i} className={i !== 1 ? "hidden lg:block" : ""}>
                <PhoneMockup screen={screen} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
