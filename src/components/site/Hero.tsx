import heroImg from "@/assets/hero-clenilson.jpg";
import { CRM, CIDADE } from "@/lib/site";
import { CtaButton } from "./CtaButton";

const selos = [
  { titulo: "Particular", texto: "e convênios" },
  { titulo: "Presencial", texto: "e telemedicina" },
  { titulo: "Família", texto: "pode vir sozinha" },
];

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-branco pt-28 md:pt-36">
      {/* faixa verde de chão, por trás da foto */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[90px] bg-verde md:h-[150px]"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-32 md:grid-cols-2 md:gap-16 md:pb-32">
        <div className="relative">
          <img
            src={heroImg}
            alt="Dr. Clenilson Júnior, de camisa branca, braços relaxados e sorriso leve, olhando para quem chega"
            width={1200}
            height={1500}
            className="w-full select-none rounded-xl"
            style={{
              aspectRatio: "4 / 5",
              objectFit: "cover",
              objectPosition: "50% 18%",
              boxShadow: "0 18px 46px rgba(20,33,29,.16)",
            }}
          />
        </div>


        <div>
          <p className="kicker">Psiquiatria</p>

          <h1
            className="mt-5 max-w-[11ch] text-[34px] font-semibold text-verde md:text-[47px]"
            style={{ lineHeight: 1.06 }}
          >
            Um plano que aguenta recaída.
          </h1>

          <p className="mt-5 max-w-[40ch] text-cinza">
            Transtornos de personalidade, dependência química e alcoolismo. Recair não tira ninguém
            do tratamento.
          </p>

          <div className="mt-8">
            <CtaButton size="lg">Falar com o consultório</CtaButton>
          </div>

          <p
            className="mt-6 text-[12.5px] font-medium uppercase text-cinza"
            style={{ letterSpacing: "0.06em" }}
          >
            Dr. Clenilson Júnior · {CRM} · {CIDADE}
          </p>

          <ul className="mt-8 grid grid-cols-3 gap-4 border-t border-tinta/12 pt-6">
            {selos.map((s) => (
              <li key={s.titulo}>
                <p className="text-[19px] font-semibold text-verde">{s.titulo}</p>
                <p className="mt-1 text-[13px] text-cinza">{s.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
