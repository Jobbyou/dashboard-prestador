import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  User, 
  Camera, 
  Plus, 
  X, 
  Upload, 
  MapPin, 
  Phone, 
  Briefcase,
  Image as ImageIcon
} from "lucide-react"

export default function Profile() {
  const [services, setServices] = useState([
    { id: 1, name: "Instalação Elétrica Residencial", description: "Instalação completa de sistemas elétricos", price: "R$ 150/hora" },
    { id: 2, name: "Manutenção Preventiva", description: "Verificação e manutenção de sistemas elétricos", price: "R$ 120/hora" }
  ])

  const [portfolioImages] = useState([
    "/api/placeholder/300/200",
    "/api/placeholder/300/200", 
    "/api/placeholder/300/200",
    "/api/placeholder/300/200"
  ])

  return (
    <div className="p-4 sm:p-6 lg:p-12 space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          Meu Perfil Público
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg">
          Construa sua vitrine profissional e atraia mais clientes
        </p>
      </div>

      <Tabs defaultValue="informacoes" className="space-y-4 sm:space-y-6">
        <TabsList className="grid w-full grid-cols-3 bg-muted h-auto">
          <TabsTrigger value="informacoes" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm py-2">
            Informações
          </TabsTrigger>
          <TabsTrigger value="servicos" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm py-2">
            Serviços
          </TabsTrigger>
          <TabsTrigger value="portfolio" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm py-2">
            Portfólio
          </TabsTrigger>
        </TabsList>

        {/* Informações Tab */}
        <TabsContent value="informacoes">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5 text-primary" />
                <span>Informações de Perfil</span>
              </CardTitle>
              <CardDescription>
                Complete suas informações básicas para ser encontrado pelos clientes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Photo */}
              <div className="space-y-2">
                <Label className="text-sm font-medium">Foto de Perfil</Label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-muted rounded-full flex items-center justify-center border-2 border-dashed border-border">
                    <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground" />
                  </div>
                  <Button variant="outline" className="border-2 border-dashed w-full sm:w-auto">
                    <Upload className="w-4 h-4 mr-2" />
                    Carregar Foto
                  </Button>
                </div>
              </div>

              {/* Basic Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input 
                    id="nome" 
                    placeholder="Seu nome completo" 
                    defaultValue="João Silva"
                    className="border-border focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="titulo">Título Profissional</Label>
                  <Input 
                    id="titulo" 
                    placeholder="Ex: Eletricista Residencial" 
                    defaultValue="Eletricista Especializado"
                    className="border-border focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="localizacao" className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>Localização</span>
                  </Label>
                  <Input 
                    id="localizacao" 
                    placeholder="Cidade, Estado" 
                    defaultValue="São Paulo, SP"
                    className="border-border focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone" className="flex items-center space-x-1">
                    <Phone className="w-4 h-4" />
                    <span>Telefone</span>
                  </Label>
                  <Input 
                    id="telefone" 
                    placeholder="(11) 99999-9999" 
                    defaultValue="(11) 98765-4321"
                    className="border-border focus:ring-primary"
                  />
                </div>
              </div>

              {/* About Me */}
              <div className="space-y-2">
                <Label htmlFor="sobre">Sobre Mim</Label>
                <Textarea 
                  id="sobre" 
                  placeholder="Conte um pouco sobre sua experiência e especialidades..." 
                  className="min-h-[120px] border-border focus:ring-primary"
                  defaultValue="Sou eletricista com mais de 10 anos de experiência em instalações residenciais e comerciais. Especialista em sistemas de automação e energia solar. Atendo com pontualidade e garantia em todos os serviços."
                />
              </div>

              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent w-full sm:w-auto">
                Salvar Informações
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Serviços Tab */}
        <TabsContent value="servicos">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5 text-primary" />
                <span>Meus Serviços</span>
              </CardTitle>
              <CardDescription>
                Liste todos os serviços que você oferece com descrições claras
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Services List */}
              <div className="space-y-4">
                {services.map((service) => (
                  <div key={service.id} className="border border-border rounded-lg p-4 space-y-3">
                    <div className="flex flex-col sm:flex-row items-start justify-between space-y-3 sm:space-y-0">
                      <div className="space-y-2 flex-1 w-full">
                        <Input 
                          defaultValue={service.name}
                          className="font-medium border-border focus:ring-primary"
                          placeholder="Nome do serviço"
                        />
                        <Textarea 
                          defaultValue={service.description}
                          className="border-border focus:ring-primary"
                          placeholder="Descrição detalhada do serviço"
                        />
                        <Input 
                          defaultValue={service.price}
                          className="border-border focus:ring-primary w-full sm:w-48"
                          placeholder="Preço (opcional)"
                        />
                      </div>
                      <Button variant="destructive" size="sm" className="ml-0 sm:ml-4 self-end sm:self-start">
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Service */}
              <Button variant="outline" className="border-2 border-dashed border-primary text-primary hover:bg-primary/10 w-full sm:w-auto">
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Novo Serviço
              </Button>

              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent w-full sm:w-auto">
                Salvar Serviços
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Portfólio Tab */}
        <TabsContent value="portfolio">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <ImageIcon className="w-5 h-5 text-primary" />
                <span>Portfólio / Galeria de Fotos</span>
              </CardTitle>
              <CardDescription>
                Mostre seus trabalhos anteriores para impressionar os clientes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Upload Area */}
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center space-y-4 hover:border-primary transition-colors">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                  <Upload className="w-8 h-8 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-foreground">Carregar Fotos</h3>
                  <p className="text-sm text-muted-foreground">
                    Arraste e solte suas fotos aqui ou clique para selecionar
                  </p>
                </div>
                <Button variant="outline">
                  Selecionar Arquivos
                </Button>
              </div>

              {/* Portfolio Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {portfolioImages.map((image, index) => (
                  <div key={index} className="relative group">
                    <div className="aspect-square bg-muted rounded-lg border border-border overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-muted-foreground" />
                      </div>
                    </div>
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6 p-0"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>

              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent w-full sm:w-auto">
                Salvar Portfólio
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}