import { useState } from "react";

const perguntas = [
  {
    q: "Ele não aceita se tratar. Posso ir na consulta sem ele?",
    a: "Pode. É comum e muitas vezes é o começo certo. A gente conversa sobre o quadro, sobre o que já foi tentado e sobre como abordar a pessoa sem transformar a casa em campo de batalha.",
  },
  {
    q: "Isso tem cura?",
    a: "Depende do quadro. Alguns transtornos entram em remissão; outros são controlados a longo prazo, como pressão alta. O que muda na prática é a vida ficar possível de novo: trabalho, sono, relações, menos crise.",
  },
  {
    q: "Vai precisar internar?",
    a: "Na maioria dos casos, não. Internação é recurso para risco imediato à vida ou quadros em que o tratamento fora não se sustenta. Quando for necessária, eu explico o porquê, por quanto tempo e o que vem depois.",
  },
  {
    q: "Quanto tempo demora pra melhorar?",
    a: "Os primeiros sinais costumam aparecer em algumas semanas. Estabilidade leva meses. Eu prefiro dizer isso agora do que prometer resultado rápido e você desistir no primeiro tropeço.",
  },
  {
    q: "Vocês atendem por convênio?",
    a: "Fale com o consultório pelo WhatsApp: informamos os convênios atendidos no momento, valores da consulta particular e como emitir recibo para reembolso.",
  },
];

export function Perguntas() {
  const [aberta, setAberta] = useState<number | null>(0);

  return (
    <section className="bg-creme py-24 text-tinta md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <p className="kicker kicker-claro">Perguntas que a família faz</p>

        <div className="mt-12 divide-y divide-tinta/15 border-y border-tinta/15">
          {perguntas.map((item, i) => {
            const open = aberta === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    onClick={() => setAberta(open ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-[1.125rem] font-semibold text-tinta md:text-[1.25rem]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.q}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-azul transition-transform duration-200 ease-out"
                      style={{ transform: open ? "rotate(45deg)" : "none" }}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  hidden={!open}
                  className="pb-6 text-tinta/80"
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
