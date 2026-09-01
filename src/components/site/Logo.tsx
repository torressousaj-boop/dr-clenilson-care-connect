export function LogoSimbolo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth={7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M88 34 A34 34 0 1 0 88 86" />
      <path d="M88 86 C 76 95, 60 92, 56 80 C 53 71, 60 64, 68 66" />
    </svg>
  );
}

export function LogoSimboloCompacto({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth={13}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M88 36 A32 32 0 1 0 88 84" />
      <path d="M88 84 L 68 90" />
    </svg>
  );
}
