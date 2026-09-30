# plano-estudos

Site do cronograma de 12 semanas para o vestibular do Insper. Feito com
Next.js (App Router), React 19, Tailwind CSS 4 e Framer Motion. Todas as
páginas são geradas estaticamente no build.

## Comandos

```bash
npm install     # dependências
npm run dev     # servidor de desenvolvimento em http://localhost:3000
npm run build   # build de produção (gera as páginas de todas as semanas e dias)
npm run start   # serve o build
npm run lint    # ESLint
```

## Estrutura

```
src/
├── app/
│   ├── page.tsx                      # home: as 12 semanas agrupadas por fase
│   └── semana/[numero]/
│       ├── page.tsx                  # dias de uma semana
│       └── [dia]/page.tsx            # teoria + questões do dia
├── components/
│   ├── completion.tsx                # marcar dia como concluído e progresso da semana
│   └── question-card.tsx             # card de questão (copiar para o Claude, "já fiz")
├── data/
│   ├── types.ts                      # tipos: Semana, Dia, BlocoEstudo, Questao
│   ├── plano.ts                      # o cronograma em si
│   ├── questoes.ts                   # questões reais, ligadas a tópicos
│   └── teoria.ts                     # resumo de teoria por tópico
└── lib/
    ├── progress.ts                   # progresso no localStorage + hooks
    └── ui.ts                         # cores por área e rótulos
```

## Como os dados se ligam

Cada bloco de estudo em `plano.ts` lista **tópicos** (slugs como
`financeira` ou `interpretacao`). A página do dia usa esses slugs para puxar
a teoria correspondente em `teoria.ts` e as questões com o mesmo `topico` em
`questoes.ts`.

Para adicionar uma questão, use o helper `q(...)` em `questoes.ts` com a
prova de origem, o número, a área, o tópico, o enunciado e as alternativas.
Se ela depende de figura, passe `temFigura` e o caminho da imagem em
`public/questoes/`.

## Progresso

Dias concluídos (`done:dia:<semana>:<dia>`) e questões feitas
(`feita:<id>`) ficam no `localStorage` do navegador. Os componentes leem
esses valores com `useSyncExternalStore` (veja `lib/progress.ts`), então a
tela atualiza na hora, inclusive quando algo muda em outra aba.
