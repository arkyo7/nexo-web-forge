export type PlanMeta = {
  id: "essencial" | "profissional" | "evolucao";
  price: string;
  highlighted?: boolean;
};

export const plans: PlanMeta[] = [
  { id: "essencial", price: "€39,90" },
  { id: "profissional", price: "€59,90", highlighted: true },
  { id: "evolucao", price: "€89,90" },
];
