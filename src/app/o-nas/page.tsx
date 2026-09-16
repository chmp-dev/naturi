import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { EcologySection } from "@/components/EcologySection";
import { about, company, ctaBanner, promises, technology } from "@/content/site";

export const metadata: Metadata = {
  title: `О компании — ${company.name}`,
  description: about.lead,
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink-dark-bg py-16 text-ink-dark-fg md:py-20">
        <Container>
          <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink-dark-muted">
            {about.kicker}
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-[38px] leading-[1.1] md:text-[48px]">
            {about.title}
          </h1>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-dark-muted">{about.lead}</p>

          <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-6 border-t border-ink-dark-line pt-8 md:grid-cols-4">
            {about.facts.map((f) => (
              <div key={f.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-[13px] leading-snug text-ink-dark-muted">{f.label}</dt>
                <dd className="font-display text-3xl">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ─────────── ТЕХНОЛОГИЯ ─────────── */}
      <section id="tehnologiya" className="scroll-mt-24 py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-pine">
              Технология строительства
            </p>
            <h2 className="mt-4 font-display text-[30px] leading-tight text-ink md:text-[36px]">
              {technology.title}
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
              Стеновые элементы из массивной древесины стоят вертикально. Ваш дом
              будет надёжным, тёплым и экологичным.
            </p>
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

      {/* ─────────── ВАШ ДОМ БУДЕТ ─────────── */}
      <section className="bg-bg-soft py-20 md:py-28">
        <Container>
          <h2 className="font-display text-[30px] leading-tight text-ink md:text-[36px]">
            Ваш дом будет
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {promises.map((item) => (
              <div key={item.title} className="border-t-2 border-pine pt-5">
                <h3 className="font-display text-[24px] text-ink">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <EcologySection />

      {/* ─────────── НАСЛЕДИЕ ─────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <h2 className="max-w-xl font-display text-[30px] leading-tight text-ink md:text-[36px]">
            Дома из вертикального бруса строят очень давно
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {about.heritage.map((item) => (
              <div key={item.title} className="border-t-2 border-ink/10 pt-5">
                <span className="font-display text-[15px] text-pine">{item.mark}</span>
                <h3 className="mt-3 font-display text-[18px] text-ink">{item.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─────────── УСЛУГИ ─────────── */}
      <section className="bg-bg-soft py-20 md:py-28">
        <Container>
          <h2 className="font-display text-[30px] leading-tight text-ink md:text-[36px]">
            Наши услуги
          </h2>
          <ul className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {about.services.map((s) => (
              <li key={s} className="border-b border-line py-4 text-[16px] text-ink">
                {s}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-ink-dark-bg py-20 text-ink-dark-fg md:py-24">
        <Container className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="max-w-md font-display text-[28px] leading-tight md:text-[32px]">
              {ctaBanner.title}
            </h2>
            <p className="mt-3 max-w-md text-[15.5px] leading-relaxed text-ink-dark-muted">
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
