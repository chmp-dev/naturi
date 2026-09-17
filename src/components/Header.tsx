"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Container } from "./Container";
import { company, nav } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line-soft/70 bg-bg/85 backdrop-blur-md">
      <Container className="flex min-h-[72px] items-center justify-between gap-4 py-3">
        <Link
          href="/"
          className="shrink-0 font-display text-[22px] text-ink"
        >
          Naturi
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Основная навигация">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-1 text-[15px] transition-colors duration-200 ${
                  active ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-[1px] left-0 h-[2px] w-full rounded-full bg-pine" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <a
            href={`tel:${company.phoneHref}`}
            className="flex items-center gap-2 whitespace-nowrap text-[15px] font-medium text-ink hover:text-coral-deep transition-colors duration-200"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {company.phone}
          </a>
          <Link
            href="/kontakty"
            className="inline-flex min-h-[44px] items-center justify-center whitespace-nowrap rounded-full bg-pine px-5 text-[15px] font-medium text-bg transition-colors duration-200 hover:bg-pine-strong cursor-pointer"
          >
            Получить консультацию
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-ink cursor-pointer lg:hidden"
        >
          {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
        </button>
      </Container>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-line-soft bg-bg px-5 pb-8 pt-4 lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Мобильная навигация">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-[17px] text-ink hover:bg-ink/[0.04]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-line-soft pt-4">
            <a
              href={`tel:${company.phoneHref}`}
              className="flex items-center gap-2 px-3 text-[16px] font-medium text-ink"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {company.phone}
            </a>
            <Link
              href="/kontakty"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-pine px-5 text-[15px] font-medium text-bg"
            >
              Получить консультацию
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
