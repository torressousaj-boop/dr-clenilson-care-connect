import { useEffect, useState } from "react";
import { Brain } from "lucide-react";
import { CtaButton } from "./CtaButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ease-out ${
        scrolled
          ? "border-creme/10 bg-azul-profundo/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <a
          href="#topo"
          className="inline-flex min-w-0 items-center gap-2 font-display text-sm font-semibold text-creme sm:gap-3 sm:text-[1.0625rem]"
        >
          <Brain
            size={26}
            aria-hidden="true"
            className={`shrink-0 transition-colors duration-200 ease-out ${
              scrolled ? "text-azul" : "text-azul-claro"
            }`}

          />
          <span className="leading-tight">Dr. Clenilson Júnior</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <a className="text-sm text-creme/80 transition-colors duration-200 ease-out hover:text-creme" href="#sinais">Sinais de alerta</a>
          <a className="text-sm text-creme/80 transition-colors duration-200 ease-out hover:text-creme" href="#sobre">Sobre o médico</a>
          <a className="text-sm text-creme/80 transition-colors duration-200 ease-out hover:text-creme" href="#tratamentos">Tratamentos</a>
          <a className="text-sm text-creme/80 transition-colors duration-200 ease-out hover:text-creme" href="#faq">Dúvidas</a>
        </div>

        <CtaButton size="sm" showIcon={false} className="shrink-0 px-4 text-sm">
          Agendar pelo WhatsApp
        </CtaButton>
      </nav>
    </header>
  );
}
