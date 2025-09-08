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
    id: "domesticos-reparos",
    name: "Serviços Domésticos e Reparos",
    icon: Home,
    subcategories: [
      { id: "eletricista", name: "Eletricista", icon: Zap },
      { id: "pedreiro", name: "Pedreiro", icon: Hammer },
      { id: "encanador", name: "Encanador", icon: Wrench },
      { id: "pintor", name: "Pintor", icon: Paintbrush },
      { id: "marceneiro", name: "Marceneiro", icon: Hammer },
      { id: "montador-moveis", name: "Montador de móveis", icon: Hammer },
      { id: "gesseiro", name: "Gesseiro", icon: Paintbrush },
      { id: "vidraceiro", name: "Vidraceiro", icon: Shield },
      { id: "serralheiro", name: "Serralheiro", icon: Hammer },
      { id: "tecnico-ar-condicionado", name: "Técnico em ar-condicionado", icon: Wind },
      { id: "tecnico-eletronicos", name: "Técnico em eletrônicos", icon: Smartphone },
      { id: "chaveiro", name: "Chaveiro", icon: Key },
      { id: "desentupidor", name: "Desentupidor", icon: Droplets },
      { id: "impermeabilizador", name: "Impermeabilizador", icon: Droplets },
      { id: "jardineiro", name: "Jardineiro", icon: TreePine }
    ]
  },
  {
    id: "beleza-estetica",
    name: "Beleza e Estética",
    icon: Scissors,
    subcategories: [
      { id: "cabeleireiro", name: "Cabeleireiro(a)", icon: Scissors },
      { id: "barbeiro", name: "Barbeiro", icon: Scissors },
      { id: "manicure-pedicure", name: "Manicure e Pedicure", icon: Sparkles },
      { id: "designer-sobrancelhas", name: "Designer de Sobrancelhas", icon: Sparkles },
      { id: "depilador", name: "Depilador(a)", icon: Sparkles },
      { id: "maquiador", name: "Maquiador(a)", icon: Sparkles },
      { id: "massoterapeuta", name: "Massoterapeuta / Massagista", icon: Heart },
      { id: "esteticista", name: "Esteticista", icon: Sparkles },
      { id: "personal-stylist", name: "Personal Stylist", icon: Shirt },
      { id: "barbearia", name: "Barbearia", icon: Scissors }
    ]
  },
  {
    id: "saude-bem-estar",
    name: "Saúde e Bem-Estar",
    icon: Heart,
    subcategories: [
      { id: "nutricionista", name: "Nutricionista", icon: Heart },
      { id: "personal-trainer", name: "Personal Trainer", icon: Heart },
      { id: "fisioterapeuta", name: "Fisioterapeuta", icon: Heart },
      { id: "psicologo", name: "Psicólogo(a)", icon: Heart },
      { id: "terapeuta", name: "Terapeuta", icon: Heart },
      { id: "acupunturista", name: "Acupunturista", icon: Heart },
      { id: "quiropraxista", name: "Quiropraxista", icon: Heart },
      { id: "enfermeiro", name: "Enfermeiro(a)", icon: Heart },
      { id: "cuidador-idosos", name: "Cuidador(a) de Idosos", icon: Heart },
      { id: "chef-cozinheiro", name: "Chef / Cozinheiro(a)", icon: Utensils }
    ]
  },
  {
    id: "limpeza-conservacao",
    name: "Limpeza e Conservação",
    icon: Sparkles,
    subcategories: [
      { id: "diarista-faxineira", name: "Diarista / Faxineira", icon: Sparkles },
      { id: "passadeira", name: "Passadeira", icon: Sparkles },
      { id: "limpeza-pos-obra", name: "Limpeza Pós-Obra", icon: Sparkles },
      { id: "limpeza-estofados", name: "Limpeza de Estofados", icon: Sparkles },
      { id: "limpeza-vidros", name: "Limpeza de Vidros", icon: Sparkles },
      { id: "controle-pragas", name: "Controle de Pragas", icon: Shield },
      { id: "zelador-caseiro", name: "Zelador / Caseiro", icon: Home }
    ]
  },
  {
    id: "infantil-educacional",
    name: "Infantil e Educacional",
    icon: GraduationCap,
    subcategories: [
      { id: "baba", name: "Babá", icon: Baby },
      { id: "professor-particular", name: "Professor(a) Particular", icon: GraduationCap },
      { id: "recreador", name: "Recreador(a)", icon: Gamepad2 },
      { id: "psicopedagogo", name: "Psicopedagogo(a)", icon: GraduationCap },
      { id: "fonoaudiologo", name: "Fonoaudiólogo(a)", icon: Mic }
    ]
  },
  {
    id: "aulas-reforco",
    name: "Aulas e reforço",
    icon: GraduationCap,
    subcategories: [
      { id: "reforco-escolar", name: "Reforço escolar", icon: GraduationCap },
      { id: "aulas-particulares", name: "Aulas particulares (matemática, física, etc.)", icon: Calculator },
      { id: "aulas-idiomas", name: "Aulas de idiomas", icon: Globe },
      { id: "aulas-musica", name: "Aulas de música (violão, piano, canto, etc.)", icon: Music },
      { id: "aulas-danca", name: "Aulas de dança", icon: Users },
      { id: "aulas-informatica", name: "Aulas de informática", icon: Laptop },
      { id: "preparatorio-concursos", name: "Preparatório para concursos/vestibular", icon: GraduationCap }
    ]
  },
  {
    id: "eventos-producao",
    name: "Eventos e Produção",
    icon: Camera,
    subcategories: [
      { id: "fotografo", name: "Fotógrafo(a)", icon: Camera },
      { id: "videomaker", name: "Videomaker / Filmagem", icon: Video },
      { id: "dj", name: "DJ", icon: Music },
      { id: "cerimonialista", name: "Cerimonialista", icon: Mic },
      { id: "decorador-festas", name: "Decorador(a) de Festas", icon: Sparkles },
      { id: "bartender", name: "Bartender / Barman", icon: Utensils },
      { id: "garcom", name: "Garçom / Garçonete", icon: User },
      { id: "mestre-cerimonias", name: "Mestre de Cerimônias", icon: Mic },
      { id: "recepcionista", name: "Recepcionista", icon: User },
      { id: "cantor", name: "Cantor(a)", icon: Mic },
      { id: "musico-banda", name: "Músico / Banda", icon: Guitar }
    ]
  },
  {
    id: "moda-confeccao",
    name: "Moda e Confecção",
    icon: Shirt,
    subcategories: [
      { id: "costureira", name: "Costureira", icon: SquarePilcrowIcon },
      { id: "modelista", name: "Modelista", icon: Ruler },
      { id: "bordadeira", name: "Bordadeira", icon: ScissorsIcon },
      { id: "estilista", name: "Estilista", icon: ShirtIcon }
    ]
  },
  {
    id: "logisticos-transportes",
    name: "Serviços Logísticos e Transportes",
    icon: Truck,
    subcategories: [
      { id: "motorista-particular", name: "Motorista Particular", icon: CarIcon },
      { id: "motoboy", name: "Motoboy / Entregador", icon: CarIcon },
      { id: "frete-mudancas", name: "Frete / Mudanças", icon: Truck },
      { id: "transporte-escolar", name: "Transporte Escolar", icon: CarIcon },
      { id: "transporte-executivo", name: "Transporte Executivo", icon: CarIcon }
    ]
  },
  {
    id: "automotivos",
    name: "Serviços Automotivos",
    icon: Car,
    subcategories: [
      { id: "mecanico", name: "Mecânico", icon: WrenchIcon },
      { id: "funileiro", name: "Funileiro", icon: PaintbrushIcon },
      { id: "oficina-mecanica", name: "Oficina Mecânica", icon: CarIcon },
      { id: "martelinho-ouro", name: "Martelinho de Ouro", icon: Hammer },
      { id: "lavador-carros", name: "Lavador de Carros a Domicílio", icon: DropletsIcon },
      { id: "lava-jato", name: "Lava Jato", icon: DropletsIcon },
      { id: "instalador-som", name: "Instalador de Som e Acessórios", icon: Music },
      { id: "chaveiro-auto", name: "Chaveiro", icon: Key }
    ]
  },
  {
    id: "tecnologia-digitais",
    name: "Tecnologia e Serviços Digitais",
    icon: Laptop,
    subcategories: [
      { id: "tecnico-informatica", name: "Técnico em Informática", icon: LaptopIcon },
      { id: "desenvolvedor", name: "Desenvolvedor Web / Mobile", icon: Code },
      { id: "designer-grafico", name: "Designer Gráfico", icon: Monitor },
      { id: "editor-video", name: "Editor de Vídeo", icon: Video },
      { id: "social-media", name: "Social Media", icon: Share2 },
      { id: "marketing-digital", name: "Especialista em Marketing Digital", icon: Target },
      { id: "designer-interiores", name: "Designer de Interiores", icon: HomeIcon },
      { id: "suporte-ti", name: "Suporte Técnico / TI", icon: LaptopIcon }
    ]
  },
  {
    id: "pets",
    name: "Pets",
    icon: Dog,
    subcategories: [
      { id: "passeador-pets", name: "Passeador(a) de Pets", icon: DogIcon },
      { id: "veterinario", name: "Veterinário (a)", icon: Stethoscope },
      { id: "pet-shop", name: "Pet Shop", icon: DogIcon },
      { id: "adestrador", name: "Adestrador (a)", icon: DogIcon },
      { id: "banho-tosa", name: "Banho e Tosa", icon: Bath },
      { id: "acupuntura-pet", name: "Acupuntura", icon: Heart }
    ]
  },
  {
    id: "espiritualidade-terapias",
    name: "Espiritualidade e Terapias Alternativas",
    icon: Star,
    subcategories: [
      { id: "tarologo", name: "Tarólogo", icon: StarIcon },
      { id: "astrologo", name: "Astrólogo", icon: StarIcon },
      { id: "constelador", name: "Constelador(a) Familiar", icon: UsersIcon },
      { id: "numerologo", name: "Numerólogo", icon: Calculator },
      { id: "reikiano", name: "Reikiano(a)", icon: SparklesIcon },
      { id: "terapeuta-holistico", name: "Terapeuta Holístico", icon: Heart }
    ]
  },
  {
    id: "lazer-diversao",
    name: "Lazer e Diversão",
    icon: Gamepad2,
    subcategories: [
      { id: "aluguel-brinquedos", name: "Aluguel de Brinquedos", icon: Gamepad2Icon },
      { id: "guia-turismo", name: "Guia de Turismo", icon: MapPin },
      { id: "show-magica", name: "Show de Mágica", icon: Sparkles },
      { id: "aluguel-karaoke", name: "Aluguel de Karaokê", icon: Mic },
      { id: "escola-futebol", name: "Escola de Futebol", icon: Trophy },
      { id: "professor-esportes", name: "Professor(a) de Esportes", icon: Trophy }
    ]
  },
  {
    id: "consultoria-profissionais",
    name: "Consultoria e Serviços Profissionais",
    icon: Briefcase,
    subcategories: [
      { id: "contador", name: "Contador", icon: Calculator },
      { id: "advogado", name: "Advogado", icon: Scale },
      { id: "consultor-marketing", name: "Consultor de Marketing", icon: TrendingUp },
      { id: "consultor-rh", name: "Consultor de RH", icon: Users },
      { id: "redator", name: "Redator / Copywriter", icon: FileText },
      { id: "tradutor", name: "Tradutor", icon: Globe },
      { id: "coach-carreira", name: "Coach de Carreira", icon: User },
      { id: "admin-redes-sociais", name: "Administrador de Redes Sociais", icon: Share2 },
      { id: "gestor-trafego", name: "Gestor de Tráfego Pago", icon: BarChart3 },
      { id: "corretor-imoveis", name: "Corretor de imóveis", icon: Home }
    ]
  },
  {
    id: "artesanato-criativos",
    name: "Artesanato e Criativos",
    icon: Palette,
    subcategories: [
      { id: "artesao", name: "Artesão", icon: PaletteIcon },
      { id: "ilustrador", name: "Ilustrador", icon: Brush },
      { id: "pintor-artistico", name: "Pintor Artístico", icon: Paintbrush },
      { id: "criador-conteudo", name: "Criador de Conteúdo", icon: Image },
      { id: "customizacao-roupas", name: "Customização de Roupas", icon: ShirtIcon2 }
    ]
  },
  {
    id: "influencer-comunicacao",
    name: "Influencer e Comunicação",
    icon: Users,
    subcategories: [
      { id: "influencer", name: "Influencer", icon: UsersIcon },
      { id: "criador-conteudo-digital", name: "Criador de Conteúdo Digital", icon: CameraIcon },
      { id: "apresentador", name: "Apresentador(a)", icon: Mic },
      { id: "ator-atriz", name: "Ator/atriz", icon: Clapperboard }
    ]
  }
]
