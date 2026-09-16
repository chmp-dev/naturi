import type { Metadata } from "next";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: `Контакты — ${company.name}`,
  description: `Свяжитесь с ${company.name}: телефон, почта, Telegram и адрес производства.`,
};

export default function ContactsPage() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-pine">
          Контакты
        </p>
        <h1 className="mt-4 max-w-xl font-display text-[36px] leading-tight text-ink md:text-[44px]">
          Получить консультацию
        </h1>
        <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-ink-soft">
          Ответим в рабочее время и вернёмся с ориентиром по срокам и бюджету
          под вашу планировку.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div className="flex flex-col gap-8">
            <ul className="flex flex-col gap-5">
              <li>
                <a
                  href={`tel:${company.phoneHref}`}
                  className="flex items-center gap-3 text-[18px] font-medium text-ink transition-colors duration-200 hover:text-pine"
                >
                  <Phone className="h-5 w-5 text-pine" aria-hidden />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 text-[16px] text-ink transition-colors duration-200 hover:text-pine"
                >
                  <Mail className="h-5 w-5 text-pine" aria-hidden />
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={company.telegram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 text-[16px] text-ink transition-colors duration-200 hover:text-pine"
                >
                  <Send className="h-5 w-5 text-pine" aria-hidden />
                  Написать в Telegram
                </a>
              </li>
              <li className="flex items-start gap-3 text-[16px] text-ink">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-pine" aria-hidden />
                <span>
                  {company.address}
                  <br />
                  <span className="text-ink-soft">{company.workHours}</span>
                </span>
              </li>
            </ul>

            <div className="rounded-2xl border border-line bg-bg-soft p-6">
              <p className="text-[14px] leading-relaxed text-ink-soft">
                {company.legalName}. Заявки принимаются через форму на сайте —
                интеграция с Telegram и CRM ещё настраивается, поэтому мы
                отвечаем на заявки вручную в рабочее время.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-6 md:p-8">
            <h2 className="font-display text-[22px] text-ink">Заявка</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
