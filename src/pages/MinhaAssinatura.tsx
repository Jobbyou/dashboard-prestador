import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Check, CreditCard, Smartphone, FileText, Star, Zap, Crown } from 'lucide-react';

interface Plano {
  id: string;
  nome: string;
  preco: number;
  descricao: string;
  icone: React.ReactNode;
  recursos: string[];
  popular?: boolean;
  atual?: boolean;
}

const planos: Plano[] = [
  {
    id: 'gratuito',
    nome: 'Perfil Grátis',
    preco: 0,
    descricao: 'Ideal para começar',
    icone: <Star className="h-6 w-6" />,
    recursos: [
      'Perfil básico',
      'Até 5 serviços',
      'Contato via WhatsApp',
      'Suporte por email'
    ],
    atual: true
  },
  {
    id: 'profissional',
    nome: 'Perfil Profissional',
    preco: 29.90,
    descricao: 'Para profissionais em crescimento',
    icone: <Zap className="h-6 w-6" />,
    recursos: [
      'Tudo do plano grátis',
      'Até 20 serviços',
      'Destaque no perfil',
      'Analytics básico',
      'Suporte prioritário',
      'Sem anúncios'
    ],
    popular: true
  },
  {
    id: 'premium',
    nome: 'Perfil Premium',
    preco: 59.90,
    descricao: 'Para profissionais estabelecidos',
    icone: <Crown className="h-6 w-6" />,
    recursos: [
      'Tudo do plano profissional',
      'Serviços ilimitados',
      'Destaque premium',
      'Analytics avançado',
      'Chat integrado',
      'Suporte 24/7',
      'Relatórios personalizados'
    ]
  }
];

const metodosPagamento = [
  {
    id: 'pix',
    nome: 'PIX',
    descricao: 'Pagamento instantâneo',
    icone: <Smartphone className="h-5 w-5" />,
    processador: 'Mercado Pago'
  },
  {
    id: 'credito',
    nome: 'Cartão de Crédito',
    descricao: 'Visa, Mastercard, Elo',
    icone: <CreditCard className="h-5 w-5" />,
    processador: 'Asaas'
  },
  {
    id: 'boleto',
    nome: 'Boleto Bancário',
    descricao: 'Pagamento em até 3 dias úteis',
    icone: <FileText className="h-5 w-5" />,
    processador: 'Asaas'
  }
];

export default function MinhaAssinatura() {
  const [planoSelecionado, setPlanoSelecionado] = useState<string>('profissional');
  const [metodoPagamento, setMetodoPagamento] = useState<string>('pix');
  const [modalAberto, setModalAberto] = useState(false);

  const planoAtual = planos.find(p => p.atual);
  const planoEscolhido = planos.find(p => p.id === planoSelecionado);

  const handleAssinar = () => {
    setModalAberto(true);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Minha Assinatura</h1>
        <p className="text-gray-600">Escolha o plano ideal para o seu negócio</p>
      </div>

      {/* Plano Atual */}
      {planoAtual && (
        <Card className="mb-8 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {planoAtual.icone}
              Plano Atual: {planoAtual.nome}
            </CardTitle>
            <CardDescription>
              Você está usando o plano gratuito. Faça upgrade para ter mais recursos.
            </CardDescription>
          </CardHeader>
        </Card>
      )}

      {/* Seleção de Planos */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Escolha seu plano</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {planos.map((plano) => (
            <Card 
              key={plano.id} 
              className={`relative cursor-pointer transition-all duration-200 ${
                planoSelecionado === plano.id 
                  ? 'ring-2 ring-blue-500 shadow-lg' 
                  : 'hover:shadow-md'
              } ${plano.atual ? 'opacity-75' : ''}`}
              onClick={() => !plano.atual && setPlanoSelecionado(plano.id)}
            >
              {plano.popular && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500">
                  Mais Popular
                </Badge>
              )}
              {plano.atual && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-green-500">
                  Plano Atual
                </Badge>
              )}
              
              <CardHeader className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                    {plano.icone}
                  </div>
                </div>
                <CardTitle className="text-xl">{plano.nome}</CardTitle>
                <CardDescription>{plano.descricao}</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">
                    R$ {plano.preco.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-gray-500 ml-1">/mês</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3">
                  {plano.recursos.map((recurso, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{recurso}</span>
                    </li>
                  ))}
                </ul>
                
                {!plano.atual && (
                  <Button 
                    className="w-full mt-6" 
                    variant={planoSelecionado === plano.id ? "default" : "outline"}
                    onClick={(e) => {
                      e.stopPropagation();
                      setPlanoSelecionado(plano.id);
                    }}
                  >
                    {planoSelecionado === plano.id ? 'Selecionado' : 'Selecionar'}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Métodos de Pagamento */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Método de pagamento</h2>
        <Card>
          <CardContent className="p-6">
            <RadioGroup value={metodoPagamento} onValueChange={setMetodoPagamento}>
              <div className="space-y-4">
                {metodosPagamento.map((metodo) => (
                  <div key={metodo.id} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value={metodo.id} id={metodo.id} />
                    <Label htmlFor={metodo.id} className="flex-1 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-gray-100">
                          {metodo.icone}
                        </div>
                        <div>
                          <div className="font-medium">{metodo.nome}</div>
                          <div className="text-sm text-gray-500">{metodo.descricao}</div>
                          <div className="text-xs text-gray-400">Processado por {metodo.processador}</div>
                        </div>
                      </div>
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
      </div>

      {/* Resumo da Assinatura */}
      {planoEscolhido && !planoEscolhido.atual && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Resumo da Assinatura</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Plano escolhido:</span>
                <span className="font-medium">{planoEscolhido.nome}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Valor mensal:</span>
                <span className="font-medium">
                  R$ {planoEscolhido.preco.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Método de pagamento:</span>
                <span className="font-medium">
                  {metodosPagamento.find(m => m.id === metodoPagamento)?.nome}
                </span>
              </div>
              <Separator />
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span>R$ {planoEscolhido.preco.toFixed(2).replace('.', ',')}/mês</span>
              </div>
            </div>
            
            <Button 
              className="w-full mt-6" 
              size="lg"
              onClick={handleAssinar}
            >
              Assinar Agora
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Modal de Confirmação */}
      <Dialog open={modalAberto} onOpenChange={setModalAberto}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Confirmar Assinatura</DialogTitle>
            <DialogDescription>
              Você está prestes a assinar o {planoEscolhido?.nome} por R$ {planoEscolhido?.preco.toFixed(2).replace('.', ',')}/mês.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium mb-2">Detalhes da assinatura:</h4>
              <ul className="text-sm space-y-1">
                <li>• Plano: {planoEscolhido?.nome}</li>
                <li>• Valor: R$ {planoEscolhido?.preco.toFixed(2).replace('.', ',')}/mês</li>
                <li>• Pagamento: {metodosPagamento.find(m => m.id === metodoPagamento)?.nome}</li>
                <li>• Renovação: Automática</li>
              </ul>
            </div>
            
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => setModalAberto(false)}
              >
                Cancelar
              </Button>
              <Button 
                className="flex-1"
                onClick={() => {
                  // Aqui seria a integração com o sistema de pagamento
                  alert('Redirecionando para o pagamento...');
                  setModalAberto(false);
                }}
              >
                Confirmar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
