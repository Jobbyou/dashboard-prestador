import { 
  Home, 
  User, 
  BarChart3, 
  CreditCard, 
  Settings, 
  LogOut 
} from "lucide-react"
import { NavLink, useLocation } from "react-router-dom"

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
  { title: "Início", url: "/", icon: Home },
  { title: "Meu Perfil Público", url: "/perfil", icon: User },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Minha Assinatura", url: "/assinatura", icon: CreditCard },
  { title: "Configurações", url: "/configuracoes", icon: Settings },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-sidebar-accent text-amber font-medium" 
      : "text-white hover:text-amber"

  return (
    <Sidebar
      className={collapsed ? "w-14" : "w-64"}
      collapsible="icon"
    >
      <SidebarContent className="bg-sidebar">
        {/* Logo Section */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center space-x-2">
            {!collapsed && (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
                  <span className="text-sidebar-primary-foreground font-bold text-sm">J</span>
                </div>
                <span className="text-white font-semibold text-lg">Jobbyou</span>
              </div>
            )}
            {collapsed && (
              <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center mx-auto">
                <span className="text-sidebar-primary-foreground font-bold text-sm">J</span>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup className="flex-1">
          <SidebarGroupLabel className="text-white/70 text-xs uppercase tracking-wide font-medium px-3 py-2">
            {!collapsed && "Menu Principal"}
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-11">
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavCls}
                    >
                      <item.icon className="w-5 h-5" />
                      {!collapsed && (
                        <span className="ml-3 font-medium">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Logout Section */}
        <div className="p-3 border-t border-sidebar-border">
          <SidebarMenuButton className="w-full h-11 text-white hover:text-amber">
            <LogOut className="w-5 h-5" />
            {!collapsed && <span className="ml-3 font-medium">Sair</span>}
          </SidebarMenuButton>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}