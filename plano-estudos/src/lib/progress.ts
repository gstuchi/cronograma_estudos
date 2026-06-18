"use client";

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
