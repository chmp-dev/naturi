import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ModelCard } from "@/components/ModelCard";
import { models } from "@/content/models";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: `Проекты домов — ${company.name}`,
  description:
    "Популярные проекты премиальных домов из дерева по технологии NATURI: от 87 до 248 м².",
};

export default function ModeliPage() {
  return (
    <>
      <section className="bg-ink-dark-bg py-16 text-ink-dark-fg md:py-20">
        <Container>
          <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink-dark-muted">
            Каталог
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-[38px] leading-[1.1] md:text-[48px]">
            Популярные проекты
          </h1>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-dark-muted">
            Мы бесплатно рассчитаем стоимость вашего проекта — нужно только
            заполнить форму.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {models.map((model) => (
              <ModelCard key={model.slug} model={model} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
