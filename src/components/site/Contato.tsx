import consultorioImg from "@/assets/consultorio-clenilson.jpg.asset.json";
import { CtaButton } from "./CtaButton";

export function Contato() {
  return (
    <section id="contato" className="bg-verde py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div>
          <p className="kicker kicker-escuro">Contato</p>

          <h2 className="mt-6 max-w-[18ch] text-[1.875rem] font-semibold text-branco md:text-[2.5rem]">
            Manda a primeira mensagem hoje.
          </h2>

          <dl className="mt-10 space-y-8">
            <div>
              <dt className="caps text-[11px] text-branco/80">Endereço</dt>
              <dd className="mt-2 text-branco/80">
                [PREENCHER ENDEREÇO], [BAIRRO]
                <br />
                [CIDADE] — MA
              </dd>
            </div>

            <div>
              <dt className="caps text-[11px] text-branco/80">Horários</dt>
              <dd className="mt-2 text-branco/80">[PREENCHER HORÁRIOS]</dd>
            </div>
          </dl>

          <div className="mt-10">
            <CtaButton size="lg" variant="branco">
              Falar com o consultório
            </CtaButton>
          </div>
        </div>

        <div className="space-y-6">
          <img
            src={consultorioImg.url}
            alt="Dr. Clenilson Júnior na entrada do consultório, ao lado da placa Consultório 01"
            loading="lazy"
            className="w-full rounded-xl object-cover"
            style={{ aspectRatio: "3 / 2", objectPosition: "50% 30%" }}
          />

          <div className="flex h-[220px] items-center justify-center rounded-xl border border-branco/15 bg-verde-claro px-6 text-center text-branco/70">
            [MAPA — PREENCHER ENDEREÇO]
          </div>
        </div>

      </div>
    </section>
  );
}
