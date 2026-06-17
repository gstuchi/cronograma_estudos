import type { Semana, Dia, BlocoEstudo, Area } from "./types";

/* Helpers para reduzir repetição nos dias de Matemática (Seg/Qua/Sex). */
function mat(descricao: string, topicos: string[]): BlocoEstudo {
  return { nome: "Matemática", area: "Matemática", descricao, topicos };
}
function bloco(
  nome: string,
  area: Area,
  descricao: string,
  topicos: string[],
): BlocoEstudo {
  return { nome, area, descricao, topicos };
}

function diasMatematica(
  tema: string,
  topicos: string[],
  revisao: string,
): { seg: Dia; qua: Dia; sex: Dia } {
  return {
    seg: {
      dia: "Segunda",
      tipo: "matematica",
      titulo: `${tema} — teoria + básico`,
      blocos: [mat(`${tema}: teoria e exercícios introdutórios (4h).`, topicos)],
    },
    qua: {
      dia: "Quarta",
      tipo: "matematica",
      titulo: `${tema} — médio/difícil + revisão`,
      blocos: [
        mat(
          `${tema}: questões de nível médio e difícil. Revisão de ${revisao}.`,
          topicos,
        ),
      ],
    },
    sex: {
      dia: "Sexta",
      tipo: "matematica",
      titulo: `Fecha ${tema} + simulado curto`,
      blocos: [
        mat(
          `Fechamento de ${tema}, questões mistas e simulado curto só de Matemática.`,
          topicos,
        ),
      ],
    },
  };
}

const sabado = (titulo: string, descricao: string, topicos: string[]): Dia => ({
  dia: "Sábado",
  tipo: "simulado",
  titulo,
  blocos: [bloco("Simulado", "Matemática", descricao, topicos)],
});

const domingo = (n: number, tema: string): Dia => ({
  dia: "Domingo",
  tipo: "redacao",
  titulo: `Redação ${n} + revisão dos erros`,
  blocos: [
    bloco(
      "Redação",
      "Redação",
      `Redação ${n} (dissertativa-argumentativa) — ${tema}. Depois, revisar a lista de erros da semana.`,
      ["redacao"],
    ),
  ],
});

