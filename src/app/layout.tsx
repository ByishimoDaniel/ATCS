import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import { company } from "@/data/company";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://atcsltd.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | IT & Digital Services in Rubavu`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  keywords: [
    "ATCS Company Ltd",
    "IT services Rubavu",
    "web design Gisenyi",
    "RDB services",
    "RRA services",
    "digital services Rwanda",
    "Managing Director: IT Daniel BYISHIMO",
  ],
  openGraph: {
    title: company.name,
    description: company.description,
    type: "website",
    locale: "en_RW",
    siteName: company.name,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  email: company.email,
  telephone: company.phones.map((phone) => `+250${phone.replace(/^0/, "")}`),
  address: {
    "@type": "PostalAddress",
    addressLocality: company.location.city,
    addressRegion: company.location.district,
    addressCountry: "RW",
  },
  areaServed: company.location.display,
  url: siteUrl,
  description: company.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 font-sans text-navy-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
