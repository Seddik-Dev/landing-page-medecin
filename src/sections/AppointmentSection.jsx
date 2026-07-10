import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck2, CheckCircle2, Clock3, ShieldPlus, Sparkles } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const perks = [
  "Priority scheduling and attentive follow-up",
  "Clear treatment planning with preventive focus",
  "Comfortable, design-forward clinic experience",
];

export default function AppointmentSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="appointment" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Appointment"
              title="Book a private consultation with confidence"
              description="Tell us a bit about your needs and our team will help you schedule the right visit, whether it’s preventive care, a new patient consultation, or a wellness review."
            />

            <div className="mt-8 space-y-4">
              {perks.map((perk, index) => (
                <motion.div
                  key={perk}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="flex items-start gap-4 rounded-3xl border border-sky-100 bg-white/80 p-5 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-500" />
                  <p className="text-sm leading-7 text-slate-600 sm:text-base">{perk}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative mt-8 overflow-hidden rounded-[2.25rem] border border-sky-100 bg-gradient-to-br from-sky-50 to-white p-7 shadow-[0_30px_100px_-54px_rgba(14,116,144,0.4)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(125,211,252,0.22),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(167,243,208,0.18),_transparent_36%)]" />
              <div className="relative grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-white/70 bg-white/85 p-5 shadow-lg shadow-sky-100 backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div className="rounded-2xl bg-sky-100 p-3 text-sky-700">
                      <CalendarCheck2 className="h-5 w-5" />
                    </div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      Premium Access
                    </span>
                  </div>
                  <p className="mt-5 text-lg font-semibold text-slate-950">Consultation Flow</p>
                  <div className="mt-4 space-y-3 text-sm text-slate-600">
                    <div className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-sky-500" /> Initial booking review
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-sky-500" /> Personalized consultation
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /> Follow-up care plan
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="rounded-[1.75rem] bg-slate-950 p-5 text-white shadow-xl shadow-slate-300">
                    <div className="flex items-center gap-3">
                      <Sparkles className="h-5 w-5 text-sky-300" />
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Experience</p>
                    </div>
                    <p className="mt-4 text-lg font-semibold">Seamless, responsive, and deeply personal care</p>
                  </div>
                  <div className="rounded-[1.75rem] border border-sky-100 bg-white/80 p-5">
                    <div className="flex items-center gap-3 text-sky-700">
                      <Clock3 className="h-5 w-5" />
                      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Turnaround</span>
                    </div>
                    <p className="mt-4 text-base leading-7 text-slate-600">
                      Our team typically responds to appointment requests within one business day.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2.25rem] border border-sky-100 bg-white/90 p-8 shadow-[0_36px_110px_-54px_rgba(14,116,144,0.45)] backdrop-blur-xl sm:p-10"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-3xl bg-gradient-to-br from-sky-100 to-emerald-100 p-4 text-sky-700">
                <ShieldPlus className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Private Booking</p>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">Request your appointment</h3>
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
                    className="h-14 rounded-2xl border border-sky-100 bg-sky-50/50 px-4 text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Email Address
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="h-14 rounded-2xl border border-sky-100 bg-sky-50/50 px-4 text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                    required
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Phone Number
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(555) 123-4567"
                    className="h-14 rounded-2xl border border-sky-100 bg-sky-50/50 px-4 text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Preferred Date
                  <input
                    type="date"
                    name="date"
                    className="h-14 rounded-2xl border border-sky-100 bg-sky-50/50 px-4 text-slate-900 outline-none ring-0 transition focus:border-sky-300 focus:bg-white"
                    required
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Reason for Visit
                <select
                  name="service"
                  className="h-14 rounded-2xl border border-sky-100 bg-sky-50/50 px-4 text-slate-900 outline-none transition focus:border-sky-300 focus:bg-white"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a visit type
                  </option>
                  <option value="preventive-care">Preventive Care</option>
                  <option value="primary-care">Primary Care Consultation</option>
                  <option value="executive-wellness">Executive Wellness</option>
                  <option value="family-medicine">Family Medicine</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Message
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Share your goals, concerns, or ideal appointment timing."
                  className="rounded-2xl border border-sky-100 bg-sky-50/50 px-4 py-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-300 focus:bg-white"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white shadow-2xl shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Request Appointment
              </button>

              {submitted && (
                <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                  Thank you. Your appointment request has been received and our team will reach out shortly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
