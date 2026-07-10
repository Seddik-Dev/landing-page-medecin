import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { testimonials } from "../data/siteData";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Patients describe a level of care that feels clear, personal, and reassuring"
          description="A modern clinic experience that earns trust through consistency, responsiveness, and genuine attention."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.4fr_0.6fr]">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-[1.75rem] border p-5 text-left transition ${
                  index === activeIndex
                    ? "border-sky-200 bg-white shadow-lg shadow-sky-100"
                    : "border-sky-100 bg-white/70 hover:bg-white"
                }`}
                aria-label={`Show testimonial from ${item.name}`}
              >
                <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                <p className="mt-1 text-sm text-slate-500">{item.role}</p>
              </button>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-sky-100 bg-gradient-to-br from-white to-sky-50/80 p-8 shadow-[0_35px_110px_-54px_rgba(14,116,144,0.45)] sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(125,211,252,0.25),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(167,243,208,0.22),_transparent_34%)]" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.name}
                initial={{ opacity: 0, x: 36 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -36 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="relative"
              >
                <div className="flex items-center justify-between gap-6">
                  <Quote className="h-14 w-14 text-sky-500" />
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-8 text-2xl font-medium leading-[1.7] text-slate-900 sm:text-3xl">
                  “{activeTestimonial.quote}”
                </blockquote>
                <div className="mt-10 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-emerald-400 text-lg font-semibold text-white shadow-lg shadow-sky-200">
                    {activeTestimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-slate-950">{activeTestimonial.name}</p>
                    <p className="text-sm text-slate-500">{activeTestimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="relative mt-10 flex items-center gap-3">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex ? "w-12 bg-slate-950" : "w-2.5 bg-sky-200"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
