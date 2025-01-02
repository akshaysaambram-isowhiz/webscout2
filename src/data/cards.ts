export type Card = {
  cardId: number;
  projectCode: string;
  sku: string;
  description: string;
  programName: string;
  sport: string;
  collection: number;
  price: number;
  type: "Case" | "Box";
  date: string;
  website: string;
  avgPrice: number;
};

export const cards: Partial<Card>[] = [
  {
    collection: 201717,
    sku: "2-16700-04",
    programName: "NATIONAL TREASURES COLLEGIATE FOOTBALL CFB (2024) TC",
    type: "Case",
    price: 638.13,
  },
  {
    collection: 201717,
    sku: "2-16699-04",
    programName: "NATIONAL TREASURES COLLEGIATE FOOTBALL CFB (2024) TC",
    type: "Box",
    price: 758.56,
  },
  {
    collection: 201709,
    sku: "2-16197-02",
    programName: "BK FLAWLESS (23-24) TC",
    type: "Case",
    price: 432.86,
  },
  {
    collection: 201884,
    sku: "2-18948-04",
    programName: "2025 FB NATIONAL TREASURES (25-26) TC",
    type: "Case",
    price: 565.68,
  },
  {
    collection: "300038-NBA",
    sku: "3-LD11",
    programName: "LUKA DONCIC AUTH MEMORABILIA",
    type: "Box",
    price: 497.35,
  },
  {
    collection: 201851,
    sku: "2-19003-20",
    programName: "RC DONRUSS (2025) TC",
    type: "Case",
    price: 235.74,
  },
  {
    collection: 201665,
    sku: "2-16656-01",
    programName: "BB PRIZM (2024) TC",
    type: "Case",
    price: 722.44,
  },
  {
    collection: 201649,
    sku: "2-15932-12",
    programName: "FB LUMINANCE (24-25) TC",
    type: "Case",
    price: 150.63,
  },
  {
    collection: 201900,
    sku: "2-19047-01",
    programName: "BK WNBA PRIZM (24-25) TC",
    type: "Box",
    price: 663.98,
  },
  {
    collection: 201781,
    sku: "2-17492-20",
    programName: "PRIZM LIV GOLF (2024) TC",
    type: "Box",
    price: 611.38,
  },
  {
    collection: "004677-ESAD",
    sku: 15539,
    programName: "DISNEY PRINCESS (2024) - WAVE 2",
    type: "Case",
    price: 343.09,
  },
  {
    collection: 201854,
    sku: "2-18311-20",
    programName: "RC PRIZM (2025) TC",
    type: "Box",
    price: 736.08,
  },
  {
    collection: 201865,
    sku: "2-18455-20",
    programName: "FB SCORE (25-26) TC",
    type: "Case",
    price: 186.36,
  },
  {
    collection: 201711,
    sku: "2-16404-12",
    programName: "BK DONRUSS (24-25) TC",
    type: "Box",
    price: 725.73,
  },
  {
    collection: 201851,
    sku: "2-18289-20",
    programName: "RC DONRUSS (2025) TC",
    type: "Case",
    price: 288.02,
  },
  {
    collection: 201723,
    sku: "2-16761-20",
    programName: "FB MOSAIC (24-25) TC",
    type: "Box",
    price: 234.99,
  },
  {
    collection: 201810,
    sku: "2-17778-03",
    programName: "SC IMPECCABLE (24-25) TC",
    type: "Box",
    price: 276.12,
  },
  {
    collection: 201712,
    sku: "2-17542-12",
    programName: "BK PRIZM (24-25) TC",
    type: "Case",
    price: 397.2,
  },
  {
    collection: 201708,
    sku: "2-16191-20",
    programName: "BK CONTENDERS OPTIC (23-24) TC",
    type: "Case",
    price: 171.65,
  },
  {
    collection: 201791,
    sku: "2-17712-20",
    programName: "2024 FB TOTALLY CERTIFIED (24-25) TC",
    type: "Case",
    price: 680.69,
  },
];

export const data: Partial<Card>[] = [
  {
    website: "Da Card World",
    price: 120.99,
    avgPrice: 294.45,
  },
  {
    website: "Bleecker Trading",
    price: 135.5,
    avgPrice: 294.45,
  },
  {
    website: "Game Stop",
    price: 145.75,
    avgPrice: 294.45,
  },
  {
    website: "Blow Out Cards",
    price: 160.3,
    avgPrice: 294.45,
  },
  {
    website: "Mid West Cards",
    price: 172.4,
    avgPrice: 294.45,
  },
];

export const analytics: Partial<Card>[] = [
  {
    date: "2024-12-30",
    price: 123.45,
  },
  {
    date: "2024-12-29",
    price: 678.9,
  },
  {
    date: "2024-12-28",
    price: 345.67,
  },
  {
    date: "2024-12-27",
    price: 567.89,
  },
  {
    date: "2024-12-26",
    price: 123.45,
  },
  {
    date: "2024-12-25",
    price: 678.9,
  },
  {
    date: "2024-12-24",
    price: 345.67,
  },
];
