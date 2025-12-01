import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contato = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Mensagem enviada!',
      description: 'Entraremos em contato em breve.',
    });
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const infoContato = [
    {
      icon: MapPin,
      titulo: 'Endereço',
      info: 'Av. Paulista, 1234 - Bela Vista, São Paulo - SP, 01310-100',
    },
    {
      icon: Phone,
      titulo: 'Telefone',
      info: '(11) 3456-7890 / (11) 98765-4321',
    },
    {
      icon: Mail,
      titulo: 'E-mail',
      info: 'contato@clinicaidra.com.br',
    },
    {
      icon: Clock,
      titulo: 'Horário de Funcionamento',
      info: 'Segunda a Sexta: 7h às 20h | Sábado: 8h às 13h',
    },
  ];

  return (
    <section id="contato" className="py-20 bg-section-alt" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco e agende sua avaliação
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-8 rounded-xl shadow-custom"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Nome completo
                </label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Telefone
                  </label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    required
                    value={formData.telefone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="assunto"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Assunto
                </label>
                <Input
                  id="assunto"
                  name="assunto"
                  type="text"
                  required
                  value={formData.assunto}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="mensagem"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Mensagem
                </label>
                <Textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={5}
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent-hover text-accent-foreground"
              >
                Enviar mensagem
              </Button>
            </form>
          </motion.div>

          {/* Informações de contato */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {infoContato.map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-custom flex items-start gap-4"
              >
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {item.titulo}
                  </h3>
                  <p className="text-muted-foreground">{item.info}</p>
                </div>
              </div>
            ))}

            {/* Mapa */}
            <div className="bg-card p-4 rounded-xl shadow-custom">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975739990943!2d-46.656437!3d-23.561414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201234%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização IDRA"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center bg-primary text-primary-foreground p-12 rounded-2xl shadow-hover"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Agende sua avaliação e dê o primeiro passo para viver sem dor
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Nossa equipe está pronta para cuidar de você
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent-hover text-accent-foreground"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Falar com a equipe
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contato;
