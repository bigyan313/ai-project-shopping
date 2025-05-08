import React, { useState, useEffect } from 'react';
import { Search, MessageCircle, User, Menu, X, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm' 
          : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <span className="text-4xl font-medium tracking-tight text-black">A</span>
            <span className="text-[9px] font-light tracking-[0.2em] text-gray-600">DHIKAR</span>
            <span className="text-4xl font-medium tracking-tight text-black">I</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
              Men
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
              Women
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
              Collections
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
              Sale
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-black transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-black transition-colors">
              <User size={20} />
            </button>
            <div className="flex items-center gap-2 bg-gray-100 py-1 px-3 rounded-full text-sm shadow">
              <Sparkles className="h-4 w-4 text-green-600" />
              <span className="font-light text-gray-700">AI-Powered</span>
            </div>
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-black transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#" 
              className="text-gray-600 hover:text-black transition-colors py-2 px-4 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Men
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-black transition-colors py-2 px-4 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Women
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-black transition-colors py-2 px-4 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Collections
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-black transition-colors py-2 px-4 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sale
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;