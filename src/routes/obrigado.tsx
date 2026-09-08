import { useEffect } from "react";
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

const title = "Obrigado | Dr. Clenilson Júnior | Médico | Psiquiatria";
const description =
  "Obrigado pelo contato. Em breve retornaremos para confirmar o agendamento da sua consulta.";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Obrigado,
});

function Obrigado() {
  useEffect(() => {
    const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: "pageview",
      page: "/obrigado",
    });
  }, []);

  return (
    <div className="min-h-dvh bg-azul-profundo">
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
