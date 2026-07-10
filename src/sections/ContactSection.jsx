import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, SendHorizontal } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { contactDetails } from "../data/siteData";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Us",
    detail: contactDetails.address,
    href: "https://maps.google.com/?q=Bd+Ghandi+Grand+Casablanca+Morocco"
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: contactDetails.phone,
    href: `tel:${contactDetails.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Reach out, find the clinic, or send a private message"
          description="We’re here to help with appointments, questions about services, and personalized guidance for your care journey."
          align="center"
        />

        <div className="mt-14 grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2.25rem] border border-sky-100 bg-white shadow-[0_35px_110px_-54px_rgba(14,116,144,0.35)]">
              <iframe
                title="Hart Medical map"
                src="https://www.google.com/maps?q=480+Pacific+Avenue+Suite+210+San+Francisco+CA+94133&z=14&output=embed"
                className="h-[360px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
              {contactCards.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    target={item.title === "Visit Us" ? "_blank" : undefined}
                    rel={item.title === "Visit Us" ? "noreferrer" : undefined}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="rounded-[1.75rem] border border-sky-100 bg-white/85 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="inline-flex rounded-2xl bg-gradient-to-br from-sky-100 to-emerald-100 p-3 text-sky-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">{item.title}</p>
                    <p className="mt-2 text-base leading-7 text-slate-600">{item.detail}</p>
                  </motion.a>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-[2.25rem] border border-sky-100 bg-white/90 p-8 shadow-[0_36px_110px_-54px_rgba(14,116,144,0.42)] backdrop-blur-xl sm:p-10"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-3xl bg-slate-950 p-4 text-white">
                <SendHorizontal className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Private Message</p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">Send us a note</h3>
              </div>
            </div>

            <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Full Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    className="h-14 rounded-2xl border border-sky-100 bg-sky-50/50 px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="h-14 rounded-2xl border border-sky-100 bg-sky-50/50 px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                    required
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Subject
                <input
                  type="text"
                  name="subject"
                  placeholder="How can we help?"
                  className="h-14 rounded-2xl border border-sky-100 bg-sky-50/50 px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                  required
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Message
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Tell us a little about your question or appointment needs."
                  className="rounded-2xl border border-sky-100 bg-sky-50/50 px-4 py-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                  required
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white shadow-2xl shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Send Message
              </button>

              {submitted && (
                <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                  Thank you. Your message has been received and our team will respond soon.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
