export function formatPrice(value: number): string {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  }).format(value);
}

const pluralRules = new Intl.PluralRules("ru-RU");

/** plural(4, ["спальня", "спальни", "спален"]) → "4 спальни" */
export function plural(n: number, [one, few, many]: [string, string, string]): string {
  const form = pluralRules.select(n);
  return `${n} ${form === "one" ? one : form === "few" ? few : many}`;
}
