
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronDown,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { column1Links, column2Links, column3Links } from "../data";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#2B2D32] pt-5 md:pt-8 text-white px-6 md:px-7.5">
      {/* Main Footer Content */}
      <div className="border-t border-gray-300 pt-12 md:pt-15">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
          {/* Logo and Newsletter */}
          <div className="lg:w-1/3">
            {/* Setapp Logo */}
            <div className="flex items-center gap-2 mb-10 md:mb-19.5">
              <img src="/Frame.svg" alt="" className="w-8 h-8" />
              <span className="text-lg font-semibold tracking-wide">
                SETAPP
              </span>
            </div>

            {/* Newsletter */}
            <div className="w-full max-w-md">
              <p className="mb-6 text-lg md:text-base">
                Updates from our team, written with love{" "}
                <span className="text-orange-400">💛</span>
              </p>

              <div className="flex shadow-lg overflow-hidden rounded-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#404547] text-white text-base md:text-sm px-4 py-4 rounded-l-md w-full placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                />
                <button className="bg-white text-black px-6 py-4 rounded-r-md hover:bg-gray-200 transition-colors active:scale-95">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap gap-8 md:gap-12 lg:ml-auto">
            {/* Column 1 */}
            <div className="w-full sm:w-48">
              <ul className="space-y-4 md:space-y-3">
                {column1Links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 text-base md:text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div className="w-full sm:w-48">
              <ul className="space-y-4 md:space-y-3">
                {column2Links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 text-base md:text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="w-full sm:w-48">
              <ul className="space-y-4 md:space-y-3">
                {column3Links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 text-base md:text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12">
        <div className="border-t border-gray-300/20">
          {/* DMCA and Language */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 py-8 md:py-10">
            <div className="flex items-center font-bold text-[11px] h-6.5 leading-6.5 text-center">
              <span className="w-10.25 bg-[#969799] py-1">DMCA</span>
              <span className="w-21 bg-[#404547] py-1">PROTECTED</span>
            </div>
            <button className="flex items-center gap-2 text-gray-300 text-sm hover:text-white transition-colors p-2 -ml-2 md:ml-0 border border-transparent hover:border-white/10 rounded-lg">
              <img src="/images/en.png" className="w-5 h-5 object-contain" />
              <span>English</span>
              <ChevronDown size={16} />
            </button>
          </div>

          {/* Copyright and Links */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 py-8 border-t border-gray-300/20">
            <div className="max-w-2xl">
              <p className="text-gray-400 text-xs md:text-sm mb-4 leading-relaxed">
                © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork,
                P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
              </p>
              <div className="flex gap-6 text-gray-400">
                <a
                  href="#"
                  className="text-xs md:text-sm hover:text-white transition-colors"
                >
                  Terms of Use
                </a>
                <a
                  href="#"
                  className="text-xs md:text-sm hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 md:w-8 md:h-8 rounded-full bg-[#3D3D3D] flex items-center justify-center hover:bg-[#4D4D4D] transition-all hover:scale-110 active:scale-90"
              >
                <Facebook size={18} className="text-gray-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-8 md:h-8 rounded-full bg-[#3D3D3D] flex items-center justify-center hover:bg-[#4D4D4D] transition-all hover:scale-110 active:scale-90"
              >
                <Twitter size={18} className="text-gray-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-8 md:h-8 rounded-full bg-[#3D3D3D] flex items-center justify-center hover:bg-[#4D4D4D] transition-all hover:scale-110 active:scale-90"
              >
                <Instagram size={18} className="text-gray-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 md:w-8 md:h-8 rounded-full bg-[#3D3D3D] flex items-center justify-center hover:bg-[#4D4D4D] transition-all hover:scale-110 active:scale-90"
              >
                <Youtube size={18} className="text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
