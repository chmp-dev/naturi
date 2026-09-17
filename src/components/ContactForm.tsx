"use client";

import { useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "./Button";

type Status = "idle" | "loading" | "success" | "error";
type Errors = Partial<Record<"name" | "phone", string>>;

export function ContactForm({ modelName }: { modelName?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Укажите, как к вам обращаться";
    if (!phone || phone.replace(/\D/g, "").length < 10) {
      nextErrors.phone = "Укажите корректный номер телефона";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      (nextErrors.name ? nameRef : phoneRef).current?.focus();
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          message: modelName
            ? `Интересует дом «${modelName}». ${data.get("message") ?? ""}`.trim()
            : data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-3 rounded-2xl border border-moss/25 bg-moss/[0.06] p-6"
      >
        <CheckCircle2 className="h-8 w-8 text-moss" aria-hidden />
        <p className="text-[17px] font-medium text-ink">Заявка принята</p>
        <p className="text-[15px] leading-relaxed text-ink-soft">
          Мы свяжемся с вами в ближайшее рабочее время. Приём заявок в Telegram
          и CRM ещё настраивается — на этом этапе заявка сохраняется на
          сервере.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="cursor-pointer text-[15px] font-medium text-coral-deep hover:text-coral-deep-strong"
        >
          Отправить ещё одну заявку
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="block text-[14px] font-medium text-ink">
          Имя <span aria-hidden="true">*</span>
        </label>
        <input
          ref={nameRef}
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          aria-required="true"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="mt-2 min-h-[48px] w-full rounded-xl border border-line bg-surface px-4 text-[16px] text-ink outline-none transition-colors duration-200 focus:border-pine"
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-[13px] text-red-700">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-[14px] font-medium text-ink">
          Телефон <span aria-hidden="true">*</span>
        </label>
        <input
          ref={phoneRef}
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="+7 900 000-00-00"
          aria-required="true"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className="mt-2 min-h-[48px] w-full rounded-xl border border-line bg-surface px-4 text-[16px] text-ink outline-none transition-colors duration-200 focus:border-pine"
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1.5 text-[13px] text-red-700">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-[14px] font-medium text-ink">
          Комментарий
          <span className="ml-1.5 font-normal text-ink-faint">необязательно</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="mt-2 w-full resize-none rounded-xl border border-line bg-surface px-4 py-3 text-[16px] text-ink outline-none transition-colors duration-200 focus:border-pine"
          placeholder={
            modelName ? `Например: участок, сроки, вопросы по проекту «${modelName}»` : "Например: участок, сроки, бюджет"
          }
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-[14px] text-red-700">
          Не получилось отправить заявку. Попробуйте ещё раз или напишите нам
          напрямую по телефону.
        </p>
      )}

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-fit">
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
        Отправить заявку
      </Button>

      <p className="text-[13px] leading-relaxed text-ink-faint">
        Нажимая «Отправить заявку», вы соглашаетесь на обработку персональных
        данных.
      </p>
    </form>
  );
}
