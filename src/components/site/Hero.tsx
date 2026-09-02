import heroImg from "@/assets/hero-clenilson-recorte.png";
import { CRM, CIDADE } from "@/lib/site";
import { CtaButton } from "./CtaButton";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-ameixa pt-32 md:pt-40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-end gap-12 px-6 md:grid-cols-[55%_45%] md:gap-8">
        <div className="pb-16 md:pb-24">
          <p className="kicker">Psiquiatria</p>

          <h1 className="mt-6 max-w-[15ch] text-[2.5rem] font-semibold text-areia md:text-[3.75rem] [line-height:1.05]">
            Quando a família chega aqui, já tentou de tudo.
          </h1>

          <p className="mt-6 max-w-[52ch] text-areia/80">
            Atendimento psiquiátrico para transtornos de personalidade, dependência química e
            alcoolismo. Um plano que aguenta recaída, porque recaída faz parte.
          </p>

          <div className="mt-8">
            <CtaButton size="lg">Falar com o consultório</CtaButton>
          </div>

          <p
            className="mt-6 text-[0.75rem] uppercase tracking-[0.14em] text-areia/80"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Dr. Clenilson Júnior · {CRM} · {CIDADE}
          </p>
        </div>

        <div className="relative flex items-end justify-center md:justify-end">
          <img
            src={heroImg}
            alt="Dr. Clenilson Júnior, de camisa branca, braços relaxados e sorriso leve, olhando para quem chega"
            width={876}
            height={1079}
            className="w-[80%] max-w-[440px] select-none object-contain object-bottom md:w-full md:max-w-none"
          />
        </div>

      </div>
    </section>
  );
}
