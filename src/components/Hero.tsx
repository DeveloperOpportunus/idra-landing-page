import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Users, Stethoscope } from 'lucide-react';
import heroImage from '@/assets/idra-logo.png';

const Hero = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ['start start', 'end start'], // 0 = topo da tela, 1 = quando o hero sai do viewport
  });

  // Shrink geral do bloco
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  // Shrink do título
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  // Imagem com leve parallax + shrink
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.9]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -40]);

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
    <section
      id="inicio"
      className="
        relative
        h-screen
        flex items-center
        pt-32
        overflow-hidden
        bg-gradient-to-br from-[#e9f2ff] via-white to-[#f8faff]
      "
    >
      {/* Glows decorativos nas cores da marca */}
      <motion.div
        className="pointer-events-none absolute -top-32 -left-10 h-64 w-64 rounded-full bg-[#0056A6]/20 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-32 -right-10 h-72 w-72 rounded-full bg-[#C8102E]/15 blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          ref={scrollContainerRef}
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="
            grid lg:grid-cols-2 gap-12 items-center
          "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Coluna texto */}
          <div className="relative z-10">
            {/* Card leve pra dar cara de produto premium */}
            <motion.div
              className="
                inline-flex items-center gap-2
                mb-4 px-4 py-2
                rounded-full
                bg-white/70
                border border-white/60
                shadow-sm
                backdrop-blur-md
                text-xs font-medium text-[#0056A6]
              "
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="h-2 w-2 rounded-full bg-[#C8102E]" />
              Instituto da Dor e Reabilitação Acelerada
            </motion.div>

            <motion.h1
              style={{ scale: titleScale, y: titleY }}
              className="
                text-4xl md:text-5xl lg:text-6xl
                font-extrabold
                leading-tight
                mb-6
                text-slate-900
              "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <br className="hidden md:block" />
              Descubra a <span className="text-[#0056A6]">tecnologia</span> e a{' '}
              <span className="text-[#C8102E]">reabilitação que transformam</span>
            </motion.h1>

            <motion.p
              className="
                text-base md:text-lg
                text-slate-600
                mb-8
                leading-relaxed
                max-w-xl
              "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              No Instituto IDRA, tratamos sua dor com abordagem integrada e tecnologias de ponta.
              Unimos fisioterapia, medicina e empatia para acelerar sua recuperação e devolver sua liberdade de movimento com acolhimento e cuidado em cada detalhe.
          </motion.p>


            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
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

            {/* Badges com glassmorphism */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="
                    flex items-center gap-2
                    px-4 py-2
                    rounded-full
                    bg-white/70
                    border border-white/60
                    shadow-sm
                    backdrop-blur-md
                  "
                >
                  <badge.icon className="h-4 w-4 text-[#0056A6]" />
                  <span className="text-sm font-medium text-slate-800">
                    {badge.text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Coluna imagem */}
          <motion.div
            className="relative z-10"
            style={{ scale: imageScale, y: imageY }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div
              className="
                relative
                rounded-3xl
                overflow-hidden
              "
            >
              <img
                src={heroImage}
                alt="Equipe médica IDRA"
                className="w-full h-full object-cover"
              />
            </div>


          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
