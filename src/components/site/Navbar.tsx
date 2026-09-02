import { useEffect, useState } from "react";
import { CtaButton } from "./CtaButton";
import { LogoSimbolo } from "./Logo";

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
      className={`fixed inset-x-0 top-0 z-50 bg-branco transition-shadow duration-200 ease-out ${
        scrolled ? "shadow-[0_1px_0_0_rgba(20,33,29,0.10)]" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#topo"
          className="inline-flex items-center gap-3 text-[19px] font-semibold tracking-tight text-verde"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <LogoSimbolo className="h-[30px] w-[30px] shrink-0" />
          Dr. Clenilson Júnior
        </a>
        <CtaButton size="sm" showIcon={false}>
          Falar com o consultório
        </CtaButton>
      </nav>
    </header>
  );
}
