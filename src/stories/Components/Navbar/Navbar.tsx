import React, { useState, useRef, useEffect } from 'react';

interface NavLink {
  id: string;
  label: string;
  href: string;
  children?: NavLink[];
}

interface NavbarProps {
  brand?: React.ReactNode;
  links?: NavLink[];
  className?: string;
  variant?: 'default' | 'transparent' | 'solid';
  position?: 'static' | 'fixed' | 'sticky';
}

const Navbar: React.FC<NavbarProps> = ({ 
  brand = 'Brand',
  links = [],
  className = '',
  variant = 'default',
  position = 'static'
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (id: string) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'transparent':
        return 'bg-transparent';
      case 'solid':
        return 'bg-surface-background-primary shadow-md';
      default:
        return 'bg-primary-600';
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'fixed':
        return 'fixed top-0 left-0 right-0 z-50';
      case 'sticky':
        return 'sticky top-0 z-40';
      default:
        return '';
    }
  };

  const renderDropdown = (link: NavLink) => {
    if (!link.children || link.children.length === 0) {
      return null;
    }

    const isOpen = activeDropdown === link.id;

    return (
      <div className="relative" ref={dropdownRef}>
        <button
          className="flex items-center hover:text-gray-300 transition-colors duration-200"
          onClick={() => toggleDropdown(link.id)}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {link.label}
          <svg 
            className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isOpen && (
          <div 
            className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby={`dropdown-${link.id}`}
          >
            <div className="py-1" role="none">
              {link.children.map((child) => (
                <a
                  key={child.id}
                  href={child.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  {child.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className={`${getVariantClasses()} ${getPositionClasses()} text-white w-full px-4 py-3 ${className}`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center font-bold text-xl">
          {brand}
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <div key={link.id}>
              {link.children && link.children.length > 0 ? (
                renderDropdown(link)
              ) : (
                <a 
                  href={link.href}
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            className="focus:outline-none"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 pb-3">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <div key={link.id}>
                {link.children && link.children.length > 0 ? (
                  <div>
                    <button
                      className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                      onClick={() => toggleDropdown(link.id)}
                      aria-expanded={activeDropdown === link.id}
                    >
                      {link.label}
                      <svg 
                        className={`ml-2 h-4 w-4 inline-block transition-transform ${activeDropdown === link.id ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === link.id && (
                      <div className="pl-4 mt-1 space-y-1">
                        {link.children.map((child) => (
                          <a
                            key={child.id}
                            href={child.href}
                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
