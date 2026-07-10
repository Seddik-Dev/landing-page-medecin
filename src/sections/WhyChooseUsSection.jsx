import { motion } from "framer-motion";
import { BadgeCheck, Clock3, Shield, Sparkles } from "lucide-react";
import AnimatedCounter from "../components/AnimatedCounter";
import SectionHeading from "../components/SectionHeading";
import { features, statistics, trustBadges } from "../data/siteData";

const iconMap = {
  BadgeCheck,
  Clock3,
  Sparkles,
};

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-sky-100 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 px-6 py-12 text-white shadow-[0_40px_120px_-60px_rgba(15,23,42,0.9)] sm:px-10 sm:py-16 lg:px-14">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Premium care with the reassurance of trusted medical excellence"
            description="From seamless scheduling to thoughtful follow-up, every detail is designed to elevate your healthcare experience without compromising clinical rigor."
            theme="dark"
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon] || Shield;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >
                  <div className="inline-flex rounded-3xl bg-white/10 p-4 text-sky-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">{feature.title}</h3>
                  <p className="mt-4 text-base leading-8 text-slate-300">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-6 sm:grid-cols-2">
              {statistics.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
                >
                  <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-3 text-sm uppercase tracking-[0.22em] text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">Trust Badges</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                Trusted by patients who expect both excellence and ease.
              </h3>
              <div className="mt-8 flex flex-wrap gap-3">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-slate-100"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-sky-400/20 to-emerald-400/10 p-6">
                <p className="text-sm leading-7 text-slate-200">
                  Our clinic balances responsive access with thoughtful medical decision-making, so patients receive care that feels both elevated and deeply grounded.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
