import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  phone?: string;
  message?: string;
};

/**
 * Приём заявок. Интеграция с Telegram/CRM не настроена —
 * заявка валидируется и логируется на сервере, чтобы форму
 * можно было проверить и показать пользователю уже сейчас.
 */
export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Некорректный запрос" }, { status: 400 });
  }

  const name = payload.name?.trim();
  const phone = payload.phone?.trim();

  if (!name || !phone) {
    return NextResponse.json(
      { error: "Укажите имя и телефон" },
      { status: 422 }
    );
  }

  console.info("[Naturi] Новая заявка (интеграция не настроена):", {
    name,
    phone,
    message: payload.message?.trim() || null,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true, delivered: false });
}
