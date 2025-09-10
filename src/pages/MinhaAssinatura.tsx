import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Check, CreditCard, Smartphone, FileText, Star, Zap, Crown, X } from 'lucide-react';

interface Recurso {
  nome: string;
  tem: boolean;
}

interface Plano {
  id: string;
  nome: string;
  preco: number;
  descricao: string;
  icone: React.ReactNode;
  recursos: Recurso[];
  popular?: boolean;
  atual?: boolean;
}

const planos: Plano[] = [
  {
    id: 'gratuito',
    nome: 'Grátis',
    preco: 0,
    descricao: 'Ideal para começar',
    icone: <Star className="h-6 w-6" />,
    recursos: [
      { nome: '1 serviço', tem: true },
      { nome: 'Recurso WhatsApp', tem: true },
      { nome: 'Perfil básico', tem: true },
      { nome: 'Suporte por email', tem: true },
      { nome: '3 serviços', tem: false },
      { nome: 'Pode avaliar', tem: false },
      { nome: 'Pode ver avaliação', tem: false },
      { nome: 'Comprar destaque', tem: false },
      { nome: 'Rede social', tem: false },
      { nome: 'Serviços ilimitados', tem: false },
      { nome: 'Super destaque', tem: false },
      { nome: 'Analíticos', tem: false },
      { nome: 'Suporte por email', tem: false }
    ],
    atual: true
  },
  {
    id: 'profissional',
    nome: 'Profissional',
    preco: 59.90,
    descricao: 'Para profissionais em crescimento',
    icone: <Zap className="h-6 w-6" />,
    recursos: [
      { nome: '1 serviço', tem: false },
      { nome: 'Recurso WhatsApp', tem: true },
      { nome: 'Perfil básico', tem: true },
      { nome: 'Suporte por email', tem: true },
      { nome: '3 serviços', tem: true },
      { nome: 'Pode avaliar', tem: true },
      { nome: 'Pode ver avaliação', tem: true },
      { nome: 'Comprar destaque', tem: true },
      { nome: 'Rede social', tem: true },
      { nome: 'Serviços ilimitados', tem: false },
      { nome: 'Super destaque', tem: false },
      { nome: 'Analíticos', tem: false },
      { nome: 'Suporte por email', tem: false }
    ],
    popular: true
  },
  {
    id: 'premium',
    nome: 'Premium',
    preco: 99.90,
    descricao: 'Para profissionais estabelecidos',
    icone: <Crown className="h-6 w-6" />,
    recursos: [
      { nome: '1 serviço', tem: false },
      { nome: 'Recurso WhatsApp', tem: true },
      { nome: 'Perfil básico', tem: true },
      { nome: 'Suporte por email', tem: false },
      { nome: '3 serviços', tem: false },
      { nome: 'Pode avaliar', tem: true },
      { nome: 'Pode ver avaliação', tem: true },
      { nome: 'Comprar destaque', tem: true },
      { nome: 'Rede social', tem: true },
      { nome: 'Serviços ilimitados', tem: true },
      { nome: 'Super destaque', tem: true },
      { nome: 'Analíticos', tem: true },
      { nome: 'Suporte Prioritário', tem: true }
    ]
  }
];

const metodosPagamento = [
  {
    id: 'pix',
    nome: 'PIX',
    icone: <Smartphone className="h-5 w-5" />,
    processador: 'Mercado Pago'
  },
  {
    id: 'credito',
    nome: 'Cartão de Crédito',
    icone: <CreditCard className="h-5 w-5" />,
    processador: 'Asaas'
  },
  {
    id: 'boleto',
    nome: 'Boleto Bancário',
    icone: <FileText className="h-5 w-5" />,
    processador: 'Asaas'
  }
];

