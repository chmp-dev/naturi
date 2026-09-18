"use client";

import { useEffect, useRef } from "react";
import { withBasePath } from "@/lib/base-path";

const PLAYBACK_RATE = 0.6;
const PAUSE_BETWEEN_LOOPS_MS = 2200;

/**
 * Реальная видеозапись сборки стены: ламели одна за другой заезжают
 * и защёлкиваются пазом в соседнюю, пока не соберётся кладка 3×2.
 * Проигрываем медленнее оригинала и держим паузу на готовой стене
 * перед повтором — без loop-атрибута, чтобы он не зацикливался
 * мгновенно. Автовоспроизведение отключаем для prefers-reduced-motion —
 * тогда остаётся только постер-кадр с готовой стеной.
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
      return;
    }

    video.playbackRate = PLAYBACK_RATE;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const restart = () => {
      timeoutId = setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
      }, PAUSE_BETWEEN_LOOPS_MS);
    };

    video.addEventListener("ended", restart);
    video.play().catch(() => {});

    return () => {
      video.removeEventListener("ended", restart);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      playsInline
      preload="auto"
      poster={withBasePath("/media/wall-assembly-poster.webp")}
      aria-label="Видео: ламели одна за другой заезжают и защёлкиваются пазом в соседнюю, пока не соберётся стена"
    >
      <source src={withBasePath("/media/wall-assembly.mp4")} type="video/mp4" />
    </video>
  );
}
