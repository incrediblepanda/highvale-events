'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/weddings', label: 'Weddings' },
    { href: '/private-events', label: 'Private Events' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-[1180px] mx-auto px-6">
        <div className={`frosted-glass rounded-2xl px-8 py-4 flex items-center justify-between`}>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-cormorant font-bold text-white">
              Highvale <span className="text-gold italic">Events</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-text-light hover:text-gold transition-colors font-inter text-sm ${
                  pathname === link.href ? 'text-gold' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button variant="gold" shape="pill" size="sm">
                Say Hi!
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 px-6">
          <div className="frosted-glass rounded-2xl p-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-text-light hover:text-gold transition-colors font-inter ${
                    pathname === link.href ? 'text-gold' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button variant="gold" shape="pill" className="w-full">
                  Say Hi!
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
