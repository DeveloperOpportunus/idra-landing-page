import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User } from 'lucide-react';

const Equipe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const profissionais = [
    {
      nome: 'Dr. Carlos Silva',
      especialidade: 'Médico Fisiatra',
      descricao: 'Especialista em dor crônica e reabilitação com abordagem humanizada',
    },
    {
      nome: 'Dra. Ana Martins',
      especialidade: 'Fisioterapeuta',
      descricao: 'Referência em reabilitação ortopédica e tratamento de lesões',
    },
    {
      nome: 'Ft. Juliana Costa',
      especialidade: 'Fisioterapeuta Pélvica',
      descricao: 'Especialista em saúde da mulher e disfunções do assoalho pélvico',
    },
    {
      nome: 'Ft. Ricardo Alves',
      especialidade: 'Fisioterapeuta Ortopédico',
      descricao: 'Focado em reabilitação pós-cirúrgica e esportiva',
    },
    {
      nome: 'Prof. Marina Santos',
      especialidade: 'Instrutora de Pilates',
      descricao: 'Pilates terapêutico personalizado para cada necessidade',
    },
    {
      nome: 'Ft. Pedro Oliveira',
      especialidade: 'Fisioterapeuta',
      descricao: 'Especialista em hidroterapia e reabilitação aquática',
    },
  ];

  return (
    <section id="equipe" className="py-20 bg-card" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa Equipe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profissionais experientes e dedicados ao seu bem-estar
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profissionais.map((prof, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-section-alt p-6 rounded-xl shadow-custom hover:shadow-hover transition-all duration-300 hover:-translate-y-1 text-center group"
            >
              {/* Avatar placeholder */}
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                <User className="h-16 w-16 text-primary group-hover:text-primary-foreground" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">
                {prof.nome}
              </h3>
              <p className="text-primary font-medium mb-3">{prof.especialidade}</p>
              <p className="text-muted-foreground leading-relaxed">
                {prof.descricao}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipe;
