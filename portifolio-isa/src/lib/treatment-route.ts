/**
 * Traçado pontilhado da Seção 3, derivado da posição real dos cards.
 *
 * POR QUE ISTO EXISTE
 *
 * O traçado era um `path` escrito à mão, com um `viewBox` fixo esticado sobre
 * a seção por `preserveAspectRatio="none"`. A altura da seção mistura
 * unidades — `padding-top` em `svh` e altura de card em `vw` —, então o
 * `viewBox` só coincidia com os cards na resolução em que foi desenhado
 * (1920 × 1080). Em qualquer outra, a linha entrava por cima dos cards.
 *
 * Aqui a linha é gerada a partir de `offsetTop` / `offsetLeft` dos cards, que
 * são medidas de layout e não sofrem com os transforms do GSAP. O `viewBox`
 * passa a ser o próprio box da seção em pixels, sem distorção.
 *
 * COMO A FOLGA É GARANTIDA
 *
 * Cada segmento é uma cúbica cujos pontos de controle usam apenas o x dos dois
 * extremos. Uma curva de Bézier fica contida no fecho convexo dos seus pontos
 * de controle, então o x da curva nunca sai do intervalo entre os dois pontos
 * que ela liga. Como os pontos de faixa ficam na coluna vazia ao lado do card
 * e os de travessia ficam nos vãos, a linha não tem como invadir um card.
 */

export type TreatmentRouteCard = {
  top: number;
  left: number;
  width: number;
  height: number;
};

export type TreatmentRouteGeometry = {
  width: number;
  height: number;
  cards: TreatmentRouteCard[];
};

export type TreatmentRoute = {
  d: string;
  viewBox: string;
  origin: { x: number; y: number };
  end: { x: number; y: number };
  revealY: number;
  revealHeight: number;
};

/** Quanto a linha avança na coluna vazia, em fração da largura dessa coluna. */
const LANE = 0.5;
/** Sobra acima do primeiro card e abaixo do último, em alturas de card. */
const LEAD_IN = 0.14;
const TAIL = 0.062;
/** Perfil das curvas: sair na horizontal ao cruzar, descer colado à faixa. */
const INTO_LANE_X = 0.75;
const INTO_LANE_Y = 0.5;
const OUT_LANE_Y = 0.65;
const OUT_LANE_X = 0.45;
/** Desvio suave da linha no ponto final, para fora da faixa. */
const END_DRIFT = 0.06;

type Waypoint = {
  x: number;
  y: number;
  kind: "start" | "lane" | "cross" | "end";
};

const round = (value: number) => Math.round(value * 100) / 100;

/** Um card encostado na borda esquerda tem a coluna vazia à direita. */
const isLeftAligned = (card: TreatmentRouteCard) => card.left <= 1;

function laneX(card: TreatmentRouteCard, width: number) {
  const right = card.left + card.width;

  return isLeftAligned(card) ? right + (width - right) * LANE : card.left * LANE;
}

/** Borda interna do card, a que aponta para o centro da seção. */
const innerEdge = (card: TreatmentRouteCard) =>
  isLeftAligned(card) ? card.left + card.width : card.left;

export function buildTreatmentRoute(
  geometry: TreatmentRouteGeometry,
): TreatmentRoute | null {
  const { width, height, cards } = geometry;

  if (cards.length === 0 || width <= 0 || height <= 0) {
    return null;
  }

  const first = cards[0];
  const last = cards[cards.length - 1];

  const points: Waypoint[] = [
    { x: -width * 0.0125, y: first.top - first.height * LEAD_IN, kind: "start" },
  ];

  cards.forEach((card, index) => {
    points.push({
      x: laneX(card, width),
      y: card.top + card.height / 2,
      kind: "lane",
    });

    const next = cards[index + 1];

    if (next) {
      points.push({
        x: (innerEdge(card) + innerEdge(next)) / 2,
        y: (card.top + card.height + next.top) / 2,
        kind: "cross",
      });
    }
  });

  const lastLane = laneX(last, width);
  const outerEdge = isLeftAligned(last) ? width : 0;

  points.push({
    x: lastLane + (outerEdge - lastLane) * END_DRIFT,
    y: last.top + last.height + last.height * TAIL,
    kind: "end",
  });

  let d = `M ${round(points[0].x)} ${round(points[0].y)}`;

  for (let index = 1; index < points.length; index += 1) {
    const from = points[index - 1];
    const to = points[index];
    const dx = to.x - from.x;
    const dy = to.y - from.y;

    if (to.kind === "lane") {
      // Sai na horizontal e só depois desce, para limpar o card logo abaixo.
      d +=
        ` C ${round(from.x + dx * INTO_LANE_X)} ${round(from.y)}` +
        ` ${round(to.x)} ${round(from.y + dy * INTO_LANE_Y)}` +
        ` ${round(to.x)} ${round(to.y)}`;
    } else if (to.kind === "cross") {
      // Desce colada à faixa e só vira para o centro perto do vão.
      d +=
        ` C ${round(from.x)} ${round(from.y + dy * OUT_LANE_Y)}` +
        ` ${round(to.x + (from.x - to.x) * OUT_LANE_X)} ${round(to.y)}` +
        ` ${round(to.x)} ${round(to.y)}`;
    } else {
      d +=
        ` C ${round(from.x)} ${round(from.y + dy * 0.5)}` +
        ` ${round(to.x)} ${round(to.y - dy * 0.3)}` +
        ` ${round(to.x)} ${round(to.y)}`;
    }
  }

  const start = points[0];
  const end = points[points.length - 1];
  const revealY = Math.max(0, start.y - 16);

  return {
    d,
    viewBox: `0 0 ${round(width)} ${round(height)}`,
    origin: { x: round(width * 0.0036), y: round(start.y + 3) },
    end: { x: round(end.x), y: round(end.y) },
    revealY: round(revealY),
    revealHeight: round(height - revealY),
  };
}

/** Lê a geometria da seção sem sofrer com os transforms de entrada do GSAP. */
export function readTreatmentGeometry(
  section: HTMLElement,
): TreatmentRouteGeometry {
  const cards = Array.from(
    section.querySelectorAll<HTMLElement>("[data-treatment-card]"),
  ).map((card) => ({
    top: card.offsetTop,
    left: card.offsetLeft,
    width: card.offsetWidth,
    height: card.offsetHeight,
  }));

  return { width: section.offsetWidth, height: section.offsetHeight, cards };
}
