export const serviceIds = [
  "it-services",
  "web-design",
  "rdb-services",
  "rra-services",
  "digital-services",
  "computer-electronics",
  "online-government",
  "graphic-design",
  "printing-documents",
] as const;

export type ServiceId = (typeof serviceIds)[number];

export type Service = {
  id: ServiceId;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  href: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "it-services",
    title: "IT Services",
    shortTitle: "IT Services",
    summary: "Support, software, troubleshooting and networking.",
    description:
      "Computer support, software installation, troubleshooting, networking and other IT solutions.",
    href: "/services#it-services",
    featured: true,
  },
  {
    id: "web-design",
    title: "Web Design & Development",
    shortTitle: "Web Design",
    summary: "Professional websites for business and personal use.",
    description:
      "Professional websites for businesses, organizations, shops and individuals.",
    href: "/web-design",
    featured: true,
  },
  {
    id: "rdb-services",
    title: "RDB Services",
    shortTitle: "RDB Services",
    summary: "Help with Rwanda Development Board digital procedures.",
    description:
      "Assistance with Rwanda Development Board-related online and business services.",
    href: "/services#rdb-services",
    featured: true,
  },
  {
    id: "rra-services",
    title: "RRA Services",
    shortTitle: "RRA Services",
    summary: "Assistance with Rwanda Revenue Authority digital services.",
    description:
      "Assistance with Rwanda Revenue Authority-related digital services and online procedures.",
    href: "/services#rra-services",
    featured: true,
  },
  {
    id: "digital-services",
    title: "Digital Services",
    shortTitle: "Digital Services",
    summary: "Online applications, documents and digital assistance.",
    description:
      "Online applications, document preparation, digital assistance and other technology services.",
    href: "/services#digital-services",
    featured: true,
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    shortTitle: "Graphic Design",
    summary: "Cards, posters, banners, logos and invitations.",
    description:
      "Business cards, posters, banners, logos, invitations and other designs.",
    href: "/services#graphic-design",
    featured: true,
  },
  {
    id: "printing-documents",
    title: "Printing & Document Services",
    shortTitle: "Printing",
    summary: "Document preparation and professional printing.",
    description:
      "Professional document preparation, printing and related services.",
    href: "/services#printing-documents",
  },
  {
    id: "computer-electronics",
    title: "Computer & Electronic Services",
    shortTitle: "Electronics",
    summary: "Computer and electronic technology support.",
    description:
      "Computer-related services and electronic technology support.",
    href: "/services#computer-electronics",
  },
  {
    id: "online-government",
    title: "Online Government Services",
    shortTitle: "Government Services",
    summary: "Help completing official digital procedures.",
    description:
      "Assistance with online government procedures and related digital submissions.",
    href: "/services#online-government",
  },
];

export const featuredServices = services.filter((service) => service.featured);

export const footerServices = services.filter((service) =>
  (
    [
      "it-services",
      "web-design",
      "rdb-services",
      "rra-services",
      "digital-services",
    ] as ServiceId[]
  ).includes(service.id),
);

export function getService(id: string) {
  return services.find((service) => service.id === id);
}
