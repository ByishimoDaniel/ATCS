import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { serviceIcons } from "@/lib/icons";
import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
  requestHref?: string;
};

export function ServiceCard({ service, requestHref }: ServiceCardProps) {
  const Icon = serviceIcons[service.id];
  const actionHref = requestHref ?? `/contact?service=${service.id}`;

  return (
    <article
      id={service.id}
      className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(7,17,31,0.06)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_20px_50px_rgba(7,17,31,0.1)]"
    >
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-950 text-cyan-300">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-navy-950">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{service.description}</p>
      <div className="mt-6 flex items-center justify-between gap-3">
        <Button href={actionHref} size="sm" className="focus-visible:ring-offset-white">
          Request Service
        </Button>
        {service.id === "web-design" ? (
          <Link
            href="/web-design"
            className="inline-flex items-center gap-1 text-sm font-medium text-cyan-700 hover:text-cyan-600"
          >
            Learn more <ArrowRight className="h-4 w-4" />
          </Link>
        ) : null}
      </div>
    </article>
  );
}
