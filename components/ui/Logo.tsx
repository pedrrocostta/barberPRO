"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoIconProps {
  size?: number;
  className?: string;
  glow?: boolean;
}

export function LogoIcon({ size = 36, className, glow = false }: LogoIconProps) {
  return (
    <div
      className={cn("shrink-0 relative", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo.svg"
        alt="BarberPro"
        width={size}
        height={size}
        priority
        className={cn(
          "w-full h-full object-contain transition-all duration-300",
          glow && "drop-shadow-[0_0_8px_rgba(255,122,0,0.7)]"
        )}
      />
    </div>
  );
}

interface LogoProps {
  size?: number;
  className?: string;
  textClassName?: string;
  glow?: boolean;
  animate?: boolean;
}

export function Logo({
  size = 36,
  className,
  textClassName,
  glow = false,
  animate = false,
}: LogoProps) {
  const fontSize = Math.round(size * 0.58);

  const Wrapper = animate ? motion.div : "div";
  const wrapperProps = animate
    ? {
        whileHover: { scale: 1.03 },
        transition: { type: "spring", stiffness: 400, damping: 20 },
      }
    : {};

  return (
    <Wrapper
      className={cn("flex items-center gap-2.5 select-none cursor-pointer", className)}
      {...(wrapperProps as object)}
    >
      <LogoIcon size={size} glow={glow} />

      <span
        className={cn("leading-none tracking-tight whitespace-nowrap", textClassName)}
        style={{ fontSize }}
      >
        <span className="font-bold text-[#FF7A00]">Barber</span>
        <span className="font-light text-[#FF7A00]">pro</span>
      </span>
    </Wrapper>
  );
}