export default function MinhaAssinatura() {
  const [planoSelecionado, setPlanoSelecionado] = useState<string>('profissional');
  const [metodoPagamento, setMetodoPagamento] = useState<string>('pix');
  const [modalAberto, setModalAberto] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const planoAtual = planos.find(p => p.atual);
  const planoEscolhido = planos.find(p => p.id === planoSelecionado);

  const handleAssinar = () => {
    setModalAberto(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header com gradiente */}
        <div className="text-center mb-16">

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Escolha seu Plano
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Desbloqueie todo o potencial do seu negócio com nossos planos premium
          </p>
        </div>

   

        {/* Seleção de Planos */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Escolha seu plano</h2>
            <p className="text-gray-600 text-lg">Compare os recursos e escolha o que melhor se adapta ao seu negócio</p>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-3 gap-8 max-w-6xl mx-auto">
            {planos.map((plano, index) => (
              <Card 
                key={plano.id} 
                className={`relative cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  planoSelecionado === plano.id 
                    ? 'ring-4 ring-blue-500 shadow-2xl scale-105 border-2 border-blue-500' 
                    : 'hover:shadow-xl'
                } ${plano.atual ? 'opacity-75' : ''} ${
                  planoSelecionado === plano.id 
                    ? '' 
                    : plano.id === 'premium' 
                    ? 'border-2 border-yellow-500' 
                    : plano.id === 'gratuito' || plano.id === 'profissional'
                    ? 'border-2 border-black'
                    : 'border border-gray-200'
                }`}
                onClick={() => !plano.atual && setPlanoSelecionado(plano.id)}
              >
                {plano.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 text-sm font-semibold shadow-lg">
                      ⭐ Mais Popular
                    </Badge>
                  </div>
                )}
                {plano.atual && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 text-sm font-semibold shadow-lg">
                      ✓ Plano Atual
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 rounded-full ${
                      plano.popular 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                        : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600'
                    }`}>
                      {plano.icone}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold">{plano.nome}</CardTitle>
                  <CardDescription className="text-gray-600">{plano.descricao}</CardDescription>
                  
                  <div className="mt-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">
                        R$ {plano.preco.toFixed(2).replace('.', ',')}
                      </span>
                      {plano.preco > 0 && (
                        <span className="text-gray-500 ml-2 text-lg">/mês</span>
                      )}
                    </div>
              
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-4 mb-8">
                    {plano.recursos.map((recurso, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          recurso.tem 
                            ? 'bg-green-100' 
                            : 'bg-red-100'
                        }`}>
                          {recurso.tem ? (
                            <Check className="h-3 w-3 text-green-600" />
                          ) : (
                            <X className="h-3 w-3 text-red-600" />
                          )}
                        </div>
                        <span className={`font-medium ${
                          recurso.tem 
                            ? 'text-gray-700' 
                            : 'text-gray-400'
                        }`}>{recurso.nome}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {!plano.atual && (
                    <Button 
                      className={`w-full py-3 text-lg font-semibold transition-all duration-200 ${
                        planoSelecionado === plano.id 
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700' 
                          : plano.popular
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                      variant={planoSelecionado === plano.id || plano.popular ? "default" : "outline"}
                      onClick={(e) => {
                        e.stopPropagation();
                        setPlanoSelecionado(plano.id);
                      }}
                    >
                      {planoSelecionado === plano.id ? '✓ Selecionado' : 'Selecionar Plano'}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="lg:hidden">
            <Carousel
              opts={{
                align: "center",
                loop: true,
                dragFree: true,
              }}
              className="w-full px-4"
              setApi={(api) => {
                if (api) {
                  api.on("select", () => {
                    setCurrentSlide(api.selectedScrollSnap());
                  });
                }
              }}
            >
              <CarouselContent className="-ml-1">
                {planos.map((plano, index) => (
                  <CarouselItem key={plano.id} className="pl-1 basis-[85%] sm:basis-[70%]">
                    <Card 
                      className={`relative cursor-pointer transition-all duration-300 transform ${
                        planoSelecionado === plano.id 
                          ? 'ring-2 ring-blue-500 shadow-lg border-2 border-blue-500' 
                          : 'hover:shadow-md'
                      } ${plano.atual ? 'opacity-75' : ''} ${
                        planoSelecionado === plano.id 
                          ? '' 
                          : plano.id === 'premium' 
                          ? 'border-2 border-yellow-500' 
                          : plano.id === 'gratuito' || plano.id === 'profissional'
                          ? 'border-2 border-black'
                          : 'border border-gray-200'
                      }`}
                      onClick={() => !plano.atual && setPlanoSelecionado(plano.id)}
                    >
                      {plano.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 text-xs font-semibold shadow-lg">
                            ⭐ Popular
                          </Badge>
                        </div>
                      )}
                      {plano.atual && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 text-xs font-semibold shadow-lg">
                            ✓ Atual
                          </Badge>
                        </div>
                      )}
                      
                      <CardHeader className="text-center pb-3 px-4 pt-6">
                        <div className="flex justify-center mb-3">
                          <div className={`p-2 rounded-full ${
                            plano.popular 
                              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                              : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600'
                          }`}>
                            {plano.icone}
                          </div>
                        </div>
                        <CardTitle className="text-lg font-bold">{plano.nome}</CardTitle>
                        <CardDescription className="text-gray-600 text-xs">{plano.descricao}</CardDescription>
                        
                        <div className="mt-3">
                          <div className="flex items-baseline justify-center">
                            <span className="text-3xl font-bold text-gray-900">
                              R$ {plano.preco.toFixed(2).replace('.', ',')}
                            </span>
                            {plano.preco > 0 && (
                              <span className="text-gray-500 ml-1 text-sm">/mês</span>
                            )}
                          </div>
                          {plano.preco === 0 && (
                            <div className="text-lg font-bold text-green-600 mt-1">GRÁTIS</div>
                          )}
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-0 px-4 pb-4">
                        <ul className="space-y-2 mb-4">
                          {plano.recursos.map((recurso, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <div className={`flex-shrink-0 w-3 h-3 rounded-full flex items-center justify-center ${
                                recurso.tem 
                                  ? 'bg-green-100' 
                                  : 'bg-red-100'
                              }`}>
                                {recurso.tem ? (
                                  <Check className="h-2 w-2 text-green-600" />
                                ) : (
                                  <X className="h-2 w-2 text-red-600" />
                                )}
                              </div>
                              <span className={`font-medium text-xs ${
                                recurso.tem 
                                  ? 'text-gray-700' 
                                  : 'text-gray-400'
                              }`}>{recurso.nome}</span>
                            </li>
                          ))}
                        </ul>
                        
                        {!plano.atual && (
                          <Button 
                            className={`w-full py-2 text-sm font-semibold transition-all duration-200 ${
                              planoSelecionado === plano.id 
                                ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700' 
                                : plano.popular
                                ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                            }`}
                            variant={planoSelecionado === plano.id || plano.popular ? "default" : "outline"}
                            onClick={(e) => {
                              e.stopPropagation();
                              setPlanoSelecionado(plano.id);
                            }}
                          >
                            {planoSelecionado === plano.id ? '✓ Selecionado' : 'Selecionar'}
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            
            {/* Indicadores de navegação */}
            <div className="flex justify-center items-center mt-6 space-x-2">
              <div className="flex space-x-2">
                {planos.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      index === currentSlide ? 'bg-blue-500 w-6' : 'bg-gray-300 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Texto indicativo */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                <span>←</span>
                Deslize para ver mais planos
                <span>→</span>
              </p>
            </div>
          </div>
        </div>

        {/* Métodos de Pagamento */}
        {planoEscolhido && !planoEscolhido.atual && (
          <div className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Método de Pagamento</h2>
              <p className="text-gray-600 text-lg">Escolha como deseja pagar sua assinatura</p>
            </div>
            
            <Card className="max-w-2xl mx-auto shadow-xl">
              <CardContent className="p-8">
                <RadioGroup value={metodoPagamento} onValueChange={setMetodoPagamento}>
                  <div className="space-y-4">
                    {metodosPagamento.map((metodo) => (
                      <div 
                        key={metodo.id} 
                        className={`flex items-center space-x-4 p-6 border-2 rounded-xl transition-all duration-200 cursor-pointer ${
                          metodoPagamento === metodo.id 
                            ? 'border-blue-500 bg-blue-50 shadow-md' 
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                        onClick={() => setMetodoPagamento(metodo.id)}
                      >
                        <RadioGroupItem value={metodo.id} id={metodo.id} className="w-5 h-5" />
                        <Label htmlFor={metodo.id} className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-lg ${
                              metodoPagamento === metodo.id ? 'bg-blue-100' : 'bg-gray-100'
                            }`}>
                              {metodo.icone}
                            </div>
                            <div>
                              <div className="font-semibold text-lg">{metodo.nome}</div>
                              <div className="text-sm text-gray-500">Processado por {metodo.processador}</div>
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
        )}

        {/* Resumo da Assinatura */}
        {planoEscolhido && !planoEscolhido.atual && (
          <div className="mb-12">
            <Card className="max-w-2xl mx-auto shadow-2xl border-2 border-blue-200">
              <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-purple-50">
                <CardTitle className="text-2xl font-bold text-gray-900">Resumo da Assinatura</CardTitle>
                <CardDescription className="text-lg">Revise os detalhes antes de confirmar</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-lg font-medium text-gray-700">Plano escolhido:</span>
                    <span className="text-lg font-bold text-gray-900">{planoEscolhido.nome}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-lg font-medium text-gray-700">Valor mensal:</span>
                    <span className="text-2xl font-bold text-blue-600">
                      R$ {planoEscolhido.preco.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-lg font-medium text-gray-700">Método de pagamento:</span>
                    <span className="text-lg font-bold text-gray-900">
                      {metodosPagamento.find(m => m.id === metodoPagamento)?.nome}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg px-4">
                    <span className="text-xl font-bold text-gray-900">Total:</span>
                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      R$ {planoEscolhido.preco.toFixed(2).replace('.', ',')}/mês
                    </span>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-8 py-4 text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg" 
                  size="lg"
                  onClick={handleAssinar}
                >
                  🚀 Assinar Agora
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Modal de Confirmação */}
        <Dialog open={modalAberto} onOpenChange={setModalAberto}>
          <DialogContent className="max-w-lg">
            <DialogHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Check className="h-8 w-8 text-white" />
              </div>
              <DialogTitle className="text-2xl font-bold">Confirmar Assinatura</DialogTitle>
              <DialogDescription className="text-lg">
                Você está prestes a assinar o <span className="font-bold text-blue-600">{planoEscolhido?.nome}</span> por <span className="font-bold text-green-600">R$ {planoEscolhido?.preco.toFixed(2).replace('.', ',')}/mês</span>.
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                <h4 className="font-bold text-lg mb-4 text-center">📋 Detalhes da Assinatura</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Plano:</span>
                    <span className="font-bold text-blue-600">{planoEscolhido?.nome}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Valor:</span>
                    <span className="font-bold text-green-600">R$ {planoEscolhido?.preco.toFixed(2).replace('.', ',')}/mês</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Pagamento:</span>
                    <span className="font-bold">{metodosPagamento.find(m => m.id === metodoPagamento)?.nome}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Renovação:</span>
                    <span className="font-bold text-green-600">Automática</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  className="flex-1 py-3 text-lg font-semibold"
                  onClick={() => setModalAberto(false)}
                >
                  Cancelar
                </Button>
                <Button 
                  className="flex-1 py-3 text-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                  onClick={() => {
                    // Aqui seria a integração com o sistema de pagamento
                    alert('Redirecionando para o pagamento...');
                    setModalAberto(false);
                  }}
                >
                  ✅ Confirmar
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
