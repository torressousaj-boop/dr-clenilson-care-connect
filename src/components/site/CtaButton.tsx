import type { ReactNode } from "react";
import { WHATSAPP_URL } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function CtaButton({
  children,
  size = "md",
  showIcon = true,
  className = "",
}: {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  className?: string;
}) {
  const sizes = {
    sm: "px-4 py-2 text-[0.9rem]",
    md: "px-6 py-3 text-[1rem]",
    lg: "px-8 py-4 text-[1.0625rem]",
  } as const;

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 rounded-full bg-ambar font-medium text-tinta transition-[transform,background-color] duration-200 ease-out hover:-translate-y-[2px] hover:bg-ambar-hover ${sizes[size]} ${className}`}
      style={{ fontFamily: "var(--font-display)" }}
    >
      {showIcon && <WhatsAppIcon className="h-5 w-5 shrink-0" />}
      {children}
    </a>
  );
}
