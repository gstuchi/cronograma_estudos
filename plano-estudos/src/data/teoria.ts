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
  gramatica: {
    titulo: "Gramática (sintaxe, vozes verbais e formação de palavras)",
    pontos: [
      "Vozes verbais: ATIVA (o sujeito pratica a ação) e PASSIVA (o sujeito sofre a ação). Passiva analítica = ser + particípio (“o racismo foi superado”); passiva sintética = verbo na 3ª pessoa + “se” apassivador (“superou-se o racismo”). Ao passar para a passiva, o objeto direto da ativa vira sujeito.",
      "Discurso direto (fala reproduzida, com travessão/aspas) × indireto (fala incorporada por “que”). No indireto, ajuste o tempo verbal: presente→pretérito, “há”→“havia”, futuro→futuro do pretérito (faria), imperativo→subjuntivo (“cala!”→que calasse).",
      "Orações subordinadas SUBSTANTIVAS exercem função de substantivo (subjetiva, objetiva direta/indireta, predicativa, completiva nominal, apositiva). ADJETIVAS são introduzidas por pronome relativo (que, o qual, cujo, onde). ADVERBIAIS exprimem circunstância.",
      "Conjunções e sentido (cai muito!): finalidade = para que, a fim de; causa = porque, visto que, já que; consequência = de modo que, tão… que; concessão = embora, ainda que, mesmo que; condição = se, caso, contanto que, desde que; tempo = quando, assim que.",
      "Formação de palavras: DERIVAÇÃO — prefixal (in-feliz), sufixal (feliz-mente), parassintética (prefixo + sufixo ao mesmo tempo: en-tristec-er) — e COMPOSIÇÃO — justaposição (girassol) e aglutinação (planalto = plano + alto).",
      "Funções sintáticas: sujeito, objeto direto/indireto, adjunto adnominal (acompanha um nome: artigo, adjetivo, pronome), adjunto adverbial (circunstância: modo, tempo, lugar), complemento nominal (completa nome regido de preposição), aposto e vocativo.",
      "Regência (verbo/nome + preposição certa: “assistir AO filme”, “obedecer A alguém”) · Concordância (verbal: verbo↔sujeito; nominal: artigo/adjetivo↔substantivo) · Crase (fusão a + a = à: “vou À escola”, “refiro-me ÀquELA aluna”).",
      "Tempos verbais: o pretérito mais-que-perfeito (“acabara”, “fizera”) indica uma ação ANTERIOR a outra já passada — é a “pegadinha” de ordem dos fatos.",
    ],
    dica: "Nas questões de transposição (voz passiva ou discurso indireto), faça a troca com calma no rascunho — o erro mais comum é esquecer de ajustar o tempo verbal ou o pronome.",
  },
  demografia: {
    titulo: "Demografia e Urbanização",
    pontos: [
      "Pirâmide etária: base larga + topo estreito = população JOVEM (alta natalidade, típica de países subdesenvolvidos); base estreita + topo largo = população ENVELHECIDA (típica de países desenvolvidos). “Pirâmide invertida” = muitos idosos e poucos jovens.",
      "Transição demográfica: passagem de altas taxas de natalidade E mortalidade para baixas taxas. O Brasil está em fase avançada — a natalidade caiu e a população envelhece rapidamente.",
      "Taxas-chave: natalidade e mortalidade (por mil habitantes), fecundidade (filhos por mulher) e crescimento vegetativo = natalidade − mortalidade. A fecundidade brasileira caiu abaixo do nível de reposição (~2,1 filhos).",
      "Envelhecimento populacional: resulta do aumento da expectativa de vida + queda da fecundidade. Gera mais idosos, pressiona a Previdência e a saúde, e exige políticas de cuidado.",
      "Bônus demográfico: janela em que a população em idade ativa (15–64) supera a dependente (crianças + idosos) — oportunidade econômica que o Brasil está perdendo com o envelhecimento.",
      "Migrações: êxodo rural (campo→cidade, motor da urbanização brasileira no séc. XX); migração de retorno (volta à região de origem, ex.: nordestinos que voltam do Sudeste); migrações pendulares (casa↔trabalho, diárias).",
      "Urbanização brasileira: rápida e DESORDENADA → metropolização, conurbação (cidades que se fundem) e problemas urbanos (favelas, mobilidade, saneamento precário).",
      "Desigualdade regional: Sul e Sudeste mais urbanizados e com melhor infraestrutura (água, esgoto); Norte e parte do Nordeste com menor cobertura de serviços.",
      "Fontes de dados: o IBGE realiza o Censo Demográfico (a cada 10 anos) e a PNAD Contínua — principais fontes de informação sobre a população do país.",
    ],
    dica: "Ler pirâmide etária e gráficos de população é quase certo na prova. Memorize: base larga = população jovem; topo largo = população envelhecida.",
  },
};
