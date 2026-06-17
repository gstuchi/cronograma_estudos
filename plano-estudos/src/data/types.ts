export type Area =
  | "Matemática"
  | "Linguagens"
  | "Humanas"
  | "Natureza"
  | "Redação";

/** Identificação da prova de origem (todas reais do Insper). */
export type Prova =
  | "2026.1 (cad. 001)"
  | "Simulado oficial 2026.1"
  | "2026.2"
  | "2026.1 (cad. 006)"
  | "2019.2"
  | "2019.1"
  | "2018"
  | "2017.2";

export interface Questao {
  id: string;
  prova: Prova;
  numero: number;
  area: Area;
  /** slug do tópico — liga a questão ao dia de estudo */
  topico: string;
  enunciado: string;
  alternativas: string[];
  /** true quando a questão original depende de uma figura/imagem não incluída */
  temFigura?: boolean;
}

export type DiaSemana =
  | "Segunda"
  | "Terça"
  | "Quarta"
  | "Quinta"
  | "Sexta"
  | "Sábado"
  | "Domingo";

export type TipoDia = "matematica" | "materias" | "simulado" | "redacao";

export interface BlocoEstudo {
  nome: string;
  area: Area;
  /** descrição curta do que estudar */
  descricao: string;
  /** slugs de tópicos para puxar as questões reais */
  topicos: string[];
}

export interface Dia {
  dia: DiaSemana;
  tipo: TipoDia;
  titulo: string;
  blocos: BlocoEstudo[];
}

export interface Semana {
  numero: number;
  fase: 1 | 2 | 3;
  faseNome: string;
  titulo: string;
  foco: string;
  dias: Dia[];
}
