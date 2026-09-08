import sobreImg from "@/assets/sobre-clenilson.jpg";
import { useReveal } from "@/hooks/use-reveal";
import { CtaButton } from "./CtaButton";

export function QuemE() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="sobre" className="scroll-mt-20 bg-azul py-24 md:py-32">
      <div
        ref={ref}
        data-visible={visible}
        className="reveal mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16"
      >
        <img
          src={sobreImg}
          alt="Dr. Clenilson Júnior de terno escuro, sentado à mesa do consultório durante um atendimento"
          width={1600}
          height={2400}
          loading="lazy"
          className="w-full rounded-xl object-cover md:max-h-[560px]"
        />

        <div>
          <h2 className="text-[1.875rem] font-semibold text-creme md:text-[2.5rem]">
            Eu atendo quem já tentou de tudo e ainda não conseguiu sair do lugar.
          </h2>

          <div className="mt-6 space-y-5 text-creme/80">
            <p>
              Sou médico com atuação em psiquiatria, CRM-MA 14933, com atendimento particular em São Luís. A maior parte das pessoas que chega até mim já vem cansada: cansada da ansiedade que não dá trégua, da depressão que voltou depois de melhorar, da dependência que promete parar e não para. Muitas já passaram por outros tratamentos que não funcionaram.
            </p>
            <p>
              Meu trabalho começa antes do remédio. Começa ouvindo o que você já tentou, o que ajudou por um tempo e por que não se sustentou. A partir daí a gente monta um plano com combinados claros: o que fazer no dia bom, o que fazer no dia ruim e quando me procurar. Medicação entra quando é necessária, sempre explicada.
            </p>
            <p>
              Não prometo linha reta. Prometo continuar aqui quando você tropeçar, sem julgamento, ajustando o plano até ele funcionar para a sua vida, não para um manual.
            </p>
          </div>

          <CtaButton size="md" className="mt-8 font-semibold">
            Agendar pelo WhatsApp
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
