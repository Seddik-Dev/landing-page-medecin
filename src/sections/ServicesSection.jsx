import { motion } from "framer-motion";
import { Activity, Baby, Brain, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { services } from "../data/siteData";

const iconMap = {
  Activity,
  Baby,
  Brain,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Comprehensive care for everyday health and long-term wellness"
          description="Every service is designed to feel proactive, clear, and personalized—whether you need annual care, chronic condition support, or premium preventive planning."
          align="center"
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Stethoscope;
            return (
              <motion.article
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 28 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-[2rem] border border-sky-100 bg-white/85 p-8 shadow-[0_30px_100px_-50px_rgba(14,116,144,0.4)] backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(186,230,253,0.22),_transparent_38%),linear-gradient(180deg,transparent,rgba(255,255,255,0.65))] opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="inline-flex rounded-3xl bg-gradient-to-br from-sky-100 to-emerald-100 p-4 text-sky-700 shadow-inner">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">{service.title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">{service.description}</p>
                  <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-sky-700">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    Personalized approach
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
