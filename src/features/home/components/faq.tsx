"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What documents do I need to rent a car?",
    answer:
      "You'll need a valid driver's license (international license recommended for non-English licenses), passport, and a credit card for the security deposit. We'll provide all necessary paperwork during pickup.",
  },
  {
    question: "Can I cross borders with the rental car?",
    answer:
      "Yes, cross-border travel is permitted with advance notice. Additional documentation and insurance may be required. Please inform us of your travel plans during booking so we can prepare the necessary permits.",
  },
  {
    question: "What happens if the car breaks down?",
    answer:
      "We provide 24/7 roadside assistance via WhatsApp. In case of mechanical issues, we'll arrange for repairs or a replacement vehicle depending on your location. Our support team is always just a message away.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-sand py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                key={item.question}
                type="button"
                className="flex w-full items-center justify-between gap-4 rounded-[12px] bg-card px-5 py-4 text-left shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <p className="text-sm font-medium text-foreground">
                  {item.question}
                </p>
                <span className="shrink-0 text-foreground/50">
                  {isOpen ? "−" : ">"}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

