import {
  UserPlus,
  GraduationCap,
  Briefcase,
  DollarSign,
  Shield,
  Clock,
  Users,
  Scale,
  Calendar,
  Calculator,
  Heart,
  Stethoscope,
  Brain,
  Dumbbell,
  TrendingUp,
  Award,
  BookOpen,
  Coffee,
  Lock,
  Ban,
  BookMarked,
  UsersRound,
  MessageSquare,
  CalendarCheck,
  Gift,
  Leaf,
  Recycle,
  MapPin,
  Droplets,
  Sun,
  Building2,
  Monitor,
  FileText,
  Network,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

/**
 * Mapeamento de ícones para cada item dos eixos
 * Facilita o entendimento visual de cada proposta
 */
export const eixoIconsMap: Record<string, LucideIcon> = {
  // Eixo 1 - Fortalecimento
  "Segundo cargo de Assessor Jurídico por gabinete": UserPlus,
  "Valorização do estágio de graduação e pós-graduação": GraduationCap,
  "Transformação do estágio em Ajudante Geral Jurídico": Briefcase,
  "Verba indenizatória vinculada ao acervo processual": DollarSign,
  "Proteção remuneratória em caso de reforma administrativa": Shield,
  "Verba de sobreaviso para plantões": Clock,
  "Defensores auxiliares nas Varas de Família": Users,
  "Reorganização das audiências de custódia": Scale,
  "Distribuição equilibrada dos plantões": Calendar,
  "Apoio técnico contábil institucional": Calculator,

  // Eixo 2 - Gestão de Pessoas
  "Programa institucional de saúde e bem-estar": Heart,
  "Auxílio-saúde para ativos e inativos": Stethoscope,
  "Apoio psicológico institucional": Brain,
  "Parcerias com academias e clínicas": Dumbbell,
  "Plano de carreira para cargos de apoio": TrendingUp,
  "Incentivo à titulação acadêmica": Award,
  "Folga compensatória para capacitações": BookOpen,
  "Inamovibilidade e segurança funcional": Lock,
  "Política de enfrentamento ao preconceito": Ban,
  "Plano de capacitação continuada": BookMarked,

  // Eixo 3 - Modernização
  "Simplificação do chatbot institucional": MessageSquare,
  "Redução de campos obrigatórios nos sistemas": FileText,
  "Automatização de tarefas repetitivas": Network,
  "Digitalização assistida de documentos": Monitor,
  "IA para apoio ao atendimento": Brain,
  "Modernização do Solar e sistemas de RH": Building2,
  "Revisão do workflow interno": FileText,
  "Integração com o Judiciário": Network,

  // Eixo 4 - Política Institucional
  "Núcleo de conciliação pré-judicial": Scale,
  "Gestão participativa com escuta ativa": UsersRound,
  "Revisão das unificadas": FileText,
  "Teletrabalho com critérios técnicos": Monitor,
  "Calendário previsível de promoções": CalendarCheck,
  "Regras claras para gratificações": Gift,
  "Comunicação institucional estratégica": MessageSquare,
  "Reuniões regionais periódicas": UsersRound,

  // Eixo 5 - Estrutura
  "Reforço de equipes em unidades críticas": Users,
  "Ampliação da estrutura física": Building2,
  "Estrutura proporcional à demanda": TrendingUp,
  "Mais salas de atendimento": Building2,
  "Informatização completa das unidades": Monitor,
  "Aumento do quadro administrativo": Users,

  // Eixo 6 - Sustentabilidade
  "Política ambiental institucional": Leaf,
  "Critérios sustentáveis em contratações": Recycle,
  "Uso de materiais reciclados": Recycle,
  "Prioridade a fornecedores locais": MapPin,
  "Redução do consumo de água": Droplets,
  "Captação de água da chuva": Droplets,
  "Energia solar institucional": Sun,
};

/**
 * Retorna o ícone para um item, ou um ícone padrão se não encontrado
 */
export const getEixoItemIcon = (item: string): LucideIcon => {
  return eixoIconsMap[item] || FileText;
};
