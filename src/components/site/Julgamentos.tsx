import { useReveal } from "@/hooks/use-reveal";

const frases = [
  "É só ele querer parar.",
  "Isso é falta de vergonha na cara.",
  "Ela faz isso pra chamar atenção.",
  "Já tentamos de tudo, não adianta.",
];

export function Julgamentos() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="sinais" className="scroll-mt-20 bg-creme py-24 text-tinta md:py-32">
      <div ref={ref} data-visible={visible} className="reveal mx-auto max-w-6xl px-6">
        <p className="kicker kicker-claro">O que você já deve ter ouvido</p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {frases.map((f) => (
            <blockquote
              key={f}
              className="rounded-xl bg-tinta/[0.05] px-8 py-10 text-[1.375rem] italic leading-snug text-tinta md:text-[1.625rem]"
            >
              “{f}”
            </blockquote>
          ))}
        </div>

        <p className="mt-12 max-w-[28ch] font-display text-[1.5rem] font-semibold text-tinta md:text-[2rem]">
          Nada disso é falta de vontade. É quadro clínico, e quadro clínico tem tratamento.
        </p>
      </div>
    </section>
  );
}
