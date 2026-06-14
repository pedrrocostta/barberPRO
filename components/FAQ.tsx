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
    q: "O que é o VPS e por que eu precisaria dele?",
    a: "O VPS (Servidor Virtual Privado) é a infraestrutura onde sua plataforma BarberPro fica hospedada. Com o VPS, seu sistema roda de forma independente, com mais velocidade, estabilidade e segurança. O VPS já está incluso em todos os nossos planos — Mensal, Trimestral e Anual — sem custo adicional.",
  },
  {
    q: "Posso mudar de plano depois?",
    a: "Sim, a qualquer momento. Se quiser fazer upgrade do Mensal para o Trimestral ou Anual, basta entrar em contato com nossa equipe — o valor já pago é descontado proporcionalmente. Downgrade também é possível ao final do período vigente.",
  },
  {
    q: "O plano Anual realmente inclui VPS, Domínio e Onboarding?",
    a: "Sim. No plano Anual (R$1.524/ano) você recebe VPS + infraestrutura premium, domínio personalizado para sua barbearia e uma sessão de onboarding assistido com nossa equipe para configurar tudo do zero. São benefícios que somam mais de R$600 em valor avulso.",
  },
  {
    q: "Como funciona o Onboarding assistido?",
    a: "É uma sessão com nossa equipe técnica (via videochamada ou WhatsApp) onde configuramos o sistema juntos: serviços, barbeiros, agenda, integração com WhatsApp e identidade visual. Disponível para clientes do plano Anual. Para os demais planos, oferecemos suporte guiado por tutoriais e chat.",
  },
  {
    q: "Funciona no celular?",
    a: "Sim! O BarberPro tem app para iOS e Android. Você pode gerenciar sua agenda, ver relatórios, confirmar agendamentos e acompanhar tudo pelo celular — em qualquer lugar.",
  },
  {
    q: "Como funciona o WhatsApp automático?",
    a: "Conectamos sua conta do WhatsApp ao sistema. Quando um cliente agenda, ele recebe uma confirmação automática. No dia anterior, recebe um lembrete. Você não precisa fazer nada — é 100% automático.",
  },
  {
    q: "Posso usar com mais de um barbeiro?",
    a: "Sim! Todos os planos suportam múltiplos barbeiros, cada um com sua própria agenda, perfil e relatório de comissões. Não há limite de profissionais cadastrados.",
  },
  {
    q: "Meus clientes precisam criar conta para agendar?",
    a: "Não. Os clientes agendam pelo seu link personalizado sem precisar criar conta. É simples e rápido — o cliente escolhe o serviço, horário e confirma em menos de 1 minuto.",
  },
  {
    q: "Consigo cancelar quando quiser?",
    a: "Sim, sem multa ou burocracia. Você cancela direto pelo painel, a qualquer momento. Se cancelar no meio do período, você continua com acesso até o fim do ciclo pago.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Aceitamos cartão de crédito (Visa, Mastercard, Amex, Elo), boleto bancário e PIX. No plano Anual, é possível parcelar em até 12x no cartão.",
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
    <section id="faq" className="py-14 lg:py-24 relative">
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
