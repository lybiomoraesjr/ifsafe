import { fakerPT_BR as faker } from "@faker-js/faker";

export const occurrences = [
  {
    id: faker.string.uuid(),
    ocurrenceName: faker.commerce.productName(),
    occurenceAlertNumber: faker.random.number({ min: 1, max: 50 }),
    ocurrenceDate: faker.date.between("2023-12-01", "2024-03-14"),
    imageUrl: faker.image.city(),
  },
];
