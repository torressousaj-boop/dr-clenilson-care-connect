export function LogoSimbolo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M60 16 A44 44 0 1 1 26 76"
        fill="none"
        stroke="currentColor"
        strokeWidth={21}
        strokeLinecap="round"
      />
      <circle cx={60} cy={60} r={13} fill="currentColor" />
    </svg>
  );
}

export function LogoSimboloCompacto({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M60 18 A42 42 0 1 1 28 74"
        fill="none"
        stroke="currentColor"
        strokeWidth={27}
        strokeLinecap="round"
      />
      <circle cx={60} cy={60} r={15} fill="currentColor" />
    </svg>
  );
}
