import heroAsset from "@/assets/hero-clenilson-terno.png";
import { CRM } from "@/lib/site";
import { CtaButton } from "./CtaButton";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-azul-profundo px-6 py-12 md:min-h-[85vh] md:py-16"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-8">
        <div className="flex flex-col gap-5 self-center">
          <h1 className="max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-creme md:text-5xl lg:text-6xl">
            Ansiedade, depressão e dependência{" "}
            <span className="text-ciano">têm tratamento.</span>
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-creme/85 md:text-lg">
            Consulta psiquiátrica particular para transtornos de personalidade, dependência química,
            alcoolismo, depressão e ansiedade. Avaliação, diagnóstico e plano de acompanhamento, com
            retorno marcado.
          </p>

          <div className="mt-1">
            <CtaButton size="lg" className="cta-pulse font-semibold">
              Agendar pelo WhatsApp
            </CtaButton>
          </div>

          <p className="max-w-md text-sm text-azul-claro/90">
            Atendimento particular · Presencial e telemedicina · A família pode vir sozinha
          </p>

          <p className="text-xs text-creme/60">
            Dr. Clenilson Júnior, médico · {CRM} · São Luís · MA
          </p>
        </div>

        <div className="relative flex items-end justify-center">
          <img
            src={heroAsset}
            alt="Dr. Clenilson Júnior sorrindo, de terno azul-marinho e camisa branca, com os braços cruzados"
            width={768}
            height={1152}
            className="h-[320px] w-full select-none rounded-xl object-cover object-top md:h-auto md:max-h-[520px] md:w-auto md:rounded-none md:object-contain"
          />
        </div>
      </div>
    </section>
  );
}
