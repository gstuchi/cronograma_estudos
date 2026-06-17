import Link from "next/link";
import { notFound } from "next/navigation";
import { semanas, getSemana, slugDia } from "@/data/plano";
import { corArea, diaCurto, tipoDiaLabel } from "@/lib/ui";

export function generateStaticParams() {
  return semanas.map((s) => ({ numero: String(s.numero) }));
}

export default async function SemanaPage({
  params,
}: {
  params: Promise<{ numero: string }>;
}) {
  const { numero } = await params;
  const semana = getSemana(Number(numero));
  if (!semana) notFound();

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <Link
        href="/#semanas"
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
        Todas as semanas
      </Link>

      <header className="mt-6 mb-10">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-insper px-3 py-1 text-sm font-bold text-white">
            Semana {semana.numero}
          </span>
          <span className="text-sm font-medium text-ink-soft">
            Fase {semana.fase} · {semana.faseNome}
          </span>
        </div>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          {semana.titulo}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-ink-soft">{semana.foco}</p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {semana.dias.map((dia) => (
          <Link
            key={dia.dia}
            href={`/semana/${semana.numero}/${slugDia[dia.dia]}`}
            className="group flex cursor-pointer flex-col rounded-3xl border border-line bg-card p-6 transition-colors duration-200 hover:border-insper"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cream text-sm font-bold text-ink">
                  {diaCurto[dia.dia]}
                </span>
                <span className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-ink-soft">
                  {tipoDiaLabel[dia.tipo]}
                </span>
              </div>
              <svg
                className="h-5 w-5 text-ink-soft transition-colors group-hover:text-insper"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h2 className="mt-4 text-lg font-bold leading-tight text-ink">
              {dia.titulo}
            </h2>

            <div className="mt-3 flex flex-wrap gap-2">
              {dia.blocos.map((b, i) => (
                <span
                  key={i}
                  className="rounded-full px-2.5 py-1 text-xs font-semibold text-white"
                  style={{ background: corArea[b.area] }}
                >
                  {b.nome}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
