export type Card = {
  cardId: number;
  projectCode: string;
  sku: string;
  description: string;
  programName: string;
  sport: string;
  price: number;
  type: string;
  date: string;
  website: string;
  avgPrice: number;
};

export const cards: Partial<Card>[] = [
  {
    programName: "JOE MILTON AUTH MEMORABILIA",
    sku: "123456789",
    price: 99.99,
  },
  {
    programName: "BB PRIZM (2025) TC",
    sku: "234567890",
    price: 149.99,
  },
  {
    programName: "ANGEL REESE AUTH MEMORABILIA",
    sku: "345678901",
    price: 199.99,
  },
  {
    programName: "DAVID BECKHAM AUTH MEMORABILIA",
    sku: "456789012",
    price: 249.99,
  },
  {
    programName: "BB SELECT (2025) TC",
    sku: "567890123",
    price: 299.99,
  },
  {
    programName: "WWE PRIZM (2024) TC",
    sku: "678901234",
    price: 349.99,
  },
  {
    programName: "BK WNBA DONRUSS (24-25) TC",
    sku: "789012345",
    price: 399.99,
  },
  {
    programName: "CHRISTIAN PULISIC AUTH MEMORABILIA",
    sku: "890123456",
    price: 499.99,
  },
  {
    programName: "JOE MILTON AUTH MEMORABILIA",
    sku: "123456789",
    price: 99.99,
  },
  {
    programName: "BB PRIZM (2025) TC",
    sku: "234567890",
    price: 149.99,
  },
  {
    programName: "ANGEL REESE AUTH MEMORABILIA",
    sku: "345678901",
    price: 199.99,
  },
  {
    programName: "DAVID BECKHAM AUTH MEMORABILIA",
    sku: "456789012",
    price: 249.99,
  },
  {
    programName: "BB SELECT (2025) TC",
    sku: "567890123",
    price: 299.99,
  },
  {
    programName: "WWE PRIZM (2024) TC",
    sku: "678901234",
    price: 349.99,
  },
  {
    programName: "BK WNBA DONRUSS (24-25) TC",
    sku: "789012345",
    price: 399.99,
  },
  {
    programName: "CHRISTIAN PULISIC AUTH MEMORABILIA",
    sku: "890123456",
    price: 499.99,
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
