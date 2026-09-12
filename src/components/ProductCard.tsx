import Image from "next/image";
import { Button } from "@/components/Button";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_40px_rgba(7,17,31,0.06)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200">
      <div className="relative aspect-[16/10] bg-navy-950">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
          {product.category}
        </p>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-navy-950">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{product.description}</p>
        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="text-xs uppercase tracking-wide text-slate-500">Price</dt>
            <dd className="mt-1 font-medium text-navy-900">{product.price ?? "Contact for price"}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-slate-500">Availability</dt>
            <dd className="mt-1 font-medium text-navy-900">Ask about availability</dd>
          </div>
        </dl>
        <Button
          href={`/contact?service=computer-electronics&product=${product.id}`}
          className="mt-5 w-full focus-visible:ring-offset-white"
          size="sm"
        >
          Contact to Order
        </Button>
      </div>
    </article>
  );
}
