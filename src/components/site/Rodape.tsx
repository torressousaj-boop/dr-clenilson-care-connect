import { CRM, CIDADE } from "@/lib/site";
import { LogoSimbolo } from "./Logo";

export function Rodape() {
  return (
    <footer className="border-t border-branco/15 bg-verde py-12">
      <div className="caps mx-auto flex max-w-6xl flex-col gap-3 px-6 text-[11px] text-branco/80">
        <LogoSimbolo className="h-6 w-6 text-branco" />
        <p>Dr. Clenilson Júnior — Médico Psiquiatra · {CRM}</p>
        <p>Responsável técnico: Dr. Clenilson Júnior · {CRM}</p>
        <p>{CIDADE} — Maranhão</p>
        <p className="pt-4 text-[13px] normal-case tracking-normal" style={{ fontWeight: 400 }}>
          Este site tem caráter informativo e não substitui consulta médica.
        </p>
      </div>
    </footer>
  );
}
