import { Heart, Mail, MapPin, Phone } from "lucide-react";
import { contactDetails, navigationLinks, socialLinks } from "../data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div className="space-y-5">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">
            Hart Medical
          </span>
          <h3 className="text-2xl font-semibold tracking-tight text-white">
            Premium care designed around clarity, comfort, and trust.
          </h3>
          <p className="max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Boutique internal medicine and preventive care with a modern patient experience for busy professionals, families, and individuals who value proactive health.
          </p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-400/40 hover:bg-sky-400/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Quick Links</h4>
          <div className="mt-6 flex flex-col gap-3">
            {navigationLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Contact</h4>
          <div className="mt-6 space-y-4 text-sm text-slate-300">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-sky-300" />
              <span>{contactDetails.address}</span>
            </p>
            <a
              href={`tel:${contactDetails.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Phone className="h-5 w-5 text-sky-300" />
              <span>{contactDetails.phone}</span>
            </a>
            <a href={`mailto:${contactDetails.email}`} className="flex items-center gap-3 transition hover:text-white">
              <Mail className="h-5 w-5 text-sky-300" />
              <span>{contactDetails.email}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Hart Medical. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Crafted with <Heart className="h-4 w-4 text-emerald-300" /> for elevated patient care.
          </p>
        </div>
      </div>
    </footer>
  );
}
