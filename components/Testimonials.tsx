"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rodrigo Mendes",
    role: "Dono — Barbearia Crown, SP",
    avatar: "R",
    avatarColor: "from-orange-500 to-orange-600",
    stars: 5,
    text: "O BarberPro mudou completamente a minha barbearia. Antes eu perdia clientes por falta de organização. Hoje tenho agenda cheia, zero faltas e faturei 60% a mais nos últimos 3 meses.",
    highlight: "faturei 60% a mais",
  },
  {
    name: "Felipe Torres",
    role: "Proprietário — The Black Barber, RJ",
    avatar: "F",
    avatarColor: "from-blue-500 to-blue-600",
    stars: 5,
    text: "O WhatsApp automático é sensacional. Meus clientes confirmam o agendamento sem eu precisar mandar mensagem. Economizo 2 horas por dia e as faltas caíram 85%.",
    highlight: "faltas caíram 85%",
  },
  {
    name: "Marcelo Alves",
    role: "Barbeiro — Studio Masculino, MG",
    avatar: "M",
    avatarColor: "from-emerald-500 to-emerald-600",
    stars: 5,
    text: "Sistema muito fácil de usar. Em 10 minutos já estava configurado e aceitando agendamentos online. Meus clientes adoraram poder marcar pelo celular a qualquer hora.",
    highlight: "configurado em 10 minutos",
  },
  {
    name: "Bruno Nascimento",
    role: "Sócio — G.O.A.T. Barbers, DF",
    avatar: "B",
    avatarColor: "from-purple-500 to-purple-600",
    stars: 5,
    text: "Tenho 3 barbeiros e o controle de comissões era um caos. Com o BarberPro, tudo é automático. O financeiro fica organizado e cada barbeiro vê quanto gerou no dia.",
    highlight: "comissões automáticas",
  },
  {
    name: "Diego Ferreira",
    role: "Dono — Premium Cuts, RS",
    avatar: "D",
    avatarColor: "from-pink-500 to-pink-600",
    stars: 5,
    text: "O suporte é incrível. Tive uma dúvida às 21h e responderam em 15 minutos. Além disso, o app é muito bonito e meus clientes sempre elogiam a facilidade do agendamento.",
    highlight: "suporte em 15 minutos",
  },
  {
    name: "Leandro Costa",
    role: "Barbeiro — Urban Barber, BA",
    avatar: "L",
    avatarColor: "from-teal-500 to-teal-600",
    stars: 5,
    text: "Antes eu usava agenda física e WhatsApp. Era uma bagunça. Hoje o BarberPro faz tudo: agenda, lembra cliente, controla financeiro. Não consigo imaginar trabalhar sem ele.",
    highlight: "não consigo imaginar sem",
  },
];

function TestimonialCard({ t, i }: { t: typeof testimonials[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-2xl p-6 border border-white/[0.06] card-hover group cursor-default flex flex-col"
    >
      <Quote className="w-6 h-6 text-[#FF7A00]/40 mb-4 shrink-0" />
      <p className="text-sm text-[#B3B3B3] leading-relaxed flex-1 mb-5">
        {t.text.split(t.highlight).map((part, j) => (
          <span key={j}>
            {part}
            {j === 0 && (
              <span className="text-white font-semibold">{t.highlight}</span>
            )}
          </span>
        ))}
      </p>
      <div className="flex items-center gap-1 mb-4">
        {[...Array(t.stars)].map((_, j) => (
          <Star key={j} className="w-3.5 h-3.5 text-[#FF7A00] fill-current" />
        ))}
      </div>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-sm font-bold text-white shrink-0`}>
          {t.avatar}
        </div>
        <div>
          <div className="text-sm font-semibold text-white">{t.name}</div>
          <div className="text-xs text-[#555]">{t.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF7A00]/20 to-transparent" />
      <div className="absolute inset-0 bg-[#0D0D0D]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#FF7A00]/[0.04] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 lg:mb-16"
        >
          <div className="badge-orange inline-flex mb-4">Depoimentos</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Barbearias que já
            <br />
            <span className="gradient-text">transformaram seus resultados</span>
          </h2>
          <p className="text-lg text-[#B3B3B3] max-w-xl mx-auto">
            Mais de 3.000 barbearias usam o BarberPro todos os dias.
            Veja o que elas falam.
          </p>
        </motion.div>

        {/* Stars summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-[#FF7A00] fill-current" />
            ))}
          </div>
          <span className="text-2xl font-bold text-white">4.9</span>
          <span className="text-[#555] text-sm">de 5 · +1.200 avaliações</span>
        </motion.div>

        {/* Mobile: horizontal scroll */}
        <div className="lg:hidden overflow-x-auto -mx-4 px-4 no-scrollbar">
          <div className="flex gap-4 pb-4">
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-[85vw] max-w-[340px]">
                <TestimonialCard t={t} i={i} />
              </div>
            ))}
          </div>
        </div>
        {/* Desktop: grid */}
        <div className="hidden lg:grid grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
