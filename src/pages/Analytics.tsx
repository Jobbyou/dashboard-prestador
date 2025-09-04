import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { 
  BarChart3, 
  Calendar, 
  Eye, 
  MessageCircle, 
  Search, 
  TrendingUp,
  Users
} from "lucide-react"

export default function Analytics() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            Analytics
          </h1>
          <p className="text-muted-foreground text-lg">
            Acompanhe o desempenho do seu perfil e entenda como os clientes te encontram
          </p>
        </div>

        {/* Period Filter */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Período:</span>
          </div>
          <Select defaultValue="30d">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Últimos 7 dias</SelectItem>
              <SelectItem value="30d">Últimos 30 dias</SelectItem>
              <SelectItem value="90d">Últimos 90 dias</SelectItem>
              <SelectItem value="1y">Último ano</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Chart */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            <span>Visualizações vs. Contatos</span>
          </CardTitle>
          <CardDescription>
            Compare as visualizações do seu perfil com os contatos recebidos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border-2 border-dashed border-border">
            <div className="text-center space-y-2">
              <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto" />
              <h3 className="font-medium text-foreground">Gráfico de Visualizações vs. Contatos</h3>
              <p className="text-sm text-muted-foreground max-w-md">
                Visualize a correlação entre as visualizações do seu perfil e os contatos recebidos ao longo do tempo
              </p>
              <div className="flex items-center justify-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Visualizações</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-safety-orange rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Contatos</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Secondary Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Origin Chart */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-accent" />
              <span>Origem das Visualizações</span>
            </CardTitle>
            <CardDescription>
              De onde vêm seus visitantes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Pie Chart Placeholder */}
              <div className="h-40 flex items-center justify-center bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg">
                <div className="w-32 h-32 border-8 border-accent border-t-primary rounded-full"></div>
              </div>
              
              {/* Legend */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-sm">Busca Direta</span>
                  </div>
                  <Badge variant="secondary">45%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <span className="text-sm">Categorias</span>
                  </div>
                  <Badge variant="secondary">35%</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-safety-orange rounded-full"></div>
                    <span className="text-sm">Outros</span>
                  </div>
                  <Badge variant="secondary">20%</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Performance Summary */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-success" />
              <span>Resumo de Performance</span>
            </CardTitle>
            <CardDescription>
              Principais métricas do período
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center space-x-3">
                <Eye className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Total de Visualizações</p>
                  <p className="text-sm text-muted-foreground">Perfil visto por clientes</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">1,234</p>
                <p className="text-xs text-success">+12% ↗</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-accent" />
                <div>
                  <p className="font-medium text-foreground">Taxa de Conversão</p>
                  <p className="text-sm text-muted-foreground">Visualizações → Contatos</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-accent">2.3%</p>
                <p className="text-xs text-success">+0.4% ↗</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center space-x-3">
                <Search className="w-5 h-5 text-safety-orange" />
                <div>
                  <p className="font-medium text-foreground">Posição Média</p>
                  <p className="text-sm text-muted-foreground">Ranking em buscas</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold" style={{color: 'hsl(var(--safety-orange))'}}>3.2</p>
                <p className="text-xs text-success">-0.8 ↗</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search Terms Table */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="w-5 h-5 text-primary" />
            <span>Termos Mais Buscados</span>
          </CardTitle>
          <CardDescription>
            Palavras-chave que trouxeram clientes ao seu perfil
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-foreground">Termo de Busca</th>
                  <th className="text-left py-3 px-4 font-medium text-foreground">Visualizações</th>
                  <th className="text-left py-3 px-4 font-medium text-foreground">Contatos</th>
                  <th className="text-left py-3 px-4 font-medium text-foreground">Taxa de Conversão</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted/50">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-accent/10 border-accent text-accent-foreground">
                        eletricista
                      </Badge>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-foreground">456</td>
                  <td className="py-3 px-4 text-foreground">12</td>
                  <td className="py-3 px-4">
                    <Badge className="bg-success/10 text-success border-success">2.6%</Badge>
                  </td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-primary/10 border-primary text-primary-foreground">
                        instalação elétrica
                      </Badge>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-foreground">234</td>
                  <td className="py-3 px-4 text-foreground">8</td>
                  <td className="py-3 px-4">
                    <Badge className="bg-success/10 text-success border-success">3.4%</Badge>
                  </td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-safety-orange/10 border-safety-orange" style={{color: 'hsl(var(--safety-orange))'}}>
                        eletricista são paulo
                      </Badge>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-foreground">189</td>
                  <td className="py-3 px-4 text-foreground">5</td>
                  <td className="py-3 px-4">
                    <Badge className="bg-success/10 text-success border-success">2.6%</Badge>
                  </td>
                </tr>
                <tr className="hover:bg-muted/50">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="bg-muted border-border text-muted-foreground">
                        manutenção elétrica
                      </Badge>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-foreground">167</td>
                  <td className="py-3 px-4 text-foreground">3</td>
                  <td className="py-3 px-4">
                    <Badge variant="outline" className="text-muted-foreground">1.8%</Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}