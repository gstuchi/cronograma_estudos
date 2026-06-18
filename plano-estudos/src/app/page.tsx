import Link from "next/link";
import { ScrollStroke } from "@/components/ui/scroll-stroke";
import { semanas, slugDia } from "@/data/plano";
import { WeekProgressBadge } from "@/components/completion";

const fases = [1, 2, 3] as const;
const faseInfo: Record<number, { nome: string; intervalo: string }> = {
  1: { nome: "Fundamentos", intervalo: "Semanas 1–4" },
  2: { nome: "Aprofundamento", intervalo: "Semanas 5–8" },
  3: { nome: "Reta final", intervalo: "Semanas 9–12" },
};

export default function Home() {
  return (
    <main className="w-full">
      <ScrollStroke />

      <section id="semanas" className="mx-auto -mt-[30vh] max-w-6xl px-6 pb-28">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Seu plano de 12 semanas
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-ink-soft">
            Três fases até a prova. Escolha uma semana para ver os dias de
            estudo.
          </p>
        </div>

        {fases.map((fase) => (
          <div key={fase} className="mb-14">
            <div className="mb-5 flex items-baseline gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-insper text-sm font-bold text-white">
                {fase}
              </span>
              <h3 className="text-2xl font-bold text-ink">
                {faseInfo[fase].nome}
              </h3>
              <span className="text-sm font-medium text-ink-soft">
                {faseInfo[fase].intervalo}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {semanas
                .filter((s) => s.fase === fase)
                .map((s) => (
                  <Link
                    key={s.numero}
                    href={`/semana/${s.numero}`}
                    className="group flex cursor-pointer flex-col rounded-3xl border border-line bg-card p-6 transition-colors duration-200 hover:border-insper"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold uppercase tracking-wide text-insper">
                        Semana {s.numero}
                      </span>
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
                    <h4 className="mt-2 text-xl font-bold leading-tight text-ink">
                      {s.titulo}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {s.foco}
                    </p>
                    <WeekProgressBadge
                      numero={s.numero}
                      slugs={s.dias.map((d) => slugDia[d.dia])}
                    />
                  </Link>
                ))}
            </div>
          </div>
        ))}

        <footer className="mt-10 border-t border-line pt-8 text-center text-sm text-ink-soft">
          Feito com carinho para os seus estudos. Questões reais das provas do
          Insper · sem gabarito (dúvidas, é só perguntar ao Claude).
        </footer>
      </section>
    </main>
  );
}
