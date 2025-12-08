import React, { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { sendAgenda, AgendaForm } from '@/lib/api';

type Props = {
  trigger?: React.ReactNode;
};

const AgendarModal: React.FC<Props> = ({ trigger }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<AgendaForm>({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
    dores: [],
    privacyAccepted: false,
  });
  const [loading, setLoading] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) {
      toast({ title: 'Erro', description: 'Você deve aceitar os termos de privacidade.' });
      return;
    }
    setLoading(true);
    try {
      await sendAgenda(formData);
      toast({ title: 'Solicitação enviada', description: 'Entraremos em contato em breve.' });
      setFormData({ nome: '', email: '', telefone: '', mensagem: '', dores: [], privacyAccepted: false });
      
      // Fechar modal após sucesso
      setDialogOpen(false);
      
      // Desaparecer o toast após 1 segundo (1000ms)
      setTimeout(() => {
        // O toast do shadcn/ui usa ID automático, precisamos usar a API de dismiss
      }, 1000);
    } catch (err: any) {
      toast({ title: 'Erro ao enviar', description: err?.message || 'Tente novamente mais tarde.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button className="bg-[#C8102E] hover:bg-[#a50d25] text-white">Agendar avaliação</Button>
        )}
      </DialogTrigger>

      <DialogContent className="!bg-gradient-to-br !from-[#0056A6]/8 !via-white/30 !to-[#C8102E]/10 !backdrop-blur-xl !border-white/10 !shadow-2xl !w-[90vw] sm:!w-[85vw] md:!w-auto !max-w-sm sm:!max-w-md md:!max-w-lg !p-4 sm:!p-6 md:!p-8 lg:!pt-12 lg:!pb-8 lg:!px-8 !overflow-x-hidden md:!overflow-y-hidden sm:!max-h-[85vh] sm:overflow-y-auto">
        {/* Glow decorativo superior direito */}
        <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full bg-gradient-to-br from-[#0056A6]/30 to-[#C8102E]/30 blur-3xl pointer-events-none" aria-hidden="true" />
        
        {/* Glow decorativo inferior esquerdo */}
        <div className="absolute -bottom-8 -left-8 w-44 h-44 rounded-full bg-gradient-to-br from-[#C8102E]/20 to-[#0056A6]/20 blur-2xl pointer-events-none" aria-hidden="true" />

        {/* Título */}
        <DialogTitle className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-[#0056A6] to-[#C8102E] text-2xl">
          Agende sua avaliação personalizada!
        </DialogTitle>
        
        {/* Descrição */}
        <DialogDescription className="relative z-10 text-sm text-muted-foreground">
          Preencha o formulário para que nossa equipe entre em contato com você.
        </DialogDescription>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="relative z-10 mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Nome completo</label>
            <Input name="nome" value={formData.nome} onChange={handleChange} required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-2">E-mail</label>
              <Input name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Telefone</label>
              <Input name="telefone" type="tel" value={formData.telefone} onChange={handleChange} required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Dores</label>
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
            <label className="block text-sm font-medium mb-2">Mensagem</label>
            <Textarea name="mensagem" rows={4} value={formData.mensagem} onChange={handleChange} />
          </div>

          <div className="flex items-center gap-3">
            <Checkbox
              id="privacy-modal"
              checked={formData.privacyAccepted}
              onCheckedChange={(checked: boolean) => {
                setFormData({ ...formData, privacyAccepted: checked });
              }}
            />
            <label
              htmlFor="privacy-modal"
              className="text-sm text-muted-foreground cursor-pointer leading-tight"
            >
              Aceito os termos de privacidade e proteção de dados
            </label>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="ghost" className="text-muted-foreground">
                Cancelar
              </Button>
            </DialogClose>
            <Button 
              type="submit" 
              disabled={loading} 
              className="bg-gradient-to-r from-[#0056A6] to-[#C8102E] text-white shadow-md hover:opacity-95"
            >
              {loading ? 'Enviando...' : 'Enviar'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AgendarModal;
