import { faker } from '@faker-js/faker/locale/es_MX';

export function generateRandomPassword(): string {
    return `${faker.word.preposition('shortest').toUpperCase()}${faker.word.noun(3).toLowerCase()}${faker.number.int({ min: 1, max: 10 }).toString()}`;
}
