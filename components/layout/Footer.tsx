"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative bg-gray-100 pt-16 pb-8 overflow-hidden">
      {/* Peacock illustration */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-80 pointer-events-none">
        <Image
          src="/images/peacock-footer.webp"
          alt=""
          fill
          className="object-contain object-bottom-right"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Help Column */}
          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/fabrics" className="hover:underline">
                  Fabrics
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:underline">
                  Journal
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>hello@mymorni.com</li>
              <li>+1 (555) 123-4567</li>
              <li className="flex gap-4 pt-2">
                <a
                  href="https://instagram.com/mymorni"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:opacity-70"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://pinterest.com/mymorni"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  className="hover:opacity-70"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9 15c.2 2 .7 3.7 1.5 4.5.3.3.7.5 1 .5.8 0 1.5-1.5 2-3" />
                    <path d="M9 12a3 3 0 1 1 6 0c0 2-3 3-3 4.5" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/mymorni"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:opacity-70"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <p>Morni Inc. | Sheridan, WY</p>
          <p>&copy; {new Date().getFullYear()} Morni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
