import { Button } from "@/components/Button";
import { company } from "@/data/company";

export function HeroIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-lg" aria-hidden="true">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-cyan-400/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-navy-800 to-navy-950 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <div className="mb-5 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Digital desk
          </span>
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
        </div>
        <div className="grid gap-3">
          {["IT support queue", "Web project draft", "RDB / RRA assistance"].map((item, index) => (
            <div
              key={item}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <span className="text-sm text-slate-200">{item}</span>
              <span className="rounded-full bg-cyan-400/15 px-2.5 py-1 text-[11px] font-medium text-cyan-300">
                Ready
              </span>
            </div>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-3 gap-3">
          {["CPU", "WEB", "GOV"].map((chip) => (
            <div
              key={chip}
              className="rounded-2xl border border-cyan-400/20 bg-navy-900 py-4 text-center text-xs font-semibold tracking-[0.2em] text-cyan-200"
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.08) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
            {company.name}
          </p>
          <p className="mt-4 text-sm text-slate-300">{company.tagline}</p>
          <h1 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {company.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">{company.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/services">Get Our Services</Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </div>
        <HeroIllustration />
      </div>
    </section>
  );
}
