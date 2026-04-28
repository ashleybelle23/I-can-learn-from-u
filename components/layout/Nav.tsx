'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { label: 'Podcast', href: '/podcast' },
  { label: 'Community', href: '/community' },
  { label: 'Store', href: '/store' },
  { label: 'Trust', href: '/trust' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
];

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#3c3070]/60 bg-[#09071c]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-[#d4a843] text-xl font-bold tracking-tight group-hover:opacity-90 transition-opacity">
              I Can Learn
            </span>
            <span className="text-[#8aaa74] text-xl font-light tracking-tight">
              From You
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    active
                      ? 'text-[#ede8f8] bg-[#201c48]/60'
                      : 'text-[#8aaa74] hover:text-[#ede8f8] hover:bg-[#181440]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + mobile menu */}
          <div className="flex items-center gap-3">
            <Link
              href="/community"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#d4a843] to-[#bf8030] text-[#09071c] hover:opacity-90 transition-opacity"
            >
              Join the circle
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-[#8aaa74] hover:text-[#ede8f8] transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#3c3070]/60 py-4 space-y-1">
            {navLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'text-[#ede8f8] bg-[#201c48]/60'
                      : 'text-[#8aaa74] hover:text-[#ede8f8] hover:bg-[#181440]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 px-4">
              <Link
                href="/community"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-[#d4a843] to-[#bf8030] text-[#09071c] hover:opacity-90 transition-opacity"
              >
                Join the circle
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
