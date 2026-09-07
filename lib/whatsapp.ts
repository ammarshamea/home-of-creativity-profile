import { WHATSAPP_NUMBER } from "./content";

export function whatsappHref(text: string, number = WHATSAPP_NUMBER) {
  const digits = number.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}
