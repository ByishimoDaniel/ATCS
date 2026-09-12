import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { MapSection } from "@/components/MapSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { company, phoneTelHref } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${company.name} in ${company.location.display} by phone, WhatsApp or email.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Contact Us</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{company.name}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Request IT, web design, RDB, RRA or other digital services. We are based in{" "}
            {company.location.display}.
          </p>
        </div>
      </section>
      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="space-y-5">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-navy-950">Business details</h2>
            <ul className="mt-5 space-y-4 text-sm text-slate-700">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-cyan-600" />
                <span>
                  <strong className="block text-navy-950">Location</strong>
                  {company.location.display}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-cyan-600" />
                <span>
                  <strong className="block text-navy-950">Phone</strong>
                  {company.phones.map((phone) => (
                    <a key={phone} href={phoneTelHref(phone)} className="block hover:text-cyan-700">
                      {phone}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-cyan-600" />
                <span>
                  <strong className="block text-navy-950">Email</strong>
                  <a href={`mailto:${company.email}`} className="hover:text-cyan-700">
                    {company.email}
                  </a>
                </span>
              </li>
            </ul>
            <WhatsAppButton className="mt-6 w-full" />
          </div>
        </aside>
        <Suspense fallback={<div className="h-[32rem] rounded-3xl bg-white" />}>
          <ContactForm />
        </Suspense>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <MapSection />
      </section>
    </>
  );
}
