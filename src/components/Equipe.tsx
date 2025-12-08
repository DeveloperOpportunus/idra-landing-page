import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Equipe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const profissionais = [
    {
      nome: 'Dra. Fernanda',
      especialidade: 'Fisioterapeuta',
      descricao: 'Fisioterapia Traumato-Ortopédica, RPG e Fisioterapia Ambulatorial',
      imagem: 'https://kygpqdqrbumtllndvktg.supabase.co/storage/v1/object/public/Idra/Profissionais/drafernanda.jpeg',
      instagram: null,
    },
    {
      nome: 'Dra. Ana Marcela',
      especialidade: 'Médica',
      descricao: 'Emagrecimento Saudável e Ortopedia Integrativa',
      imagem: 'https://kygpqdqrbumtllndvktg.supabase.co/storage/v1/object/public/Idra/Profissionais/draanamarcela.jpg',
      instagram: 'https://www.instagram.com/dra.anamarcela/',
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

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {profissionais.map((prof, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => prof.instagram && window.open(prof.instagram, '_blank')}
              className={`bg-section-alt p-4 sm:p-6 rounded-xl shadow-custom hover:shadow-hover transition-all duration-300 hover:-translate-y-1 text-center group ${
                prof.instagram ? 'cursor-pointer' : ''
              }`}
            >
              {/* Avatar com imagem */}
              <div className="w-32 sm:w-40 md:w-44 lg:w-48 h-32 sm:h-40 md:h-44 lg:h-48 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-105 transition-all duration-300 overflow-hidden aspect-square">
                <img
                  src={prof.imagem}
                  alt={prof.nome}
                  className="w-full h-full object-cover object-center aspect-square"
                />
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
