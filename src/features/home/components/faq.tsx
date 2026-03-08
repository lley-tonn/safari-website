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
        {/* Header */}
        <h2 className="mb-10 text-center font-heading text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
          Frequently Asked Questions
        </h2>

        {/* FAQ items */}
        <div className="mx-auto max-w-2xl space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="overflow-hidden">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 rounded-xl bg-sand-soft/50 px-6 py-5 text-left transition-colors hover:bg-sand-soft/70"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-espresso">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-espresso/50">
                    <svg
                      className={`h-5 w-5 transition-transform ${isOpen ? "rotate-90" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9 5 7 7-7 7"
                      />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-sm leading-relaxed text-espresso/70">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
