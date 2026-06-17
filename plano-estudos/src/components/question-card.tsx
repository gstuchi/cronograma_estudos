"use client";

import { useEffect, useState } from "react";
import type { Questao } from "@/data/types";
import { corArea } from "@/lib/ui";

const letras = ["A", "B", "C", "D", "E"];

export function QuestionCard({ questao }: { questao: Questao }) {
  const [feita, setFeita] = useState(false);
  const [copiado, setCopiado] = useState(false);
  const storageKey = `feita:${questao.id}`;

  useEffect(() => {
    setFeita(localStorage.getItem(storageKey) === "1");
  }, [storageKey]);

  function toggleFeita() {
    const novo = !feita;
    setFeita(novo);
    localStorage.setItem(storageKey, novo ? "1" : "0");
  }

  async function copiar() {
    const texto =
      `${questao.enunciado}\n\n` +
      questao.alternativas
        .map((a, i) => `(${letras[i]}) ${a}`)
        .join("\n") +
      `\n\n(Questão ${questao.numero} — Insper ${questao.prova}) ` +
      `Pode me ajudar a resolver e explicar?`;
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 1800);
    } catch {
      /* clipboard indisponível */
    }
  }

  return (
    <article
      className={`rounded-3xl border bg-card p-6 transition-colors ${
        feita ? "border-line opacity-70" : "border-line"
      }`}
    >
      <header className="mb-4 flex flex-wrap items-center gap-2">
        <span
          className="rounded-full px-3 py-1 text-xs font-bold text-white"
          style={{ background: corArea[questao.area] }}
        >
          {questao.area}
        </span>
        <span className="text-xs font-medium text-ink-soft">
          Insper {questao.prova} · questão {questao.numero}
        </span>
        {questao.temFigura && (
          <span className="rounded-full bg-[#FDF1D6] px-3 py-1 text-xs font-semibold text-[#92600A]">
            depende de figura
          </span>
        )}
      </header>

      <p className="whitespace-pre-line text-base leading-relaxed text-ink">
        {questao.enunciado}
      </p>

      <ol className="mt-4 space-y-2">
        {questao.alternativas.map((alt, i) => (
          <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink">
            <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full border border-line text-xs font-bold text-ink-soft">
              {letras[i]}
            </span>
            <span>{alt}</span>
          </li>
        ))}
      </ol>

      <footer className="mt-5 flex flex-wrap items-center gap-3 border-t border-line pt-4">
        <button
          onClick={copiar}
          className="cursor-pointer rounded-full bg-insper px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-insper-dark"
        >
          {copiado ? "Copiado! Cole no Claude" : "Tirar dúvida com o Claude"}
        </button>
        <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-ink-soft">
          <input
            type="checkbox"
            checked={feita}
            onChange={toggleFeita}
            className="h-4 w-4 cursor-pointer accent-insper"
          />
          Já fiz esta questão
        </label>
      </footer>
    </article>
  );
}
