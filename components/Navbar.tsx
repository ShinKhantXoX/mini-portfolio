"use client"

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function NavBar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleSectionChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      setActiveSection(customEvent.detail);
    };

    window.addEventListener('sectionChange', handleSectionChange);
    return () => window.removeEventListener('sectionChange', handleSectionChange);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionName = href.replace('#', '');
    setActiveSection(sectionName);
    setIsMobileMenuOpen(false);
    
    // Dispatch event to page.tsx to change the slide
    const event = new CustomEvent('navigateSection', { detail: sectionName });
    window.dispatchEvent(event);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-6 left-6 z-50 p-3 rounded-full border border-white/20 bg-black/80 backdrop-blur-lg md:hidden"
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <Menu className="w-5 h-5 text-white" />
        )}
      </button>

      {/* Desktop Sidebar */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-24 flex-col items-center justify-center z-40">
        <div className="border border-white/20 bg-black/50 backdrop-blur-lg rounded-r-2xl py-8 px-4">
          <ul className="flex flex-col gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="group flex flex-col items-center gap-2 relative"
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeSection === item.href.replace('#', '')
                        ? 'bg-white scale-125'
                        : 'bg-white/30 group-hover:bg-white/60'
                    }`}
                  />
                  <span
                    className="text-xs text-white/60 group-hover:text-white transition-colors writing-mode-vertical"
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                  >
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <nav
        className={`md:hidden fixed left-0 top-0 h-screen w-64 z-40 transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full border-r border-white/20 bg-black/90 backdrop-blur-lg px-8 py-24">
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`block text-lg font-light transition-colors ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
