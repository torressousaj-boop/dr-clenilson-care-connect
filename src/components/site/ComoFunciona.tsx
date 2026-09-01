import { useReveal } from "@/hooks/use-reveal";

const etapas = [
  {
    titulo: "Primeira conversa",
    texto:
      "Você conta o que está acontecendo, do seu jeito. Não precisa ter nome nem diagnóstico ainda.",
  },
  {
    titulo: "Avaliação e diagnóstico",
    texto:
      "Histórico, sintomas, tentativas anteriores e o que já foi usado. Diagnóstico é ferramenta, não rótulo.",
  },
  {
    titulo: "Plano de tratamento",
    texto:
      "Medicação quando é necessária, encaminhamentos, combinados com a família e o que fazer em crise.",
  },
  {
    titulo: "Acompanhamento",
    texto:
      "Retornos regulares, ajustes e um caminho de volta quando o quadro piora. Ninguém recomeça do zero.",
  },
];

export function ComoFunciona() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.25);

  return (
    <section className="bg-areia py-24 text-tinta md:py-32">
      <div ref={ref} data-visible={visible} className="reveal mx-auto max-w-6xl px-6">
        <p className="kicker">Como funciona</p>

        <div className="relative mt-12 pl-16 sm:pl-24">
          <svg
            className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24"
            viewBox="0 0 80 720"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M56 16 V 430 C 56 476, 20 476, 20 442 C 20 408, 56 414, 56 458 V 704"
              fill="none"
              stroke="var(--color-ambar)"
              strokeWidth={2}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              pathLength={1}
              style={{
                strokeDasharray: 1,
                strokeDashoffset: visible ? 0 : 1,
                transition: "stroke-dashoffset 600ms ease-out",
              }}
            />
          </svg>

          <p
            className="absolute left-0 top-[57%] w-16 text-center text-[0.625rem] uppercase tracking-[0.18em] text-tinta sm:w-24"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            recaída
          </p>

          <ol className="space-y-16">
            {etapas.map((e, i) => (
              <li key={e.titulo} className={i === 3 ? "pt-16" : undefined}>
                <p
                  className="text-[0.6875rem] uppercase tracking-[0.22em] text-tinta/70"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Etapa {i + 1}
                </p>
                <h3 className="mt-2 text-[1.5rem] font-semibold text-tinta md:text-[1.875rem]">
                  {e.titulo}
                </h3>
                <p className="mt-3 max-w-[52ch] text-tinta/80">{e.texto}</p>
              </li>
            ))}
          </ol>
        </div>

        <p
          className="mt-16 max-w-[34ch] text-[1.5rem] font-semibold text-tinta md:text-[2rem]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          A linha volta porque o tratamento aguenta. Recair não tira ninguém daqui.
        </p>
      </div>
    </section>
  );
}
