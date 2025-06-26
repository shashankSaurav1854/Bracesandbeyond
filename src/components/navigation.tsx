'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [offset, setOffset] = useState(64); // default for large screen (top-16)

  useEffect(() => {
    const updateOffset = () => {
      const isMobile = window.innerWidth < 768;
      setOffset(isMobile ? 32 : 64);
    };

    updateOffset();
    window.addEventListener('resize', updateOffset);

    return () => window.removeEventListener('resize', updateOffset);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > offset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/#services', label: 'Services' },
    { href: '/#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    console.log('Current path:', window.location.pathname);
    console.log('Clicked href:', href);

    // Handle hash links that start with /#
    if (href.startsWith('/#')) {
      const targetId = href.substring(2); // Remove "/#"

      // If we're not on the home page, navigate there first
      if (window.location.pathname !== '/') {
        // Let the browser navigate normally to home page with hash
        setIsMenuOpen(false);
        return; // Don't prevent default - let it navigate
      }

      // We're on home page, do smooth scroll
      e.preventDefault();
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const navHeight = 80;
        const targetPosition = targetElement.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    }
    // Handle regular hash links (#about) - only work on current page
    else if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const navHeight = 60;
        const targetPosition = targetElement.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    }

    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`bg-blue-900 shadow-md fixed left-0 w-full z-40 transition-all duration-300 ${
        isSticky ? 'top-0' : offset === 64 ? 'top-16' : 'top-24'
      }`}
      style={{ scrollBehavior: 'smooth' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              🦷 Dr. Puja Priya
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) =>
                link.href.startsWith('#') ? (
                  <a
                    key={link.href}
                    href={link.href.startsWith('#') ? undefined : link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-white hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-white hover:text-blue-600 text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-amber-50 focus:outline-none focus:text-amber-50"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navLinks.map((link) =>
              link.href.startsWith('#') ? (
                <a
                  key={link.href}
                  href={link.href.startsWith('#') ? undefined : link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium cursor-pointer"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium cursor-pointer"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
