import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import clinicImage from '@/assets/clinic-interior.jpg';

const Sobre = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const diferenciais = [
    'Avaliação completa e personalizada',
    'Profissionais experientes e referência em dor',
    'Estrutura moderna e confortável',
  ];

  return (
    <section id="sobre" className="py-20 bg-card" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre a IDRA
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A IDRA – Instituto da Dor e Reabilitação Acelerada nasceu com a missão
              de aliviar a dor e acelerar a reabilitação de pacientes que buscam
              recuperar sua qualidade de vida e autonomia.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Nossa abordagem é focada em protocolos personalizados, combinando o que
              há de mais moderno em medicina, fisioterapia, pilates terapêutico e
              tratamentos complementares.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Acreditamos que cada paciente é único e merece um plano de tratamento
              desenvolvido especialmente para suas necessidades, objetivos e
              condições de saúde.
            </p>

            {/* Diferenciais */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Nossos diferenciais:
              </h3>
              {diferenciais.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-hover">
              <img
                src={clinicImage}
                alt="Estrutura da Clínica IDRA"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
