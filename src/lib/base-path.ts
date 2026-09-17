// next/image не добавляет basePath к src сам, когда images.unoptimized: true —
// это относится только к CSS/JS. Префикс для GitHub Pages добавляем вручную,
// теми же правилами, что и в next.config.ts.
const basePath = process.env.GITHUB_PAGES === "true" ? "/naturi" : "";

export function withBasePath(src: string): string {
  return `${basePath}${src}`;
}
