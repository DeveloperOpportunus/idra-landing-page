import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Activity,
  Heart,
  Users,
  Dumbbell,
  Waves,
  Bone,
} from 'lucide-react';

const Especialidades = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const especialidades = [
    {
      icon: Activity,
      title: 'Tratamento da dor crônica',
      description:
        'Abordagem multidisciplinar para alívio e controle de dores crônicas, devolvendo qualidade de vida ao paciente.',
    },
    {
      icon: Bone,
      title: 'Fisioterapia ortopédica',
      description:
        'Reabilitação especializada para lesões musculoesqueléticas e problemas ortopédicos diversos.',
    },
    {
      icon: Heart,
      title: 'Fisioterapia pélvica',
      description:
        'Tratamento especializado para disfunções do assoalho pélvico, incontinências e outras condições.',
    },
    {
      icon: Users,
      title: 'Reabilitação pós-cirúrgica',
      description:
        'Protocolos acelerados de recuperação pós-operatória para retorno rápido às atividades.',
    },
    {
      icon: Dumbbell,
      title: 'Pilates terapêutico',
      description:
        'Exercícios personalizados de pilates com foco em reabilitação, fortalecimento e prevenção.',
    },
    {
      icon: Waves,
      title: 'Hidroterapia',
      description:
        'Tratamento aquático que combina os benefícios da água com exercícios terapêuticos.',
    },
  ];

  return (
    <section id="especialidades" className="py-20 bg-section-alt" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Especialidades e Tratamentos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma ampla gama de especialidades para cuidar da sua saúde de forma completa
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {especialidades.map((esp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-custom hover:shadow-hover transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <esp.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {esp.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {esp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Especialidades;
