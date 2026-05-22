import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BarberPro — Gestão Inteligente para Barbearias Modernas",
  description:
    "Agendamentos, clientes, financeiro e automações em um único sistema. Transforme sua barbearia em uma máquina de agendamentos com o BarberPro.",
  keywords: [
    "barbearia",
    "agendamento",
    "gestão barbearia",
    "software barbearia",
    "sistema barbearia",
    "barbershop management",
  ],
  authors: [{ name: "BarberPro" }],
  creator: "BarberPro",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://barberpro.com.br",
    title: "BarberPro — Gestão Inteligente para Barbearias Modernas",
    description:
      "Agendamentos, clientes, financeiro e automações em um único sistema.",
    siteName: "BarberPro",
  },
  twitter: {
    card: "summary_large_image",
    title: "BarberPro — Gestão Inteligente para Barbearias Modernas",
    description:
      "Agendamentos, clientes, financeiro e automações em um único sistema.",
    creator: "@barberpro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
