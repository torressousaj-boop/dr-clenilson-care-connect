import heroAsset from "@/assets/hero-clenilson-terno.png.asset.json";
import { CRM } from "@/lib/site";
import { CtaButton } from "./CtaButton";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-azul-profundo px-6 pb-0 pt-16 md:px-6 md:pt-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-end gap-10 pt-16 md:min-h-[calc(100svh-4rem)] md:grid-cols-2 md:gap-8 md:pt-0">
        <div className="self-center pb-0 md:py-8">
          <h1 className="max-w-[15ch] font-display text-5xl font-bold leading-tight text-creme md:text-6xl lg:text-7xl">
            Ansiedade, depressão e dependência{" "}
            <span className="text-ciano">têm tratamento.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-creme/85">
            Consulta psiquiátrica particular para transtornos de personalidade, dependência química,
            alcoolismo, depressão e ansiedade. Avaliação, diagnóstico e plano de acompanhamento, com
            retorno marcado.
          </p>

          <div className="mt-8">
            <CtaButton size="lg" className="cta-pulse font-semibold">Agendar pelo WhatsApp</CtaButton>
          </div>

          <p className="mt-4 max-w-lg text-sm text-azul-claro/90">
            Atendimento particular · Presencial e telemedicina · A família pode vir sozinha
          </p>

          <p className="mt-6 text-sm text-creme/60">
            Dr. Clenilson Júnior, psiquiatra, {CRM}.
          </p>
        </div>

        <div className="relative flex items-end justify-center self-end md:justify-end">
          <img
            src={heroAsset.url}
            alt="Dr. Clenilson Júnior sorrindo, de terno azul-marinho e camisa branca, com os braços cruzados"
            width={768}
            height={1152}
            className="h-[360px] w-full select-none rounded-xl object-cover object-top md:h-auto md:max-h-[calc(100svh-4rem)] md:max-w-none md:rounded-none md:object-contain md:object-bottom"
          />
        </div>

      </div>
    </section>
  );
}
