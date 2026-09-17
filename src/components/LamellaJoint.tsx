/**
 * Сигнатурный визуал: торцевой профиль ламели Naturi — гребёнка сверху и
 * снизу держит следующий венец, боковые "крюки" с пазом под нагель держат
 * соседнюю ламель. Три торца в ряд, как в разрезе собранной стены;
 * центральный паз подсвечен кораллом — здесь элементы сцепляются.
 */
const PROFILE =
  "M60,34 L82,34 L82,18 L92,18 L92,34 L108,34 L108,18 L118,18 L118,34 " +
  "L140,34 L172,46 L150,60 L150,88 L145,88 L145,92 L150,92 L150,100 " +
  "L150,108 L145,108 L145,112 L150,112 L150,140 L172,154 L140,166 " +
  "L118,166 L118,182 L108,182 L108,166 L92,166 L92,182 L82,182 L82,166 " +
  "L60,166 L28,154 L50,140 L50,112 L55,112 L55,108 L50,108 L50,100 " +
  "L50,92 L55,92 L55,88 L50,88 L50,60 L28,46 Z";

const pieces = [
  { x: 0, tone: "#c9a06a", shade: "#a9793a" },
  { x: 190, tone: "#b58a55", shade: "#8a6a3b" },
  { x: 380, tone: "#a67c4a", shade: "#77603c" },
];

export function LamellaJoint({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="-20 0 620 200"
      className={className}
      role="img"
      aria-label="Торцевой профиль трёх ламелей Naturi в разрезе стены: гребёнка сверху и снизу держит соседний венец, паз сбоку — соседнюю ламель"
    >
      <defs>
        <linearGradient id="lamella-grain" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0.16" />
          <stop offset="50%" stopColor="white" stopOpacity="0" />
          <stop offset="100%" stopColor="black" stopOpacity="0.12" />
        </linearGradient>
      </defs>

      {pieces.map((p) => (
        <g key={p.x} transform={`translate(${p.x} 0)`}>
          <path d={PROFILE} fill={p.tone} stroke={p.shade} strokeWidth="1.5" strokeLinejoin="round" />
          <path d={PROFILE} fill="url(#lamella-grain)" />
        </g>
      ))}

      {/* нагель, скрепляющий пазы всех трёх ламелей */}
      <g className="dowel">
        <rect x="-10" y="94" width="610" height="12" rx="6" className="fill-coral" />
      </g>
    </svg>
  );
}
