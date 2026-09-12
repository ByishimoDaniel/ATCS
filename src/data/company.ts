export const company = {
  name: "ATCS Company Ltd",
  shortName: "ATCS",
  tagline: "IT • Web Design • Digital Services • RDB • RRA Services",
  headline: "Your Trusted Partner for IT & Digital Services in Rubavu",
  description:
    "Professional IT, web design, government digital services, RDB, RRA and other technology solutions serving businesses and individuals in Gisenyi, Rubavu.",
  footerBlurb: "IT & Digital Solutions in Gisenyi, Rubavu, Rwanda.",
  location: {
    city: "Gisenyi",
    district: "Rubavu",
    country: "Rwanda",
    display: "Gisenyi, Rubavu, Rwanda",
    mapsQuery: "Gisenyi, Rubavu, Rwanda",
    mapsEmbedUrl:
      "https://maps.google.com/maps?q=Gisenyi%2C%20Rubavu%2C%20Rwanda&z=14&output=embed",
    mapsLink: "https://www.google.com/maps/search/?api=1&query=Gisenyi%2C%20Rubavu%2C%20Rwanda",
  },
  email: "atcscompanyltd@gmail.com",
  phones: ["0796189550", "0793066334"],
  whatsapp: {
    display: "0796189550",
    e164: "250796189550",
  },
  hoursNote: "Reach us by phone, WhatsApp, or email to request a service.",
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
  },
  mission:
    "To provide reliable, affordable and professional IT and digital solutions to individuals, businesses and organizations.",
  vision:
    "To become a trusted technology and digital services provider in Rwanda.",
} as const;

export type SocialNetwork = keyof typeof company.social;

export function phoneTelHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return `tel:+250${digits.replace(/^0/, "")}`;
}

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${company.whatsapp.e164}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function mailtoHref(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${company.email}${query ? `?${query}` : ""}`;
}
