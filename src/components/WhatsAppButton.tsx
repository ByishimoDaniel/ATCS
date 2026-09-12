import { MessageCircle } from "lucide-react";
import { company, whatsappHref } from "@/data/company";

type WhatsAppButtonProps = {
  message?: string;
  className?: string;
};

export function WhatsAppButton({
  message = "Hello ATCS Company Ltd, I would like to request a service.",
  className = "",
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,211,102,0.35)] transition hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 ${className}`}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      WhatsApp {company.whatsapp.display}
    </a>
  );
}
