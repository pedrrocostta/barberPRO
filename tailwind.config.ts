import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#111111",
          secondary: "#1A1A1A",
          card: "#1E1E1E",
          border: "#2A2A2A",
        },
        orange: {
          DEFAULT: "#FF7A00",
          50: "#FFF3E6",
          100: "#FFE0BF",
          200: "#FFC480",
          300: "#FFA840",
          400: "#FF8C00",
          500: "#FF7A00",
          600: "#E06D00",
          700: "#B35600",
          800: "#804000",
          900: "#4D2600",
        },
        gray: {
          text: "#B3B3B3",
          muted: "#666666",
          border: "#2A2A2A",
        },
      },
      fontFamily: {
        sans: ["Satoshi", "system-ui", "sans-serif"],
        display: ["Satoshi", "system-ui", "sans-serif"],
      },
      screens: {
        "3xl": "1920px",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "orange-glow": "radial-gradient(ellipse at center, rgba(255,122,0,0.15) 0%, transparent 70%)",
        "hero-grid": "linear-gradient(rgba(255,122,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,0,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "hero-grid": "64px 64px",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        "float-card": "floatCard 5s ease-in-out infinite",
        "float-card-delayed": "floatCard 5s ease-in-out 1.5s infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "gradient-shift": "gradientShift 4s ease infinite",
        "spin-slow": "spin 24s linear infinite",
        "spin-reverse": "spinReverse 18s linear infinite",
        "bounce-subtle": "bounceSubtle 2s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "orbit": "orbitSpin 8s linear infinite",
        "rotate-border": "rotateBorderAngle 4s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-14px) rotate(1deg)" },
          "66%": { transform: "translateY(-7px) rotate(-1deg)" },
        },
        floatCard: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255,122,0,0.3)" },
          "50%": { boxShadow: "0 0 50px rgba(255,122,0,0.65)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(32px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        orbitSpin: {
          from: { transform: "rotate(0deg) translateX(140px) rotate(0deg)" },
          to: { transform: "rotate(360deg) translateX(140px) rotate(-360deg)" },
        },
        spinReverse: {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        rotateBorderAngle: {
          from: { "--border-angle": "0deg" } as Record<string, string>,
          to: { "--border-angle": "360deg" } as Record<string, string>,
        },
      },
      boxShadow: {
        "orange": "0 0 20px rgba(255,122,0,0.3)",
        "orange-lg": "0 0 40px rgba(255,122,0,0.4)",
        "orange-xl": "0 0 60px rgba(255,122,0,0.5), 0 0 120px rgba(255,122,0,0.2)",
        "card": "0 4px 24px rgba(0,0,0,0.4)",
        "card-hover": "0 16px 48px rgba(0,0,0,0.6)",
        "card-premium": "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        "pro": "0 0 40px rgba(255,122,0,0.15), 0 20px 60px rgba(0,0,0,0.6)",
      },
      backdropBlur: {
        xs: "2px",
        "2xl": "40px",
      },
    },
  },
  plugins: [],
};

export default config;
