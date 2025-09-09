import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { 
  User, 
  Camera, 
  Plus, 
  X, 
  Upload, 
  MapPin, 
  Phone, 
  Briefcase,
  Image as ImageIcon,
  ChevronDown,
  ChevronRight
} from "lucide-react"
import { serviceCategories, type ServiceCategory, type ServiceSubcategory } from "@/data/services"

export default function Profile() {
  // Estado para serviços selecionados (agora usando IDs de string)
  const [selectedServices, setSelectedServices] = useState<string[]>(["eletricista", "encanador"]) // IDs dos serviços selecionados
  
  // Estado para controlar quais categorias estão abertas
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set(["domesticos-reparos", "beleza-estetica"]))

  const [portfolioImages] = useState([
    "/api/placeholder/300/200",
    "/api/placeholder/300/200", 
    "/api/placeholder/300/200",
    "/api/placeholder/300/200"
  ])

  // Função para alternar seleção de serviço
  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  // Função para alternar categoria aberta/fechada
  const toggleCategory = (categoryId: string) => {
    setOpenCategories(prev => {
      const newSet = new Set(prev)
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId)
      } else {
        newSet.add(categoryId)
      }
      return newSet
    })
  }

  // Função para obter todos os serviços de todas as categorias
  const getAllServices = () => {
    const allServices: Array<ServiceSubcategory & { categoryId: string; categoryName: string }> = []
    serviceCategories.forEach(category => {
      category.subcategories.forEach(subcategory => {
        allServices.push({
          ...subcategory,
          categoryId: category.id,
          categoryName: category.name
        })
      })
    })
    return allServices
  }

  // Função para obter serviços selecionados com informações completas
  const getSelectedServicesInfo = () => {
    const allServices = getAllServices()
    return selectedServices.map(serviceId => 
      allServices.find(service => service.id === serviceId)
    ).filter(Boolean)
  }

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
                Selecione os serviços que você oferece. Os valores serão negociados diretamente com os clientes via WhatsApp.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Resumo de Serviços Selecionados */}
              <div className="bg-muted/30 rounded-lg p-4 border border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Resumo dos Serviços
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {selectedServices.length} serviço{selectedServices.length !== 1 ? 's' : ''} selecionado{selectedServices.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  <Badge variant="outline" className="text-lg px-3 py-1">
                    {selectedServices.length}
                  </Badge>
                </div>
              </div>

              {/* Serviços Selecionados */}
              {selectedServices.length > 0 && (
                <div className="space-y-3">
                  <Label className="text-sm font-medium text-foreground">
                    Serviços Selecionados ({selectedServices.length})
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {getSelectedServicesInfo().map(service => {
                      if (!service) return null
                      const IconComponent = service.icon
                      return (
                        <Badge 
                          key={service.id} 
                          variant="secondary" 
                          className="flex items-center space-x-2 px-3 py-2 text-sm"
                        >
                          <IconComponent className="w-4 h-4" />
                          <span>{service.name}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-auto p-0 ml-1 hover:bg-destructive hover:text-destructive-foreground"
                            onClick={() => toggleService(service.id)}
                          >
                            <X className="w-3 h-3" />
                          </Button>
                        </Badge>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Lista de Serviços por Categoria com Dropdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {serviceCategories.map((category) => {
                  const CategoryIcon = category.icon
                  const isOpen = openCategories.has(category.id)
                  const selectedCount = category.subcategories.filter(sub => selectedServices.includes(sub.id)).length
                  
                  return (
                    <Collapsible 
                      key={category.id} 
                      open={isOpen} 
                      onOpenChange={() => toggleCategory(category.id)}
                      className="border border-border rounded-lg"
                    >
                      <CollapsibleTrigger className="w-full">
                        <div className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                              <CategoryIcon className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                              <h3 className="text-lg font-semibold text-foreground">
                                {category.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {selectedCount > 0 
                                  ? `${selectedCount} de ${category.subcategories.length} serviços selecionados`
                                  : `${category.subcategories.length} serviços disponíveis`
                                }
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {selectedCount > 0 && (
                              <Badge variant="secondary" className="text-xs">
                                {selectedCount}
                              </Badge>
                            )}
                            {isOpen ? (
                              <ChevronDown className="w-5 h-5 text-muted-foreground" />
                            ) : (
                              <ChevronRight className="w-5 h-5 text-muted-foreground" />
                            )}
                          </div>
                        </div>
                      </CollapsibleTrigger>
                      
                      <CollapsibleContent>
                        <div className="px-4 pb-4">
                          <div className="grid grid-cols-1 gap-3">
                            {category.subcategories.map((service) => {
                              const IconComponent = service.icon
                              const isSelected = selectedServices.includes(service.id)
                              return (
                                <div
                                  key={service.id}
                                  className={`border-2 rounded-lg p-3 cursor-pointer transition-all duration-200 hover:shadow-md ${
                                    isSelected 
                                      ? 'border-primary bg-primary/5 shadow-sm' 
                                      : 'border-border hover:border-primary/50'
                                  }`}
                                  onClick={() => toggleService(service.id)}
                                >
                                  <div className="flex items-center space-x-3">
                                    <div className={`p-2 rounded-lg ${
                                      isSelected ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                                    }`}>
                                      <IconComponent className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <h4 className="font-medium text-foreground text-sm truncate">
                                        {service.name}
                                      </h4>
                                    </div>
                                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                                      isSelected 
                                        ? 'border-primary bg-primary text-primary-foreground' 
                                        : 'border-border'
                                    }`}>
                                      {isSelected && <div className="w-1.5 h-1.5 bg-current rounded-full" />}
                                    </div>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  )
                })}
              </div>

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