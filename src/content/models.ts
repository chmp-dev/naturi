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
  /** Страница проекта на naturi.su — не задана у придуманных моделей */
  source?: string;
  /** Путь к фото; пока не задан — используется генеративная заглушка */
  image?: string;
};

// Комфорт и Лавант — реальные проекты с naturi.su (цены и параметры оттуда).
// Заимка, Просека, Опушка и Взгорье — придуманные модели под готовые визуализации,
// поэтому у них нет ссылки на страницу-первоисточник.
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
    slug: "zaimka",
    name: "Заимка",
    area: 87,
    terrace: 38,
    floors: 1,
    bedrooms: 3,
    bathrooms: 1,
    price: 8_490_000,
    tone: "#b58a55",
    image: "/projects/hard/1.webp",
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
    slug: "proseka",
    name: "Просека",
    area: 248,
    terrace: 87,
    floors: 1,
    bedrooms: 4,
    bathrooms: 4,
    price: 26_680_000,
    tone: "#5b4326",
    image: "/projects/grac/1.webp",
  },
  {
    slug: "opushka",
    name: "Опушка",
    area: 98,
    terrace: 25,
    floors: 1,
    bedrooms: 3,
    bathrooms: 2,
    price: 8_890_000,
    tone: "#a9793a",
    image: "/projects/norvezhskij-3/1.webp",
  },
  {
    slug: "vzgorye",
    name: "Взгорье",
    area: 160,
    terrace: 79,
    floors: 1,
    bedrooms: 3,
    bathrooms: 2,
    price: 13_980_000,
    tone: "#77603c",
    image: "/projects/alpijskoe-shale/1.webp",
  },
];

export function getModel(slug: string) {
  return models.find((m) => m.slug === slug);
}
