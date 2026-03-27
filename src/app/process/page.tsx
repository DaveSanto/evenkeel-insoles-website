import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EvenKeel Process | Custom Orthotics in 7 Days",
  description: "Learn how EvenKeel delivers fully custom orthotic insoles in 7 days — no doctor's visit required.",
};

const steps = [
  {
    number: "01",
    title: "Learn About the EvenKeel Difference",
    body: "Understand how EvenKeel's technology sets us apart from off-the-shelf insoles and traditional custom orthotics that can cost $800–$1,200.",
  },
  {
    number: "02",
    title: "Purchase Your Orthotic",
    body: "Order your EvenKeel custom insole online for $399 — half the industry standard cost, with free shipping.",
  },
  {
    number: "03",
    title: "Download the EvenKeel App",
    body: "Available on iOS. The app walks you through the measurement process step by step.",
  },
  {
    number: "04",
    title: "Take Measurements With the App",
    body: "Using your smartphone camera, capture precise measurements of your feet from home — no special equipment needed.",
  },
  {
    number: "05",
    title: "Trained Technicians Review Your Measurements",
    body: "Our team of trained orthotic technicians reviews your foot measurements to ensure accuracy before fabrication begins.",
  },
  {
    number: "06",
    title: "Machine Fabricators Build Your Insole",
    body: "Your orthotic is computer-milled from high-quality German engineered foam to your exact specifications.",
  },
  {
    number: "07",
    title: "Your EvenKeel Insoles Are Packaged and Delivered",
    body: "Your finished insoles are quality-checked, packaged, and shipped directly to your door — all within 7 days.",
  },
];

export default function ProcessPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-[1240px] mx-auto">
        <h1 className="text-4xl font-bold text-[#373c97] text-center mb-4">EvenKeel Process</h1>
        <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">
          From your first click to insoles at your door — here&apos;s exactly how it works.
        </p>
        <div className="space-y-8 max-w-3xl mx-auto">
          {steps.map(({ number, title, body }) => (
            <div key={number} className="flex gap-6 items-start">
              <span className="text-5xl font-bold text-[#c7c7c7] leading-none flex-shrink-0 w-16 text-right">
                {number}
              </span>
              <div>
                <h3 className="text-lg font-bold text-[#373c97] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
