import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guarantees | EvenKeel Insoles",
  description: "EvenKeel's return policy and product guarantees — 42-day money back, 1-year cover guarantee, 5-year orthotic guarantee.",
};

export default function GuaranteesPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-4xl font-bold text-[#373c97] text-center mb-4">Return Policy &amp; Guarantees</h1>
        <p className="text-center text-gray-500 mb-16">
          We stand behind our product with industry-leading guarantees.
        </p>

        <div className="space-y-10">
          <div className="border-b border-[#dddddd] pb-10">
            <h2 className="text-xl font-bold text-[#373c97] mb-4">42-Day Money Back Guarantee</h2>
            <p className="text-gray-600 leading-relaxed">
              If you are not completely satisfied with your EvenKeel custom insoles within 42 days of receiving them, return them for a full refund — no questions asked. We want you to love your orthotics.
            </p>
          </div>

          <div className="border-b border-[#dddddd] pb-10">
            <h2 className="text-xl font-bold text-[#373c97] mb-4">1-Year Guarantee on Top Cover</h2>
            <p className="text-gray-600 leading-relaxed">
              The top cover of your insole is guaranteed for one year from the date of delivery against defects in materials or workmanship. Normal wear is expected and not covered.
            </p>
          </div>

          <div className="border-b border-[#dddddd] pb-10">
            <h2 className="text-xl font-bold text-[#373c97] mb-4">5-Year Guarantee on the Orthotic Device</h2>
            <p className="text-gray-600 leading-relaxed">
              The orthotic device itself — the milled foam shell that provides your correction — is guaranteed for five years against structural defects. This reflects our confidence in the quality of our German engineered foam and fabrication process.
            </p>
          </div>

          <div className="border-b border-[#dddddd] pb-10">
            <h2 className="text-xl font-bold text-[#373c97] mb-4">How to Return</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              To initiate a return or warranty claim, please contact us via the <a href="/contact" className="text-[#6067e7] hover:underline">contact page</a>. Include your order information and a brief description of the issue.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We will provide a prepaid return label and process your refund or replacement within 5–7 business days of receiving the returned item.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#373c97] mb-4">Terms and Conditions</h2>
            <p className="text-gray-600 leading-relaxed">
              Guarantees apply to the original purchaser only and are non-transferable. Returns must be in their original packaging. Damage caused by misuse, modification, or unauthorized repair voids all guarantees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
