import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { webDesignOfferings } from "@/data/content";
import { company } from "@/data/company";
import { Globe, LayoutTemplate, ShoppingBag, User, Megaphone, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Design",
  description: `Professional websites for businesses, organizations, shops and individuals from ${company.name}.`,
};

const icons = [Globe, LayoutTemplate, ShoppingBag, User, Megaphone, Wrench];

export default function WebDesignPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Web Design & Development
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Websites that present your business clearly
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
            {company.name} designs and builds professional websites for businesses, organizations,
            shops and individuals in Gisenyi, Rubavu and beyond.
          </p>
          <div className="mt-8">
            <Button href="/contact?service=web-design">Request a Website</Button>
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          title="Website types we can help with"
          description="Tell ATCS what you need. We will discuss structure, content and how customers should contact you."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {webDesignOfferings.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <article className="h-full rounded-3xl border border-slate-200 bg-white p-6">
                  <Icon className="h-6 w-6 text-cyan-600" aria-hidden="true" />
                  <h2 className="mt-4 text-lg font-semibold text-navy-950">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
      <CtaBanner
        title="Ready for a new website?"
        description="Request a website and ATCS will follow up with the next steps."
        href="/contact?service=web-design"
        action="Request a Website"
      />
    </>
  );
}
