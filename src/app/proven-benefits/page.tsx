import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proven Benefits | EvenKeel Custom Orthotics",
  description: "The clinically proven benefits of custom orthotic therapy — from pain relief to long-term savings.",
};

const benefits = [
  {
    number: "01",
    title: "Pain Reduction",
    body: "Custom orthotics address the root cause of foot, knee, hip, and lower back pain by correcting biomechanical imbalances. Patients consistently report significant reduction in chronic pain within weeks of wearing properly fitted orthotics.",
  },
  {
    number: "02",
    title: "Enhanced Functionality",
    body: "By improving alignment and distributing pressure evenly across the foot, custom orthotics enhance your body's natural movement patterns — letting you walk, run, and perform at your best without discomfort.",
  },
  {
    number: "03",
    title: "Prevention of Deformities",
    body: "Long-term use of custom orthotics can slow or prevent the progression of structural foot deformities such as bunions, hammertoes, and flat foot — conditions that worsen without proper support.",
  },
  {
    number: "04",
    title: "Improved Quality of Life",
    body: "When your feet feel good, everything feels better. Patients report improved mobility, better sleep, and increased ability to participate in daily activities they had been avoiding due to pain.",
  },
  {
    number: "05",
    title: "Long-Term Savings",
    body: "A quality custom orthotic that lasts 5+ years costs far less over time than repeated visits for pain management, physical therapy, or surgery. EvenKeel orthotics are an investment in your long-term health.",
  },
];

export default function ProvenBenefitsPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-[1240px] mx-auto">
        <h1 className="text-4xl font-bold text-[#373c97] text-center mb-4">
          The Proven Benefits of Custom Orthotic Therapy
        </h1>
        <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">
          Backed by decades of clinical practice and patient outcomes.
        </p>
        <div className="space-y-10 max-w-3xl mx-auto">
          {benefits.map(({ number, title, body }) => (
            <div key={number} className="flex gap-6 items-start">
              <span className="text-5xl font-bold text-[#c7c7c7] leading-none flex-shrink-0 w-16 text-right">
                {number}
              </span>
              <div>
                <h3 className="text-xl font-bold text-[#373c97] mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
