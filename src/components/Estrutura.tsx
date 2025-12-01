import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Dumbbell, Zap } from 'lucide-react';

const Estrutura = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const destaques = [
    {
      icon: Building2,
      text: 'Salas de atendimento individuais',
    },
    {
      icon: Dumbbell,
      text: 'Espaço para exercícios e pilates',
    },
    {
      icon: Zap,
      text: 'Equipamentos específicos para dor e reabilitação',
    },
  ];

  return (
    <section id="estrutura" className="py-20 bg-section-alt" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Estrutura e Tecnologia
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Nossa clínica conta com salas equipadas, aparelhos modernos e um ambiente
            confortável pensado para o seu bem-estar
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {destaques.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-custom text-center group hover:shadow-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <item.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <p className="text-foreground font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Image grid placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="aspect-video bg-muted rounded-xl overflow-hidden shadow-custom hover:shadow-hover transition-all duration-300 hover:scale-105"
            >
              <div className="w-full h-full flex items-center justify-center">
                <Building2 className="h-12 w-12 text-muted-foreground/30" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Estrutura;
