import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Logo e descrição */}
          <div>
            <h3 className="text-xl md:text-2xl font-display font-bold mb-3 md:mb-4">IDRA</h3>
            <p className="text-xs md:text-sm text-primary-foreground/80 leading-relaxed">
              Instituto da Dor e Reabilitação Acelerada. Cuidando da sua saúde com
              tecnologia e humanização.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Links Rápidos</h4>
            <ul className="space-y-1.5 md:space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-xs md:text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Contato</h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-center gap-2 text-xs md:text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+55 21 99434-9845</span>
              </li>
              <li className="flex items-center gap-2 text-xs md:text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>contato@clinicaidra.com.br</span>
              </li>
            </ul>

            {/* Redes sociais */}
            <div className="flex gap-3 md:gap-4 mt-4 md:mt-6">
              <a
                href="#"
                className="w-9 md:w-10 h-9 md:h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors flex-shrink-0"
                aria-label="Facebook"
              >
                <Facebook className="h-4 md:h-5 w-4 md:w-5" />
              </a>
              <a
                href="#"
                className="w-9 md:w-10 h-9 md:h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors flex-shrink-0"
                aria-label="Instagram"
              >
                <Instagram className="h-4 md:h-5 w-4 md:w-5" />
              </a>
              <a
                href="#"
                className="w-9 md:w-10 h-9 md:h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors flex-shrink-0"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 md:h-5 w-4 md:w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 md:pt-8 border-t border-primary-foreground/20 text-center text-xs md:text-sm text-primary-foreground/60">
          <p>
            © {new Date().getFullYear()} IDRA - Instituto da Dor e Reabilitação
            Acelerada. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
