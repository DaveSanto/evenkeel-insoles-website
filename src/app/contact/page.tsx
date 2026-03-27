"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up form submission (email service or Firebase function)
    setSubmitted(true);
  }

  return (
    <div className="py-20 px-4">
      <div className="max-w-[600px] mx-auto">
        <h1 className="text-4xl font-bold text-[#373c97] text-center mb-4">Contact Us</h1>
        <p className="text-center text-gray-500 mb-12">
          Have a question? We&apos;d love to hear from you.
        </p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <p className="text-green-700 font-semibold text-lg">Thank you — we&apos;ll be in touch soon!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1 uppercase tracking-wide">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full border border-[#dddddd] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#6067e7]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1 uppercase tracking-wide">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="email@sample.com"
                className="w-full border border-[#dddddd] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#6067e7]"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1 uppercase tracking-wide">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="Your phone"
                className="w-full border border-[#dddddd] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#6067e7]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1 uppercase tracking-wide">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full border border-[#dddddd] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#6067e7] resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#6067e7] hover:bg-[#00a2ff] text-white font-bold uppercase text-sm py-4 rounded-full transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
