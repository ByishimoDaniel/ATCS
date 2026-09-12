import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { company } from "@/data/company";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: `IT, web design, RDB, RRA, graphic design and other digital services from ${company.name}.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Services</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Digital and technology services for Rubavu
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
            Request IT support, a website, RDB or RRA assistance, graphic design, printing and other
            digital help from {company.name}.
          </p>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.03}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
          <SectionHeading
            title="Request a service"
            description="Tell us what you need. ATCS will follow up using the contact details you provide."
          />
          <div className="mt-10">
            <Suspense fallback={<div className="h-80 rounded-3xl bg-slate-100" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
