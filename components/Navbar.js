'use client';
import { useState } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800/80 backdrop-blur-md text-white sticky top-0 z-50 mx-0 shadow-lg">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <div className="font-bold text-yellow-300 flex">
              &lt;/Syntax<span className="text-blue-400">Social</span>&gt;
            </div>
          </Link>
        </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link href="/forums" className="hover:text-gray-400">
              Forums
            </Link>
            <Link href="/about" className="hover:text-gray-400">
              About
            </Link>

            <div className="flex justify-center items-center hover:text-gray-400">
              <UserButton/>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <UserButton />
              <svg
                className="h-7 w-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Transition */}
      <div
        className={`md:hidden bg-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600 hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/forums"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600 hover:text-white"
          >
            Forums
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600 hover:text-white"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
