import sobreImg from "@/assets/sobre-clenilson.jpg";
import { useReveal } from "@/hooks/use-reveal";

export function QuemE() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="bg-azul py-24 md:py-32">
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
          <p className="kicker">Quem é o Dr. Clenilson</p>

          <h2 className="mt-6 text-[1.875rem] font-semibold text-creme md:text-[2.5rem]">
            Eu atendo famílias cansadas há muito tempo.
          </h2>

          <div className="mt-6 space-y-5 text-creme/80">
            <p>
              Sou médico, com atuação em psiquiatria. A maior parte das pessoas que me procura não é o paciente: é a
              mãe, a esposa, o irmão. Alguém que já ouviu muito conselho, já tentou clínica, já
              tentou igreja, já tentou brigar e já tentou ceder.
            </p>
            <p>
              Meu trabalho começa antes do remédio. Começa entendendo o que já foi tentado e por que
              não parou de pé. Depois a gente monta um plano com combinados claros, incluindo o que
              fazer no dia ruim.
            </p>
            <p>
              Não prometo linha reta. Prometo continuar aqui quando a linha voltar — e ela costuma
              voltar pelo menos uma vez.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
