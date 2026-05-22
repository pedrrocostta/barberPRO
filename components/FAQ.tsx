"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Preciso ter conhecimento técnico para usar o BarberPro?",
    a: "Não. O BarberPro foi desenvolvido para ser simples e intuitivo. Em menos de 10 minutos você já está configurado e aceitando agendamentos. Temos tutoriais em vídeo e suporte via WhatsApp para te ajudar em cada etapa.",
  },
  {
    q: "Funciona no celular?",
    a: "Sim! O BarberPro tem app para iOS e Android. Você pode gerenciar sua agenda, ver relatórios, confirmar agendamentos e acompanhar tudo pelo celular — em qualquer lugar.",
  },
  {
    q: "Como funciona o WhatsApp automático?",
    a: "Conectamos sua conta do WhatsApp ao sistema. Quando um cliente agenda, ele recebe uma confirmação automática. No dia anterior, ele recebe um lembrete. Você não precisa fazer nada — é 100% automático.",
  },
  {
    q: "Posso usar com mais de um barbeiro?",
    a: "Sim! No plano Pro você pode ter até 5 barbeiros, cada um com sua própria agenda, perfil e relatório de comissões. No plano Max, barbeiros ilimitados e suporte a múltiplas unidades.",
  },
  {
    q: "Como funciona o período de teste gratuito?",
    a: "Você tem 14 dias de acesso completo ao plano Pro, sem precisar colocar cartão de crédito. No final do período, você escolhe o plano que preferir ou cancela sem custo algum.",
  },
  {
    q: "Meus clientes precisam criar conta para agendar?",
    a: "Não. Os clientes agendam pelo seu link personalizado (ex: barberpro.com.br/suabarbearia) sem precisar criar conta. É simples e rápido — o cliente escolhe o serviço, horário e confirma.",
  },
  {
    q: "Posso migrar minha agenda atual para o BarberPro?",
    a: "Sim. Nossa equipe te ajuda a importar os dados dos clientes (via planilha Excel, Google Sheets ou CSV). A migração é feita pela equipe de suporte, sem custo adicional.",
  },
  {
    q: "O sistema funciona offline?",
    a: "O app mobile tem modo offline parcial para visualização da agenda. Para novas ações (criar agendamentos, confirmar, enviar mensagens), é necessária conexão com a internet.",
  },
  {
    q: "Consigo cancelar quando quiser?",
    a: "Sim, sem multa ou burocracia. Você cancela direto pelo painel, a qualquer momento. Se cancelar no meio do mês, você continua com acesso até o fim do período pago.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Aceitamos cartão de crédito (Visa, Mastercard, Amex, Elo), boleto bancário e PIX. No plano anual, é possível parcelar em até 12x no cartão.",
  },
];

function FAQItem({ faq, i }: { faq: typeof faqs[0]; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.06 }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        open
          ? "border-[#FF7A00]/30 bg-[#FF7A00]/[0.03]"
          : "border-white/[0.06] hover:border-white/[0.12]"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className={`text-sm font-semibold transition-colors ${open ? "text-white" : "text-[#B3B3B3]"}`}>
          {faq.q}
        </span>
        <div className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
          open ? "bg-[#FF7A00]/20 text-[#FF7A00] rotate-0" : "bg-white/[0.05] text-[#555]"
        }`}>
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-5 pb-5 text-sm text-[#666] leading-relaxed border-t border-white/[0.04] pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="badge-orange inline-flex mb-4">FAQ</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>
          <p className="text-[#B3B3B3]">
            Não encontrou sua resposta?{" "}
            <a href="#" className="text-[#FF7A00] hover:text-[#FFB347] transition-colors font-medium">
              Fale com nosso suporte
            </a>
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
