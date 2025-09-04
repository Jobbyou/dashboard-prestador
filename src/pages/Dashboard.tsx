import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  Eye, 
  Search, 
  Mail, 
  Star, 
  TrendingUp, 
  User, 
  MessageCircle 
} from "lucide-react"

export default function Dashboard() {
  return (
    <div className="p-12 space-y-8">
      {/* Welcome Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">
          Olá, João Silva!
        </h1>
        <p className="text-muted-foreground text-lg">
          Bem-vindo ao seu painel de controle. Vamos impulsionar seu negócio hoje?
        </p>
      </div>

      {/* Profile Strength Card */}
      <Card className="shadow-card border-l-4 border-l-accent">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <User className="w-5 h-5 text-accent" />
            <span>Força do Perfil</span>
          </CardTitle>
          <CardDescription>
            Complete seu perfil para atrair mais clientes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Progresso</span>
              <span className="text-sm text-muted-foreground">75%</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium shadow-accent">
            Melhorar meu Perfil
          </Button>
        </CardContent>
      </Card>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Visualizações do Perfil
            </CardTitle>
            <Eye className="w-4 h-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">1,234</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +12% nos últimos 30 dias
              </span>
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Aparições em Buscas
            </CardTitle>
            <Search className="w-4 h-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">456</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +8% nos últimos 30 dias
              </span>
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Contatos via WhatsApp
            </CardTitle>
            <MessageCircle className="w-4 h-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">42</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-success flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +23% nos últimos 30 dias
              </span>
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Grid - Reviews and WhatsApp Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Reviews */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-accent" />
              <span>Últimas Avaliações</span>
            </CardTitle>
            <CardDescription>
              O que seus clientes estão dizendo sobre você
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Review 1 */}
            <div className="border-l-2 border-l-accent pl-4 space-y-2">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                ))}
                <Badge variant="secondary" className="ml-2">5.0</Badge>
              </div>
              <p className="text-sm text-foreground">
                "Excelente profissional! Muito pontual e trabalho de qualidade."
              </p>
              <p className="text-xs text-muted-foreground">Maria Santos - há 2 dias</p>
            </div>

            {/* Review 2 */}
            <div className="border-l-2 border-l-accent pl-4 space-y-2">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                ))}
                <Badge variant="secondary" className="ml-2">5.0</Badge>
              </div>
              <p className="text-sm text-foreground">
                "Recomendo! Serviço impecável e preço justo."
              </p>
              <p className="text-xs text-muted-foreground">Carlos Lima - há 1 semana</p>
            </div>
          </CardContent>
        </Card>

        {/* WhatsApp Activity */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 text-success" />
              <span>Atividade WhatsApp</span>
            </CardTitle>
            <CardDescription>
              Últimos contatos recebidos via WhatsApp
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* WhatsApp Contact 1 */}
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Ana Costa</h4>
                  <p className="text-xs text-muted-foreground">Interessada em instalação elétrica</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">2h atrás</span>
            </div>

            {/* WhatsApp Contact 2 */}
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Roberto Silva</h4>
                  <p className="text-xs text-muted-foreground">Precisa de manutenção elétrica</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">1 dia atrás</span>
            </div>

            {/* WhatsApp Contact 3 */}
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Carla Mendes</h4>
                  <p className="text-xs text-muted-foreground">Orçamento para projeto residencial</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">3 dias atrás</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}