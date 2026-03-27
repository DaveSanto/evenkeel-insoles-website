import Image from "next/image";
import Link from "next/link";
import LordIcon from "@/components/LordIcon";
import iconFirstStep from "@/icons/plidrtis.json";
import iconSecondStep from "@/icons/actbiatd.json";
import iconThirdStep from "@/icons/ufbjvsxq.json";
import iconShipping from "@/icons/tbfvkcmb.json";
import iconMoneyBack from "@/icons/pjcmqrfd.json";
import iconHsaFsa from "@/icons/qjysiqyo.json";

const partners = [
  { src: "/patriots.png", alt: "New England Patriots" },
  { src: "/brown.png", alt: "Brown University" },
  { src: "/boston-ballet.png", alt: "Boston Ballet" },
  { src: "/Boston-College.png", alt: "Boston College" },
  { src: "/providence.png", alt: "Providence College" },
  { src: "/emmanuel.png", alt: "Emmanuel College" },
];

const features = [
  {
    title: "Long Lasting",
    body: "High quality German engineered foam with a 5+ year guarantee.",
    icon: null,
  },
  {
    title: "Capable Heel Height",
    body: "1/16\" to 3/8\" inches of heel correction built to your measurements.",
    icon: null,
  },
  {
    title: "Forefoot Posting",
    body: "Up to 25 degrees of forefoot support for precise biomechanical correction.",
    icon: null,
  },
  {
    title: "Patented Insole System",
    body: "Computer-aided manufacturing — milled from the bottom up for a perfect fit.",
    icon: null,
  },
  {
    title: "Free Shipping",
    body: "Every order ships free, directly to your door.",
    icon: iconShipping,
  },
  {
    title: "Hassle Free Money Back Guarantee",
    body: "42-day money back guarantee. No questions asked.",
    icon: iconMoneyBack,
  },
  {
    title: "HSA / FSA Approved",
    body: "Pay with your Health Savings or Flexible Spending Account.",
    icon: iconHsaFsa,
  },
];

const testimonials = [
  {
    name: "Aaron V.",
    quote:
      "With an ordering and sizing process as simple as EvenKeel's I was skeptical about how the final product would fit and feel. But I've been wearing them for weeks now with no pain — even going on long walks in flat shoes. They've made a repeat customer out of me.",
  },
  {
    name: "Kirk C.",
    quote:
      "I've tried many orthotics over the years. EvenKeel's are by far the best fitting and most comfortable I've ever worn. The app-based measurement process is brilliant.",
  },
  {
    name: "Charles R.",
    quote:
      "Fast turnaround, great quality, and my foot pain is gone. Couldn't ask for more. Highly recommend EvenKeel to anyone dealing with chronic foot issues.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/brand-video-mobile.webm" type="video/webm" media="(max-width: 767px)" />
          <source src="/brand-video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-6">
            Find Joy in Movement
          </h1>
          <p className="text-base md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Decades of Orthotic Science Specially Built for You in 7 Days. No Doctor&apos;s Visit. Half The Industry Standard Cost.
          </p>
          <Link
            href="/customorthoticdevice"
            className="inline-block bg-[#6067e7] hover:bg-[#00a2ff] text-white font-bold uppercase text-sm px-10 py-4 rounded-full transition-colors"
          >
            Customize Your Insole
          </Link>
        </div>
      </section>

      {/* Brand story */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/DrFrankSantopietro.jpg"
              alt="Dr. Frank Santopietro"
              width={500}
              height={600}
              className="rounded-lg w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#373c97] mb-6">
              A Long Journey of Helping Patients
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dr. Frank Santopietro has spent over 50 years in podiatry, developing custom orthotic solutions for some of the most demanding athletes and performers in the world — including the New England Patriots, Boston Ballet, Boston College, Providence College, Brown University, and Emmanuel College.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              In 2004, his son David joined the practice, bringing modern technology and a passion for making high-quality custom orthotics accessible to everyone — not just elite athletes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The result is EvenKeel: a fully custom orthotic device built to your exact measurements, delivered in 7 days, at half the industry standard cost.
            </p>
          </div>
        </div>
      </section>

      {/* 7-Day Process */}
      <section className="py-20 px-4 bg-[#f5f5f5]">
        <div className="max-w-[1240px] mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#373c97] mb-12">
            How We Deliver a Custom Orthotic in 7 Days
          </h2>
          <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
            {[
              {
                step: "01",
                title: "First Step",
                body: "Purchase your EvenKeel custom insole and download the EvenKeel app.",
                icon: iconFirstStep,
              },
              {
                step: "02",
                title: "Second Step",
                body: "Use the app to take precise measurements of your feet from home — no doctor's visit required.",
                icon: iconSecondStep,
              },
              {
                step: "03",
                title: "Final Step",
                body: "Our trained technicians and machine fabricators build your insole and ship it directly to your door.",
                icon: iconThirdStep,
              },
            ].map(({ step, title, body, icon }) => (
              <div key={step} className="bg-white rounded-lg p-6 shadow-sm flex items-center gap-6 w-full">
                <div className="flex-shrink-0">
                  <LordIcon
                    icon={icon}
                    size={100}
                    colors={{ primary: "#373c97", secondary: "#8930e8" }}
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-[#373c97] mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/process"
              className="inline-block border-2 border-[#373c97] text-[#373c97] hover:bg-[#373c97] hover:text-white font-bold uppercase text-sm px-8 py-3 rounded-full transition-colors"
            >
              See Full Process
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-3xl font-bold text-[#373c97] text-center mb-12">
            What Makes EvenKeel Different
          </h2>
          {/* Top 4 — no icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {features.filter((f) => !f.icon).map(({ title, body }) => (
              <div key={title} className="border border-[#dddddd] rounded-lg p-6">
                <h3 className="text-sm font-bold text-[#373c97] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          {/* Bottom 3 — with icons, always horizontal on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.filter((f) => f.icon).map(({ title, body, icon }) => (
              <div key={title} className="border border-[#dddddd] rounded-lg p-6 text-center">
                <div className="flex justify-center mb-3">
                  <LordIcon
                    icon={icon!}
                    size={80}
                    colors={{ primary: "#373c97", secondary: "#8930e8" }}
                  />
                </div>
                <h3 className="text-sm font-bold text-[#373c97] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-[#f5f5f5]">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-3xl font-bold text-[#373c97] text-center mb-12">
            What Our Patients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(({ name, quote }) => (
              <div key={name} className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">&ldquo;{quote}&rdquo;</p>
                <p className="font-bold text-[#373c97] text-sm">— {name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-[1240px] mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#373c97] mb-10">
            Trusted By
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map(({ src, alt }) => (
              <Image
                key={src}
                src={src}
                alt={alt}
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 bg-[#373c97] text-white text-center">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Feel the Difference?</h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Custom orthotics built to your exact measurements, delivered in 7 days.
          </p>
          <Link
            href="/customorthoticdevice"
            className="inline-block bg-[#6067e7] hover:bg-[#00a2ff] text-white font-bold uppercase text-sm px-10 py-4 rounded-full transition-colors"
          >
            Customize Your Insole — $399
          </Link>
        </div>
      </section>
    </>
  );
}
