import type { Area } from "@/data/types";

/** Cor de acento por área (base Insper, com tons de apoio discretos). */
export const corArea: Record<Area, string> = {
  Matemática: "#E4002B",
  Linguagens: "#2563EB",
  Humanas: "#B45309",
  Natureza: "#15803D",
  Redação: "#7C3AED",
};

export const tipoDiaLabel: Record<string, string> = {
  matematica: "Matemática",
  materias: "Matérias",
  simulado: "Simulado",
  redacao: "Redação",
};

export const diaCurto: Record<string, string> = {
  Segunda: "Seg",
  Terça: "Ter",
  Quarta: "Qua",
  Quinta: "Qui",
  Sexta: "Sex",
  Sábado: "Sáb",
  Domingo: "Dom",
};
