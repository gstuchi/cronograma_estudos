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
  funcoes: {
    titulo: "Funções (1º grau, quadrática e gráficos)",
    pontos: [
      "Função do 1º grau: f(x) = ax + b. O gráfico é uma RETA. “a” é o coeficiente angular (a > 0 → crescente; a < 0 → decrescente) e “b” é o coeficiente linear (ponto onde a reta corta o eixo y). A raiz (onde corta o eixo x) é x = −b/a.",
      "Função quadrática (2º grau): f(x) = ax² + bx + c. O gráfico é uma PARÁBOLA. Se a > 0, concavidade para CIMA (tem ponto de mínimo); se a < 0, para BAIXO (tem ponto de máximo). O “c” é onde a parábola corta o eixo y.",
      "Raízes da quadrática (onde corta o eixo x): Bhaskara → x = (−b ± √Δ) / 2a, com Δ = b² − 4ac. Δ > 0: duas raízes reais; Δ = 0: uma raiz (a parábola tangencia o eixo x); Δ < 0: nenhuma raiz real.",
      "VÉRTICE da parábola: x_v = −b/2a e y_v = −Δ/4a. É o ponto de MÁXIMO (a < 0) ou de MÍNIMO (a > 0). É a chave de todo problema que pede “valor máximo/mínimo” (lucro máximo, altura máxima, custo mínimo).",
      "Inequação do 2º grau (ax² + bx + c > 0 ou < 0): ache as raízes, esboce a parábola e veja em quais intervalos ela fica ACIMA (positiva) ou ABAIXO (negativa) do eixo x.",
      "Domínio = valores de x permitidos; Imagem = valores de y atingidos. Função crescente: y aumenta quando x aumenta; decrescente: y diminui quando x aumenta.",
      "Leitura de gráfico: identifique onde a curva corta os eixos (raízes e o ponto (0, c)), onde cresce/decresce e onde está o máximo/mínimo. Reta = 1º grau; parábola = 2º grau.",
      "Montar a “lei” da função a partir de um enunciado: receita = preço × quantidade. Quando o preço cai conforme a quantidade sobe (descontos), a receita vira uma função do 2º grau (parábola).",
    ],
    dica: "Pediu valor MÁXIMO ou MÍNIMO? Vá direto ao vértice (x_v = −b/2a). Problema com desconto/quantidade que se multiplicam quase sempre gera uma função quadrática.",
  },
  "literatura-modernismo": {
    titulo: "Modernismo (Manuel Bandeira e a poesia modernista)",
    pontos: [
      "Marco: a Semana de Arte Moderna de 1922 (São Paulo) — ruptura com o passado, liberdade formal, valorização do cotidiano, do coloquial e da identidade brasileira.",
      "1ª geração modernista (1922–1930): a mais radical e “destruidora”. Verso livre (sem métrica nem rima fixas), linguagem coloquial, humor e paródia. Nomes: Oswald de Andrade, Mário de Andrade e Manuel Bandeira.",
      "Manuel Bandeira: chamado de “São João Batista do Modernismo”. Verso livre, linguagem simples, temas como morte, infância e melancolia. Poemas-chave: “Poética” (manifesto contra o lirismo “comedido”), “Desencanto”, “Pneumotórax”.",
      "Em “Poética”, Bandeira ataca o lirismo “bem-comportado”, o “funcionário público com livro de ponto” e os “puristas” — ou seja, critica o formalismo PARNASIANO e defende a liberdade do verso (“não quero mais saber do lirismo que não é libertação”).",
      "2ª geração (1930–1945): poesia mais reflexiva e social. Carlos Drummond de Andrade (o cotidiano, o “eu” e o mundo), Cecília Meireles e Vinicius de Moraes.",
      "Oposição que cai na prova: Modernismo (verso livre, coloquial, libertário) × Parnasianismo (forma rígida, rima rica, culto à perfeição formal, “arte pela arte”).",
    ],
    dica: "Verso livre + linguagem coloquial + crítica ao formalismo = Modernismo. Se o poema “xinga” o lirismo bem-comportado e os puristas, é Bandeira (“Poética”).",
  },
  antiguidade: {
    titulo: "Antiguidade (Grécia, Roma e o mundo antigo)",
    pontos: [
      "Da Pré-História: a passagem do NOMADISMO para o SEDENTARISMO veio com a Revolução Agrícola (Neolítico) — o domínio da agricultura e da pecuária garantiu alimento regular e a fixação em aldeias.",
      "Grécia / Atenas: berço da DEMOCRACIA, com participação DIRETA dos cidadãos na pólis. Mas era excludente — mulheres, escravos e estrangeiros NÃO eram cidadãos —, e o ócio (skholé) dos cidadãos dependia do trabalho ESCRAVO.",
      "Esparta: sociedade militarizada e oligárquica, com educação voltada à guerra e forte sentido de comunidade entre os “iguais” (homoioi).",
      "Roma: Monarquia → República (Senado; disputa entre patrícios e plebeus) → Império. Legado: o Direito Romano, a língua latina e a organização administrativa.",
      "Primeiras civilizações: Mesopotâmia e Egito, nos vales de grandes rios — surgimento da escrita, da agricultura irrigada e do Estado.",
      "Islã: no séc. VII, Maomé pregou o monoteísmo em Meca; perseguido, migrou para Medina (a Hégira, 622 d.C. — marco inicial do calendário muçulmano).",
    ],
    dica: "A democracia ateniense era DIRETA, mas EXCLUDENTE (só cidadãos homens livres) e sustentada pela escravidão. É a pegadinha clássica: não a confunda com a democracia representativa de hoje.",
  },
  "geometria-plana": {
    titulo: "Geometria Plana (triângulos, círculos, áreas e ângulos)",
    pontos: [
      "Áreas principais: retângulo = base × altura; quadrado = lado²; triângulo = (base × altura) / 2; trapézio = (B + b) · h / 2; losango = (D · d) / 2 (diagonais); círculo = π·r².",
      "Triângulos: a soma dos ângulos internos é sempre 180°. Teorema de Pitágoras (só no triângulo RETÂNGULO): hipotenusa² = soma dos quadrados dos catetos (a² = b² + c²).",
      "Oi Mozao Gorduxa: Espero que hoje voce esteja acordado melhor e que voce passe por mais um dia de estudos muito facilmente e queria dizer que looooogicamente eu te amoo dmss e estou contando os minutos para te ver, estou muito orgulhoso de ver voce dando o seu maximo para estudar cada diazinho e sei que ira dar tudo certo!!! Para nois dois lali , bjao do gi <3.",
      "Semelhança de triângulos: ângulos iguais → lados proporcionais na mesma razão k. ATENÇÃO: a razão entre as ÁREAS é k² (o quadrado da razão dos lados). Teorema de Tales: retas paralelas cortam transversais em segmentos proporcionais.",
      "Círculo e circunferência: comprimento (perímetro) = 2·π·r; área = π·r². Setor circular = fatia do círculo: sua área é (θ/360°) · π·r², proporcional ao ângulo central θ.",
      "Polígonos: a soma dos ângulos internos é (n − 2) · 180°, onde n é o número de lados. No polígono REGULAR todos os lados e ângulos são iguais (cada ângulo interno = (n − 2)·180° / n).",
      "Ângulos: complementares somam 90°; suplementares somam 180°. Numa circunferência, o ângulo inscrito vale METADE do ângulo central que enxerga o mesmo arco.",
    ],
    dica: "Quase toda questão de área se resolve DECOMPONDO a figura em retângulos e triângulos simples. E lembre da pegadinha de semelhança: a razão das ÁREAS é o QUADRADO da razão dos lados.",
  },
  coesao: {
    titulo: "Coesão textual e conectivos",
    pontos: [
      "Coesão é a “costura” do texto: são os recursos que ligam palavras, frases e parágrafos. Não confunda com COERÊNCIA (a lógica e o sentido global do texto) — um texto pode ser coeso e ainda assim incoerente.",
      "Coesão REFERENCIAL: retomar termos sem repetir, usando pronomes (ele, este, o qual), sinônimos, hiperônimos (“o cão… o animal”) ou elipse (omissão do termo já subentendido).",
      "Anáfora = o termo RETOMA algo já dito antes (“Comprei o livro; ELE é ótimo”). Catáfora = o termo ANTECIPA algo que vem depois (“Só quero ISTO: que você passe”).",
      "oi lali espero que o dia de hoje de estudos foi bom eu fiquei bem cansado hj mas fiz questao de deixar tudo prontinho pra voce estudar depois da velocity. Te amo muito, gi ❤️",
      "Coesão SEQUENCIAL: os conectivos que encadeiam as ideias. Saber o VALOR de cada um é o que mais cai — adição (e, além disso), adversidade/oposição (mas, porém, contudo, entretanto, no entanto), conclusão (logo, portanto, assim), explicação/causa (pois, porque, já que, visto que), consequência (de modo que, tão… que), condição (se, caso, desde que), concessão (embora, ainda que, mesmo que), finalidade (para que, a fim de), alternância (ou… ou, ora… ora) e tempo (quando, assim que).",
      "Pronomes relativos: “que” e “o qual” são coringas; “cujo” indica posse (“o autor CUJA obra…”, sem artigo depois); “onde” só para LUGAR FÍSICO (“a cidade ONDE nasci”) — para o resto use “em que / no qual”; “aonde” pede ideia de movimento (“o lugar AONDE vou”).",
      "Pegadinha Vunesp/Insper: pedir para SUBSTITUIR um conectivo mantendo o sentido, ou identificar a relação que ele estabelece. Troque “mas” por “no entanto” e o sentido de oposição se mantém; troque por “portanto” e o sentido MUDA (vira conclusão) — está errado.",
      "Ambiguidade e referência: cuidado com pronomes “soltos” que podem apontar para mais de um termo — a boa coesão elimina essa dúvida.",
    ],
    dica: "Na hora da prova, TROQUE mentalmente o conectivo pela relação que ele expressa (“mas” = oposição, “porque” = causa, “portanto” = conclusão). Se a frase continuar fazendo sentido, a substituição preserva o sentido; se travar, mudou o valor lógico.",
  },
  "nao-verbais": {
    titulo: "Gêneros não-verbais e multimodais (charge, cartum, tirinha, meme)",
    pontos: [
      "Textos MULTIMODAIS combinam linguagem verbal (palavra) e não-verbal (imagem, cor, gesto). O sentido nasce da INTERAÇÃO entre os dois — ler só o texto ou só a imagem faz perder a mensagem.",
      "CHARGE: crítica humorística a um fato ESPECÍFICO e ATUAL (política, notícia do dia). É datada — depende do contexto do momento em que foi feita.",
      "CARTUM (cartoon): humor/crítica de caráter ATEMPORAL e universal, sobre comportamentos humanos em geral, sem se prender a um acontecimento específico.",
      "TIRINHA (tira): sequência curta de quadrinhos (quadros), quase sempre com humor construído por uma quebra de expectativa no último quadro (o “desfecho”).",
      "MEME: gênero digital que recicla imagens/frases conhecidas em novos contextos — depende de intertextualidade e de repertório compartilhado para “funcionar”.",
      "O humor e a crítica costumam vir de: IRONIA, quebra de expectativa, AMBIGUIDADE (duplo sentido) e do CONTRASTE entre o que a imagem mostra e o que o texto diz.",
      "Elementos visuais que significam: cores, tamanho e posição, expressões faciais, tipos de balão (fala, pensamento, grito), enquadramento e o que está em primeiro/segundo plano.",
      "Toda charge/cartum tem um PONTO DE VISTA (não é neutro): identificar O QUE se critica e COMO (por qual recurso) é o que a questão pede.",
    ],
    dica: "Pergunte-se sempre: “qual é a CRÍTICA e por qual RECURSO ela aparece?”. Charge = fato específico e atual; cartum = crítica atemporal. E o humor quase sempre está na QUEBRA DE EXPECTATIVA ou na ironia entre imagem e palavra.",
  },
  "revolucao-francesa": {
    titulo: "Revolução Francesa (1789)",
    pontos: [
      "Contexto — Antigo Regime: monarquia ABSOLUTISTA e sociedade ESTAMENTAL dividida em três estados: 1º (clero) e 2º (nobreza), privilegiados e isentos de impostos, e 3º Estado (burguesia, trabalhadores, camponeses), que produzia a riqueza e pagava os tributos.",
      "Causas: crise financeira do Estado francês, os privilégios da nobreza/clero, a fome e a alta do pão, e a difusão das ideias ILUMINISTAS (Locke, Montesquieu — separação dos poderes; Rousseau — soberania popular) que deslegitimavam o absolutismo.",
      "Início (1789): o 3º Estado se declara Assembleia Nacional; o povo de Paris toma a Bastilha (14/07/1789), símbolo do fim do Antigo Regime. É aprovada a Declaração dos Direitos do Homem e do Cidadão (liberdade, igualdade jurídica, propriedade).",
      "Lema da Revolução: “Liberdade, Igualdade, Fraternidade”. Fim dos privilégios feudais e da servidão; nasce a noção moderna de CIDADANIA (o indivíduo como cidadão de direitos, não mais súdito).",
      "Fases: Monarquia Constitucional (1789–92) → Convenção/República (1792–94), quando o rei é executado e vem o período do TERROR, sob Robespierre e os jacobinos → Diretório (1795–99), governo burguês mais moderado.",
      "Desfecho: o Golpe de 18 Brumário (1799) leva NAPOLEÃO ao poder, encerrando a fase revolucionária e espalhando pela Europa muitos dos princípios da Revolução (ex.: o Código Civil napoleônico).",
      "Legado duradouro (o que a prova cobra): fim da sociedade de privilégios de nascimento, igualdade perante a lei, cidadania política, Estados nacionais modernos e o ideário liberal — marcos da contemporaneidade.",
    ],
    dica: "A “marca durável” mais cobrada é a noção de CIDADANIA e igualdade jurídica (fim dos privilégios de sangue). Cuidado com a pegadinha: a Revolução foi CONTRA o absolutismo — alternativa que a associa à defesa do Antigo Regime está errada.",
  },
  "primeira-guerra": {
    titulo: "Primeira Guerra Mundial (1914–1918)",
    pontos: [
      "Antecedentes (a “paz armada”): antes de 1914 a Europa vivia tensões ESTRUTURAIS entre as grandes potências — não uma ordem estável. Rivalidades acumuladas explodiriam com um estopim.",
      "Causas de fundo: NACIONALISMO exacerbado (revanchismo francês, pan-eslavismo), IMPERIALISMO (disputa por colônias e mercados), corrida armamentista e o SISTEMA DE ALIANÇAS que dividiu o continente em dois blocos.",
      "Os blocos: Tríplice ALIANÇA (Alemanha, Áustria-Hungria e Itália — a Itália depois troca de lado) × Tríplice ENTENTE (França, Reino Unido e Rússia).",
      "Estopim: o assassinato do arquiduque Francisco Ferdinando, herdeiro austro-húngaro, em Sarajevo (junho/1914). O sistema de alianças transformou um conflito local em guerra continental.",
      "Fases e novidade militar: guerra de MOVIMENTO no início, logo travada na GUERRA DE TRINCHEIRAS (posições fixas, enorme mortandade). Novas tecnologias: metralhadora, gás venenoso, tanques, aviação e submarinos.",
      "Viradas: em 1917 os EUA ENTRAM na guerra (ao lado da Entente) e a Rússia SAI, após a Revolução Russa (Tratado de Brest-Litovsk). Isso desequilibra a favor da Entente.",
      "Fim e consequências: derrota alemã e Tratado de VERSALHES (1919), que puniu duramente a Alemanha (reparações, perda de território, limite militar). Criou-se a Liga das Nações. A humilhação alemã é uma das RAÍZES da 2ª Guerra Mundial.",
    ],
    dica: "Grave a cadeia: paz armada (tensões estruturais) → estopim em Sarajevo → alianças arrastam todos → trincheiras → Versalhes pune a Alemanha → semente da 2ª Guerra. A pegadinha é dizer que a Europa vivia “estabilidade/cooperação” antes de 1914 — era o oposto.",
  },
};
