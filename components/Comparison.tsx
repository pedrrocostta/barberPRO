"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const rows = [
  { feature: "Agendamento online 24/7", starter: true, pro: true, max: true },
  { feature: "WhatsApp automático", starter: true, pro: true, max: true },
  { feature: "App mobile", starter: false, pro: true, max: true },
  { feature: "Número de barbeiros", starter: "1", pro: "5", max: "Ilimitado" },
  { feature: "Clientes cadastrados", starter: "200", pro: "Ilimitado", max: "Ilimitado" },
  { feature: "Controle financeiro", starter: false, pro: true, max: true },
  { feature: "Programa de fidelidade", starter: false, pro: true, max: true },
  { feature: "Relatórios avançados", starter: false, pro: true, max: true },
  { feature: "Controle de estoque", starter: false, pro: true, max: true },
  { feature: "Multi-unidades", starter: false, pro: false, max: true },
  { feature: "API de integração", starter: false, pro: false, max: true },
  { feature: "Gerente de conta dedicado", starter: false, pro: false, max: true },
  { feature: "Suporte", starter: "Chat", pro: "Prioritário", max: "24/7 dedicado" },
];

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-sm font-medium text-white">{value}</span>;
  }
  if (value === true) {
    return (
      <div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto">
        <Check className="w-3 h-3 text-emerald-400" />
      </div>
    );
  }
  return (
    <div className="w-5 h-5 rounded-full bg-white/[0.04] flex items-center justify-center mx-auto">
      <Minus className="w-3 h-3 text-[#444]" />
    </div>
  );
}

export function Comparison() {
  return (
    <section className="py-14 lg:py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Compare os planos
          </h2>
          <p className="text-[#666]">Veja exatamente o que cada plano inclui.</p>
        </motion.div>

        <div className="overflow-x-auto -mx-4 px-4 lg:mx-0 lg:px-0 no-scrollbar">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl border border-white/[0.07] overflow-hidden min-w-[560px] lg:min-w-0"
        >
          {/* Header */}
          <div className="grid grid-cols-4 border-b border-white/[0.06]">
            <div className="p-5 text-sm font-medium text-[#555]">Funcionalidade</div>
            {["Starter", "Pro", "Max"].map((plan, i) => (
              <div
                key={plan}
                className={`p-5 text-center ${i === 1 ? "bg-[#FF7A00]/[0.06] border-x border-[#FF7A00]/20" : ""}`}
              >
                <div className={`text-sm font-bold ${i === 1 ? "text-[#FF7A00]" : "text-white"}`}>{plan}</div>
                {i === 1 && (
                  <div className="text-[10px] text-[#FF7A00]/70 mt-0.5">Mais popular</div>
                )}
              </div>
            ))}
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={`grid grid-cols-4 border-b border-white/[0.04] last:border-0 hover:bg-white/[0.015] transition-colors`}
            >
              <div className="p-4 text-sm text-[#B3B3B3]">{row.feature}</div>
              <div className="p-4 flex items-center justify-center">
                <Cell value={row.starter} />
              </div>
              <div className="p-4 flex items-center justify-center bg-[#FF7A00]/[0.03] border-x border-[#FF7A00]/10">
                <Cell value={row.pro} />
              </div>
              <div className="p-4 flex items-center justify-center">
                <Cell value={row.max} />
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  );
}
