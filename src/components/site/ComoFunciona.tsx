import { useEffect, useState } from "react";
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

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return reduced;
}

export function ComoFunciona() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.25);
  const reduced = usePrefersReducedMotion();
  const drawn = reduced || visible;

  const lineStyle = reduced
    ? { transform: "scaleY(1)", transition: "none" }
    : {
        transform: drawn ? "scaleY(1)" : "scaleY(0)",
        transition: "transform 600ms ease-out",
      };

  return (
    <section className="bg-areia py-24 text-tinta md:py-32">
      <div ref={ref} data-visible={visible} className="reveal mx-auto max-w-6xl px-6">
        <p className="kicker kicker-claro">Como funciona</p>

        <ol className="mt-12">
          {etapas.map((e, i) => (
            <li
              key={e.titulo}
              className="grid grid-cols-[4rem_1fr] gap-x-4 pb-16 last:pb-0 sm:grid-cols-[6rem_1fr]"
            >
              <div className="flex flex-col items-center">
                {i === 3 && (
                  <svg
                    viewBox="0 0 80 90"
                    className="h-[90px] w-16 shrink-0 sm:w-24"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M40 0 V 22 C 40 56, 8 52, 10 30 C 12 12, 40 20, 40 54 V 90"
                      stroke="var(--color-ambar-escuro)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      pathLength={1}
                      style={{
                        strokeDasharray: 1,
                        strokeDashoffset: reduced ? 0 : drawn ? 0 : 1,
                        transition: reduced ? "none" : "stroke-dashoffset 600ms ease-out",
                      }}
                    />
                    <text
                      x={10}
                      y={68}
                      textAnchor="middle"
                      fill="var(--color-tinta)"
                      fontSize={8}
                      letterSpacing={1}
                      style={{ fontFamily: "var(--font-mono)", textTransform: "uppercase" }}
                    >
                      RECAÍDA
                    </text>
                  </svg>
                )}
                <div
                  aria-hidden="true"
                  className="w-[2px] flex-1 origin-top rounded-full bg-ambar-escuro"
                  style={lineStyle}
                />
              </div>

              <div className={i === 3 ? "pt-[90px]" : undefined}>
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
              </div>
            </li>
          ))}
        </ol>

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
