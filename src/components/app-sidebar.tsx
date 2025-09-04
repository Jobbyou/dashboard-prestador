import { 
  Home, 
  User, 
  BarChart3, 
  CreditCard, 
  Settings, 
  LogOut,
  ChevronRight,
  Sparkles
} from "lucide-react"
import { Link, NavLink, useLocation } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const items = [
  { 
    title: "Início", 
    url: "/", 
    icon: Home,
    description: "Visão geral do painel"
  },
  { 
    title: "Meu Perfil Público", 
    url: "/perfil", 
    icon: User,
    description: "Gerencie seu perfil"
  },
  // { 
  //   title: "Analytics", 
  //   url: "/analytics", 
  //   icon: BarChart3,
  //   description: "Métricas e relatórios"
  // },
  { 
    title: "Minha Assinatura", 
    url: "/assinatura", 
    icon: CreditCard,
    description: "Planos e pagamentos"
  },
  { 
    title: "Configurações", 
    url: "/configuracoes", 
    icon: Settings,
    description: "Preferências do sistema"
  },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-72"} transition-all duration-300 ease-in-out`}
      collapsible="icon"
    >
      <SidebarContent className="bg-gradient-to-b from-sidebar to-sidebar/95 backdrop-blur-sm">
        {/* Logo Section - Modernized */}
        <div className={`border-b border-sidebar-border/50 ${collapsed ? 'p-3' : 'p-6'}`}>
          {!collapsed ? (
            <div className="flex flex-col items-center space-y-3">
              <div className="w-full max-w-32 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Jobbyou Logo" 
                  className="w-full h-16 object-contain"
                />
              </div>
              <div className="text-center">
                <p className="text-white/60 text-xs font-medium">Dashboard Prestador</p>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src="/logo.png" 
                  alt="Jobbyou Logo" 
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<span class="text-midnight-blue font-bold text-lg">J</span>';
                    }
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Navigation Section */}
        <SidebarGroup className={`flex-1 py-4 ${collapsed ? 'px-2' : 'px-4'}`}>
          <SidebarGroupLabel className={`text-white/60 text-xs uppercase tracking-wider font-semibold py-2 mb-2 ${collapsed ? 'px-2' : 'px-4'}`}>
            {!collapsed && (
              <div className="flex items-center space-x-2">
                <Sparkles className="w-3 h-3" />
                <span>Menu Principal</span>
              </div>
            )}
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => {
                const active = isActive(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      className={`h-12 rounded-xl transition-all duration-200 group ${
                        active 
                          ? "bg-gradient-to-r from-amber/20 to-safety-orange/20 text-amber border border-amber/30 shadow-lg" 
                          : "text-white/80 hover:text-amber hover:bg-white/5 hover:shadow-md"
                      }`}
                    >
                      <NavLink to={item.url} end>
                        {collapsed ? (
                          <div className="flex items-center justify-center w-full">
                            <item.icon className="w-5 h-5" />
                          </div>
                        ) : (
                          <div className="flex items-center w-full">
                            <div className={`p-2 rounded-lg transition-all duration-200 ${
                              active 
                                ? "bg-amber/20 text-amber" 
                                : "bg-white/10 text-white/70 group-hover:bg-amber/20 group-hover:text-amber"
                            }`}>
                              <item.icon className="w-5 h-5" />
                            </div>
                            <div className="ml-3 flex-1">
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-sm">{item.title}</span>
                                {active && <ChevronRight className="w-4 h-4 text-amber" />}
                              </div>
                              <p className="text-xs text-white/50 mt-0.5">{item.description}</p>
                            </div>
                          </div>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* User Section - Modernized */}
        <div className={`border-t border-sidebar-border/50 ${collapsed ? 'p-2' : 'p-4'}`}>
          <div className={`flex items-center rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 group cursor-pointer ${
            collapsed ? 'justify-center p-2' : 'space-x-3 p-3'
          }`}>
            <div className="w-8 h-8 bg-gradient-to-br from-amber to-safety-orange rounded-lg flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            {!collapsed && (
              <div className="flex-1">
                <p className="text-white font-medium text-sm">Usuário</p>
                <p className="text-white/60 text-xs">Prestador de Serviços</p>
              </div>
            )}
          </div>
        </div>

        {/* Logout Section - Modernized */}
        <div className={collapsed ? 'p-2' : 'p-4'}>
          <SidebarMenuButton className={`w-full h-12 rounded-xl text-white/80 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 group ${
            collapsed ? 'flex items-center justify-center' : ''
          }`}>
            {collapsed ? (
              <LogOut className="w-5 h-5" />
            ) : (
              <Link to="/login">
              <div className="flex items-center space-x-3">
               
                <div className="p-2 rounded-lg bg-white/10 group-hover:bg-red-500/20 transition-all duration-200">
                  <LogOut className="w-4 h-4" />
                </div>
                <span className="font-medium text-sm">Sair da Conta</span>
              </div>
                </Link>
            )}
          </SidebarMenuButton>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}