import React, { useState, useEffect } from 'react';
import { Menu, X, UserCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onCtaClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active Section Tracking
      const sections = ['experience-authority', 'global-markets', 'clients-relationships'];
      const scrollPosition = window.scrollY + 120; // Offset for header height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Experience', id: 'experience-authority', aria: 'Navigate to Experience section' },
    { label: 'Markets', id: 'global-markets', aria: 'Navigate to Markets section' },
    { label: 'Clients', id: 'clients-relationships', aria: 'Navigate to Clients section' },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 90; // Precise offset for fixed nav
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled 
            ? 'bg-charcoal/95 backdrop-blur-md py-4 shadow-2xl border-b border-white/5' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-5 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative">
              <img 
                src="https://lh3.googleusercontent.com/d/1AwIvK-WGK4nZovcXnTDpSjh_acN-GJg1" 
                alt="Carlos Uzcategui" 
                className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full border border-gold object-cover shadow-2xl transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full border border-gold/10 animate-ping opacity-20 pointer-events-none"></div>
            </div>
            
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-bone leading-tight group-hover:text-gold transition-colors duration-500 uppercase">CARLOS UZCATEGUI</span>
              <span className="text-[9px] md:text-[10px] tracking-[2px] text-gold uppercase font-medium">LICENSED FLORIDA REALTOR | EST. 2001</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                aria-label={item.aria}
                className={`text-[10px] font-bold uppercase tracking-ultra transition-all relative py-2 ${
                  activeSection === item.id 
                    ? 'text-gold' 
                    : 'text-bone/60 hover:text-bone'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-gold transition-transform duration-500 origin-left ${
                  activeSection === item.id ? 'scale-x-100' : 'scale-x-0'
                }`}></span>
              </button>
            ))}
            
            <button 
              onClick={onCtaClick}
              className="bg-gold/10 hover:bg-gold border border-gold/40 text-gold hover:text-charcoal px-8 py-3 rounded-sm text-[10px] font-bold uppercase tracking-ultra transition-all transform active:scale-95 shadow-xl shadow-gold/5"
            >
              Partner with Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-bone" 
            aria-label="Toggle Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[90] bg-charcoal md:hidden flex flex-col justify-center items-center space-y-10"
          >
            {navItems.map((item, idx) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.1 }}
                onClick={() => handleNavClick(item.id)}
                className={`text-2xl font-serif font-bold tracking-tight transition-colors ${
                  activeSection === item.id ? 'text-gold' : 'text-bone'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => { setIsMobileMenuOpen(false); onCtaClick(); }}
              className="bg-gold/10 text-gold border border-gold/40 px-12 py-5 rounded-sm text-[10px] font-bold uppercase tracking-ultra"
            >
              Partner with Us
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;