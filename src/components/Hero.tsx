import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Heart, Users, Stethoscope } from 'lucide-react';
import heroImage from '@/assets/hero-team.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const badges = [
    { icon: Heart, text: 'Atendimento humanizado' },
    { icon: Users, text: 'Equipe multidisciplinar' },
    { icon: Stethoscope, text: 'Protocolos personalizados' },
  ];

  return (
    <section id="inicio" className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-br from-background via-section-alt to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Cuidamos da sua dor com{' '}
              <span className="text-primary">tecnologia</span> e{' '}
              <span className="text-accent">reabilitação avançada</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A IDRA é uma clínica especializada em dor e reabilitação acelerada,
              unindo medicina, fisioterapia e tecnologia para devolver qualidade de
              vida aos pacientes.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent-hover text-accent-foreground hover:scale-105 transition-transform shadow-custom"
                onClick={() => scrollToSection('#contato')}
              >
                Agendar avaliação
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-transform"
                onClick={() => scrollToSection('#especialidades')}
              >
                Ver especialidades
              </Button>
            </motion.div>

            {/* Badges */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-custom-sm"
                >
                  <badge.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {badge.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-hover">
              <img
                src={heroImage}
                alt="Equipe médica IDRA"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
