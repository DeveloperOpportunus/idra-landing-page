import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Building2, Zap, Users, HeartHandshake, Settings2, MapPin } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

const Estrutura = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false },
    [AutoScroll({ playOnInit: true, speed: 0.3, stopOnInteraction: false })]
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const destaques = [
    {
      icon: Zap,
      title: 'VACUMED',
      text: 'Tecnologia de pressão negativa para circulação, cicatrização e alívio de dor',
    },
    {
      icon: Users,
      title: 'Equipe Multidisciplinar',
      text: 'Fisioterapeutas, médicos e nutricionistas trabalhando integrados',
    },
    {
      icon: HeartHandshake,
      title: 'Atendimento Humanizado',
      text: 'Protocolo personalizado focado no seu bem-estar e recuperação',
    },
    {
      icon: Settings2,
      title: 'Equipamentos Modernos',
      text: 'Aparelhos de ponta para reabilitação, pilates e tratamento circulatório',
    },
    {
      icon: Building2,
      title: 'Ambiente Acolhedor',
      text: 'Salas privativas confortáveis em Barra da Tijuca, Rio de Janeiro',
    },
    {
      icon: MapPin,
      title: 'Localização Estratégica',
      text: 'Avenida João Cabral de Mello Neto, 850 - Bloco 3, Sala 1702',
    },
  ];

  return (
    <section id="estrutura" className="py-20 bg-section-alt" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 will-change-transform"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            NOSSA ESTRUTURA E TECNOLOGIA
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            Na IDRA, você encontra muito mais que equipamentos. Encontra tecnologia de ponta integrada com 
            cuidado humanizado, equipe especializada e um ambiente pensado para sua recuperação total.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Carousel com Embla */}
        <div className="relative mb-16">
          {/* Blur esquerdo */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-section-alt via-section-alt/50 to-transparent z-10 pointer-events-none rounded-l-xl" />
          
          {/* Blur direito */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-section-alt via-section-alt/50 to-transparent z-10 pointer-events-none rounded-r-xl" />

          {/* Carousel container */}
          <div className="overflow-hidden rounded-xl" ref={emblaRef}>
            <div className="flex gap-6 sm:gap-8">
              {destaques.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex-shrink-0 w-full sm:w-96 bg-card p-6 rounded-xl shadow-custom text-center group hover:shadow-hover hover:-translate-y-1 transition-transform transition-opacity duration-300 will-change-transform"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-transform transition-opacity duration-300 will-change-transform">
                    <item.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Image grid - Cômodos da clínica */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-4 sm:gap-6"
        >
          {[
            { title: 'Sala de VACUMED', desc: 'Tecnologia de ponta' },
            { title: 'Sala de Pilates', desc: 'Reabilitação e fortalecimento' },
            { title: 'Atendimento Privado', desc: 'Ambiente acolhedor' },
          ].map((item, index) => (
            <div
              key={index}
              className="aspect-video bg-muted rounded-xl overflow-hidden shadow-custom hover:shadow-hover transition-all duration-300 hover:scale-105 group cursor-pointer relative"
            >
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                <div className="text-center">
                  <Building2 className="h-12 w-12 text-primary/60 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Estrutura;
