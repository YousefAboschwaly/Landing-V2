import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from './../../data/index';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 mt-4.25 h-10 px-6 md:px-10 flex items-center justify-between">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img
          src="/Frame.svg"
          alt="Logo icon"
          className="w-8 h-8 md:w-auto m
          d:h-auto"
        />
      </a>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

{/* Navigation */}
      <div
        className={`
        fixed inset-0 bg-primary transition-transform duration-300 md:relative md:inset-auto md:bg-transparent md:translate-x-0
        ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
        flex flex-col md:flex-row items-center justify-center md:justify-end gap-8 md:gap-0 w-full h-full md:h-auto
      `}
      >
        {/* Close button for mobile menu */}
        <button
          className="absolute top-6 right-6 md:hidden text-white p-2"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>

        <ul className="flex flex-col md:flex-row gap-8 md:gap-7.5 px-0 md:px-7.5 items-center">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="nav-link text-xl md:text-sm">
              <a href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="nav-link border-none md:border-l md:pl-7.5 border-white">
            <img
              src="/images/en.png"
              alt="English Language"
              className="w-6 h-6 md:w-auto md:h-auto"
            />
          </li>

          <li className="nav-link text-xl md:text-sm">
            <a href="#">Sign In</a>
          </li>

          <li className="nav-link">
            <button className="px-8 md:px-5.75 py-3 md:py-1.5 rounded-md tracking-[1px] border border-white cursor-pointer hover:bg-white hover:text-black transition text-xl md:text-sm font-semibold">
              Try free
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
