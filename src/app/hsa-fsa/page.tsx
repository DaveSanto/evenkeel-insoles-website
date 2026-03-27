import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HSA / FSA | EvenKeel Insoles",
  description: "EvenKeel custom orthotics are HSA and FSA eligible. Pay with your Health Savings or Flexible Spending Account.",
};

export default function HsaFsaPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-4xl font-bold text-[#373c97] text-center mb-4">HSA / FSA Approved</h1>
        <p className="text-center text-gray-500 mb-16">
          EvenKeel custom orthotics qualify as an eligible medical expense.
        </p>

        <div className="space-y-10">
          <div className="border-b border-[#dddddd] pb-10">
            <h2 className="text-xl font-bold text-[#373c97] mb-4">Health Savings Accounts (HSA)</h2>
            <p className="text-gray-600 leading-relaxed">
              A Health Savings Account is a tax-advantaged account available to individuals enrolled in a high-deductible health plan (HDHP). Funds contributed to an HSA are not subject to federal income tax and can be used to pay for qualified medical expenses — including custom orthotic devices like EvenKeel insoles.
            </p>
          </div>

          <div className="border-b border-[#dddddd] pb-10">
            <h2 className="text-xl font-bold text-[#373c97] mb-4">Flexible Spending Accounts (FSA)</h2>
            <p className="text-gray-600 leading-relaxed">
              A Flexible Spending Account is an employer-sponsored benefit that allows employees to set aside pre-tax dollars for eligible healthcare expenses. Custom orthotics prescribed or recommended by a healthcare provider are an FSA-eligible expense.
            </p>
          </div>

          <div className="border-b border-[#dddddd] pb-10">
            <h2 className="text-xl font-bold text-[#373c97] mb-4">How to Pay With HSA / FSA</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              At checkout, simply enter your HSA or FSA card details as you would any debit or credit card. Most major HSA/FSA cards are accepted.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If your plan requires documentation, we will provide an itemized receipt upon request. Contact us via the <Link href="/contact" className="text-[#6067e7] hover:underline">contact page</Link> and we will send you what you need.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#373c97] mb-4">Questions?</h2>
            <p className="text-gray-600 leading-relaxed">
              Every HSA/FSA plan is different. If you have questions about your specific plan&apos;s coverage, contact your plan administrator. If you have questions about EvenKeel&apos;s products or documentation, <Link href="/contact" className="text-[#6067e7] hover:underline">get in touch with us</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
