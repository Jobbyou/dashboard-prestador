import { 
  Home, 
  Scissors, 
  Heart, 
  Sparkles, 
  GraduationCap, 
  Camera, 
  Shirt, 
  Truck, 
  Car, 
  Laptop, 
  Dog, 
  Star, 
  Gamepad2, 
  Briefcase, 
  Palette, 
  Users,
  Zap,
  Hammer,
  Wrench,
  Paintbrush,
  TreePine,
  Shield,
  Smartphone,
  Key,
  Droplets,
  Wind,
  Utensils,
  Baby,
  Music,
  Video,
  Mic,
  Guitar,
  SquarePilcrowIcon,
  Ruler,
  Scissors as ScissorsIcon,
  Shirt as ShirtIcon,
  Car as CarIcon,
  Wrench as WrenchIcon,
  Paintbrush as PaintbrushIcon,
  Droplets as DropletsIcon,
  Laptop as LaptopIcon,
  Code,
  Monitor,
  Edit3,
  Share2,
  Target,
  Home as HomeIcon,
  Dog as DogIcon,
  Stethoscope,
  Bath,
  Sparkles as SparklesIcon,
  Star as StarIcon,
  Gamepad2 as Gamepad2Icon,
  MapPin,
  Trophy,
  Calculator,
  Scale,
  TrendingUp,
  FileText,
  Globe,
  User,
  BarChart3,
  Megaphone,
  Palette as PaletteIcon,
  Brush,
  Image,
  Shirt as ShirtIcon2,
  Users as UsersIcon,
  Mic as MicIcon,
  Camera as CameraIcon,
  Video as VideoIcon,
  Clapperboard
} from "lucide-react"

export interface ServiceSubcategory {
  id: string
  name: string
  icon: any
}

