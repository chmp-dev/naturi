/**
 * Стена в разрезе: торец ламели (вазообразный профиль с пазом сверху и
 * снизу, волной-крюком по бокам) повторяется 3×2 внахлёст. На стыке
 * каждого венца — деталь-«пламя»: там паз одной ламели входит в паз
 * следующей.
 */
const CELL =
  "M40,30 C40,18 48,10 62,10 L68,10 L68,24 L92,24 L92,10 L98,10 " +
  "C112,10 120,18 120,30 L120,52 C138,54 148,66 148,80 C148,92 140,98 128,98 " +
  "L128,122 C140,122 148,128 148,140 C148,154 138,166 120,168 " +
  "L120,190 C120,202 112,210 98,210 L92,210 L92,196 L68,196 L68,210 L62,210 " +
  "C48,210 40,202 40,190 L40,168 C22,166 12,154 12,140 C12,128 20,122 32,122 " +
  "L32,98 C20,98 12,92 12,80 C12,66 22,54 40,52 Z";

const FLAME =
  "M20,2 C20,22 27,29 34,35 C41,40 38,48 28,45 C22,43 20,50 20,56 " +
  "C20,50 18,43 12,45 C2,48 -1,40 6,35 C13,29 20,22 20,2 Z";

const COLS = 3;
const ROWS = 2;
const STEP_X = 122;
const STEP_Y = 186;
const CELL_W = 160;
const CELL_H = 220;

const tones = ["#c9a06a", "#b58a55", "#a67c4a", "#b58a55", "#a67c4a", "#c9a06a"];

export function LamellaWall({ className = "" }: { className?: string }) {
  const width = STEP_X * (COLS - 1) + CELL_W;
  const height = STEP_Y * (ROWS - 1) + CELL_H;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-label="Стена Naturi в разрезе: торцы ламелей сложены внахлёст, на стыке каждого венца — паз, которым одна ламель сцепляется со следующей"
    >
      <defs>
        <linearGradient id="lamella-grain" x1="0" y1="0" x2="1" y2="0.15">
          <stop offset="0%" stopColor="white" stopOpacity="0.18" />
          <stop offset="55%" stopColor="white" stopOpacity="0" />
          <stop offset="100%" stopColor="black" stopOpacity="0.14" />
        </linearGradient>
      </defs>

      {Array.from({ length: ROWS }).map((_, row) =>
        Array.from({ length: COLS }).map((_, col) => {
          const index = row * COLS + col;
          const tone = tones[index % tones.length];
          return (
            <g key={`cell-${row}-${col}`} transform={`translate(${col * STEP_X} ${row * STEP_Y})`}>
              <path d={CELL} fill={tone} stroke="#5b4326" strokeWidth="1.5" strokeLinejoin="round" />
              <path d={CELL} fill="url(#lamella-grain)" />
            </g>
          );
        })
      )}

      {/* «пламя» на стыке венцов — по одному на колонку */}
      {Array.from({ length: COLS }).map((_, col) => (
        <path
          key={`flame-${col}`}
          d={FLAME}
          className="fill-coral"
          transform={`translate(${col * STEP_X + 60} ${STEP_Y - 30})`}
        />
      ))}
    </svg>
  );
}
