import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const perguntas = [
    {
      pergunta: 'Preciso de encaminhamento para ser atendido na IDRA?',
      resposta:
        'Não é necessário encaminhamento médico. Você pode agendar diretamente sua avaliação inicial conosco. No entanto, se você possui algum encaminhamento ou exames, é importante trazê-los para uma avaliação mais completa.',
    },
    {
      pergunta: 'A clínica atende convênios ou apenas particular?',
      resposta:
        'Trabalhamos tanto com atendimento particular quanto com alguns convênios médicos. Entre em contato conosco para verificar se atendemos seu convênio e quais são as condições.',
    },
    {
      pergunta: 'Como funciona a avaliação inicial?',
      resposta:
        'A avaliação inicial é uma consulta completa onde realizamos uma anamnese detalhada, avaliação física, análise de exames (se houver) e elaboramos um diagnóstico funcional. Com base nisso, desenvolvemos um plano de tratamento personalizado para suas necessidades.',
    },
    {
      pergunta: 'Os tratamentos são personalizados para cada paciente?',
      resposta:
        'Sim! Acreditamos que cada paciente é único. Por isso, todos os nossos protocolos são desenvolvidos individualmente, considerando suas condições de saúde, objetivos, limitações e preferências.',
    },
    {
      pergunta: 'Qual a duração média de um tratamento?',
      resposta:
        'A duração varia conforme cada caso. Alguns pacientes apresentam melhora significativa em poucas semanas, enquanto outros precisam de acompanhamento mais prolongado. Durante a avaliação inicial, estimamos um prazo aproximado baseado no seu quadro clínico.',
    },
    {
      pergunta: 'É possível fazer apenas uma sessão avulsa?',
      resposta:
        'Sim, atendemos sessões avulsas. Porém, para resultados mais efetivos e duradouros, recomendamos um acompanhamento contínuo conforme o plano de tratamento estabelecido.',
    },
  ];

  return (
    <section className="py-20 bg-card" ref={ref}>
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {perguntas.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-section-alt rounded-lg px-6 border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground">
                    {item.pergunta}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {item.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
