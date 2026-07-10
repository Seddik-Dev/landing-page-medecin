import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="rounded-3xl border border-sky-100 bg-white/85 p-6 shadow-[0_20px_80px_-40px_rgba(14,116,144,0.35)] backdrop-blur-xl">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-slate-900">{item.question}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown className="h-5 w-5 text-sky-600" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-sm leading-7 text-slate-600 sm:text-base">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
