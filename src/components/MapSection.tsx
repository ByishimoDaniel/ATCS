import { company } from "@/data/company";

export function MapSection() {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <div className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-navy-950">Find us in {company.location.display}</h2>
          <p className="text-sm text-slate-600">Open the map for directions to Gisenyi, Rubavu.</p>
        </div>
        <a
          href={company.location.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-cyan-700 hover:text-cyan-600"
        >
          Open in Google Maps
        </a>
      </div>
      <iframe
        title={`Map of ${company.location.display}`}
        src={company.location.mapsEmbedUrl}
        className="h-80 w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
