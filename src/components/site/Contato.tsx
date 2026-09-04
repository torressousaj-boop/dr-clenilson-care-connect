import { CtaButton } from "./CtaButton";

export function Contato() {
  return (
    <section id="contato" className="bg-azul-profundo py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div>
          <p className="kicker">Contato</p>

          <h2 className="mt-6 max-w-[18ch] text-[1.875rem] font-semibold text-creme md:text-[2.5rem]">
            Manda a primeira mensagem hoje.
          </h2>

          <dl className="mt-10 space-y-8">
            <div>
              <dt className="text-[0.6875rem] uppercase tracking-[0.22em] text-creme/80">
                Endereço
              </dt>
              <dd className="mt-2 text-creme/80">
                Avenida dos Holandeses, Quadra 24, Lote 05
                <br />
                Bairro Ponta D'Areia, São Luís - MA, CEP 65077-357
                <br />
                Edifício Tech Office, 4º andar, sala 411
              </dd>
            </div>

            <div>
              <dt className="text-[0.6875rem] uppercase tracking-[0.22em] text-creme/80">
                Horários
              </dt>
              <dd className="mt-2 text-creme/80">
                Segunda a sexta, 08h às 18h
                <br />
                Sábado, 08h às 12h
              </dd>
            </div>
          </dl>

          <div className="mt-10">
            <CtaButton size="lg">Agendar pelo WhatsApp</CtaButton>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-creme/15">
          <iframe
            title="Mapa da localização do consultório do Dr. Clenilson Júnior"
            src="https://www.google.com/maps?q=Avenida%20dos%20Holandeses%2C%20Quadra%2024%2C%20Lote%2005%2C%20Bairro%20Ponta%20D'Areia%2C%20S%C3%A3o%20Lu%C3%ADs%20-%20MA%2C%2065077-357%2C%20Edif%C3%ADcio%20Tech%20Office&output=embed"
            loading="lazy"
            className="h-[360px] w-full md:h-full md:min-h-[420px]"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
