export interface Teoria {
  titulo: string;
  /** pontos-chave / resumo de estudo */
  pontos: string[];
  /** dica final, estilo Insper/Vunesp */
  dica?: string;
}

/** Teoria por tópico (slug). A página do dia mostra a teoria dos tópicos do dia. */
export const teoria: Record<string, Teoria> = {
  financeira: {
    titulo: "Porcentagem e Matemática Financeira",
    pontos: [
      "Porcentagem: x% = x/100. Aumentar a% → multiplicar por (1 + a/100); descontar a% → multiplicar por (1 − a/100).",
      "Aumentos e descontos sucessivos NÃO se somam — eles se multiplicam. Ex.: +10% e depois −10% = ×1,10 × 0,90 = 0,99 (perda de 1%).",
      "Juros simples: incidem sempre sobre o capital inicial. M = C·(1 + i·t).",
      "Juros compostos: incidem sobre o montante acumulado (juro sobre juro). M = C·(1 + i)ᵗ.",
      "Lucro/prejuízo: atenção se a porcentagem é sobre o preço de CUSTO ou de VENDA — muda o resultado.",
    ],
    dica: "Na Vunesp, leia com cuidado “sobre o quê” incide a porcentagem (do total? do que sobrou? do valor inicial?). É a pegadinha mais comum.",
  },
  interpretacao: {
    titulo: "Interpretação de Texto (estilo Vunesp)",
    pontos: [
      "Leia primeiro o enunciado da questão: saber o que se pede direciona a leitura do texto-base.",
      "Diferencie o EXPLÍCITO (o que o texto diz) do IMPLÍCITO (o que se infere/depreende). Muitas questões pedem inferência.",
      "Identifique tese, argumentos e o ponto de vista/intenção do autor (defender, criticar, ironizar, informar).",
      "Cuidado com a EXTRAPOLAÇÃO: alternativa que afirma algo que o texto não sustenta, mesmo que seja verdade no mundo real.",
      "Desconfie de generalizações absolutas (“sempre”, “nunca”, “todos”) — costumam estar erradas.",
    ],
    dica: "A resposta certa quase sempre se sustenta SÓ com o texto. Se você precisou de conhecimento externo para justificar, provavelmente é a errada.",
  },
  cartografia: {
    titulo: "Cartografia",
    pontos: [
      "Projeções: Mercator (cilíndrica conforme) conserva ângulos/formas, mas DISTORCE as áreas perto dos polos (deixa-os enormes). Projeção de Peters conserva a área.",
      "Escala: relação entre o mapa e o real. Escala grande (1:1.000) = mais detalhe e menos área; escala pequena (1:1.000.000) = mais área e menos detalhe.",
      "Coordenadas: latitude (paralelos, a partir do Equador 0°, vai a 90° N/S) e longitude (meridianos, a partir de Greenwich 0°, vai a 180° L/O).",
      "Curvas de nível mostram a altimetria (relevo): linhas próximas = relevo íngreme.",
      "Tecnologias: GPS (posição por satélites), sensoriamento remoto (imagens de satélite), aerofotogrametria (fotos aéreas/drones) e SIG (cruzamento de camadas de dados geográficos).",
    ],
    dica: "Toda projeção distorce algo (área, forma, distância ou direção) — não existe mapa plano perfeito. A questão costuma testar QUAL distorção cada projeção gera.",
  },
  "literatura-realismo": {
    titulo: "Realismo, Naturalismo e Machado de Assis",
    pontos: [
      "Contexto (2ª metade do séc. XIX): reação ao Romantismo. Valoriza objetividade, ciência, observação e crítica social — fim da idealização romântica.",
      "Realismo: análise psicológica profunda e crítica à hipocrisia da burguesia (casamento, adultério, aparências). Em Portugal: Eça de Queirós (O Primo Basílio, O Crime do Padre Amaro).",
      "Machado de Assis (Realismo no Brasil): narrador irônico e “intruso”, que conversa com o leitor (metalinguagem/autoconsciência narrativa). Obras: Memórias Póstumas de Brás Cubas, Dom Casmurro.",
      "Naturalismo: leva o Realismo ao extremo com o DETERMINISMO (o ser humano é produto do meio, da raça e do momento) e foco nos instintos. Aluísio Azevedo (O Cortiço).",
      "Marcas para reconhecer Machado: ironia fina, digressões, pessimismo e o narrador que comenta a própria escrita.",
    ],
    dica: "Se o narrador para a história para falar diretamente com você (leitor) ou comentar como está escrevendo, quase sempre é Machado/Realismo.",
  },
  navegacoes: {
    titulo: "Grandes Navegações e início da Colonização",
    pontos: [
      "Pioneirismo português (séc. XV): centralização monárquica precoce, posição geográfica privilegiada, experiência marítima (Escola de Sagres) e apoio da burguesia comercial.",
      "Motivações: buscar rota para as Índias (especiarias), metais preciosos (ouro/prata), expandir a fé católica e atender ao MERCANTILISMO (acúmulo de metais, balança comercial favorável).",
      "Marcos: Tratado de Tordesilhas (1494, divisão Espanha × Portugal); Vasco da Gama chega às Índias (1498); Cabral “chega” ao Brasil (1500).",
      "Pacto colonial: a colônia só comercia com a metrópole, fornecendo matéria-prima e comprando manufaturados.",
      "Trabalho na América: Espanhola → mineração (Potosí) com mita e encomienda (mão de obra indígena); Portuguesa → açúcar e depois mineração, com escravização indígena e, sobretudo, africana.",
    ],
    dica: "Não confunda os sistemas: mita e encomienda = América ESPANHOLA (indígena). O Brasil teve principalmente escravidão AFRICANA no açúcar e na mineração.",
  },
};
