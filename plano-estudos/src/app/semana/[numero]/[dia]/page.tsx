import Link from "next/link";
import { notFound } from "next/navigation";
import { semanas, getSemana, diaPorSlug, slugDia } from "@/data/plano";
import { questoesPorTopicos } from "@/data/questoes";
import { teoria } from "@/data/teoria";
import { QuestionCard } from "@/components/question-card";
import { DayCompleteButton } from "@/components/completion";
import { HiddenMessage } from "@/components/hidden-message";
import { corArea, diaCurto } from "@/lib/ui";
import type { Questao } from "@/data/types";

export function generateStaticParams() {
  return semanas.flatMap((s) =>
    s.dias.map((d) => ({ numero: String(s.numero), dia: slugDia[d.dia] })),
  );
}

export default async function DiaPage({
  params,
}: {
  params: Promise<{ numero: string; dia: string }>;
}) {
  const { numero, dia: diaSlug } = await params;
  const semana = getSemana(Number(numero));
  if (!semana) notFound();
  const dia = diaPorSlug(semana, diaSlug);
  if (!dia) notFound();

  const vistas = new Set<string>();

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href={`/semana/${semana.numero}`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft transition-colors hover:text-insper"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M19 12H5M11 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Semana {semana.numero} · {semana.titulo}
      </Link>

      <header className="mt-6 mb-10">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-insper text-base font-bold text-white">
            {diaCurto[dia.dia]}
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-insper">
              {dia.dia}
            </p>
            <h1 className="text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
              {dia.titulo}
            </h1>
          </div>
        </div>
      </header>

      <div className="mb-10">
        <DayCompleteButton numero={Number(numero)} slug={diaSlug} />
      </div>

      <div className="space-y-12">
        {dia.blocos.map((bloco, idx) => {
          const todas = questoesPorTopicos(bloco.topicos);
          const novas: Questao[] = todas.filter((q) => !vistas.has(q.id));
          novas.forEach((q) => vistas.add(q.id));
          const teorias = bloco.topicos.map((t) => teoria[t]).filter(Boolean);

          return (
            <section key={idx}>
              <div
                className="rounded-3xl border-l-4 bg-card p-6"
                style={{ borderColor: corArea[bloco.area] }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-wide"
                  style={{ color: corArea[bloco.area] }}
                >
                  {bloco.area}
                </p>
                <h2 className="mt-1 text-xl font-bold text-ink">
                  {bloco.nome}
                </h2>
                <p className="mt-2 leading-relaxed text-ink-soft">
                  {bloco.descricao}
                </p>
              </div>

              {teorias.map((t, ti) => (
                <div
                  key={ti}
                  className="mt-5 rounded-3xl border border-line bg-cream p-6"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-insper"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M4 19.5A2.5 2.5 0 016.5 17H20V4H6.5A2.5 2.5 0 004 6.5v13z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20 17v3H6.5A2.5 2.5 0 014 17.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-xs font-bold uppercase tracking-wide text-insper">
                      Teoria
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-ink">{t.titulo}</h3>
                  <ul className="mt-3 space-y-2">
                    {t.pontos.map((p, pi) => (
                      <li
                        key={pi}
                        className="flex gap-2.5 text-[15px] leading-relaxed text-ink"
                      >
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-insper" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  {t.dica && (
                    <p className="mt-4 rounded-2xl border border-line bg-card px-4 py-3 text-sm leading-relaxed text-ink-soft">
                      <span className="font-semibold text-ink">💡 Dica: </span>
                      {t.dica}
                    </p>
                  )}
                </div>
              ))}

              {novas.length > 0 ? (
                <div className="mt-6">
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-ink-soft">
                    {novas.length}{" "}
                    {novas.length === 1 ? "questão real" : "questões reais"} para
                    treinar
                  </h3>
                  <div className="space-y-5">
                    {novas.map((q) => (
                      <QuestionCard key={q.id} questao={q} />
                    ))}
                  </div>
                </div>
              ) : bloco.area === "Redação" ? null : (
                <p className="mt-4 rounded-2xl bg-cream px-5 py-4 text-sm text-ink-soft">
                  Ainda não há questões reais deste tópico no banco — vou
                  adicionar mais nas próximas levas. 💪
                </p>
              )}
            </section>
          );
        })}
      </div>

      {semana.numero === 1 && diaSlug === "quinta" && <HiddenMessage />}
    </main>
  );
}
