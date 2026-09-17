import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { company, phoneTelHref } from "@/data/company";
import { navLinks } from "@/data/content";
import { footerServices } from "@/data/services";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M6.5 9H4v11h2.5V9zM5.2 4C4.3 4 3.6 4.7 3.6 5.6S4.3 7.2 5.2 7.2 6.8 6.5 6.8 5.6 6.1 4 5.2 4zM20 20h-2.5v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H11V9h2.4v1.5h.1c.3-.6 1.2-1.8 2.9-1.8 3.1 0 3.6 2 3.6 4.7V20z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M17.8 4H20l-6.2 7.1L21 20h-5.2l-4.1-5.4L7 20H4.8l6.6-7.6L4 4h5.3l3.7 5L17.8 4zm-1 14.4h1.4L7.3 5.5H5.8l11 12.9z" />
    </svg>
  );
}

const socialMeta = [
  { key: "facebook" as const, label: "Facebook", Icon: FacebookIcon },
  { key: "instagram" as const, label: "Instagram", Icon: InstagramIcon },
  { key: "linkedin" as const, label: "LinkedIn", Icon: LinkedinIcon },
  { key: "twitter" as const, label: "X / Twitter", Icon: XIcon },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-navy-950 text-slate-300">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">{company.footerBlurb}</p>
          <div className="mt-5 flex gap-2">
            {socialMeta.map(({ key, label, Icon }) => {
              const href = company.social[key];
              if (!href) {
                return (
                  <span
                    key={key}
                    title={`${label} coming soon`}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-500"
                    aria-label={`${label} profile not configured yet`}
                  >
                    <Icon />
                  </span>
                );
              }
              return (
                <a
                  key={key}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-cyan-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Services</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {footerServices.map((service) => (
              <li key={service.id}>
                <Link href={service.href} className="hover:text-cyan-300">
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {company.phones.map((phone) => (
              <li key={phone}>
                <a href={phoneTelHref(phone)} className="inline-flex items-center gap-2 hover:text-cyan-300">
                  <Phone className="h-4 w-4 text-cyan-400" />
                  {phone}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 hover:text-cyan-300"
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                {company.email}
              </a>
            </li>
            <li className="inline-flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-cyan-400" />
              {company.location.display}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
       IT Daniel BYISHIMO © 2026 {company.name}. All Rights Reserved.
      </div>
    </footer>
  );
}
