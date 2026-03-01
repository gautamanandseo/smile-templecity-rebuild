import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ } from "@/data/services";

interface FAQSectionProps {
  faqs: FAQ[];
}

export const FAQSection = ({ faqs }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-blue-400 transition-all"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all text-left"
          >
            <h3 className="font-bold text-gray-900 pr-4">{faq.question}</h3>
            <ChevronDown
              className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${
                openIndex === index ? "transform rotate-180" : ""
              }`}
            />
          </button>

          {openIndex === index && (
            <div className="bg-gray-50 border-t-2 border-gray-200 p-6 animate-in fade-in slide-in-from-top-4 duration-300">
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
