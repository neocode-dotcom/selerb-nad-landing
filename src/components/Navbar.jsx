import { useState } from 'react';
import logo from '../assets/logo.png';

export default function Navbar({ onBuyClick, hideLinks = false, customTitle }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { href: '#beneficios', label: 'Beneficios' },
    { href: '#ingredientes', label: 'Ingredientes' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md shadow-lg z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="Selerb NAD+" style={{ height: '28px', width: 'auto', maxWidth: '100px' }} />
          </a>
          
          {!hideLinks && (
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition-colors font-medium text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
          
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={onBuyClick}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-500 transition-colors text-sm"
            >
              Comprar ahora
            </button>
          </div>
          
          <button 
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={onBuyClick}
              className="mt-4 w-full bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold"
            >
              Comprar ahora
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}