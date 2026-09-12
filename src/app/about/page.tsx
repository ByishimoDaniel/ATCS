import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutFocus } from "@/data/content";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us",
  description: `${company.name} is a technology and digital service business based in ${company.location.display}.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">About Us</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Technology and digital services from Gisenyi, Rubavu
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
            {company.name} is a technology and digital service business based in{" "}
            {company.location.display}. We help individuals, businesses and organizations with IT,
            websites, government digital procedures and related electronic services.
          </p>
        </div>
      </section>
      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <article className="h-full rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-2xl font-semibold text-navy-950">Our Mission</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{company.mission}</p>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <article className="h-full rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-2xl font-semibold text-navy-950">Our Vision</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">{company.vision}</p>
          </article>
        </Reveal>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title="What we focus on"
            description="These areas describe the work ATCS does. They are not customer counts or years in business."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aboutFocus.map((item) => (
              <article key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-navy-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
