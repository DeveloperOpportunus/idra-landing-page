import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Users, Stethoscope } from 'lucide-react';
import heroImage from '@/assets/idra-logo.png';

const Hero = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ['start start', 'end start'],
  });

  // Transformações baseadas em scroll
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.9]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Variante de animação para entradas suaves
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: 'easeOut' },
    }),
  };

  // Badges com dados
  const badges = [
    { icon: Heart, text: 'Atendimento humanizado' },
    { icon: Users, text: 'Equipe multidisciplinar' },
    { icon: Stethoscope, text: 'Protocolos personalizados' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="
        relative
        min-h-screen
        flex items-center
        pt-20 md:pt-10
        overflow-hidden
        overflow-x-hidden
        bg-gradient-to-br from-[#e9f2ff] via-white to-[#f8faff]
      "
      style={{ touchAction: 'pan-y' }}
    >
      {/* Fundo sutil com gradiente */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-[#e9f2ff]/40 via-white to-[#f8faff]/40" />

      {/* Glows decorativos sutis - apenas em telas pequenas */}
      <motion.div
        className="hidden sm:block pointer-events-none absolute -top-28 -left-32 h-64 w-64 rounded-full bg-[#0056A6]/12 blur-3xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{ willChange: 'transform' }}
        aria-hidden
      />
      <motion.div
        className="hidden sm:block pointer-events-none absolute -bottom-28 -right-32 h-72 w-72 rounded-full bg-[#C8102E]/10 blur-3xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ willChange: 'transform' }}
        aria-hidden
      />

      {/* Shapes decorativos com animação contínua - apenas em telas pequenas */}
      <motion.div
        className="hidden sm:block pointer-events-none absolute top-1/4 right-1/2 translate-x-1/2 w-72 h-72 rounded-3xl bg-gradient-to-br from-[#0056A6]/10 to-[#C8102E]/10 blur-2xl"
        animate={{
          rotate: [0, 360],
          y: [0, -8, 8, 0],
        }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
          y: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
        }}
        style={{ willChange: 'transform' }}
        aria-hidden
      />
      <motion.div
        className="hidden sm:block pointer-events-none absolute bottom-1/4 left-1/4 w-56 h-56 rounded-full bg-gradient-to-tr from-[#C8102E]/8 to-[#0056A6]/8 blur-3xl"
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.22, 0.45, 0.22],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
        aria-hidden
      />

      <div className="container mx-auto px-4 w-full">
        <motion.div
          ref={scrollContainerRef}
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:gap-12 items-center"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          {/* Coluna Imagem - vem primeiro em mobile */}
          <motion.div
            className="relative z-10 order-first lg:order-last"
            style={{ scale: imageScale, y: imageY }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{ willChange: 'transform' }}
          >
            <div
              className="
                relative
                rounded-3xl
                overflow-hidden
                w-full
                h-[400px]
                sm:h-[480px]
                md:h-[600px]
                lg:h-auto
              "
            >
              <img
                src={heroImage}
                alt="Equipe médica IDRA"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Coluna Texto */}
          <div className="relative z-10 order-last lg:order-first">
            <motion.h1
              style={{ scale: titleScale, y: titleY }}
              className="
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                font-extrabold
                leading-tight
                mb-6
                text-slate-900
              "
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.12}
            >
              <br className="hidden md:block" />
              DESCUBRA A <span className="text-[#0056A6]">TECNOLOGIA</span> E A{' '}
              <span className="text-[#C8102E]">REABILITAÇÃO QUE TRANSFORMAM</span>
            </motion.h1>

            <motion.p
              className="
                text-base sm:text-base md:text-lg
                text-slate-600
                mb-8
                leading-relaxed
                max-w-xl
              "
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.22}
            >
              No Instituto IDRA, tratamos sua dor com abordagem integrada e tecnologias de ponta.
              Unimos fisioterapia, medicina e empatia para acelerar sua recuperação e devolver sua liberdade de movimento com acolhimento e cuidado em cada detalhe.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.34}
            >
              <Button
                size="lg"
                className="
                  bg-[#C8102E]
                  hover:bg-[#a50d25]
                  text-white
                  hover:scale-105
                  transition-transform
                  shadow-lg shadow-[#C8102E]/30
                "
                onClick={() => scrollToSection('#contato')}
              >
                Agendar avaliação
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="
                  border-[#0056A6]
                  text-[#0056A6]
                  hover:bg-[#0056A6]
                  hover:text-white
                  hover:scale-105
                  transition-transform
                "
                onClick={() => scrollToSection('#especialidades')}
              >
                Ver especialidades
              </Button>
            </motion.div>

            {/* Badges com movimento sutil */}
            <motion.div
              className="flex flex-wrap gap-2 sm:gap-3"
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={0.46}
            >
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  className="
                    flex items-center gap-2
                    px-3 sm:px-4 py-2
                    rounded-full
                    bg-white/70
                    border border-white/60
                    shadow-sm
                    backdrop-blur-md
                    text-xs sm:text-sm
                  "
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 6 + index,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{ willChange: 'transform' }}
                >
                  <badge.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#0056A6] flex-shrink-0" />
                  <span className="font-medium text-slate-800 whitespace-nowrap text-xs sm:text-sm">
                    {badge.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Gradiente de esmaecimento no final para transição suave */}
      <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none bg-gradient-to-b from-transparent to-white" />
    </section>
  );
};

export default Hero;
