import { Container } from "./Container";
import { ecology } from "@/content/site";

export function EcologySection() {
  return (
    <section
      id="ekologichnost"
      aria-labelledby="ecology-title"
      className="scroll-mt-24 bg-ink-dark-bg py-20 text-ink-dark-fg md:py-28"
    >
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink-dark-muted">
            {ecology.kicker}
          </p>
          <h2
            id="ecology-title"
            className="mt-4 font-display text-[36px] leading-[1.08] md:text-[52px]"
          >
            {ecology.title}
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-ink-dark-muted">
            {ecology.lead}
          </p>
        </div>

        <ul className="grid gap-x-10 sm:grid-cols-2">
          {ecology.items.map((item) => (
            <li key={item.title} className="border-t border-ink-dark-line py-6">
              <h3 className="flex items-baseline gap-3 font-display text-[22px] leading-snug">
                <span aria-hidden className="h-2 w-2 shrink-0 translate-y-[-3px] rounded-full bg-coral" />
                {item.title}
              </h3>
              <p className="mt-2 pl-5 text-[15px] leading-relaxed text-ink-dark-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
