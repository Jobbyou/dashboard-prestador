import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Analytics from "./pages/Analytics";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import MinhaAssinatura from "./pages/MinhaAssinatura";
import Configuracoes from "./pages/Configuracoes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Rotas de autenticação sem sidebar */}
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          
          {/* Rotas com sidebar */}
          <Route path="/*" element={
            <SidebarProvider>
              <div className="min-h-screen flex w-full">
                <AppSidebar />
                <div className="flex-1 flex flex-col">
                  <header className="h-16 border-b border-border bg-background flex items-center px-4 sm:px-6 lg:px-12">
                    <SidebarTrigger className="mr-4" />
                    <div className="flex-1">
                      <span className="text-base sm:text-lg font-semibold text-foreground">Painel do Prestador</span>
                    </div>

                    <div className="flex items-center space-x-2">
                     <img src="/coruja.png" alt="Jobbyou Coruja" width={32} height={32} />
                    </div>
                  </header>
                  <main className="flex-1 overflow-auto bg-background">
                    <div className="min-h-full">
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/perfil" element={<Profile />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="/assinatura" element={<MinhaAssinatura />} />
                        <Route path="/configuracoes" element={<Configuracoes />} />
                        <Route path="*" element={<NotFound />} />
                        
                      </Routes>
                    </div>
                  </main>
                </div>
              </div>
            </SidebarProvider>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
