import { useReveal } from "@/hooks/use-reveal";

export function Tratamentos() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="bg-azul-profundo py-24 md:py-32">
      <div ref={ref} data-visible={visible} className="reveal mx-auto max-w-6xl px-6">
        <p className="kicker">O que eu trato</p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl bg-azul px-8 py-12 md:py-16">
            <h3 className="text-[1.75rem] font-semibold text-creme md:text-[2.125rem]">
              Transtornos de personalidade
            </h3>
            <p className="mt-4 text-creme/80">
              Com atenção especial ao <span className="text-azul-claro">borderline</span>: instabilidade
              emocional, impulsividade, crises de relacionamento e risco de autolesão.
            </p>
          </article>

          <article className="rounded-2xl bg-azul px-8 py-12 md:py-16">
            <h3 className="text-[1.75rem] font-semibold text-creme md:text-[2.125rem]">
              Dependência química e alcoolismo
            </h3>
            <p className="mt-4 text-creme/80">
              Tratamento continuado, com manejo de abstinência, redução de danos quando é o caminho
              possível e envolvimento da família no plano.
            </p>
          </article>

          <article className="rounded-2xl border border-creme/15 px-8 py-8">
            <h3 className="text-[1.25rem] font-semibold text-creme">Depressão</h3>
            <p className="mt-3 text-[0.95rem] text-creme/80">
              Quadros leves a graves, incluindo casos que não responderam a tratamentos anteriores.
            </p>
          </article>

          <article className="rounded-2xl border border-creme/15 px-8 py-8">
            <h3 className="text-[1.25rem] font-semibold text-creme">Ansiedade</h3>
            <p className="mt-3 text-[0.95rem] text-creme/80">
              Crises de pânico, ansiedade generalizada e sintomas físicos sem causa clínica.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
