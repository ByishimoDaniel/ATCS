"use client";

import { useSearchParams } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { company, mailtoHref, whatsappHref } from "@/data/company";
import { products } from "@/data/products";
import { services } from "@/data/services";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const searchParams = useSearchParams();
  const defaultService = searchParams.get("service") ?? "";
  const productId = searchParams.get("product");
  const product = products.find((item) => item.id === productId);

  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const serviceOptions = useMemo(() => services, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      service: String(data.get("service") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      product: product?.name ?? "",
    };

    if (!payload.name || !payload.phone || !payload.message) {
      setStatus("error");
      setError("Please add your name, phone number and message.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { ok?: boolean; mode?: string };

      if (!response.ok || !result.ok) {
        throw new Error("Request failed");
      }

      if (result.mode === "unconfigured") {
        const body = [
          `Name: ${payload.name}`,
          `Phone: ${payload.phone}`,
          `Email: ${payload.email || "Not provided"}`,
          `Service: ${payload.service || "Not specified"}`,
          payload.product ? `Product: ${payload.product}` : "",
          "",
          payload.message,
        ]
          .filter(Boolean)
          .join("\n");
        window.location.href = mailtoHref(`Service request from ${payload.name}`, body);
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError("The form could not be sent. Please call, email or use WhatsApp.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-3xl border border-cyan-200 bg-cyan-50 p-8 text-navy-950">
        <h3 className="text-xl font-semibold">Message ready</h3>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          Thank you. If email is not configured yet, your device may have opened a message to{" "}
          {company.email}. You can also call or WhatsApp ATCS directly.
        </p>
        <Button href={whatsappHref("Hello ATCS, I would like to request a service.")} external className="mt-6">
          Continue on WhatsApp
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(7,17,31,0.06)] sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-navy-900">
          Name
          <input
            name="name"
            required
            autoComplete="name"
            className="h-12 rounded-2xl border border-slate-200 px-4 text-sm font-normal outline-none ring-cyan-300 transition focus:border-cyan-400 focus:ring-2"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-navy-900">
          Phone
          <input
            name="phone"
            required
            autoComplete="tel"
            inputMode="tel"
            className="h-12 rounded-2xl border border-slate-200 px-4 text-sm font-normal outline-none ring-cyan-300 transition focus:border-cyan-400 focus:ring-2"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-navy-900 sm:col-span-2">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            className="h-12 rounded-2xl border border-slate-200 px-4 text-sm font-normal outline-none ring-cyan-300 transition focus:border-cyan-400 focus:ring-2"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-navy-900 sm:col-span-2">
          Service
          <select
            name="service"
            defaultValue={defaultService}
            className="h-12 rounded-2xl border border-slate-200 px-4 text-sm font-normal outline-none ring-cyan-300 transition focus:border-cyan-400 focus:ring-2"
          >
            <option value="">Select a service</option>
            {serviceOptions.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-navy-900 sm:col-span-2">
          Message
          <textarea
            name="message"
            required
            rows={5}
            defaultValue={
              product
                ? `I would like to ask about ${product.name}.`
                : defaultService === "web-design"
                  ? "I would like to request a website."
                  : ""
            }
            className="rounded-2xl border border-slate-200 px-4 py-3 text-sm font-normal outline-none ring-cyan-300 transition focus:border-cyan-400 focus:ring-2"
          />
        </label>
      </div>
      {error ? <p className="mt-4 text-sm text-red-600">{error}</p> : null}
      <Button type="submit" className="mt-6 w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
