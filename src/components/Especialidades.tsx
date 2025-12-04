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
      title: 'Emagrecimento Saudável',
      featured: true,
      pain: 'Cansou de dietas que não funcionam e peso que volta sempre?',
      solution: 'Aqui o emagrecimento é integrado. Combinamos avaliação nutricional personalizada com ortopedia funcional, criando um programa único para você. Não é apenas emagrecer, é transformar sua relação com o corpo e ganhar disposição real.',
      benefit: 'Perca peso de forma sustentável e ganhe saúde verdadeira.',
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
          className="text-center mb-16"
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
                className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/30 p-4 sm:p-6 md:p-8 rounded-2xl shadow-custom hover:shadow-hover transition-all duration-300 hover:-translate-y-1 w-full"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 sm:p-4 bg-primary/20 rounded-lg flex-shrink-0">
                    <esp.icon className="h-6 sm:h-8 w-6 sm:w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {esp.title}
                  </h3>
                </div>

                {/* A dor/problema */}
                <div className="mb-6 pb-6 border-b border-primary/20">
                  <p className="text-base sm:text-lg text-slate-700 font-semibold italic">
                    "{esp.pain}"
                  </p>
                </div>

                {/* A solução */}
                <div className="mb-6">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                    {esp.solution}
                  </p>
                </div>

                {/* O benefício */}
                <div className="mb-6 p-3 sm:p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-base sm:text-lg font-semibold text-primary">
                    ✓ {esp.benefit}
                  </p>
                </div>

                <Button
                  onClick={() => scrollToSection('#contato')}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Agendar Consulta <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            ))}
        </div>

        {/* Other Specialties */}
        <div>
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
                  className="bg-card p-6 rounded-xl shadow-custom hover:shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer"
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
      </div>
    </section>
  );
};

export default Especialidades;
