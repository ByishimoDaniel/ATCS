import { Button } from "@/components/Button";
import { company } from "@/data/company";

export default function NotFound() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-navy-950">Page not found</h1>
      <p className="mt-4 text-slate-600">
        That link is not part of the {company.name} website. Return home or contact us for help.
      </p>
      <div className="mt-8 flex gap-3">
        <Button href="/">Home</Button>
        <Button href="/contact" variant="outline" className="focus-visible:ring-offset-white">
          Contact
        </Button>
      </div>
    </section>
  );
}
