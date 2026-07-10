import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import FAQItem from "../components/FAQItem";
import { faqs } from "../data/siteData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions, answered with clarity"
          description="Everything you may want to know before booking, from appointment availability to virtual consultations and first-visit preparation."
          align="center"
        />

        <div className="mt-14 grid gap-4">
          {faqs.map((item, index) => (
            <FAQItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
