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
              <dd className="mt-2 text-branco/80">
                Segunda a sexta, 08h às 18h
                <br />
                Sábado, 08h às 12h
              </dd>
            </div>
          </dl>

          <div className="mt-10">
            <CtaButton size="lg" variant="branco">
              Falar com o consultório
            </CtaButton>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-branco/15">
          <iframe
            title="Mapa da localização do consultório do Dr. Clenilson Júnior"
            src="https://www.google.com/maps?q=S%C3%A3o%20Lu%C3%ADs%20MA&output=embed"
            loading="lazy"
            className="h-[360px] w-full md:h-full md:min-h-[420px]"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
