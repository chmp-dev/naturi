export type HouseModel = {
  slug: string;
  name: string;
  area: number;
  terrace: number;
  floors: number;
  bedrooms: number;
  bathrooms: number;
  price: number;
  tone: string;
  /** Страница проекта на naturi.su */
  source: string;
  /** Путь к фото; пока не задан — используется генеративная заглушка */
  image?: string;
};

// Популярные проекты с naturi.su (цены и параметры — оттуда же)
export const models: HouseModel[] = [
  {
    slug: "komfort",
    name: "Комфорт",
    area: 228,
    terrace: 35,
    floors: 2,
    bedrooms: 4,
    bathrooms: 3,
    price: 15_590_000,
    tone: "#8a6a3b",
    source: "https://naturi.su/product/komfort",
  },
  {
    slug: "hard",
    name: "Хард",
    area: 87,
    terrace: 38,
    floors: 1,
    bedrooms: 3,
    bathrooms: 1,
    price: 8_490_000,
    tone: "#b58a55",
    source: "https://naturi.su/product/hard-2",
  },
  {
    slug: "lavant",
    name: "Лавант",
    area: 240,
    terrace: 59,
    floors: 2,
    bedrooms: 5,
    bathrooms: 3,
    price: 18_480_000,
    tone: "#6c5637",
    source: "https://naturi.su/product/lavant",
  },
  {
    slug: "grac",
    name: "Грац",
    area: 248,
    terrace: 87,
    floors: 1,
    bedrooms: 4,
    bathrooms: 4,
    price: 26_680_000,
    tone: "#5b4326",
    source: "https://naturi.su/product/gracz",
  },
  {
    slug: "norvezhskij-3",
    name: "Норвежский 3",
    area: 98,
    terrace: 25,
    floors: 1,
    bedrooms: 3,
    bathrooms: 2,
    price: 8_890_000,
    tone: "#a9793a",
    source: "https://naturi.su/product/norvezhskij-dom-3",
  },
  {
    slug: "alpijskoe-shale",
    name: "Альпийское Шале",
    area: 160,
    terrace: 79,
    floors: 1,
    bedrooms: 3,
    bathrooms: 2,
    price: 13_980_000,
    tone: "#77603c",
    source: "https://naturi.su/product/alpijskoe-shale",
  },
];

export function getModel(slug: string) {
  return models.find((m) => m.slug === slug);
}
