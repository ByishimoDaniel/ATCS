import { Button } from "@/components/Button";

type CtaBannerProps = {
  title?: string;
  description?: string;
  href?: string;
  action?: string;
};

export function CtaBanner({
  title = "Need an IT or Digital Service?",
  description = "Contact ATCS Company Ltd in Gisenyi, Rubavu for IT, web design, RDB, RRA and other digital services.",
  href = "/contact",
  action = "Contact ATCS Today",
}: CtaBannerProps) {
  return (
    <section className="bg-navy-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white">{title}</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">{description}</p>
        </div>
        <Button href={href}>{action}</Button>
      </div>
    </section>
  );
}
