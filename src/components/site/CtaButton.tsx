import type { ReactNode } from "react";
import { WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function CtaButton({
  children,
  size = "md",
  showIcon = true,
  variant = "verde",
  className = "",
}: {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  variant?: "verde" | "branco";
  className?: string;
}) {
  const sizes = {
    sm: "px-4 py-2 text-[0.9rem]",
    md: "px-6 py-3 text-[1rem]",
    lg: "px-8 py-4 text-[1.0625rem]",
  } as const;

  const variants = {
    verde: "bg-verde text-branco hover:bg-tinta",
    branco: "bg-branco text-verde hover:bg-[#EFE9E0]",
  } as const;

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-full font-medium transition-[transform,background-color] duration-200 ease-out hover:-translate-y-[2px] ${variants[variant]} ${sizes[size]} ${className}`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {showIcon && <WhatsAppIcon className="h-5 w-5 shrink-0" />}
      {children}
    </a>
  );
}
