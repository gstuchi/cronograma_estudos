"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Mensagem escondida (surpresa) — aparece discretamente no fim de um dia.
 * Cada variante tem seu próprio texto e sua própria chamadinha.
 * Para trocar o texto, edite as constantes abaixo.
 */
const MENSAGENS = {
  orgulho: {
    chamada: "psiu… tem algo aqui pra você",
    paragrafos: [
      "Oi Lá <3",
      "Se você chegou até aqui, é porque tá indo com tudo — e isso me deixa muito orgulhoso de você.",
      "Esse site inteiro eu fiz pensando em você: cada semana, cada questão, cada detalhe. Tudo pra te ajudar a chegar no Insper, que é o SEU sonho.",
      "Estuda com calma e confia em você. Eu confio, com toda a certeza do mundo. Tô aqui torcendo em cada dia desse plano.",
      "Já deu tudo certo. Te amo. 🤍",
    ],
  },
  gratidao: {
    chamada: "psiu… clica aqui, é sobre você (e sobre nós) 🤍",
    paragrafos: [
      "Oi fedor lindo <3",
      "Eu sou muito grato por ter você. Você me deixou uma pessoa melhor. Descobri com você um jeito de amar que eu nem sabia que existia, e todo dia descubro de novo como uma pessoa pode ser tão boa assim.",
      "Eu sei que não sou a pessoa mais fácil de lidar, mas é por você que eu tento melhorar todo dia. E te amo como nunca amei ninguém na vida.",
      "Te amo até a lua, ida e volta. Obrigado por ser você. 🤍",
    ],
  },
} as const;

type Variante = keyof typeof MENSAGENS;

function Coracao({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 21s-7.5-4.6-10-9.2C.4 8.4 2 5 5.5 5c2 0 3.4 1.1 4.5 2.6C11 6.1 12.5 5 14.5 5 18 5 19.6 8.4 18 11.8 19.5 16.4 12 21 12 21z" />
    </svg>
  );
}

export function HiddenMessage({ variante = "orgulho" }: { variante?: Variante }) {
  const [aberto, setAberto] = useState(false);
  const { chamada, paragrafos } = MENSAGENS[variante];

  return (
    <div className="mt-20 mb-6 flex flex-col items-center text-center">
      <AnimatePresence mode="wait">
        {!aberto ? (
          <motion.button
            key="trigger"
            onClick={() => setAberto(true)}
            className="group flex cursor-pointer flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label="Abrir mensagem surpresa"
          >
            <motion.span
              className="text-insper"
              animate={{ scale: [1, 1.18, 1] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <Coracao className="h-7 w-7" />
            </motion.span>
            <span className="text-xs font-medium text-ink-soft transition-colors group-hover:text-insper">
              {chamada}
            </span>
          </motion.button>
        ) : (
          <motion.div
            key="msg"
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-lg rounded-3xl border border-line bg-card px-7 py-8 shadow-sm"
          >
            <Coracao className="mx-auto mb-4 h-8 w-8 text-insper" />
            <div className="space-y-3">
              {paragrafos.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-lg font-bold text-ink"
                      : "text-[15px] leading-relaxed text-ink-soft"
                  }
                >
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
