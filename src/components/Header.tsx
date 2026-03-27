"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Customize Your Insole", href: "/customorthoticdevice" },
  {
    label: "Our Insoles",
    href: "#",
    children: [
      { label: "Process", href: "/process" },
      { label: "Proven Benefits", href: "/proven-benefits" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1240px] mx-auto px-4 flex items-center justify-between h-[70px]">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/EvenKeel_Logo_Blue.png"
            alt="EvenKeel Insoles"
            width={175}
            height={58}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold uppercase tracking-wide text-[#373c97]">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-[#6067e7] transition-colors cursor-pointer">
                  {link.label}
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded py-1 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-xs hover:bg-gray-50 hover:text-[#6067e7] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#6067e7] transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/customorthoticdevice"
            className="ml-4 bg-[#6067e7] hover:bg-[#00a2ff] text-white px-6 py-2 rounded-full text-xs transition-colors"
          >
            Order Now
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#373c97] transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#373c97] transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#373c97] transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4 text-sm font-semibold uppercase tracking-wide text-[#373c97]">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <p className="mb-2">{link.label}</p>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block pl-4 py-1 text-xs font-normal normal-case hover:text-[#6067e7]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#6067e7] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/customorthoticdevice"
            className="self-start bg-[#6067e7] hover:bg-[#00a2ff] text-white px-6 py-2 rounded-full text-xs transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Order Now
          </Link>
        </div>
      )}
    </header>
  );
}
