import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ModelCard } from "@/components/ModelCard";
import { LamellaJoint } from "@/components/LamellaJoint";
import { EcologySection } from "@/components/EcologySection";
import {
  ctaBanner,
  faq,
  hero,
  process,
  promises,
  technology,
  testimonials,
} from "@/content/site";
import { models } from "@/content/models";

export default function Home() {
  const previewModels = models.slice(0, 3);

  return (
    <>
      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden bg-ink-dark-bg text-ink-dark-fg">
        <Container className="relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-4 lg:py-16">
          <div>
            <p className="animate-fade-up text-[13px] font-medium uppercase tracking-[0.14em] text-ink-dark-muted">
              {hero.kicker}
            </p>
            <h1 className="animate-fade-up mt-5 max-w-xl font-display text-[clamp(34px,10vw,42px)] leading-[1.08] md:text-[62px]">
              {hero.title.main}
              <br />
              <span className="text-ink-dark-muted">{hero.title.accent}</span>
            </h1>
            <p className="animate-fade-up mt-6 max-w-md text-[17px] leading-relaxed text-ink-dark-muted md:text-[18px]">
              {hero.body}
            </p>

            <div className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={hero.primaryCta.href} variant="onDark">
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href={hero.secondaryCta.href} variant="ghost" className="border border-ink-dark-line">
                {hero.secondaryCta.label}
              </Button>
            </div>

            <dl className="mt-14 grid max-w-xl grid-cols-2 gap-x-6 gap-y-6 border-t border-ink-dark-line pt-8 sm:grid-cols-4">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="flex min-w-0 flex-col-reverse">
                  <dt className="mt-1 text-[13px] leading-snug text-ink-dark-muted">{stat.label}</dt>
                  <dd>
                    <span className="font-display text-3xl text-ink-dark-fg md:text-4xl">
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span className="ml-1 text-[14px] text-ink-dark-muted">{stat.unit}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-[480px] lg:max-w-none">
            <LamellaJoint className="h-auto w-full" />
            <p className="mt-4 text-center text-[12.5px] leading-snug text-ink-dark-muted lg:text-right">
              Профиль ламели Naturi: элементы держат друг друга без клея и утеплителя
            </p>
          </div>
        </Container>
      </section>

      {/* ───────────── ВАШ ДОМ БУДЕТ ───────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <h2 className="font-display text-[32px] leading-tight text-ink md:text-[40px]">
            Ваш дом будет
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {promises.map((item) => (
              <div key={item.title} className="border-t-2 border-pine pt-5">
                <h3 className="font-display text-[26px] text-ink">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <EcologySection />

      {/* ───────────── ТЕХНОЛОГИЯ ───────────── */}
      <section className="bg-bg-soft py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-pine">
              Технология строительства
            </p>
            <h2 className="mt-4 font-display text-[30px] leading-tight text-ink md:text-[36px]">
              {technology.title}
            </h2>
            <Link
              href="/o-nas#tehnologiya"
              className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-medium text-ink transition-colors duration-200 hover:text-pine"
            >
              Подробнее о технологии
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {technology.points.map((point) => (
              <li key={point} className="py-5 text-[16px] leading-relaxed text-ink">
                {point}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ───────────── ПРОЕКТЫ ───────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="font-display text-[32px] leading-tight text-ink md:text-[40px]">
              Популярные проекты
            </h2>
            <Link
              href="/modeli"
              className="inline-flex items-center gap-1.5 text-[15px] font-medium text-ink transition-colors duration-200 hover:text-pine"
            >
              Перейти в каталог
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {previewModels.map((model) => (
              <ModelCard key={model.slug} model={model} />
            ))}
          </div>
        </Container>
      </section>

      {/* ───────────── ОТ ПРОЕКТА ДО КЛЮЧЕЙ ───────────── */}
      <section className="bg-bg-soft py-20 md:py-28">
        <Container>
          <div className="max-w-xl">
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-pine">
              Наши услуги
            </p>
            <h2 className="mt-4 font-display text-[32px] leading-tight text-ink md:text-[40px]">
              Дом 200 м² под ключ за шесть месяцев
            </h2>
          </div>

          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            {process.map((item, i) => (
              <li key={item.title} className="border-t-2 border-ink/10 pt-5">
                <span className="font-display text-[15px] text-pine">{i + 1}</span>
                <h3 className="mt-3 font-display text-[18px] text-ink">{item.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{item.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ───────────── ОТЗЫВЫ ───────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <h2 className="font-display text-[32px] leading-tight text-ink md:text-[40px]">
            Благодарность от клиентов
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-2xl border border-line bg-surface p-7">
                <blockquote className="text-[15px] leading-relaxed text-ink">«{t.text}»</blockquote>
                <figcaption className="mt-auto border-t border-line-soft pt-4 text-[14px]">
                  <span className="block font-medium text-ink">{t.name}</span>
                  <span className="text-ink-faint">{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────────── FAQ ───────────── */}
      <section className="bg-bg-soft py-20 md:py-28">
        <Container className="max-w-3xl">
          <h2 className="font-display text-[32px] leading-tight text-ink md:text-[40px]">
            Нас часто спрашивают
          </h2>

          <div className="mt-10 divide-y divide-line border-t border-line">
            {faq.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-medium text-ink">
                  {item.q}
                  <span
                    aria-hidden
                    className="shrink-0 text-xl text-pine transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-soft">{item.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────────── CTA ───────────── */}
      <section className="bg-ink-dark-bg py-20 text-ink-dark-fg md:py-24">
        <Container className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="max-w-md font-display text-[30px] leading-tight md:text-[36px]">
              {ctaBanner.title}
            </h2>
            <p className="mt-3 max-w-md text-[16px] leading-relaxed text-ink-dark-muted">
              {ctaBanner.text}
            </p>
          </div>
          <Button href={ctaBanner.cta.href} variant="onDark">
            {ctaBanner.cta.label}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </Container>
      </section>
    </>
  );
}
