/**
 * Сигнатурный визуал: контур торца ламели (вазообразный профиль с пазом
 * сверху/снизу и волной-крюком по бокам). Ламели одна за другой заезжают
 * по диагонали и защёлкиваются в паз соседней — так собирается стена,
 * венец за венцом. Вставка-«пламя» проявляется в момент, когда две
 * ламели сцепились.
 */
const CELL =
  "M40,30 C40,18 48,10 62,10 L68,10 L68,24 L92,24 L92,10 L98,10 " +
  "C112,10 120,18 120,30 L120,52 C138,54 148,66 148,80 C148,92 140,98 128,98 " +
  "L128,122 C140,122 148,128 148,140 C148,154 138,166 120,168 " +
  "L120,190 C120,202 112,210 98,210 L92,210 L92,196 L68,196 L68,210 L62,210 " +
  "C48,210 40,202 40,190 L40,168 C22,166 12,154 12,140 C12,128 20,122 32,122 " +
  "L32,98 C20,98 12,92 12,80 C12,66 22,54 40,52 Z";

const FLAME =
  "M20,4 C20,22 26,28 33,33 C39,37 37,44 28,42 C23,41 21,48 20,52 " +
  "C19,48 17,41 12,42 C3,44 1,37 7,33 C14,28 20,22 20,4 Z";

const COLS = 3;
const ROWS = 2;
const STEP_X = 122;
const STEP_Y = 186;
const CELL_W = 160;
const CELL_H = 220;
const PIECE_DURATION = 0.6;
const PIECE_GAP = 0.45;
const START_DELAY = 0.2;

const tones = ["#c9a06a", "#b58a55", "#a67c4a", "#b58a55", "#a67c4a", "#c9a06a"];

// Порядок, в котором ламели встают на место: сначала «маточная» деталь
// в центре кладки, дальше — соседние, будто стена растёт вокруг неё.
const order = [3, 4, 1, 0, 5, 2];

export function LamellaJoint({ className = "" }: { className?: string }) {
  const width = STEP_X * (COLS - 1) + CELL_W;
  const height = STEP_Y * (ROWS - 1) + CELL_H;
  const cells = Array.from({ length: ROWS * COLS }, (_, i) => i);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-label="Сборка стены Naturi: ламели по очереди заезжают по диагонали и защёлкиваются пазом в соседнюю — венец за венцом"
    >
      <defs>
        <linearGradient id="lamella-grain" x1="0" y1="0" x2="1" y2="0.15">
          <stop offset="0%" stopColor="white" stopOpacity="0.18" />
          <stop offset="55%" stopColor="white" stopOpacity="0" />
          <stop offset="100%" stopColor="black" stopOpacity="0.14" />
        </linearGradient>
      </defs>

      {cells.map((index) => {
        const row = Math.floor(index / COLS);
        const col = index % COLS;
        const tone = tones[index % tones.length];
        const seq = order.indexOf(index);
        const pieceDelay = START_DELAY + seq * PIECE_GAP;
        const flameDelay = pieceDelay + PIECE_DURATION * 0.7;

        return (
          <g key={index} transform={`translate(${col * STEP_X} ${row * STEP_Y})`}>
            <g
              className="joint-piece"
              style={{
                animationDelay: `${pieceDelay}s`,
                animationDuration: `${PIECE_DURATION}s`,
              }}
            >
              <path d={CELL} fill={tone} stroke="#5b4326" strokeWidth="1.5" strokeLinejoin="round" />
              <path d={CELL} fill="url(#lamella-grain)" />
            </g>
            <path
              d={FLAME}
              className="fill-coral joint-flame"
              transform="translate(60 80)"
              style={{ animationDelay: `${flameDelay}s` }}
            />
          </g>
        );
      })}
    </svg>
  );
}
