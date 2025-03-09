import { faker } from "@faker-js/faker";
import { List } from "@/components/List/List";
import css from "./ListPage.module.css";

const data = Array.from({ length: 5 }, () => ({
  name: faker.person.fullName(),
  score: {
    math: faker.number.int({ min: 0, max: 100 }),
    english: faker.number.int({ min: 0, max: 100 }),
    science: faker.number.int({ min: 0, max: 100 }),
  },
}));

export const ListPage = () => {
  return (
    <List items={data} keyName="name" striped>
      {(item) => (
        <>
          <strong>{item.name}</strong>
          <ul className={css.score}>
            <li className={css.listItem}>Math: {item.score.math}</li>
            <li className={css.listItem}>English: {item.score.english}</li>
            <li className={css.listItem}>Science: {item.score.science}</li>
          </ul>
        </>
      )}
    </List>
  );
};
