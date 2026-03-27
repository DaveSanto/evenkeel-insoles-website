import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customize Your Insole | EvenKeel Custom Orthotics — $399",
  description: "Order your EvenKeel custom orthotic insole. Built to your exact measurements and delivered in 7 days.",
};

export default function CustomOrthoticPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Product info */}
          <div>
            <p className="text-sm font-semibold text-[#6067e7] uppercase tracking-widest mb-2">Custom Orthotic Device</p>
            <h1 className="text-4xl font-bold text-[#373c97] mb-4">EvenKeel Custom Insole</h1>
            <p className="text-3xl font-bold text-[#222222] mb-6">$399.00</p>

            <p className="text-gray-600 leading-relaxed mb-8">
              A fully custom orthotic device built to your exact foot measurements using computer-aided manufacturing. Milled from high-quality German engineered foam. Delivered in 7 days. No doctor&apos;s visit required.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                "Built to your measurements via the EvenKeel iOS app",
                "Computer-milled German foam — lasts 5+ years",
                "1/16\" to 3/8\" heel height correction",
                "Up to 25° forefoot posting",
                "Free shipping",
                "42-day money back guarantee",
                "HSA / FSA eligible",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-[#6067e7] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            {/* Placeholder Add to Cart — will wire up to payment later */}
            <button
              disabled
              className="w-full bg-[#6067e7] text-white font-bold uppercase text-sm py-4 rounded-full opacity-60 cursor-not-allowed mb-3"
            >
              Add to Cart — Coming Soon
            </button>
            <p className="text-xs text-gray-400 text-center">Online ordering coming soon. Contact us to place an order.</p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="block text-center border-2 border-[#373c97] text-[#373c97] hover:bg-[#373c97] hover:text-white font-bold uppercase text-sm px-8 py-3 rounded-full transition-colors"
              >
                Contact Us to Order
              </Link>
            </div>
          </div>

          {/* App download */}
          <div className="bg-[#f5f5f5] rounded-xl p-10">
            <h2 className="text-xl font-bold text-[#373c97] mb-4">Step 1: Download the EvenKeel App</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              After placing your order, download the EvenKeel app to take precise measurements of your feet from home. The app guides you through every step.
            </p>
            <a
              href="https://apps.apple.com/us/app/evenkeel-performance-insoles/id1500981971?platform=iphone"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#373c97] hover:bg-[#6067e7] text-white font-bold uppercase text-sm px-8 py-3 rounded-full transition-colors"
            >
              Download on the App Store
            </a>

            <div className="mt-10 pt-8 border-t border-[#dddddd]">
              <h3 className="text-sm font-bold text-[#373c97] uppercase mb-4">What Happens After You Order</h3>
              <ol className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-3"><span className="font-bold text-[#c7c7c7] w-5 flex-shrink-0">1.</span>Download the app and take your foot measurements</li>
                <li className="flex gap-3"><span className="font-bold text-[#c7c7c7] w-5 flex-shrink-0">2.</span>Our technicians review and confirm your measurements</li>
                <li className="flex gap-3"><span className="font-bold text-[#c7c7c7] w-5 flex-shrink-0">3.</span>Your insoles are milled and finished</li>
                <li className="flex gap-3"><span className="font-bold text-[#c7c7c7] w-5 flex-shrink-0">4.</span>Shipped to your door within 7 days</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
