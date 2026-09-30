"use client";

import { useSyncExternalStore } from "react";

/** Conclusão de dias de estudo — persistida no navegador (localStorage). */

const key = (numero: number, slug: string) => `done:dia:${numero}:${slug}`;

export function isDayDone(numero: number, slug: string): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(key(numero, slug)) === "1";
}

export function setDayDone(numero: number, slug: string, done: boolean) {
  localStorage.setItem(key(numero, slug), done ? "1" : "0");
  // avisa outros componentes na mesma aba
  window.dispatchEvent(new CustomEvent("progress-change"));
}

export function weekDoneCount(numero: number, slugs: string[]): number {
  return slugs.filter((s) => isDayDone(numero, s)).length;
}

/** Questões marcadas como "já fiz" — mesma ideia, uma chave por questão. */

const keyQuestao = (id: string) => `feita:${id}`;

export function isQuestaoFeita(id: string): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(keyQuestao(id)) === "1";
}

export function setQuestaoFeita(id: string, feita: boolean) {
  localStorage.setItem(keyQuestao(id), feita ? "1" : "0");
  window.dispatchEvent(new CustomEvent("progress-change"));
}

/* O localStorage é tratado como store externo: os componentes leem via
   useSyncExternalStore e re-renderizam quando o progresso muda nesta aba
   (progress-change) ou em outra (storage). No servidor o snapshot é sempre
   "nada feito", então o HTML estático não depende do navegador. */

function subscribe(onChange: () => void) {
  window.addEventListener("progress-change", onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener("progress-change", onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function useDayDone(numero: number, slug: string): boolean {
  return useSyncExternalStore(
    subscribe,
    () => isDayDone(numero, slug),
    () => false,
  );
}

export function useWeekDoneCount(numero: number, slugs: string[]): number {
  return useSyncExternalStore(
    subscribe,
    () => weekDoneCount(numero, slugs),
    () => 0,
  );
}

export function useQuestaoFeita(id: string): boolean {
  return useSyncExternalStore(
    subscribe,
    () => isQuestaoFeita(id),
    () => false,
  );
}

const noop = () => () => {};

/** true só depois da hidratação — para não mostrar estado antes de ler o navegador. */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );
}
