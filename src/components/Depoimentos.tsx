import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const Depoimentos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const depoimentos = [
    {
      nome: 'Ana M.',
      idade: 45,
      texto:
        'Depois de anos convivendo com dor crônica, finalmente encontrei na IDRA um tratamento que realmente funciona. A equipe é atenciosa e o protocolo personalizado fez toda a diferença.',
    },
    {
      nome: 'Roberto S.',
      idade: 52,
      texto:
        'A reabilitação pós-cirúrgica na IDRA superou minhas expectativas. Voltei às minhas atividades muito mais rápido do que imaginava, com total segurança e acompanhamento profissional.',
    },
    {
      nome: 'Mariana L.',
      idade: 38,
      texto:
        'O tratamento de fisioterapia pélvica mudou minha vida. A abordagem humanizada e o cuidado da equipe me fizeram sentir acolhida desde o primeiro dia.',
    },
    {
      nome: 'Carlos P.',
      idade: 60,
      texto:
        'Excelente estrutura e profissionais altamente capacitados. O pilates terapêutico tem me ajudado muito no controle da dor e no fortalecimento muscular.',
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-card" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Depoimentos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos pacientes dizem sobre a experiência na IDRA
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {depoimentos.map((depoimento, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-section-alt p-8 rounded-xl shadow-custom hover:shadow-hover transition-all duration-300 hover:-translate-y-1 relative"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/20" />
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{depoimento.texto}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {depoimento.nome.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{depoimento.nome}</p>
                  <p className="text-sm text-muted-foreground">
                    {depoimento.idade} anos
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

export default Depoimentos;
