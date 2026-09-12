export const productCategories = [
  "Computers",
  "Laptops",
  "Phones",
  "Accessories",
  "Networking Equipment",
  "Printers",
  "Storage Devices",
  "Other Electronics",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  /** Leave null to show “Contact for price” instead of a number. */
  price: string | null;
  availability: "contact";
  image: string;
};

/**
 * Placeholder catalog. Replace these entries with real products when ready.
 * Do not add invented prices, stock counts, or specifications.
 */
export const products: Product[] = [
  {
    id: "computers",
    name: "Computers",
    category: "Computers",
    description:
      "Desktop computers for home and office. Ask ATCS about current options.",
    price: null,
    availability: "contact",
    image: "/images/products/computers.svg",
  },
  {
    id: "laptops",
    name: "Laptops",
    category: "Laptops",
    description:
      "Portable computers for work, study and business. Contact us for available models.",
    price: null,
    availability: "contact",
    image: "/images/products/laptops.svg",
  },
  {
    id: "phones",
    name: "Phones",
    category: "Phones",
    description:
      "Mobile phones and related support. Reach ATCS to ask what is currently available.",
    price: null,
    availability: "contact",
    image: "/images/products/phones.svg",
  },
  {
    id: "accessories",
    name: "Accessories",
    category: "Accessories",
    description:
      "Keyboards, mice, cables, chargers and other computer accessories.",
    price: null,
    availability: "contact",
    image: "/images/products/accessories.svg",
  },
  {
    id: "networking",
    name: "Networking Equipment",
    category: "Networking Equipment",
    description:
      "Routers, switches and related networking equipment for home or office.",
    price: null,
    availability: "contact",
    image: "/images/products/networking.svg",
  },
  {
    id: "printers",
    name: "Printers",
    category: "Printers",
    description:
      "Printers and printing-related equipment. Contact ATCS for current options.",
    price: null,
    availability: "contact",
    image: "/images/products/printers.svg",
  },
  {
    id: "storage",
    name: "Storage Devices",
    category: "Storage Devices",
    description:
      "External drives and other storage devices. Ask us about availability.",
    price: null,
    availability: "contact",
    image: "/images/products/storage.svg",
  },
  {
    id: "other-electronics",
    name: "Other Electronics",
    category: "Other Electronics",
    description:
      "Additional electronic products and technology items. Contact ATCS to enquire.",
    price: null,
    availability: "contact",
    image: "/images/products/other.svg",
  },
];
