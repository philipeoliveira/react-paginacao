import { faker } from '@faker-js/faker';

export const users = Array.from({ length: 200 }).map(() => {
   return {
      id: faker.number.int({ min: 10000, max: 99999 }),
      name: faker.person.fullName(),
      email: faker.internet.email().toLocaleLowerCase(),
   };
});
