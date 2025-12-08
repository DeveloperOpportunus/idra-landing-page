import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Activity,
  Heart,
  Dumbbell,
  Leaf,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Especialidades = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const especialidades = [
    {
      icon: Zap,
      title: 'VACUMED',
      featured: true,
      pain: 'Inchaço, varizes, feridas que não cicatrizam, queimação nos pés?',
      solution: 'A terapia VACUMED utiliza pressão negativa controlada para ativar sua circulação, reduzir edemas e acelerar a cicatrização de forma natural. Indicada para insuficiência venosa, úlceras, pós-operatórios, neuropatia diabética, linfedema e muitos outros problemas circulatórios.',
      benefit: 'Recupere a circulação, elimine o inchaço e cicatrize rapidamente.',
    },
    {
      icon: Leaf,
      title: 'Solução para Emagrecimento',
      featured: true,
      pain: 'Peso que não desce, cansaço ao caminhar, corpo limitado pelo excesso?',
      solution: 'Transformamos seu emagrecimento em saúde real. Com nutrição personalizada integrada a protocolos de movimento e força, eliminamos as dores das articulações, aumentamos energia e você emagrece enquanto recupera a liberdade de movimento. Não é dieta, é transformação total do corpo.',
      benefit: 'Emagreça, elimine dores articulares e ganhe uma vida sem limitações.',
    },
    {
      icon: Activity,
      title: 'Tratamento da Dor Crônica',
      featured: false,
      pain: 'Vive com dor que limita sua vida?',
      solution: 'Abordagem multidisciplinar que trata a dor desde a raiz. Não apenas mascara sintomas, mas trabalha para eliminar a causa.',
      benefit: 'Viva sem limites. Recupere sua liberdade.',
    },
    {
      icon: Heart,
      title: 'Reabilitação Pós-Cirúrgica',
      featured: false,
      pain: 'Saiu do cirurgião e agora vem a recuperação lenta e dolorosa?',
      solution: 'Protocolos acelerados que seguem evidência científica. Sua recuperação é nossa prioridade.',
      benefit: 'Volte às atividades normais muito mais rápido.',
    },
    {
      icon: Dumbbell,
      title: 'Fisioterapia Ortopédica',
      featured: false,
      pain: 'Lesão, fratura, dor no movimento?',
      solution: 'Reabilitação especializada que reconstrói sua capacidade funcional de forma progressiva e segura.',
      benefit: 'Recupere força e movimento com confiança.',
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="especialidades" className="py-20 bg-section-alt" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 will-change-transform"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            NOSSAS SOLUÇÕES PARA SUA SAÚDE
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada problema tem uma solução. Conheça como podemos transformar sua vida.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Featured Specialties */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-16 max-w-5xl mx-auto">
          {especialidades
            .filter((esp) => esp.featured)
            .map((esp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-white/10 via-white/5 to-white/0 backdrop-blur-xl border border-white/20 p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl hover:shadow-hover transition-transform transition-opacity duration-300 hover:-translate-y-2 overflow-hidden will-change-transform"
              >
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10 blur" />

                <div className="relative z-10">
                  {/* Icon Section */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 sm:p-5 bg-primary/30 rounded-xl border border-primary/30 flex-shrink-0 group-hover:bg-primary/40 transition-transform transition-opacity duration-300">
                      <esp.icon className="h-7 sm:h-9 w-7 sm:w-9 text-primary" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-primary">
                      {esp.title}
                    </h3>
                  </div>

                  {/* A dor/problema - Destaque em Vermelho */}
                  <div className="mb-6 pb-6 border-b border-white/20">
                    <p className="text-base sm:text-lg text-accent font-bold not-italic leading-relaxed">
                      {esp.pain}
                    </p>
                  </div>

                  {/* A solução */}
                  <div className="mb-6">
                    <p className="text-sm sm:text-base text-foreground/85 leading-relaxed font-medium">
                      {esp.solution}
                    </p>
                  </div>

                  {/* O benefício - Destaque com ícone */}
                  <div className="mb-6 p-4 sm:p-5 bg-primary/20 rounded-xl border border-primary/30 group-hover:bg-primary/30 transition-transform transition-opacity duration-300">
                    <p className="text-base sm:text-lg font-bold text-primary flex items-center gap-2">
                      <span className="text-accent text-xl">✓</span> {esp.benefit}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other Specialties */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            OUTRAS ESPECIALIDADES
          </h3>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {especialidades
              .filter((esp) => !esp.featured)
              .map((esp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: (index + 2) * 0.1 }}
                  className="bg-card p-6 rounded-xl shadow-custom hover:shadow-hover transition-transform transition-opacity duration-300 hover:-translate-y-1 cursor-pointer will-change-transform"
                  onClick={() => scrollToSection('#contato')}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <esp.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground">
                      {esp.title}
                    </h4>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 italic text-sm">
                    "{esp.pain}"
                  </p>
                  
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {esp.solution}
                  </p>
                </motion.div>
              ))}
          </div>
        </div>

        {/* CTA Section - Estratégico e Chamativo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 backdrop-blur-md border border-primary/20 rounded-2xl p-8 sm:p-12 md:p-16 text-center overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl -ml-20 -mb-20" />

          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Pronto para Transformar sua Vida?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Escolha a solução que mais se encaixa no seu objetivo e dê o primeiro passo rumo à saúde e liberdade que você merece.
            </p>
            <Button
              onClick={() => scrollToSection('#contato')}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300 py-6 px-10 text-lg inline-flex items-center gap-2"
            >
              Agende sua consulta
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Especialidades;
