"use client";

import { useState, CSSProperties } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface StripePricingButtonProps {
  plan: "mensal" | "trimestral" | "anual";
  className?: string;
  style?: CSSProperties;
  label?: string;
  variant?: "primary" | "secondary" | "gold";
}

export function StripePricingButton({
  plan,
  className,
  style,
  label = "Assinar agora",
  variant = "primary",
}: StripePricingButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Erro ao iniciar pagamento. Tente novamente.");
      }
    } catch {
      alert("Erro ao conectar com o servidor. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      disabled={loading}
      whileHover={loading ? {} : { scale: 1.02, y: -1 }}
      whileTap={loading ? {} : { scale: 0.98 }}
      className={className}
      style={style}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <svg
            className="animate-spin w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
          Aguarde...
        </span>
      ) : (
        <span className="flex items-center justify-center gap-2">
          {label}
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      )}
    </motion.button>
  );
}
