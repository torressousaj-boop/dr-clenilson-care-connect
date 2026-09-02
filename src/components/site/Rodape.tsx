import { CRM, CIDADE } from "@/lib/site";
import { LogoSimbolo } from "./Logo";

export function Rodape() {
  return (
    <footer className="border-t border-creme/15 bg-azul-profundo py-12">
      <div
        className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-[0.75rem] uppercase tracking-[0.14em] text-creme/80"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <LogoSimbolo className="h-6 w-6 text-creme" />
        <p>Dr. Clenilson Júnior — Médico Psiquiatra · {CRM}</p>
        <p>Responsável técnico: Dr. Clenilson Júnior · {CRM}</p>
        <p>{CIDADE} — Maranhão</p>
        <p className="pt-4 normal-case tracking-normal">
          Este site tem caráter informativo e não substitui consulta médica.
        </p>
      </div>
    </footer>
  );
}
