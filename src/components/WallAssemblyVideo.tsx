"use client";

import { useEffect, useRef } from "react";
import { withBasePath } from "@/lib/base-path";

/**
 * Реальная видеозапись сборки стены: ламели одна за другой заезжают
 * и защёлкиваются пазом в соседнюю, пока не соберётся кладка 3×2.
 * Автовоспроизведение отключаем для prefers-reduced-motion — тогда
 * остаётся только постер-кадр с готовой стеной.
 */
export function WallAssemblyVideo({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      video.pause();
      video.currentTime = 0;
    } else {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={withBasePath("/media/wall-assembly-poster.webp")}
      aria-label="Видео: ламели одна за другой заезжают и защёлкиваются пазом в соседнюю, пока не соберётся стена"
    >
      <source src={withBasePath("/media/wall-assembly.mp4")} type="video/mp4" />
    </video>
  );
}
