import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/Container";
import { ModelPlaceholder } from "@/components/ModelPlaceholder";
import { ModelCard } from "@/components/ModelCard";
import { ContactForm } from "@/components/ContactForm";
import { getModel, models } from "@/content/models";
import { calculator, company } from "@/content/site";
import { formatPrice, plural } from "@/lib/format";
import { withBasePath } from "@/lib/base-path";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return models.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const model = getModel(slug);
  if (!model) return {};

  return {
    title: `Проект «${model.name}», ${model.area} м² — ${company.name}`,
    description: `Дом ${model.area} м² из вертикального бруса: терраса ${model.terrace} м², ${plural(model.bedrooms, ["спальня", "спальни", "спален"])}, ${plural(model.bathrooms, ["санузел", "санузла", "санузлов"])}.`,
  };
}

export default async function ModelPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const model = getModel(slug);
  if (!model) notFound();

  const related = models.filter((m) => m.slug !== model.slug).slice(0, 3);

  return (
    <>
      <section className="py-8 md:py-10">
        <Container>
          <Link
            href="/modeli"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-ink-soft transition-colors duration-200 hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            Все проекты
          </Link>
        </Container>
      </section>

      <section>
        <Container className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <div
            className={`relative overflow-hidden rounded-2xl ${
              model.image ? "aspect-[16/9]" : "aspect-[4/3]"
            }`}
          >
            {model.image ? (
              <Image
                src={withBasePath(model.image)}
                alt={`Дом «${model.name}», ${model.area} м²`}
                fill
                sizes="(min-width: 1024px) 640px, 92vw"
                className="object-cover"
                priority
              />
            ) : (
              <ModelPlaceholder tone={model.tone} label={model.name} className="absolute inset-0" />
            )}
          </div>

          <div>
            <h1 className="font-display text-[36px] leading-tight text-ink md:text-[44px]">
              {model.name}
            </h1>
            <p className="mt-3 text-[17px] leading-relaxed text-ink-soft">
              Дом из вертикального бруса без усадки, клея и утеплителей в стенах.
            </p>

            <dl className="mt-7 grid grid-cols-2 gap-x-4 gap-y-5 border-y border-line-soft py-6 sm:grid-cols-3">
              {[
                { k: "Дом", v: `${model.area} м²` },
                { k: "Терраса", v: `${model.terrace} м²` },
                { k: "Этажи", v: model.floors },
                { k: "Спальни", v: model.bedrooms },
                { k: "Санузлы", v: model.bathrooms },
              ].map((row) => (
                <div key={row.k}>
                  <dt className="text-[12px] uppercase tracking-[0.06em] text-ink-faint">{row.k}</dt>
                  <dd className="mt-1.5 text-[18px] font-medium text-ink">{row.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 rounded-2xl border border-line bg-bg-soft p-6">
              <p className="text-[13px] uppercase tracking-[0.06em] text-ink-faint">Стоимость проекта</p>
              <p className="mt-1.5 font-display text-[28px] text-ink">
                {formatPrice(model.price)}
              </p>
              <p className="mt-1 text-[13px] text-ink-faint">{calculator.note}</p>
              {model.source && (
                <a
                  href={model.source}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-4 inline-block text-[14px] font-medium text-coral-deep hover:text-coral-deep-strong"
                >
                  Проект на naturi.su
                </a>
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="mt-16 bg-bg-soft py-16 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <h2 className="font-display text-[28px] leading-tight text-ink md:text-[32px]">
              Рассчитать проект «{model.name}»
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-soft">
              Оставьте контакты — вернёмся с уточнённой сметой под ваш участок
              и вариантами адаптации планировки.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-surface p-6 md:p-8">
            <ContactForm modelName={model.name} />
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="py-16 md:py-20">
          <Container>
            <h2 className="font-display text-[24px] text-ink">Другие проекты</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((m) => (
                <ModelCard key={m.slug} model={m} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
