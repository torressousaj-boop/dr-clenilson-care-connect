import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Julgamentos } from "@/components/site/Julgamentos";
import { Tratamentos } from "@/components/site/Tratamentos";
import { ComoFunciona } from "@/components/site/ComoFunciona";
import { QuemE } from "@/components/site/QuemE";
import { Perguntas } from "@/components/site/Perguntas";
import { Contato } from "@/components/site/Contato";
import { Rodape } from "@/components/site/Rodape";
import { BotaoFlutuante } from "@/components/site/BotaoFlutuante";

const title = "Dr. Clenilson Júnior — Psiquiatra | Borderline e Dependência";
const description =
  "Atendimento psiquiátrico para transtornos de personalidade, dependência química e alcoolismo. Um plano que aguenta recaída, porque recaída faz parte.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-branco">
      <Navbar />
      <main>
        <Hero />
        <Julgamentos />
        <Tratamentos />
        <ComoFunciona />
        <QuemE />
        <Perguntas />
        <Contato />
      </main>
      <Rodape />
      <BotaoFlutuante />
    </div>
  );
}
