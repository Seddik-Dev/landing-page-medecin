import { motion } from "framer-motion";
import { Award, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { doctorProfile } from "../data/siteData";

const cardGroups = [
  {
    icon: Sparkles,
    title: "Experience",
    items: doctorProfile.experience,
  },
  {
    icon: GraduationCap,
    title: "Degrees",
    items: doctorProfile.degrees,
  },
  {
    icon: Award,
    title: "Certifications",
    items: doctorProfile.certifications,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About the Doctor"
          title="Clinical expertise, delivered with warmth and precision"
          description="A boutique approach to internal medicine that combines leading clinical standards with a highly personalized patient experience."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-[2rem] border border-sky-100 bg-white/85 p-8 shadow-[0_30px_100px_-50px_rgba(14,116,144,0.4)] backdrop-blur-xl sm:p-10"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-sky-100 p-3 text-sky-700">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Biography</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  A calm, modern medical experience built around long-term trust.
                </h3>
              </div>
            </div>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">{doctorProfile.biography}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-300">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Specialty Focus</p>
                <p className="mt-3 text-xl font-semibold">Preventive, concierge, and executive medicine</p>
              </div>
              <div className="rounded-3xl border border-sky-100 bg-sky-50/80 p-6">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Care Philosophy</p>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  More listening, clearer communication, and treatment plans tailored to the whole person.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {cardGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.65, delay: index * 0.1, ease: "easeOut" }}
                  className="rounded-[2rem] border border-sky-100 bg-white/80 p-7 shadow-[0_24px_80px_-44px_rgba(14,116,144,0.36)] backdrop-blur-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-gradient-to-br from-sky-100 to-emerald-100 p-3 text-sky-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-950">{group.title}</h3>
                  </div>
                  <ul className="mt-5 space-y-4">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-600 sm:text-base">
                        <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-sky-500 to-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
