"use client";

import { motion } from "framer-motion";
import { Zap, Shield, TrendingUp, Clock, Smartphone, HeadphonesIcon } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Implementação em 24h",
    description: "Nossa equipe configura tudo para você. Importe seus clientes, estruture sua agenda e comece a operar com profissionalismo no mesmo dia.",
    color: "from-yellow-500/20 to-yellow-600/10",
    border: "hover:border-yellow-500/25",
    iconColor: "text-yellow-400",
  },
  {
    icon: TrendingUp,
    title: "Resultado comprovado",
    description: "Barbearias que adotam a plataforma faturamento em média 40% a mais nos primeiros 3 meses. Dados reais de mais de 3.000 operações.",
    color: "from-emerald-500/20 to-emerald-600/10",
    border: "hover:border-emerald-500/25",
    iconColor: "text-emerald-400",
  },
  {
    icon: Clock,
    title: "Zero ausências na agenda",
    description: "Confirmações automáticas via WhatsApp eliminam faltas em até 80%. Sua agenda respeitada, sua receita protegida.",
    color: "from-[#FF7A00]/20 to-[#FF7A00]/10",
    border: "hover:border-[#FF7A00]/25",
    iconColor: "text-[#FF7A00]",
  },
  {
    icon: Smartphone,
    title: "Tecnologia proprietária",
    description: "Plataforma desenvolvida exclusivamente para o segmento de barbearias. Não é um sistema genérico adaptado — é construído para o seu mercado.",
    color: "from-blue-500/20 to-blue-600/10",
    border: "hover:border-blue-500/25",
    iconColor: "text-blue-400",
  },
  {
    icon: Shield,
    title: "Segurança de nível bancário",
    description: "Criptografia ponta a ponta, conformidade LGPD e backups automáticos diários. Seus dados e os de seus clientes sempre protegidos.",
    color: "from-purple-500/20 to-purple-600/10",
    border: "hover:border-purple-500/25",
    iconColor: "text-purple-400",
  },
  {
    icon: HeadphonesIcon,
    title: "Consultoria dedicada",
    description: "Equipe especialista disponível via WhatsApp, segunda a sábado. Não é suporte genérico — é consultoria de quem entende sua operação.",
    color: "from-pink-500/20 to-pink-600/10",
    border: "hover:border-pink-500/25",
    iconColor: "text-pink-400",
  },
];

export function Benefits() {
  return (
    <section className="py-28 relative">
      <div className="absolute inset-0 orange-gradient-bg pointer-events-none" />
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="badge-orange inline-flex items-center gap-2 mb-5">
            Por que o BarberPro
          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Uma plataforma profissional
            <br />
            <span className="gradient-text">feita para quem é sério</span>
          </h2>
          <p className="text-lg text-[#888] max-w-2xl mx-auto">
            Cada funcionalidade foi projetada para resolver desafios reais de barbearias de alto padrão.
            Não é software genérico — é solução exclusiva para o seu mercado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.09, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className={`glass-card rounded-2xl p-6 border border-white/[0.06] card-hover ${benefit.border} group cursor-default`}
            >
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
              >
                <benefit.icon className={`w-6 h-6 ${benefit.iconColor}`} />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-sm text-[#666] leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
