/**
 * Conteúdo da página `Conheça minha trajetória`.
 *
 * ATENÇÃO — CONTEÚDO PROVISÓRIO
 *
 * `abertura`, `minhaAbordagem`, `formacao`, `atualizacao` e `convite` estão
 * preenchidos com Lorem Ipsum, autorizado como marcador de posição. Nada aqui
 * descreve a trajetória real e nada pode ir para produção como está.
 *
 * SÃO REAIS e não devem ser tratados como provisórios:
 * - o nome, a especialidade, a profissão e o registro profissional, que já
 *   vêm de `footer.ts`;
 * - os títulos dos procedimentos em `Áreas de atuação`, que vêm de
 *   `treatments.ts`.
 *
 * A fotografia ainda não existe. Enquanto `foto` for `null`, a página mostra
 * um estado vazio declarado na proporção 7 / 9 — a mesma da foto da Seção 4,
 * para que a troca pela imagem real não mexa no layout.
 *
 * Decisão de 2026-08-22: certificados entram como texto estruturado, nunca
 * como imagem escaneada.
 */

import { footerContent } from "@/content/footer";

const LOREM_LONGO =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const LOREM_MEDIO =
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.";

const LOREM_CURTO = "Nemo enim ipsam voluptatem quia voluptas sit aspernatur.";

export type TimelineItem = {
  /** Linha principal: nome do curso, do evento ou do certificado. */
  primary: string;
  /** Linha de apoio: instituição ou descrição breve. */
  secondary: string;
  /** Opcional. Usado para o ano na lista de formação. */
  meta?: string;
};

export type TrajectoryPhoto = {
  alt: string;
  src: string;
};

export const trajetoria = {
  eyebrow: "Minha trajetória",
  /** Grafia oficial confirmada em 2026-08-22. */
  nome: "Isabelly Miranda",

  /** Provisório: Lorem Ipsum. Deve ser escrito em 1ª pessoa. */
  abertura: LOREM_LONGO,

  /**
   * Fotografia própria desta página. Não reaproveitar a do Hero nem a da
   * Seção 4, que já aparecem em outros lugares do site.
   */
  foto: null as TrajectoryPhoto | null,

  /** Especialidade e registro são reais; `Atendimento` ainda não tem valor. */
  fatosRapidos: [
    { label: "Especialidade", value: footerContent.specialty },
    { label: "Registro", value: footerContent.registration },
    { label: "Atendimento", value: "A definir" },
  ],

  /** Provisório: Lorem Ipsum. Deve aprofundar, não repetir a Seção 4. */
  minhaAbordagem: LOREM_LONGO,

  areasHeading: "Áreas de atuação",

  formacaoHeading: "Formação",
  /** Provisório: Lorem Ipsum. Ordem cronológica. */
  formacao: [
    { primary: "Lorem ipsum dolor sit amet", secondary: "Consectetur Adipiscing", meta: "2020" },
    { primary: "Sed do eiusmod tempor", secondary: "Incididunt Ut Labore", meta: "2022" },
    { primary: "Ut enim ad minim veniam", secondary: "Quis Nostrud Exercitation", meta: "2024" },
  ] as TimelineItem[],

  atualizacaoHeading: "Trajetória e atualização",
  /** Provisório: Lorem Ipsum. Certificados como texto, nunca como imagem. */
  atualizacao: [
    { primary: "Duis aute irure dolor", secondary: LOREM_MEDIO },
    { primary: "Excepteur sint occaecat", secondary: LOREM_MEDIO },
    { primary: "Sed ut perspiciatis unde", secondary: LOREM_MEDIO },
  ] as TimelineItem[],

  /** Provisório: Lorem Ipsum. Linha única do encerramento. */
  convite: LOREM_CURTO,

  /** Rótulo do estado vazio da fotografia. */
  fotoPendenteRotulo: "Fotografia ainda não adicionada",
} as const;
