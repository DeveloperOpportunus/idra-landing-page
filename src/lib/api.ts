export type AgendaForm = {
  nome: string;
  email: string;
  telefone: string;
  mensagem?: string;
  dores?: string[];
  privacyAccepted: boolean;
};

export type ContatoForm = {
  nome: string;
  email: string;
  telefone: string;
  dores?: string[];
  mensagem?: string;
  privacyAccepted: boolean;
};

// Use proxy in development, direct URL in production
const WEBHOOK_URL = 'https://n8n.opportunusai.com/webhook/form/contato';

export async function sendAgenda(data: AgendaForm) {
  const res = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tipo: 'agenda',
      ...data,
      timestamp: new Date().toISOString(),
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || 'Failed to send agenda');
  }

  return res.json();
}

export async function sendContato(data: ContatoForm) {
  const res = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tipo: 'contato',
      ...data,
      timestamp: new Date().toISOString(),
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || 'Failed to send contato');
  }

  return res.json();
}

