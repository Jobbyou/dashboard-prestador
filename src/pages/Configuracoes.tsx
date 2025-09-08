import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { 
  User, 
  Bell, 
  Shield, 
  MapPin, 
  Clock, 
  Smartphone, 
  Mail, 
  Eye, 
  EyeOff,
  Save,
  AlertTriangle,
  CheckCircle,
  Info
} from "lucide-react"

export default function Configuracoes() {
  // Estados para as configurações
  const [dadosPessoais, setDadosPessoais] = useState({
    nome: "João Silva",
    email: "joao.silva@email.com",
    telefone: "(11) 98765-4321",
    cpf: "123.456.789-00"
  })

  const [notificacoes, setNotificacoes] = useState({
    whatsapp: true,
    email: true,
    sms: false,
    novosContatos: true,
    avaliacoes: true,
    lembretes: true
  })

  const [privacidade, setPrivacidade] = useState({
    perfilPublico: true,
    mostrarTelefone: true,
    mostrarEmail: false,
    mostrarLocalizacao: true,
    permitirAvaliacoes: true
  })

  const [localizacao, setLocalizacao] = useState({
    cidade: "São Paulo",
    estado: "SP",
    bairros: ["Centro", "Vila Madalena", "Pinheiros"],
    raioAtendimento: "10"
  })

  const [horarios, setHorarios] = useState({
    segunda: { ativo: true, inicio: "08:00", fim: "18:00" },
    terca: { ativo: true, inicio: "08:00", fim: "18:00" },
    quarta: { ativo: true, inicio: "08:00", fim: "18:00" },
    quinta: { ativo: true, inicio: "08:00", fim: "18:00" },
    sexta: { ativo: true, inicio: "08:00", fim: "18:00" },
    sabado: { ativo: true, inicio: "08:00", fim: "14:00" },
    domingo: { ativo: false, inicio: "08:00", fim: "18:00" }
  })

  const [mostrarSenha, setMostrarSenha] = useState(false)
  const [novaSenha, setNovaSenha] = useState("")
  const [confirmarSenha, setConfirmarSenha] = useState("")

  const diasSemana = [
    { key: 'segunda', label: 'Segunda-feira' },
    { key: 'terca', label: 'Terça-feira' },
    { key: 'quarta', label: 'Quarta-feira' },
    { key: 'quinta', label: 'Quinta-feira' },
    { key: 'sexta', label: 'Sexta-feira' },
    { key: 'sabado', label: 'Sábado' },
    { key: 'domingo', label: 'Domingo' }
  ]

  const handleSalvarDadosPessoais = () => {
    // Aqui seria a lógica para salvar no backend
    console.log("Salvando dados pessoais:", dadosPessoais)
  }

  const handleSalvarNotificacoes = () => {
    console.log("Salvando notificações:", notificacoes)
  }

  const handleSalvarPrivacidade = () => {
    console.log("Salvando privacidade:", privacidade)
  }

  const handleSalvarLocalizacao = () => {
    console.log("Salvando localização:", localizacao)
  }

  const handleSalvarHorarios = () => {
    console.log("Salvando horários:", horarios)
  }

  const handleAlterarSenha = () => {
    if (novaSenha !== confirmarSenha) {
      alert("As senhas não coincidem!")
      return
    }
    console.log("Alterando senha...")
  }

  return (
    <div className="p-4 sm:p-6 lg:p-12 space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
          Configurações
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg">
          Gerencie suas preferências e configurações da conta
        </p>
      </div>

      <Tabs defaultValue="conta" className="space-y-4 sm:space-y-6">
        <TabsList className="grid w-full grid-cols-5 bg-muted h-auto">
          <TabsTrigger value="conta" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm py-2">
            Conta
          </TabsTrigger>
          <TabsTrigger value="notificacoes" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm py-2">
            Notificações
          </TabsTrigger>
          <TabsTrigger value="privacidade" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm py-2">
            Privacidade
          </TabsTrigger>
          <TabsTrigger value="localizacao" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm py-2">
            Localização
          </TabsTrigger>
          {/* <TabsTrigger value="horarios" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-xs sm:text-sm py-2">
            Horários
          </TabsTrigger> */}
        </TabsList>

        {/* Aba Conta */}
        <TabsContent value="conta" className="space-y-6">
          {/* Dados Pessoais */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5 text-primary" />
                <span>Dados Pessoais</span>
              </CardTitle>
              <CardDescription>
                Atualize suas informações pessoais e de contato
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input 
                    id="nome" 
                    value={dadosPessoais.nome}
                    onChange={(e) => setDadosPessoais(prev => ({ ...prev, nome: e.target.value }))}
                    className="border-border focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={dadosPessoais.email}
                    onChange={(e) => setDadosPessoais(prev => ({ ...prev, email: e.target.value }))}
                    className="border-border focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone" className="flex items-center space-x-1">
                    <Smartphone className="w-4 h-4" />
                    <span>Telefone</span>
                  </Label>
                  <Input 
                    id="telefone" 
                    value={dadosPessoais.telefone}
                    onChange={(e) => setDadosPessoais(prev => ({ ...prev, telefone: e.target.value }))}
                    className="border-border focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cpf">CPF</Label>
                  <Input 
                    id="cpf" 
                    value={dadosPessoais.cpf}
                    onChange={(e) => setDadosPessoais(prev => ({ ...prev, cpf: e.target.value }))}
                    className="border-border focus:ring-primary"
                  />
                </div>
              </div>

              <Button 
                onClick={handleSalvarDadosPessoais}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent w-full sm:w-auto"
              >
                <Save className="w-4 h-4 mr-2" />
                Salvar Dados Pessoais
              </Button>
            </CardContent>
          </Card>

          {/* Segurança */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Segurança</span>
              </CardTitle>
              <CardDescription>
                Gerencie a segurança da sua conta
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="novaSenha">Nova Senha</Label>
                  <div className="relative">
                    <Input 
                      id="novaSenha" 
                      type={mostrarSenha ? "text" : "password"}
                      value={novaSenha}
                      onChange={(e) => setNovaSenha(e.target.value)}
                      className="border-border focus:ring-primary pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setMostrarSenha(!mostrarSenha)}
                    >
                      {mostrarSenha ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmarSenha">Confirmar Nova Senha</Label>
                  <Input 
                    id="confirmarSenha" 
                    type="password"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    className="border-border focus:ring-primary"
                  />
                </div>
              </div>

              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  Sua senha deve ter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas e números.
                </AlertDescription>
              </Alert>

              <Button 
                onClick={handleAlterarSenha}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent w-full sm:w-auto"
              >
                <Shield className="w-4 h-4 mr-2" />
                Alterar Senha
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba Notificações */}
        <TabsContent value="notificacoes" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="w-5 h-5 text-primary" />
                <span>Preferências de Notificação</span>
              </CardTitle>
              <CardDescription>
                Configure como você deseja receber notificações
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Canais de Notificação */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Canais de Notificação</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Smartphone className="w-4 h-4 text-green-600" />
                        <Label htmlFor="whatsapp">WhatsApp</Label>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Receber notificações via WhatsApp
                      </p>
                    </div>
                    <Switch
                      id="whatsapp"
                      checked={notificacoes.whatsapp}
                      onCheckedChange={(checked) => 
                        setNotificacoes(prev => ({ ...prev, whatsapp: checked }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-blue-600" />
                        <Label htmlFor="email">E-mail</Label>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Receber notificações por e-mail
                      </p>
                    </div>
                    <Switch
                      id="email"
                      checked={notificacoes.email}
                      onCheckedChange={(checked) => 
                        setNotificacoes(prev => ({ ...prev, email: checked }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <Smartphone className="w-4 h-4 text-gray-600" />
                        <Label htmlFor="sms">SMS</Label>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Receber notificações por SMS
                      </p>
                    </div>
                    <Switch
                      id="sms"
                      checked={notificacoes.sms}
                      onCheckedChange={(checked) => 
                        setNotificacoes(prev => ({ ...prev, sms: checked }))
                      }
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Tipos de Notificação */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Tipos de Notificação</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="novosContatos">Novos Contatos</Label>
                      <p className="text-sm text-muted-foreground">
                        Notificar quando receber novos contatos via WhatsApp
                      </p>
                    </div>
                    <Switch
                      id="novosContatos"
                      checked={notificacoes.novosContatos}
                      onCheckedChange={(checked) => 
                        setNotificacoes(prev => ({ ...prev, novosContatos: checked }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="avaliacoes">Avaliações</Label>
                      <p className="text-sm text-muted-foreground">
                        Notificar quando receber novas avaliações
                      </p>
                    </div>
                    <Switch
                      id="avaliacoes"
                      checked={notificacoes.avaliacoes}
                      onCheckedChange={(checked) => 
                        setNotificacoes(prev => ({ ...prev, avaliacoes: checked }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label htmlFor="lembretes">Lembretes</Label>
                      <p className="text-sm text-muted-foreground">
                        Receber lembretes sobre atualizações do perfil
                      </p>
                    </div>
                    <Switch
                      id="lembretes"
                      checked={notificacoes.lembretes}
                      onCheckedChange={(checked) => 
                        setNotificacoes(prev => ({ ...prev, lembretes: checked }))
                      }
                    />
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleSalvarNotificacoes}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent w-full sm:w-auto"
              >
                <Save className="w-4 h-4 mr-2" />
                Salvar Notificações
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba Privacidade */}
        <TabsContent value="privacidade" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Configurações de Privacidade</span>
              </CardTitle>
              <CardDescription>
                Controle a visibilidade das suas informações
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="perfilPublico">Perfil Público</Label>
                    <p className="text-sm text-muted-foreground">
                      Tornar seu perfil visível para clientes
                    </p>
                  </div>
                  <Switch
                    id="perfilPublico"
                    checked={privacidade.perfilPublico}
                    onCheckedChange={(checked) => 
                      setPrivacidade(prev => ({ ...prev, perfilPublico: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="mostrarTelefone">Mostrar Telefone</Label>
                    <p className="text-sm text-muted-foreground">
                      Exibir número de telefone no perfil público
                    </p>
                  </div>
                  <Switch
                    id="mostrarTelefone"
                    checked={privacidade.mostrarTelefone}
                    onCheckedChange={(checked) => 
                      setPrivacidade(prev => ({ ...prev, mostrarTelefone: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="mostrarEmail">Mostrar E-mail</Label>
                    <p className="text-sm text-muted-foreground">
                      Exibir e-mail no perfil público
                    </p>
                  </div>
                  <Switch
                    id="mostrarEmail"
                    checked={privacidade.mostrarEmail}
                    onCheckedChange={(checked) => 
                      setPrivacidade(prev => ({ ...prev, mostrarEmail: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="mostrarLocalizacao">Mostrar Localização</Label>
                    <p className="text-sm text-muted-foreground">
                      Exibir cidade e bairros de atendimento
                    </p>
                  </div>
                  <Switch
                    id="mostrarLocalizacao"
                    checked={privacidade.mostrarLocalizacao}
                    onCheckedChange={(checked) => 
                      setPrivacidade(prev => ({ ...prev, mostrarLocalizacao: checked }))
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="permitirAvaliacoes">Permitir Avaliações</Label>
                    <p className="text-sm text-muted-foreground">
                      Permitir que clientes avaliem seus serviços
                    </p>
                  </div>
                  <Switch
                    id="permitirAvaliacoes"
                    checked={privacidade.permitirAvaliacoes}
                    onCheckedChange={(checked) => 
                      setPrivacidade(prev => ({ ...prev, permitirAvaliacoes: checked }))
                    }
                  />
                </div>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  As configurações de privacidade afetam como seu perfil aparece para clientes em potencial.
                </AlertDescription>
              </Alert>

              <Button 
                onClick={handleSalvarPrivacidade}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent w-full sm:w-auto"
              >
                <Save className="w-4 h-4 mr-2" />
                Salvar Privacidade
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba Localização */}
        <TabsContent value="localizacao" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Área de Atendimento</span>
              </CardTitle>
              <CardDescription>
                Configure onde você atende seus clientes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cidade">Cidade</Label>
                  <Input 
                    id="cidade" 
                    value={localizacao.cidade}
                    onChange={(e) => setLocalizacao(prev => ({ ...prev, cidade: e.target.value }))}
                    className="border-border focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="estado">Estado</Label>
                  <Select 
                    value={localizacao.estado}
                    onValueChange={(value) => setLocalizacao(prev => ({ ...prev, estado: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SP">São Paulo</SelectItem>
                      <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                      <SelectItem value="MG">Minas Gerais</SelectItem>
                      <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                      <SelectItem value="PR">Paraná</SelectItem>
                      <SelectItem value="SC">Santa Catarina</SelectItem>
                      <SelectItem value="BA">Bahia</SelectItem>
                      <SelectItem value="GO">Goiás</SelectItem>
                      <SelectItem value="PE">Pernambuco</SelectItem>
                      <SelectItem value="CE">Ceará</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="raioAtendimento">Raio de Atendimento (km)</Label>
                <Select 
                  value={localizacao.raioAtendimento}
                  onValueChange={(value) => setLocalizacao(prev => ({ ...prev, raioAtendimento: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o raio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 km</SelectItem>
                    <SelectItem value="10">10 km</SelectItem>
                    <SelectItem value="15">15 km</SelectItem>
                    <SelectItem value="20">20 km</SelectItem>
                    <SelectItem value="30">30 km</SelectItem>
                    <SelectItem value="50">50 km</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Bairros de Atendimento</Label>
                <div className="flex flex-wrap gap-2">
                  {localizacao.bairros.map((bairro, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {bairro}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  Os bairros são definidos automaticamente baseados no seu raio de atendimento.
                </p>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Clientes dentro do seu raio de atendimento poderão encontrar seu perfil nas buscas.
                </AlertDescription>
              </Alert>

              <Button 
                onClick={handleSalvarLocalizacao}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent w-full sm:w-auto"
              >
                <Save className="w-4 h-4 mr-2" />
                Salvar Localização
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba Horários */}
        <TabsContent value="horarios" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span>Horários de Atendimento</span>
              </CardTitle>
              <CardDescription>
                Configure seus horários de disponibilidade
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {diasSemana.map((dia) => {
                  const diaData = horarios[dia.key as keyof typeof horarios]
                  return (
                    <div key={dia.key} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Switch
                          checked={diaData.ativo}
                          onCheckedChange={(checked) => 
                            setHorarios(prev => ({
                              ...prev,
                              [dia.key]: { ...prev[dia.key as keyof typeof prev], ativo: checked }
                            }))
                          }
                        />
                        <Label className="font-medium">{dia.label}</Label>
                      </div>
                      
                      {diaData.ativo && (
                        <div className="flex items-center space-x-2">
                          <Input
                            type="time"
                            value={diaData.inicio}
                            onChange={(e) => 
                              setHorarios(prev => ({
                                ...prev,
                                [dia.key]: { ...prev[dia.key as keyof typeof prev], inicio: e.target.value }
                              }))
                            }
                            className="w-32"
                          />
                          <span className="text-muted-foreground">até</span>
                          <Input
                            type="time"
                            value={diaData.fim}
                            onChange={(e) => 
                              setHorarios(prev => ({
                                ...prev,
                                [dia.key]: { ...prev[dia.key as keyof typeof prev], fim: e.target.value }
                              }))
                            }
                            className="w-32"
                          />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  Seus horários de atendimento serão exibidos no seu perfil público para que os clientes saibam quando você está disponível.
                </AlertDescription>
              </Alert>

              <Button 
                onClick={handleSalvarHorarios}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent w-full sm:w-auto"
              >
                <Save className="w-4 h-4 mr-2" />
                Salvar Horários
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
