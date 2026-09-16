import Link from "next/link";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Container } from "./Container";
import { company, nav } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-ink-dark-bg text-ink-dark-fg">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="font-display text-2xl">Naturi</div>
          <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-ink-dark-muted">
            {company.tagline} · {company.descriptor}
          </p>
          <p className="mt-6 text-[13px] text-ink-dark-muted/80">
            {company.experience} в строительстве деревянных домов
          </p>
        </div>

        <div>
          <div className="text-[13px] font-medium uppercase tracking-[0.08em] text-ink-dark-muted">
            Навигация
          </div>
          <nav className="mt-4 flex flex-col gap-3" aria-label="Навигация в подвале">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] text-ink-dark-fg/90 transition-colors duration-200 hover:text-coral"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <div className="text-[13px] font-medium uppercase tracking-[0.08em] text-ink-dark-muted">
            Контакты
          </div>
          <ul className="mt-4 flex flex-col gap-3 text-[15px] text-ink-dark-fg/90">
            <li>
              <a
                href={`tel:${company.phoneHref}`}
                className="flex items-center gap-2 transition-colors duration-200 hover:text-coral"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden />
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 transition-colors duration-200 hover:text-coral"
              >
                <Mail className="h-4 w-4 shrink-0" aria-hidden />
                {company.email}
              </a>
            </li>
            <li>
              <a
                href={company.telegram}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 transition-colors duration-200 hover:text-coral"
              >
                <Send className="h-4 w-4 shrink-0" aria-hidden />
                Telegram
              </a>
            </li>
            <li className="flex items-start gap-2 text-ink-dark-muted">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
              <span>
                {company.address}
                <br />
                {company.workHours}
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-ink-dark-line">
        <Container className="flex flex-col gap-2 py-6 text-[13px] text-ink-dark-muted md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {company.name}. Все права защищены.</span>
          <span>Информация на сайте не является публичной офертой.</span>
        </Container>
      </div>
    </footer>
  );
}
