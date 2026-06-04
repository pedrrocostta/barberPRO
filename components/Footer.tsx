"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const links = {
  Produto: ["Funcionalidades", "Planos", "App Mobile", "Integrações", "Novidades"],
  Empresa: ["Sobre nós", "Blog", "Carreiras", "Parceiros", "Imprensa"],
  Suporte: ["Central de ajuda", "Contato", "Status", "Comunidade", "Termos de uso"],
  Legal: ["Privacidade", "Termos", "Cookies", "LGPD", "Segurança"],
};

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter/X", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

const stats = [
  { value: "3.000+", label: "Barbearias ativas" },
  { value: "500k+", label: "Agendamentos/mês" },
  { value: "4.9★", label: "Avaliação média" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] bg-[#0A0A0A]">
      {/* Top ambient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF7A00]/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#FF7A00]/[0.03] blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pb-safe">
        {/* Stats strip */}
        <div className="border-b border-white/[0.04] py-10">
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto sm:max-w-none sm:grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-black text-white mb-1" style={{ letterSpacing: "-0.02em" }}>
                  {stat.value}
                </div>
                <div className="text-xs text-[#444] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Logo size={32} glow className="mb-5" />

            <p className="text-sm text-[#444] leading-relaxed mb-7 max-w-xs">
              A plataforma de gestão e agendamento mais completa para barbearias modernas do Brasil.
              Simples, poderosa e feita para crescer.
            </p>

            {/* Contact */}
            <div className="space-y-2.5 mb-8">
              {[
                { icon: Mail, text: "suporte@barberpro.com.br" },
                { icon: Phone, text: "(11) 99999-0000" },
                { icon: MapPin, text: "São Paulo, SP — Brasil" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-[#444]">
                  <item.icon className="w-3.5 h-3.5 text-[#FF7A00]/60 shrink-0" />
                  <span className="hover:text-[#888] transition-colors cursor-pointer">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl glass border border-white/[0.05] flex items-center justify-center text-[#444] hover:text-white hover:border-[#FF7A00]/25 hover:bg-[#FF7A00]/05 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(links).map(([category, items], colIdx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: colIdx * 0.08 }}
              >
                <div className="text-[10px] font-semibold text-[#333] uppercase tracking-[0.12em] mb-4">
                  {category}
                </div>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-[#444] hover:text-[#B3B3B3] transition-colors flex items-center gap-1 group"
                      >
                        {item}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-px" />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] py-6 pb-8 lg:pb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs text-[#333]">
            <Logo size={16} />
            <span>© {new Date().getFullYear()} BarberPro. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#333]">
            Feito com
            <span className="text-[#FF7A00] mx-0.5 animate-pulse-glow">♥</span>
            para barbearias brasileiras
          </div>

          <div className="flex items-center gap-4 text-xs text-[#333]">
            {["Privacidade", "Termos", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-[#888] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
