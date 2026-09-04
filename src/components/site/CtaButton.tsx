import type { ReactNode } from "react";
import { handleCTA } from "@/lib/site";
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
    <button
      type="button"
      onClick={handleCTA}
      className={`inline-flex cursor-pointer items-center gap-3 rounded-full bg-verde font-medium text-branco transition-[transform,background-color] duration-200 ease-out hover:-translate-y-[2px] hover:bg-verde-hover ${sizes[size]} ${className}`}
    >
      {showIcon && <WhatsAppIcon className="h-5 w-5 shrink-0" />}
      {children}
    </button>
  );
}
