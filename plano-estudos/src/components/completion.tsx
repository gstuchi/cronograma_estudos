"use client";

import { useEffect, useState } from "react";
import { isDayDone, setDayDone, weekDoneCount } from "@/lib/progress";

function useProgressTick() {
  const [, setTick] = useState(0);
  useEffect(() => {
    const h = () => setTick((t) => t + 1);
    window.addEventListener("progress-change", h);
    window.addEventListener("storage", h);
    return () => {
      window.removeEventListener("progress-change", h);
      window.removeEventListener("storage", h);
    };
  }, []);
}

/** Botão grande para marcar um dia como concluído (página do dia). */
export function DayCompleteButton({
  numero,
  slug,
}: {
  numero: number;
  slug: string;
}) {
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(false);
  useProgressTick();

  useEffect(() => {
    setMounted(true);
    setDone(isDayDone(numero, slug));
  }, [numero, slug]);

  if (!mounted) return null;

  return (
    <button
      onClick={() => {
        const novo = !done;
        setDone(novo);
        setDayDone(numero, slug, novo);
      }}
      className={`flex cursor-pointer items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
        done
          ? "bg-[#15803D] text-white hover:bg-[#136B34]"
          : "border border-line bg-card text-ink hover:border-insper"
      }`}
    >
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d={done ? "M5 13l4 4L19 7" : "M12 5v14M5 12h14"}
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {done ? "Dia concluído!" : "Marcar dia como concluído"}
    </button>
  );
}

/** Selo de check para um dia (cartão na página da semana). */
export function DayDoneCheck({
  numero,
  slug,
}: {
  numero: number;
  slug: string;
}) {
  const [done, setDone] = useState(false);
  useProgressTick();
  useEffect(() => setDone(isDayDone(numero, slug)), [numero, slug]);

  if (!done) return null;
  return (
    <span
      className="flex h-7 w-7 items-center justify-center rounded-full bg-[#15803D] text-white"
      title="Dia concluído"
    >
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M5 13l4 4L19 7"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/** Progresso da semana (cartão na home): X/total dias + barrinha. */
export function WeekProgressBadge({
  numero,
  slugs,
}: {
  numero: number;
  slugs: string[];
}) {
  const total = slugs.length;
  const [feitos, setFeitos] = useState(0);
  const [mounted, setMounted] = useState(false);
  useProgressTick();

  useEffect(() => {
    setMounted(true);
    setFeitos(weekDoneCount(numero, slugs));
    // recalcula quando o progresso muda
  });

  const completa = mounted && feitos === total && total > 0;
  const pct = total ? (feitos / total) * 100 : 0;

  return (
    <div className="mt-4">
      <div className="mb-1.5 flex items-center justify-between text-xs font-semibold">
        <span className={completa ? "text-[#15803D]" : "text-ink-soft"}>
          {completa ? "Semana concluída ✓" : `${mounted ? feitos : 0}/${total} dias`}
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-line">
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            width: `${mounted ? pct : 0}%`,
            background: completa ? "#15803D" : "#E4002B",
          }}
        />
      </div>
    </div>
  );
}
