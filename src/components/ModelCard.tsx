import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ModelPlaceholder } from "./ModelPlaceholder";
import { formatPrice, plural } from "@/lib/format";
import { withBasePath } from "@/lib/base-path";
import type { HouseModel } from "@/content/models";

export function ModelCard({ model }: { model: HouseModel }) {
  return (
    <Link
      href={`/modeli/${model.slug}`}
      className="group block overflow-hidden rounded-2xl border border-line bg-surface transition-shadow duration-300 hover:shadow-[0_18px_48px_-24px_rgba(34,29,22,0.35)]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {model.image ? (
          <Image
            src={withBasePath(model.image)}
            alt={`Проект «${model.name}», ${model.area} м²`}
            fill
            sizes="(min-width: 1024px) 380px, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <ModelPlaceholder
            tone={model.tone}
            label={model.name}
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]"
          />
        )}
        <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-bg/90 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl text-ink">{model.name}</h3>
          <span className="whitespace-nowrap text-[15px] font-medium text-coral-deep">
            {formatPrice(model.price)}
          </span>
        </div>

        <p className="mt-2 text-[15px] text-ink-soft">
          Дом {model.area} м² · терраса {model.terrace} м²
        </p>

        <p className="mt-4 border-t border-line-soft pt-4 text-[13px] text-ink-faint">
          {plural(model.floors, ["этаж", "этажа", "этажей"])} ·{" "}
          {plural(model.bedrooms, ["спальня", "спальни", "спален"])} ·{" "}
          {plural(model.bathrooms, ["санузел", "санузла", "санузлов"])}
        </p>
      </div>
    </Link>
  );
}
