/**
 * Сигнатурный визуал: спил ствола с годовыми кольцами. Из спила вынут
 * сектор — он стоит рядом вертикально, как ламель в стене дома.
 * Кольца неравномерные, как у настоящего дерева: узкие — засушливые годы.
 */
export function GrowthRings({ className = "" }: { className?: string }) {
  const rings = [52, 71, 87, 106, 118, 138, 152, 172, 190];
  const slot =
    "M 187.64,161.96 L 141.29,19.31 A 190 190 0 0 1 258.71,19.31 L 212.36,161.96 A 40 40 0 0 0 187.64,161.96 Z";

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Спил ствола с годовыми кольцами. Из него вынут сектор, который стоит рядом вертикально — так брус ставится в стену"
    >
      <defs>
        <mask id="slot-mask">
          <rect width="400" height="400" fill="white" />
          <path d={slot} fill="black" />
        </mask>
      </defs>

      <g mask="url(#slot-mask)">
        <circle cx="200" cy="200" r="196" fill="currentColor" fillOpacity="0.04" />
        {rings.map((r, i) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke="currentColor"
            strokeWidth={i % 3 === 0 ? 1.4 : 0.7}
            strokeOpacity={i % 3 === 0 ? 0.32 : 0.16}
          />
        ))}
        <circle cx="200" cy="200" r="18" fill="currentColor" fillOpacity="0.18" />
      </g>

      <path
        d={slot}
        fill="none"
        className="stroke-coral"
        strokeWidth="1"
        strokeDasharray="4 5"
      />

      <g className="plank">
        <path
          d="M 330,40 L 358,40 L 358,248 L 330,248 Z"
          className="fill-coral"
        />
        {[344].map((x) => (
          <line key={x} x1={x} y1="46" x2={x} y2="242" stroke="currentColor" strokeOpacity="0.25" />
        ))}
      </g>
    </svg>
  );
}
