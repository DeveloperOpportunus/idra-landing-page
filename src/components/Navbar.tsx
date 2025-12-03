import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Estrutura', href: '#estrutura' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Planos e Valores', href: '#planos' },
    { label: 'Contato', href: '#contato' },
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      animate={{
        scale: isScrolled ? 0.92 : 1,
        y: isScrolled ? -4 : 0,
        borderRadius: isScrolled ? '1.75rem' : '2rem',
      }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="
        fixed top-4 sm:top-4 md:top-6 lg:top-6 z-50
        w-full
        transition-all duration-300
      "
    >
      <div
        className="
          w-[92%] sm:w-[88%] md:w-[82%] lg:w-[70%]
          max-w-screen-xl mx-auto
          relative h-full
          px-4 py-3
          flex items-center justify-between
          rounded-2xl
          shadow-lg
          bg-white/70
          backdrop-blur-xl
          transition-all duration-300
        "
      >
        {/* Glow */}
        <div className="
          absolute inset-0 -z-10 rounded-3xl
          bg-gradient-to-br from-[#0056A6]/20 via-transparent to-[#C8102E]/20
          blur-2xl
        " />

        {/* Logo */}
        <div className="font-display text-2xl font-extrabold text-[#0056A6]">
          IDRA
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium text-slate-700 hover:text-[#0056A6] transition-colors"
            >
              {item.label}
            </button>
          ))}
          <Button
            className="bg-[#C8102E] hover:bg-[#a50d25] text-white shadow-md shadow-[#C8102E]/30"
            onClick={() => scrollToSection('#contato')}
          >
            Agendar avaliação
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-slate-800" />
          ) : (
            <Menu className="h-6 w-6 text-slate-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="
              lg:hidden mt-2
              w-[92%] sm:w-[88%] md:w-[82%] lg:w-[70%]
              max-w-screen-xl mx-auto
              px-6 py-4
              rounded-3xl
              bg-white/80 backdrop-blur-xl shadow-xl
            "
          >
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left py-2 px-4 text-slate-800 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="bg-[#C8102E] hover:bg-[#a50d25] text-white mt-3"
                onClick={() => scrollToSection('#contato')}
              >
                Agendar avaliação
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
