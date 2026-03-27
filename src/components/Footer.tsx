import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* Dark blue top section */}
      <div className="bg-[#373c97] text-[#d3d3d3] py-12">
        <div className="max-w-[1240px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/evenkeel-logo-white.png"
              alt="EvenKeel Insoles"
              width={147}
              height={58}
              className="mb-4"
            />
            <p className="text-sm leading-relaxed">
              Decades of orthotic science, specially built for you in 7 days.
            </p>
          </div>
          <div>
            <h4 className="text-white text-sm font-bold uppercase mb-4 tracking-wide">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/customorthoticdevice" className="hover:text-white transition-colors">Customize Your Insole</Link></li>
              <li><Link href="/process" className="hover:text-white transition-colors">Process</Link></li>
              <li><Link href="/proven-benefits" className="hover:text-white transition-colors">Proven Benefits</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-bold uppercase mb-4 tracking-wide">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/guarantees" className="hover:text-white transition-colors">Guarantees</Link></li>
              <li><Link href="/hsa-fsa" className="hover:text-white transition-colors">HSA / FSA</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-[#f5f5f5] py-4 text-center text-sm text-gray-500">
        Copyright © {new Date().getFullYear()} EvenKeel Insoles. All rights reserved.
      </div>
    </footer>
  );
}
