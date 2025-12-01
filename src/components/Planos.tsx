import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Planos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToContato = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const planos = [
    {
      titulo: 'Avaliação Inicial',
      preco: 'R$ 200 - R$ 300',
      descricao: 'Consulta completa com avaliação física e diagnóstico',
      itens: [
        'Anamnese detalhada',
        'Avaliação física completa',
        'Diagnóstico e plano de tratamento',
        'Orientações personalizadas',
      ],
      destaque: false,
    },
    {
      titulo: 'Programa de Fisioterapia',
      preco: 'R$ 800 - R$ 1.200/mês',
      descricao: 'Sessões 2x por semana com acompanhamento personalizado',
      itens: [
        '8 sessões mensais',
        'Acompanhamento individualizado',
        'Exercícios terapêuticos',
        'Reavaliações periódicas',
        'Suporte via WhatsApp',
      ],
      destaque: true,
    },
    {
      titulo: 'Pilates Terapêutico',
      preco: 'R$ 600 - R$ 900/mês',
      descricao: 'Aulas personalizadas 2x por semana',
      itens: [
        '8 aulas mensais',
        'Turmas reduzidas',
        'Aparelhos modernos',
        'Instrutor dedicado',
      ],
      destaque: false,
    },
    {
      titulo: 'Reabilitação Pós-Cirúrgica',
      preco: 'Consultar valores',
      descricao: 'Protocolo intensivo personalizado',
      itens: [
        'Frequência definida conforme necessidade',
        'Protocolo acelerado',
        'Acompanhamento multidisciplinar',
        'Tecnologias avançadas',
      ],
      destaque: false,
    },
  ];

  return (
    <section id="planos" className="py-20 bg-section-alt" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Planos e Valores
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para sua necessidade
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {planos.map((plano, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`bg-card p-8 rounded-xl shadow-custom hover:shadow-hover transition-all duration-300 hover:-translate-y-2 flex flex-col ${
                plano.destaque ? 'ring-2 ring-primary relative' : ''
              }`}
            >
              {plano.destaque && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Mais Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">
                {plano.titulo}
              </h3>
              <p className="text-3xl font-bold text-primary mb-3">{plano.preco}</p>
              <p className="text-muted-foreground mb-6">{plano.descricao}</p>

              <ul className="space-y-3 mb-8 flex-grow">
                {plano.itens.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={
                  plano.destaque
                    ? 'w-full bg-accent hover:bg-accent-hover text-accent-foreground'
                    : 'w-full bg-primary hover:bg-primary-dark text-primary-foreground'
                }
                onClick={scrollToContato}
              >
                Quero saber mais
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Planos;
