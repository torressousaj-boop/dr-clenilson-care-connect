export const WHATSAPP_NUMBER = "5598992212598";
export const WHATSAPP_MESSAGE =
  "Olá, vim do Google e gostaria de agendar uma consulta.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const CRM = "CRM-MA 14933";
export const CIDADE = "São Luís · MA";

export function handleCTA() {
  window.open(WHATSAPP_URL, "_blank");
  window.location.href = "/obrigado";
}
