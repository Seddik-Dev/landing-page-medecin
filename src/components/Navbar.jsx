import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, Stethoscope, X } from "lucide-react";
import { contactDetails, navigationLinks } from "../data/siteData";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 shadow-lg backdrop-blur-2xl transition-all sm:px-6 ${
          scrolled
            ? "border-white/60 bg-white/85 shadow-sky-100"
            : "border-white/40 bg-white/65 shadow-sky-50"
        }`}
      >
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-blue-600 to-emerald-400 text-white shadow-lg shadow-sky-200">
            <Stethoscope className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">Hart Medical</p>
            <p className="text-sm font-medium text-slate-600">Concierge Care</p>
          </div>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${contactDetails.phone.replace(/[^+\d]/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
          >
            <Phone className="h-4 w-4" />
            {contactDetails.phone}
          </a>
          <a
            href="#appointment"
            className="inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-3xl border border-white/60 bg-white/90 p-4 shadow-xl shadow-sky-100 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navigationLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a
                href={`tel:${contactDetails.phone.replace(/[^+\d]/g, "")}`}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700"
              >
                Call Us
              </a>
              <a
                href="#appointment"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
