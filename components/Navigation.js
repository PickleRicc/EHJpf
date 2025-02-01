'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#121212]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#home" className="text-2xl font-bold">
              <span className="highlight">E</span>
              <span className="text-white">.dev</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className="text-gray-300 hover:text-[var(--primary)] transition-colors duration-200 capitalize"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <a
              href="#contact"
              className="button hover:shadow-[0_0_20px_rgba(158,255,0,0.3)] transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