export const semanas: Semana[] = [
  /* ───────────────── FASE 1 — Fundamentos ───────────────── */
  {
    numero: 1,
    fase: 1,
    faseNome: "Fundamentos",
    titulo: "Diagnóstico",
    foco: "Porcentagem e matemática financeira (juros, lucro, desconto)",
    dias: (() => {
      const m = diasMatematica(
        "Porcentagem e financeira",
        ["financeira"],
        "conceitos básicos",
      );
      return [
        m.seg,
        {
          dia: "Terça",
          tipo: "materias",
          titulo: "Interpretação + Cartografia",
          blocos: [
            bloco(
              "Interpretação Vunesp",
              "Linguagens",
              "Leitura e interpretação de texto-base no estilo Vunesp.",
              ["interpretacao"],
            ),
            bloco(
              "Geografia — Cartografia",
              "Humanas",
              "Projeções, escala e leitura de mapas.",
              ["cartografia"],
            ),
          ],
        },
        m.qua,
        {
          dia: "Quinta",
          tipo: "materias",
          titulo: "Realismo/Machado + Navegações",
          blocos: [
            bloco(
              "Literatura — Realismo e Machado",
              "Linguagens",
              "Machado de Assis e a prosa realista.",
              ["literatura-realismo"],
            ),
            bloco(
              "História — Grandes Navegações",
              "Humanas",
              "Expansão marítima portuguesa (séculos XV–XVI).",
              ["navegacoes"],
            ),
          ],
        },
        m.sex,
        sabado(
          "Simulado-diagnóstico (2026.1-001)",
          "Prova 2026.1 caderno 001 cronometrada + correção. É o seu ponto de partida.",
          ["financeira", "interpretacao", "navegacoes", "literatura-realismo"],
        ),
        domingo(1, "primeiro contato com a estrutura"),
      ];
    })(),
  },
  {
    numero: 2,
    fase: 1,
    faseNome: "Fundamentos",
    titulo: "Funções",
    foco: "Função de 1º grau, quadrática e gráficos (revisão: financeira)",
    dias: (() => {
      const m = diasMatematica("Funções", ["funcoes"], "financeira");
      return [
        m.seg,
        {
          dia: "Terça",
          tipo: "materias",
          titulo: "Gramática + Demografia",
          blocos: [
            bloco(
              "Gramática",
              "Linguagens",
              "Regência, concordância e crase.",
              ["gramatica"],
            ),
            bloco(
              "Geografia — Demografia",
              "Humanas",
              "Demografia e envelhecimento populacional.",
              ["demografia"],
            ),
          ],
        },
        m.qua,
        {
          dia: "Quinta",
          tipo: "materias",
          titulo: "Modernismo/Bandeira + Antiguidade",
          blocos: [
            bloco(
              "Literatura — Modernismo e Bandeira",
              "Linguagens",
              "Manuel Bandeira e a poesia modernista.",
              ["literatura-modernismo"],
            ),
            bloco(
              "História — Antiguidade",
              "Humanas",
              "Grécia, Esparta e o mundo islâmico.",
              ["antiguidade"],
            ),
          ],
        },
        m.sex,
        sabado(
          "Bloco Matemática + Linguagens",
          "Bloco cronometrado de Matemática e Linguagens + correção.",
          ["funcoes", "gramatica", "literatura-modernismo"],
        ),
        domingo(2, "repertório"),
      ];
    })(),
  },
  {
    numero: 3,
    fase: 1,
    faseNome: "Fundamentos",
    titulo: "Geometria plana (parte 1)",
    foco: "Triângulos, círculos, áreas e ângulos (revisão: funções)",
    dias: (() => {
      const m = diasMatematica(
        "Geometria plana",
        ["geometria-plana"],
        "funções",
      );
      return [
        m.seg,
        {
          dia: "Terça",
          tipo: "materias",
          titulo: "Semântica/Figuras + Geologia",
          blocos: [
            bloco(
              "Semântica e figuras de linguagem",
              "Linguagens",
              "Sentido das palavras e figuras de linguagem.",
              ["semantica-figuras"],
            ),
            bloco(
              "Geografia — Geologia",
              "Humanas",
              "Geologia e tectônica de placas.",
              ["geologia"],
            ),
          ],
        },
        m.qua,
        {
          dia: "Quinta",
          tipo: "materias",
          titulo: "Análise de poema + Idade Média",
          blocos: [
            bloco(
              "Análise de poema",
              "Linguagens",
              "Eu lírico, narrador e recursos do poema.",
              ["analise-poema"],
            ),
            bloco(
              "História — Idade Média e Renascimento",
              "Humanas",
              "Idade Média e Renascimento.",
              ["idade-media-renascimento"],
            ),
          ],
        },
        m.sex,
        sabado(
          "Bloco Humanas + Matemática",
          "Bloco cronometrado de Humanas e Matemática + correção.",
          ["geometria-plana", "semantica-figuras", "idade-media-renascimento"],
        ),
        domingo(3, "estrutura: tese, argumento, fechamento"),
      ];
    })(),
  },
  {
    numero: 4,
    fase: 1,
    faseNome: "Fundamentos",
    titulo: "Geometria plana (parte 2) + proporção",
    foco: "Semelhança, polígonos, razão, proporção e regra de três",
    dias: (() => {
      const m = diasMatematica(
        "Semelhança e proporção",
        ["geometria-plana", "proporcao"],
        "financeira e funções",
      );
      return [
        m.seg,
        {
          dia: "Terça",
          tipo: "materias",
          titulo: "Coesão/Não-verbais + Rev. Francesa",
          blocos: [
            bloco(
              "Coesão e gêneros não-verbais",
              "Linguagens",
              "Coesão textual, tirinha e charge.",
              ["coesao", "nao-verbais"],
            ),
            bloco(
              "História — Rev. Francesa e 1ª Guerra",
              "Humanas",
              "Revolução Francesa e Primeira Guerra Mundial.",
              ["revolucao-francesa", "primeira-guerra"],
            ),
          ],
        },
        m.qua,
        {
          dia: "Quinta",
          tipo: "materias",
          titulo: "Filosofia antiga + Natureza (diagnóstico)",
          blocos: [
            bloco(
              "Filosofia antiga",
              "Humanas",
              "Platão e estoicismo.",
              ["filosofia-antiga"],
            ),
            bloco(
              "Natureza — diagnóstico",
              "Natureza",
              "Resolver um bloco de Natureza e medir a distância até o piso de 20.",
              ["genetica", "cinematica", "ph"],
            ),
          ],
        },
        m.sex,
        sabado(
          "Mini-simulado",
          "Mini-simulado + correção, fechando a Fase 1.",
          ["geometria-plana", "proporcao", "filosofia-antiga"],
        ),
        domingo(4, "reescrever a melhor da fase"),
      ];
    })(),
  },

  /* ───────────────── FASE 2 — Aprofundamento ───────────────── */
  {
    numero: 5,
    fase: 2,
    faseNome: "Aprofundamento",
    titulo: "Geometria espacial",
    foco: "Volume, cilindro, prisma e bloco (revisão: geometria plana)",
    dias: (() => {
      const m = diasMatematica(
        "Geometria espacial",
        ["geometria-espacial"],
        "geometria plana",
      );
      return [
        m.seg,
        {
          dia: "Terça",
          tipo: "materias",
          titulo: "Energia + Química leve",
          blocos: [
            bloco(
              "Geografia — Energia",
              "Humanas",
              "Petróleo/OPEP e energias renováveis.",
              ["energia"],
            ),
            bloco(
              "Química — Ligações e pH",
              "Natureza",
              "Ligações químicas e pH.",
              ["ligacoes", "ph"],
            ),
          ],
        },
        m.qua,
        {
          dia: "Quinta",
          tipo: "materias",
          titulo: "Brasil República/Vargas + Interpretação",
          blocos: [
            bloco(
              "História — Brasil República e Vargas",
              "Humanas",
              "Brasil República e Era Vargas.",
              ["brasil-republica-vargas"],
            ),
            bloco(
              "Interpretação avançada",
              "Linguagens",
              "Interpretação de textos mais densos.",
              ["interpretacao"],
            ),
          ],
        },
        m.sex,
        sabado(
          "Simulado oficial do Insper",
          "Simulado oficial do Insper cronometrado + correção.",
          ["geometria-espacial", "energia", "brasil-republica-vargas"],
        ),
        domingo(5, "coesão entre parágrafos"),
      ];
    })(),
  },
  {
    numero: 6,
    fase: 2,
    faseNome: "Aprofundamento",
    titulo: "Probabilidade e estatística",
    foco: "Probabilidade, estatística, médias e tabelas",
    dias: (() => {
      const m = diasMatematica(
        "Probabilidade e estatística",
        ["probabilidade", "estatistica"],
        "financeira e funções",
      );
      return [
        m.seg,
        {
          dia: "Terça",
          tipo: "materias",
          titulo: "Geopolítica + Cinemática",
          blocos: [
            bloco(
              "Geografia — Geopolítica",
              "Humanas",
              "Geopolítica e blocos (BRICS, China–EUA).",
              ["geopolitica"],
            ),
            bloco(
              "Física — Cinemática",
              "Natureza",
              "Cinemática (o tema que mais cai).",
              ["cinematica"],
            ),
          ],
        },
        m.qua,
        {
          dia: "Quinta",
          tipo: "materias",
          titulo: "Sociologia + Prosa realista",
          blocos: [
            bloco(
              "Sociologia — Violência de gênero",
              "Humanas",
              "Violência de gênero e atualidades.",
              ["sociologia-genero"],
            ),
            bloco(
              "Literatura — Prosa realista",
              "Linguagens",
              "Prosa realista.",
              ["literatura-prosa"],
            ),
          ],
        },
        m.sex,
        sabado(
          "Bloco cronometrado",
          "Bloco cronometrado + correção.",
          ["probabilidade", "estatistica", "geopolitica", "cinematica"],
        ),
        domingo(6, "tecnologia / sociedade"),
      ];
    })(),
  },
  {
    numero: 7,
    fase: 2,
    faseNome: "Aprofundamento",
    titulo: "Questões mistas",
    foco: "Combina funções + geometria + financeira",
    dias: (() => {
      const m = diasMatematica(
        "Questões mistas",
        ["funcoes", "geometria-plana", "financeira"],
        "geometria plana e espacial",
      );
      return [
        m.seg,
        {
          dia: "Terça",
          tipo: "materias",
          titulo: "Ambiental + Calorimetria/Óptica",
          blocos: [
            bloco(
              "Geografia — Ambiental brasileira",
              "Humanas",
              "Biomas, Amazônia e conservação.",
              ["ambiental"],
            ),
            bloco(
              "Física — Calorimetria e óptica",
              "Natureza",
              "Calorimetria e óptica.",
              ["calorimetria", "optica"],
            ),
          ],
        },
        m.qua,
        {
          dia: "Quinta",
          tipo: "materias",
          titulo: "Filosofia política + Heredograma",
          blocos: [
            bloco(
              "Filosofia política",
              "Humanas",
              "Maquiavel e contratualistas.",
              ["filosofia-politica"],
            ),
            bloco(
              "Biologia — Genética e heredograma",
              "Natureza",
              "Genética e heredograma (a campeã da Natureza).",
              ["genetica"],
            ),
          ],
        },
        m.sex,
        sabado(
          "Bloco + leitura rápida",
          "Bloco de questões + treino de leitura rápida do texto-base.",
          ["funcoes", "geometria-plana", "filosofia-politica", "genetica"],
        ),
        domingo(7, "cronometrada"),
      ];
    })(),
  },
  {
    numero: 8,
    fase: 2,
    faseNome: "Aprofundamento",
    titulo: "Primeiro simulado completo",
    foco: "Revisar os tópicos que falharam (revisão: tudo que errou)",
    dias: (() => {
      const m = diasMatematica(
        "Revisão dos erros",
        ["funcoes", "geometria-plana", "probabilidade"],
        "tudo que errou",
      );
      return [
        m.seg,
        {
          dia: "Terça",
          tipo: "materias",
          titulo: "Sociologia + Fisiologia",
          blocos: [
            bloco(
              "Sociologia — Trabalho e desigualdade",
              "Humanas",
              "Trabalho, desigualdade e questão indígena.",
              ["sociologia-trabalho"],
            ),
            bloco(
              "Biologia — Fisiologia humana",
              "Natureza",
              "Fisiologia humana (sistemas).",
              ["fisiologia"],
            ),
          ],
        },
        m.qua,
        {
          dia: "Quinta",
          tipo: "materias",
          titulo: "Revisão gramatical + Orgânica",
          blocos: [
            bloco(
              "Revisão gramatical geral",
              "Linguagens",
              "Revisão geral de gramática.",
              ["gramatica"],
            ),
            bloco(
              "Química — Orgânica e oxidação",
              "Natureza",
              "Química orgânica e oxidação.",
              ["organica", "oxidacao"],
            ),
          ],
        },
        m.sex,
        {
          dia: "Sábado",
          tipo: "simulado",
          titulo: "Simulado 2026.2 completo (5h)",
          blocos: [
            bloco(
              "Simulado",
              "Matemática",
              "Simulado 2026.2 completo, 5h cronometradas + correção profunda (classificar erro: conteúdo / atenção / tempo).",
              ["funcoes", "geometria-plana", "fisiologia", "organica"],
            ),
          ],
        },
        domingo(8, "comparar com a 1, medir evolução"),
      ];
    })(),
  },

  /* ───────────────── FASE 3 — Reta final ───────────────── */
  {
    numero: 9,
    fase: 3,
    faseNome: "Reta final",
    titulo: "Simulado-âncora",
    foco: "Top-erros + matemática financeira (parte 2, avançada)",
    dias: (() => {
      const m = diasMatematica(
        "Financeira avançada",
        ["financeira"],
        "geometria plana",
      );
      return [
        m.seg,
        {
          dia: "Terça",
          tipo: "materias",
          titulo: "Revisão História + Eletricidade",
          blocos: [
            bloco(
              "Revisão História",
              "Humanas",
              "Navegações, escravidão e Vargas.",
              ["navegacoes", "escravidao", "brasil-republica-vargas"],
            ),
            bloco(
              "Física — Eletricidade",
              "Natureza",
              "Eletricidade + revisão de cinemática.",
              ["eletricidade", "cinematica"],
            ),
          ],
        },
        m.qua,
        {
          dia: "Quinta",
          tipo: "materias",
          titulo: "Revisão Geografia + Ecologia/Evolução",
          blocos: [
            bloco(
              "Revisão Geografia",
              "Humanas",
              "Cartografia e demografia.",
              ["cartografia", "demografia"],
            ),
            bloco(
              "Biologia — Ecologia, evolução, imunologia",
              "Natureza",
              "Ecologia, evolução e imunologia.",
              ["ecologia", "evolucao", "imunologia"],
            ),
          ],
        },
        m.sex,
        sabado(
          "Simulado 2026.1-006",
          "Simulado 2026.1 caderno 006 completo cronometrado + correção.",
          ["financeira", "navegacoes", "ecologia"],
        ),
        domingo(9, "proposta / fechamento"),
      ];
    })(),
  },
  {
    numero: 10,
    fase: 3,
    faseNome: "Reta final",
    titulo: "Volume e velocidade",
    foco: "Refazer os campeões (geometria plana + financeira)",
    dias: (() => {
      const m = diasMatematica(
        "Campeões: geometria + financeira",
        ["geometria-plana", "financeira"],
        "funções e probabilidade",
      );
      return [
        m.seg,
        {
          dia: "Terça",
          tipo: "materias",
          titulo: "Leitura rápida + Atualidades",
          blocos: [
            bloco(
              "Treino de leitura rápida",
              "Linguagens",
              "Leitura rápida e objetiva do texto-base.",
              ["interpretacao"],
            ),
            bloco(
              "Atualidades",
              "Humanas",
              "Atualidades recentes (Sociologia/Geografia).",
              ["atualidades", "geopolitica"],
            ),
          ],
        },
        m.qua,
        {
          dia: "Quinta",
          tipo: "materias",
          titulo: "Revisão Literatura + Filosofia/Química",
          blocos: [
            bloco(
              "Revisão de Literatura",
              "Linguagens",
              "Autores e movimentos literários.",
              ["literatura-realismo", "literatura-modernismo"],
            ),
            bloco(
              "Revisão Filosofia + Química",
              "Humanas",
              "Revisão-relâmpago de Filosofia e Química.",
              ["filosofia-politica", "ligacoes"],
            ),
          ],
        },
        m.sex,
        sabado(
          "Simulado com provas antigas",
          "Simulado com provas antigas (resistência), ciente da diferença de estilo.",
          ["geometria-plana", "financeira", "interpretacao"],
        ),
        domingo(10, "cronometrada"),
      ];
    })(),
  },
  {
    numero: 11,
    fase: 3,
    faseNome: "Reta final",
    titulo: "Consolidação",
    foco: "Nada de matéria nova — refazer erradas + flashcards",
    dias: (() => {
      const m = diasMatematica(
        "Refazer erradas + fórmulas",
        ["geometria-plana", "financeira", "funcoes", "probabilidade"],
        "tudo",
      );
      return [
        m.seg,
        {
          dia: "Terça",
          tipo: "materias",
          titulo: "Revisão Humanas + Natureza (campeões)",
          blocos: [
            bloco(
              "Revisão leve de Humanas",
              "Humanas",
              "Resumos das principais matérias de Humanas.",
              ["navegacoes", "geopolitica", "filosofia-politica"],
            ),
            bloco(
              "Natureza — 3 campeões",
              "Natureza",
              "Cinemática, heredograma e pH.",
              ["cinematica", "genetica", "ph"],
            ),
          ],
        },
        m.qua,
        {
          dia: "Quinta",
          tipo: "materias",
          titulo: "Revisão Linguagens + Repertório",
          blocos: [
            bloco(
              "Revisão leve de Linguagens",
              "Linguagens",
              "Revisão de Linguagens e Literatura.",
              ["interpretacao", "literatura-realismo"],
            ),
            bloco(
              "Banco de repertório",
              "Redação",
              "Organizar o banco de repertório para a redação.",
              ["redacao"],
            ),
          ],
        },
        m.sex,
        sabado(
          "Simulado parcial leve",
          "Simulado parcial leve (manter ritmo sem esgotar).",
          ["geometria-plana", "financeira", "cinematica"],
        ),
        domingo(11, "revisar melhores repertórios"),
      ];
    })(),
  },
  {
    numero: 12,
    fase: 3,
    faseNome: "Reta final",
    titulo: "Reta final e descanso",
    foco: "Revisões curtas, logística e descanso — chegar inteira",
    dias: [
      {
        dia: "Segunda",
        tipo: "materias",
        titulo: "Revisões curtas + simulado leve",
        blocos: [
          bloco(
            "Revisão geral",
            "Matemática",
            "Revisões curtas dos resumos + um simulado leve.",
            ["geometria-plana", "financeira", "cinematica"],
          ),
        ],
      },
      {
        dia: "Terça",
        tipo: "materias",
        titulo: "Revisão dos campeões",
        blocos: [
          bloco(
            "Campeões",
            "Natureza",
            "Cinemática, heredograma e pH — uma última passada.",
            ["cinematica", "genetica", "ph"],
          ),
        ],
      },
      {
        dia: "Quarta",
        tipo: "materias",
        titulo: "Logística da prova",
        blocos: [
          bloco(
            "Organização",
            "Redação",
            "Organizar logística — documento, caneta preta, local e horário.",
            ["redacao"],
          ),
        ],
      },
      {
        dia: "Quinta",
        tipo: "materias",
        titulo: "Descanso e sono",
        blocos: [
          bloco(
            "Descanso",
            "Redação",
            "Descanso e sono. Chegar inteira vale mais que mais uma hora de estudo.",
            [],
          ),
        ],
      },
    ],
  },
];

export function getSemana(numero: number): Semana | undefined {
  return semanas.find((s) => s.numero === numero);
}

export const slugDia: Record<string, string> = {
  Segunda: "segunda",
  Terça: "terca",
  Quarta: "quarta",
  Quinta: "quinta",
  Sexta: "sexta",
  Sábado: "sabado",
  Domingo: "domingo",
};

export function diaPorSlug(semana: Semana, slug: string): Dia | undefined {
  return semana.dias.find((d) => slugDia[d.dia] === slug);
}
