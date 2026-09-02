import { useEffect, useState } from "react";
import { Brain } from "lucide-react";
import { CtaButton } from "./CtaButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ease-out ${
        scrolled ? "bg-azul-profundo shadow-[0_1px_0_0_rgba(247,241,230,0.14)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#topo"
          className="inline-flex items-center gap-3 text-[1.0625rem] font-semibold tracking-tight text-creme"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <Brain
            size={26}
            aria-hidden="true"
            className={`shrink-0 transition-colors duration-200 ease-out ${
              scrolled ? "text-azul" : "text-azul-claro"
            }`}

          />
          Dr. Clenilson Júnior
        </a>
        <CtaButton size="sm" showIcon={false}>
          Agendar pelo WhatsApp
        </CtaButton>
      </nav>
    </header>
  );
}
