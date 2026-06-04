import type { NextConfig } from "next";
import path from "path";

/* ─────────────────────────────────────────────────────────────
   Security Headers
   Protege contra: XSS, clickjacking, MIME sniffing, data leaks
───────────────────────────────────────────────────────────── */
const securityHeaders = [
  // Força HTTPS por 2 anos — impede downgrade para HTTP
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Impede o site de ser embutido em iframes (anti-clickjacking)
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  // Impede que o browser "adivinhe" o tipo de arquivo — bloqueia ataques MIME
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Controla quanta informação o browser repassa ao navegar para links externos
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Desativa recursos desnecessários do browser — reduz superfície de ataque
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "browsing-topics=()",
      "payment=()",
      "usb=()",
      "bluetooth=()",
    ].join(", "),
  },
  // Controla pré-busca de DNS — desativa para evitar vazamentos de destino
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  // Content Security Policy — principal barreira contra XSS e injeção de scripts
  {
    key: "Content-Security-Policy",
    value: [
      // Origem padrão: apenas o próprio domínio
      "default-src 'self'",

      // Scripts: self + inline necessário para Next.js/React hydration
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",

      // Estilos: self + inline (Framer Motion usa inline styles) + Google Fonts
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",

      // Fontes: self + Google Fonts CDN
      "font-src 'self' https://fonts.gstatic.com data:",

      // Imagens: self + data URIs para SVGs inline
      "img-src 'self' data: blob: https:",

      // Conexões de rede: self + WhatsApp + Cakto + Kiwify (pagamentos)
      "connect-src 'self' https://pay.cakto.com.br https://pay.kiwify.com.br https://wa.me https://api.whatsapp.com https://chat.whatsapp.com https://api.stripe.com https://js.stripe.com https://checkout.stripe.com",

      // Iframes: Stripe Checkout precisa de frame para 3D Secure
      "frame-src https://js.stripe.com https://hooks.stripe.com",

      // Impede que este site seja embutido em qualquer iframe externo
      "frame-ancestors 'none'",

      // Formulários só submetem para o próprio site
      "form-action 'self'",

      // Bloqueia uso de <base> para redirecionar URLs relativas
      "base-uri 'self'",

      // Força HTTPS para todos os recursos (upgrade automático)
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  devIndicators: false,
  outputFileTracingRoot: path.join(process.cwd()),

  // Aplicar headers de segurança em todas as rotas
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

  // Apenas domínios realmente utilizados no projeto
  images: {
    remotePatterns: [
      // Removidos: avatars.githubusercontent.com e images.unsplash.com
      // (não estão em uso — menos superfície de ataque)
    ],
    // Desabilita otimização via URL externa não autorizada
    dangerouslyAllowSVG: false,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Desativa header X-Powered-By que expõe que o site usa Next.js
  poweredByHeader: false,

  // Compressão ativada
  compress: true,
};

export default nextConfig;
