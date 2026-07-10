import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, align = "left", theme = "light" }) {
  const isCentered = align === "center";
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <span
        className={`inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] backdrop-blur-xl ${
          isDark
            ? "border border-white/10 bg-white/5 text-sky-300"
            : "border border-sky-200/70 bg-white/70 text-sky-700 shadow-sm"
        }`}
      >
        {eyebrow}
      </span>
      <h2 className={`mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl ${isDark ? "text-white" : "text-slate-950"}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-8 sm:text-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}>
        {description}
      </p>
    </motion.div>
  );
}
