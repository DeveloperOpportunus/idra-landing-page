import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';
import { sendContato } from '@/lib/api';

const Contato = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const popoverRef = useRef<HTMLDivElement>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    dores: [] as string[],
    mensagem: '',
    privacyAccepted: false,
  });
  const [loading, setLoading] = useState(false);

  const doresList = [
    'Insuficiência venosa crónica de membros inferiores (Úlceras Venosas, Varizes)',
    'Síndrome pós-trombótica',
    'Edema',
    'Úlceras e feridas de difícil cicatrização',
    'Pós-operatório de tratamento cirúrgico de varizes de MMII',
    'Edema pós-traumático',
    'Edema pós-mastectomia',
    'Doença arterial oclusiva periférica (DAOP)',
    'Pé diabético com lesão trófica',
    'Doenças do sistema circulatório',
    'Neuropatia diabética (Burning Feet)',
    'Dor crónica (MMII, dorso, feridas e artrites)',
    'Fibromialgia',
    'Cicatrização de feridas',
    'Pós-operatório',
    'Síndrome da perna cansada',
    'Torsões, roturas, lesões ligamentares, contusões e traumas',
    'Reabilitação pós-cirurgias ortopédicas (ex: prótese)',
    'Reabilitação e recuperação de lesões, incluindo fraturas',
    'Linfedema (congénito, crónico e pós-mastectomia)',
    'Medicina estética',
    'Outras',
  ];

  useEffect(() => {
    if (!popoverRef.current) return;
    
    const handleWheel = (e: WheelEvent) => {
      const el = popoverRef.current;
      if (!el) return;
      
      const { scrollTop, scrollHeight, clientHeight } = el;
      const isAtTop = scrollTop === 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight;
      
      if ((e.deltaY < 0 && isAtTop) || (e.deltaY > 0 && isAtBottom)) {
        e.preventDefault();
      }
    };

    popoverRef.current.addEventListener('wheel', handleWheel, { passive: false });
    return () => popoverRef.current?.removeEventListener('wheel', handleWheel);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) {
      toast({
        title: 'Erro',
        description: 'Você deve aceitar os termos de privacidade.',
      });
      return;
    }
    setLoading(true);
    try {
      await sendContato(formData);
      toast({
        title: 'Mensagem enviada!',
        description: 'Entraremos em contato em breve.',
      });
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        dores: [],
        mensagem: '',
        privacyAccepted: false,
      });
      
      // Auto-dismiss toast após 1 segundo
      setTimeout(() => {
        // O toast será automaticamente removido após 1 segundo
      }, 1000);
    } catch (err: any) {
      toast({
        title: 'Erro ao enviar',
        description: err?.message || 'Tente novamente mais tarde.',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContactClick = (tipo: string, info: string) => {
    if (tipo === 'Telefone') {
      const phoneNumber = '5521994349845';
      const message = 'Olá, quero saber mais informações sobre a clínica.';
      const encodedMessage = encodeURIComponent(message);
      window.open(
        `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
        '_blank'
      );
    } else if (tipo === 'E-mail') {
      window.location.href = `mailto:${info}`;
    } else if (tipo === 'Endereço') {
      window.open(
        `https://www.google.com/maps/search/Avenida+João+Cabral+de+Mello+Neto,+850,+Barra+da+Tijuca,+Rio+de+Janeiro`,
        '_blank'
      );
    }
  };

  const infoContato = [
    {
      icon: MapPin,
      titulo: 'Endereço',
      info: 'Avenida João Cabral de Mello Neto, 850 - Bloco 3, Sala 1702 - Barra da Tijuca, Rio de Janeiro - RJ, CEP 22775-055',
    },
    {
      icon: Phone,
      titulo: 'Telefone',
      info: '+55 21 99434-9845',
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

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 lg:items-start">
          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-6 md:p-8 rounded-xl shadow-custom"
          >
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
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

              <div className="grid md:grid-cols-2 gap-3 md:gap-4">
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
                <label className="block text-sm font-medium text-foreground mb-2">
                  Dores
                </label>
                <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full text-left justify-between">
                      <span>
                        {formData.dores && formData.dores.length > 0 ? `${formData.dores.length} selecionada(s)` : 'Selecione as dores'}
                      </span>
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent side="bottom" align="start" className="!w-[calc(100vw-2rem)] sm:!w-80 md:!w-96 !p-0 !border-0 !bg-transparent !shadow-none">
                    <div ref={popoverRef} className="bg-popover border border-input rounded-md shadow-md p-4 max-h-64 overflow-y-auto">
                      <div className="space-y-3">
                        {doresList.map((d) => (
                          <label key={d} className="flex items-start gap-3 cursor-pointer hover:bg-accent/50 p-2 rounded transition-colors">
                            <Checkbox
                              checked={!!formData.dores?.includes(d)}
                              onCheckedChange={(checked: boolean) => {
                                const current = formData.dores ?? [];
                                if (checked) {
                                  setFormData({ ...formData, dores: Array.from(new Set([...current, d])) });
                                } else {
                                  setFormData({ ...formData, dores: current.filter((x) => x !== d) });
                                }
                              }}
                              className="mt-1"
                            />
                            <span className="text-sm leading-tight text-foreground">{d}</span>
                          </label>
                        ))}
                      </div>

                      <div className="flex gap-2 mt-4 pt-4 border-t">
                        <Button
                          type="button"
                          size="sm"
                          variant="ghost"
                          onClick={() => setPopoverOpen(false)}
                          className="flex-1"
                        >
                          Fechar
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
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

              <div className="flex items-center gap-3">
                <Checkbox
                  id="privacy"
                  checked={formData.privacyAccepted}
                  onCheckedChange={(checked: boolean) => {
                    setFormData({ ...formData, privacyAccepted: checked });
                  }}
                />
                <label
                  htmlFor="privacy"
                  className="text-sm text-muted-foreground cursor-pointer leading-tight"
                >
                  Aceito os termos de privacidade e proteção de dados
                </label>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-accent hover:bg-accent-hover text-accent-foreground"
              >
                {loading ? 'Enviando...' : 'Enviar mensagem'}
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
                onClick={() => handleContactClick(item.titulo, item.info)}
                className="bg-card p-6 rounded-xl shadow-custom flex items-start gap-4 cursor-pointer hover:shadow-hover hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0 group-hover:bg-primary transition-all duration-300">
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.5089363098015!2d-43.36477!3d-22.99649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2ced69999999%3A0x9999999999999999!2sAvenida%20Jo%C3%A3o%20Cabral%20de%20Mello%20Neto%2C%20850%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1234567890"
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
          className="text-center bg-primary text-primary-foreground p-8 md:p-12 rounded-2xl shadow-hover"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            Agende sua avaliação e dê o primeiro passo para viver sem dor
          </h3>
          <p className="text-base md:text-lg mb-6 opacity-90">
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
