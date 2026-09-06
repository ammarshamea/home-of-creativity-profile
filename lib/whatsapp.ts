import { WHATSAPP_NUMBER } from "./content";

export function whatsappHref(text: string) {
  const digits = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}