export interface ServiceCategory {
  id: string
  name: string
  icon: any
  subcategories: ServiceSubcategory[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "artesanato-criativos",
    name: "Artesanato e Criativos",
    icon: Palette,
    subcategories: [
      { id: "artesao", name: "Artesão", icon: PaletteIcon },
      { id: "criador-conteudo", name: "Criador de Conteúdo", icon: Image },
      { id: "customizacao-roupas", name: "Customização de Roupas", icon: ShirtIcon2 },
      { id: "ilustrador", name: "Ilustrador", icon: Brush },
      { id: "pintor-artistico", name: "Pintor Artístico", icon: Paintbrush }
    ]
  },
  {
    id: "aulas-reforco",
    name: "Aulas e reforço",
    icon: GraduationCap,
    subcategories: [
      { id: "aulas-danca", name: "Aulas de dança", icon: Users },
      { id: "aulas-idiomas", name: "Aulas de idiomas", icon: Globe },
      { id: "aulas-informatica", name: "Aulas de informática", icon: Laptop },
      { id: "aulas-musica", name: "Aulas de música (violão, piano, canto, etc.)", icon: Music },
      { id: "aulas-particulares", name: "Aulas particulares (matemática, física, etc.)", icon: Calculator },
      { id: "preparatorio-concursos", name: "Preparatório para concursos/vestibular", icon: GraduationCap },
      { id: "reforco-escolar", name: "Reforço escolar", icon: GraduationCap }
    ]
  },
  {
    id: "automotivos",
    name: "Serviços Automotivos",
    icon: Car,
    subcategories: [
      { id: "chaveiro-auto", name: "Chaveiro", icon: Key },
      { id: "funileiro", name: "Funileiro", icon: PaintbrushIcon },
      { id: "instalador-som", name: "Instalador de Som e Acessórios", icon: Music },
      { id: "lava-jato", name: "Lava Jato", icon: DropletsIcon },
      { id: "lavador-carros", name: "Lavador de Carros a Domicílio", icon: DropletsIcon },
      { id: "martelinho-ouro", name: "Martelinho de Ouro", icon: Hammer },
      { id: "mecanico", name: "Mecânico", icon: WrenchIcon },
      { id: "oficina-mecanica", name: "Oficina Mecânica", icon: CarIcon }
    ]
  },
  {
    id: "beleza-estetica",
    name: "Beleza e Estética",
    icon: Scissors,
    subcategories: [
      { id: "barbearia", name: "Barbearia", icon: Scissors },
      { id: "barbeiro", name: "Barbeiro", icon: Scissors },
      { id: "cabeleireiro", name: "Cabeleireiro(a)", icon: Scissors },
      { id: "depilador", name: "Depilador(a)", icon: Sparkles },
      { id: "designer-sobrancelhas", name: "Designer de Sobrancelhas", icon: Sparkles },
      { id: "esteticista", name: "Esteticista", icon: Sparkles },
      { id: "maquiador", name: "Maquiador(a)", icon: Sparkles },
      { id: "manicure-pedicure", name: "Manicure e Pedicure", icon: Sparkles },
      { id: "massoterapeuta", name: "Massoterapeuta / Massagista", icon: Heart },
      { id: "personal-stylist", name: "Personal Stylist", icon: Shirt }
    ]
  },
  {
    id: "consultoria-profissionais",
    name: "Consultoria e Serviços Profissionais",
    icon: Briefcase,
    subcategories: [
      { id: "admin-redes-sociais", name: "Administrador de Redes Sociais", icon: Share2 },
      { id: "advogado", name: "Advogado", icon: Scale },
      { id: "coach-carreira", name: "Coach de Carreira", icon: User },
      { id: "consultor-marketing", name: "Consultor de Marketing", icon: TrendingUp },
      { id: "consultor-rh", name: "Consultor de RH", icon: Users },
      { id: "contador", name: "Contador", icon: Calculator },
      { id: "corretor-imoveis", name: "Corretor de imóveis", icon: Home },
      { id: "gestor-trafego", name: "Gestor de Tráfego Pago", icon: BarChart3 },
      { id: "redator", name: "Redator / Copywriter", icon: FileText },
      { id: "tradutor", name: "Tradutor", icon: Globe }
    ]
  },
  {
    id: "domesticos-reparos",
    name: "Serviços Domésticos e Reparos",
    icon: Home,
    subcategories: [
      { id: "chaveiro", name: "Chaveiro", icon: Key },
      { id: "desentupidor", name: "Desentupidor", icon: Droplets },
      { id: "eletricista", name: "Eletricista", icon: Zap },
      { id: "gesseiro", name: "Gesseiro", icon: Paintbrush },
      { id: "impermeabilizador", name: "Impermeabilizador", icon: Droplets },
      { id: "jardineiro", name: "Jardineiro", icon: TreePine },
      { id: "marceneiro", name: "Marceneiro", icon: Hammer },
      { id: "montador-moveis", name: "Montador de móveis", icon: Hammer },
      { id: "pedreiro", name: "Pedreiro", icon: Hammer },
      { id: "pintor", name: "Pintor", icon: Paintbrush },
      { id: "serralheiro", name: "Serralheiro", icon: Hammer },
      { id: "tecnico-ar-condicionado", name: "Técnico em ar-condicionado", icon: Wind },
      { id: "tecnico-eletronicos", name: "Técnico em eletrônicos", icon: Smartphone },
      { id: "vidraceiro", name: "Vidraceiro", icon: Shield },
      { id: "encanador", name: "Encanador", icon: Wrench }
    ]
  },
  {
    id: "espiritualidade-terapias",
    name: "Espiritualidade e Terapias Alternativas",
    icon: Star,
    subcategories: [
      { id: "astrologo", name: "Astrólogo", icon: StarIcon },
      { id: "constelador", name: "Constelador(a) Familiar", icon: UsersIcon },
      { id: "numerologo", name: "Numerólogo", icon: Calculator },
      { id: "reikiano", name: "Reikiano(a)", icon: SparklesIcon },
      { id: "tarologo", name: "Tarólogo", icon: StarIcon },
      { id: "terapeuta-holistico", name: "Terapeuta Holístico", icon: Heart }
    ]
  },
  {
    id: "eventos-producao",
    name: "Eventos e Produção",
    icon: Camera,
    subcategories: [
      { id: "bartender", name: "Bartender / Barman", icon: Utensils },
      { id: "cantor", name: "Cantor(a)", icon: Mic },
      { id: "cerimonialista", name: "Cerimonialista", icon: Mic },
      { id: "decorador-festas", name: "Decorador(a) de Festas", icon: Sparkles },
      { id: "dj", name: "DJ", icon: Music },
      { id: "fotografo", name: "Fotógrafo(a)", icon: Camera },
      { id: "garcom", name: "Garçom / Garçonete", icon: User },
      { id: "mestre-cerimonias", name: "Mestre de Cerimônias", icon: Mic },
      { id: "musico-banda", name: "Músico / Banda", icon: Guitar },
      { id: "recepcionista", name: "Recepcionista", icon: User },
      { id: "videomaker", name: "Videomaker / Filmagem", icon: Video }
    ]
  },
  {
    id: "influencer-comunicacao",
    name: "Influencer e Comunicação",
    icon: Users,
    subcategories: [
      { id: "apresentador", name: "Apresentador(a)", icon: Mic },
      { id: "ator-atriz", name: "Ator/atriz", icon: Clapperboard },
      { id: "criador-conteudo-digital", name: "Criador de Conteúdo Digital", icon: CameraIcon },
      { id: "influencer", name: "Influencer", icon: UsersIcon }
    ]
  },
  {
    id: "infantil-educacional",
    name: "Infantil e Educacional",
    icon: GraduationCap,
    subcategories: [
      { id: "baba", name: "Babá", icon: Baby },
      { id: "fonoaudiologo", name: "Fonoaudiólogo(a)", icon: Mic },
      { id: "professor-particular", name: "Professor(a) Particular", icon: GraduationCap },
      { id: "psicopedagogo", name: "Psicopedagogo(a)", icon: GraduationCap },
      { id: "recreador", name: "Recreador(a)", icon: Gamepad2 }
    ]
  },
  {
    id: "lazer-diversao",
    name: "Lazer e Diversão",
    icon: Gamepad2,
    subcategories: [
      { id: "aluguel-brinquedos", name: "Aluguel de Brinquedos", icon: Gamepad2Icon },
      { id: "aluguel-karaoke", name: "Aluguel de Karaokê", icon: Mic },
      { id: "escola-futebol", name: "Escola de Futebol", icon: Trophy },
      { id: "guia-turismo", name: "Guia de Turismo", icon: MapPin },
      { id: "professor-esportes", name: "Professor(a) de Esportes", icon: Trophy },
      { id: "show-magica", name: "Show de Mágica", icon: Sparkles }
    ]
  },
  {
    id: "limpeza-conservacao",
    name: "Limpeza e Conservação",
    icon: Sparkles,
    subcategories: [
      { id: "controle-pragas", name: "Controle de Pragas", icon: Shield },
      { id: "diarista-faxineira", name: "Diarista / Faxineira", icon: Sparkles },
      { id: "limpeza-estofados", name: "Limpeza de Estofados", icon: Sparkles },
      { id: "limpeza-pos-obra", name: "Limpeza Pós-Obra", icon: Sparkles },
      { id: "limpeza-vidros", name: "Limpeza de Vidros", icon: Sparkles },
      { id: "passadeira", name: "Passadeira", icon: Sparkles },
      { id: "zelador-caseiro", name: "Zelador / Caseiro", icon: Home }
    ]
  },
  {
    id: "logisticos-transportes",
    name: "Serviços Logísticos e Transportes",
    icon: Truck,
    subcategories: [
      { id: "frete-mudancas", name: "Frete / Mudanças", icon: Truck },
      { id: "motoboy", name: "Motoboy / Entregador", icon: CarIcon },
      { id: "motorista-particular", name: "Motorista Particular", icon: CarIcon },
      { id: "transporte-escolar", name: "Transporte Escolar", icon: CarIcon },
      { id: "transporte-executivo", name: "Transporte Executivo", icon: CarIcon }
    ]
  },
  {
    id: "moda-confeccao",
    name: "Moda e Confecção",
    icon: Shirt,
    subcategories: [
      { id: "bordadeira", name: "Bordadeira", icon: ScissorsIcon },
      { id: "costureira", name: "Costureira", icon: SquarePilcrowIcon },
      { id: "estilista", name: "Estilista", icon: ShirtIcon },
      { id: "modelista", name: "Modelista", icon: Ruler }
    ]
  },
  {
    id: "pets",
    name: "Pets",
    icon: Dog,
    subcategories: [
      { id: "acupuntura-pet", name: "Acupuntura", icon: Heart },
      { id: "adestrador", name: "Adestrador (a)", icon: DogIcon },
      { id: "banho-tosa", name: "Banho e Tosa", icon: Bath },
      { id: "passeador-pets", name: "Passeador(a) de Pets", icon: DogIcon },
      { id: "pet-shop", name: "Pet Shop", icon: DogIcon },
      { id: "veterinario", name: "Veterinário (a)", icon: Stethoscope }
    ]
  },
  {
    id: "saude-bem-estar",
    name: "Saúde e Bem-Estar",
    icon: Heart,
    subcategories: [
      { id: "acupunturista", name: "Acupunturista", icon: Heart },
      { id: "chef-cozinheiro", name: "Chef / Cozinheiro(a)", icon: Utensils },
      { id: "cuidador-idosos", name: "Cuidador(a) de Idosos", icon: Heart },
      { id: "enfermeiro", name: "Enfermeiro(a)", icon: Heart },
      { id: "fisioterapeuta", name: "Fisioterapeuta", icon: Heart },
      { id: "nutricionista", name: "Nutricionista", icon: Heart },
      { id: "personal-trainer", name: "Personal Trainer", icon: Heart },
      { id: "psicologo", name: "Psicólogo(a)", icon: Heart },
      { id: "quiropraxista", name: "Quiropraxista", icon: Heart },
      { id: "terapeuta", name: "Terapeuta", icon: Heart }
    ]
  },
  {
    id: "tecnologia-digitais",
    name: "Tecnologia e Serviços Digitais",
    icon: Laptop,
    subcategories: [
      { id: "desenvolvedor", name: "Desenvolvedor Web / Mobile", icon: Code },
      { id: "designer-grafico", name: "Designer Gráfico", icon: Monitor },
      { id: "designer-interiores", name: "Designer de Interiores", icon: HomeIcon },
      { id: "editor-video", name: "Editor de Vídeo", icon: Video },
      { id: "marketing-digital", name: "Especialista em Marketing Digital", icon: Target },
      { id: "social-media", name: "Social Media", icon: Share2 },
      { id: "suporte-ti", name: "Suporte Técnico / TI", icon: LaptopIcon },
      { id: "tecnico-informatica", name: "Técnico em Informática", icon: LaptopIcon }
    ]
  }
]
