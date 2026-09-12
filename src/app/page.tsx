import { CtaBanner } from "@/components/CtaBanner";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { whyChoose } from "@/data/content";
import { featuredServices } from "@/data/services";
import {
  BadgeCheck,
  Headset,
  Sparkles,
  Timer,
  Wallet,
  MapPinned,
} from "lucide-react";

const whyIcons = [BadgeCheck, Timer, Wallet, Headset, Sparkles, MapPinned];

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="IT, web and digital support in one place"
            description="ATCS Company Ltd helps individuals and businesses in Gisenyi, Rubavu with practical technology services."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.05}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Why Choose ATCS?"
              title="A local technology partner you can contact directly"
              description="Clear services, local access in Rubavu, and support by phone, WhatsApp or email."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item, index) => {
              const Icon = whyIcons[index];
              return (
                <Reveal key={item.id} delay={index * 0.04}>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <Icon className="h-6 w-6 text-cyan-600" aria-hidden="true" />
                    <h3 className="mt-4 text-lg font-semibold text-navy-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
