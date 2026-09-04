import { handleCTA } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function BotaoFlutuante() {
  return (
    <button
      type="button"
      onClick={handleCTA}
      aria-label="Falar com o consultório pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-verde text-branco shadow-lg transition-transform duration-200 ease-out hover:-translate-y-[2px] md:bottom-8 md:right-8"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </button>
  );
}
