import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, CheckCircle2, PhoneCall, ShieldPlus, Star } from "lucide-react";
import { contactDetails, doctorProfile } from "../data/siteData";

const floatingShapes = [
  "left-[6%] top-28 h-32 w-32 bg-sky-200/50",
  "right-[10%] top-44 h-20 w-20 bg-emerald-200/50",
  "left-[18%] bottom-24 h-24 w-24 bg-blue-200/50",
  "right-[16%] bottom-16 h-36 w-36 bg-cyan-100/60",
];

const trustItems = [
  "Board Certified Physician",
  "Same-Week Consultations",
  "Evidence-Based Preventive Care",
];

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-36">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.24),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(167,243,208,0.22),_transparent_30%),linear-gradient(180deg,_#f8fdff_0%,_#ffffff_46%,_#f8fbff_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black_52%,transparent_88%)]" />

      {floatingShapes.map((shape, index) => (
        <motion.div
          key={shape}
          className={`absolute -z-10 rounded-full blur-3xl ${shape}`}
          animate={{ y: [0, -18, 0], x: [0, index % 2 === 0 ? 12 : -12, 0] }}
          transition={{ duration: 7 + index, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 pb-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-sm font-medium text-slate-700 shadow-lg shadow-sky-100 backdrop-blur-xl">
            <Star className="h-4 w-4 text-amber-400" />
            Premium Internal Medicine in San Francisco
          </div>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            {doctorProfile.name}
          </h1>
          <p className="mt-5 text-xl font-medium text-sky-700 sm:text-2xl">{doctorProfile.specialty}</p>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            {doctorProfile.tagline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.a
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              href="#appointment"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white shadow-2xl shadow-slate-300"
            >
              <CalendarDays className="h-4 w-4" />
              Book Appointment
              <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              href={`tel:${contactDetails.phone.replace(/[^+\d]/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-200 bg-white/80 px-6 py-4 text-sm font-semibold text-slate-700 shadow-lg shadow-sky-100 backdrop-blur-xl"
            >
              <PhoneCall className="h-4 w-4 text-sky-600" />
              Contact Clinic
            </motion.a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {trustItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * index + 0.2, duration: 0.5 }}
                className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-lg shadow-sky-100 backdrop-blur-xl"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <p className="mt-3 text-sm font-medium leading-6 text-slate-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -left-8 top-12 hidden rounded-3xl border border-white/60 bg-white/75 p-5 shadow-2xl shadow-sky-100 backdrop-blur-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-600">
                <ShieldPlus className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Patient Trust</p>
                <p className="text-sm font-semibold text-slate-900">98% satisfaction score</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/65 p-3 shadow-[0_40px_120px_-40px_rgba(14,116,144,0.35)] backdrop-blur-2xl">
            <div className="absolute inset-x-6 top-6 z-10 flex items-center justify-between rounded-full border border-white/60 bg-white/70 px-4 py-3 backdrop-blur-xl">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Now welcoming</p>
                <p className="text-sm font-semibold text-slate-900">New patients</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                Concierge Care
              </span>
            </div>
            <img
              src={doctorProfile.image}
              alt={`${doctorProfile.name} portrait`}
              className="h-[560px] w-full rounded-[2rem] object-cover object-center"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -right-3 max-w-xs rounded-[2rem] border border-white/70 bg-white/80 p-5 shadow-2xl shadow-sky-100 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Priority Access</p>
                <p className="mt-1 text-lg font-semibold text-slate-950">Personalized Care Plans</p>
              </div>
              <div className="rounded-2xl bg-sky-100 p-3 text-sky-700">
                <CalendarDays className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              From preventive screenings to follow-up coordination, every step is designed to feel clear and effortless.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
