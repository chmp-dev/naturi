function shade(hex: string, amount: number) {
  const c = hex.replace("#", "");
  const num = parseInt(c, 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + amount));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0xff) + amount));
  const b = Math.min(255, Math.max(0, (num & 0xff) + amount));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

/**
 * Генеративная заглушка вместо фото: вертикальные ламели в тон породы дерева.
 * Убирается автоматически, как только у модели задан `image`.
 */
export function ModelPlaceholder({
  tone,
  label,
  className = "",
}: {
  tone: string;
  label: string;
  className?: string;
}) {
  const light = shade(tone, 34);
  const dark = shade(tone, -22);

  return (
    <div
      role="img"
      aria-label={`Фактура дерева, силуэт дома «${label}»`}
      className={`overflow-hidden ${className}`}
      style={{
        backgroundImage: `repeating-linear-gradient(90deg, ${light} 0px, ${tone} 7px, ${dark} 14px, ${tone} 20px)`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.22) 100%)",
        }}
      />
    </div>
  );
}
