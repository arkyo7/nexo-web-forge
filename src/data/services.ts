import {
  Building2,
  CalendarCheck,
  ImageIcon,
  Rocket,
  Settings2,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";

export type ServiceMeta = {
  id: string;
  price: string;
  icon: LucideIcon;
};

export const services: ServiceMeta[] = [
  { id: "landing-page", price: "\u20AC400+", icon: Rocket },
  { id: "site-institucional", price: "\u20AC500+", icon: Building2 },
  { id: "site-agendamento", price: "\u20AC650+", icon: CalendarCheck },
  { id: "portfolio", price: "\u20AC300+", icon: ImageIcon },
  { id: "pagina-vendas", price: "\u20AC800+", icon: ShoppingBag },
  { id: "personalizado", price: "custom", icon: Settings2 },
];
