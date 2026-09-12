import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/data/company";
import { productCategories, products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description: `Electronic products and related items from ${company.name}. Contact ATCS to order or ask about availability.`,
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-navy-950 py-16 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Electronics / Products
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Computers, phones and electronics
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
            This catalog is ready for real products. For now it shows categories only. Prices, stock
            and specifications will appear when ATCS adds them.
          </p>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          title="Product categories"
          description="Browse a category and contact ATCS to order or to ask what is currently available."
        />
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {productCategories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-navy-800"
            >
              {category}
            </span>
          ))}
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.03}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
