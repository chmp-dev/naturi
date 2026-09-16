import { ArrowRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <Container className="text-center">
        <p className="font-display text-[15px] uppercase tracking-[0.14em] text-pine">
          404
        </p>
        <h1 className="mt-4 font-display text-[32px] leading-tight text-ink md:text-[40px]">
          Такой страницы нет
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-ink-soft">
          Возможно, ссылка устарела или страница была перемещена. Посмотрите
          каталог проектов или вернитесь на главную.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" variant="primary">
            На главную
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
          <Button href="/modeli" variant="secondary">
            Перейти в каталог
          </Button>
        </div>
      </Container>
    </section>
  );
}
