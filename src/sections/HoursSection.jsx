import { motion } from "framer-motion";
import { AlarmClockCheck, PhoneCall, Siren, TimerReset } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { contactDetails, workingHours } from "../data/siteData";

export default function HoursSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Working Hours"
              title="Consistent availability with priority support when it matters most"
              description="Planned access, same-week consultations, and clear aftercare guidance for a more dependable patient experience."
            />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
              className="mt-8 rounded-[2rem] border border-sky-100 bg-slate-950 p-8 text-white shadow-[0_35px_110px_-54px_rgba(15,23,42,0.8)]"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-3xl bg-white/10 p-4 text-sky-300">
                  <Siren className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Emergency Contact</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">Immediate assistance line</h3>
                </div>
              </div>
              <p className="mt-5 text-base leading-8 text-slate-300">
                For urgent medical concerns requiring rapid guidance from our office team, contact our priority line. For life-threatening emergencies, please call emergency services immediately.
              </p>
              <a
                href={`tel:${contactDetails.emergency.replace(/[^+\d]/g, "")}`}
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950"
              >
                <PhoneCall className="h-4 w-4 text-sky-700" />
                {contactDetails.emergency}
              </a>
            </motion.div>
          </div>

          <div className="rounded-[2.25rem] border border-sky-100 bg-white/90 p-8 shadow-[0_36px_110px_-54px_rgba(14,116,144,0.35)] backdrop-blur-xl sm:p-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-3xl bg-gradient-to-br from-sky-100 to-emerald-100 p-4 text-sky-700">
                  <AlarmClockCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Clinic Schedule</p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">Weekly availability</h3>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                <TimerReset className="h-4 w-4" />
                Same-week visits available
              </div>
            </div>

            <div className="mt-8 divide-y divide-sky-100">
              {workingHours.map((entry, index) => (
                <motion.div
                  key={entry.day}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="flex items-center justify-between gap-4 py-5"
                >
                  <p className="text-base font-medium text-slate-700">{entry.day}</p>
                  <p className={`text-sm font-semibold sm:text-base ${entry.hours === "Closed" ? "text-slate-400" : "text-slate-950"}`}>
                    {entry.hours}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
