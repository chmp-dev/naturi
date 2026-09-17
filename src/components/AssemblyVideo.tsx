"use client";

import { useEffect, useRef } from "react";
import { withBasePath } from "@/lib/base-path";

/**
 * Реальная видеозапись сборки ламели: деталь заезжает по диагонали
 * и защёлкивается в паз соседней. Автовоспроизведение отключаем для
 * prefers-reduced-motion — тогда остаётся только постер-кадр.
 */
export function AssemblyVideo({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    // Нативный autoplay надёжнее программного play() под автоматизацией
    // и строгими политиками браузера — здесь только глушим движение,
    // если пользователь просил меньше анимации.
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
      poster={withBasePath("/media/lamella-assembly-poster.webp")}
      aria-label="Видео: ламель заезжает по диагонали и защёлкивается пазом в соседнюю"
    >
      <source src={withBasePath("/media/lamella-assembly.mp4")} type="video/mp4" />
    </video>
  );
}
