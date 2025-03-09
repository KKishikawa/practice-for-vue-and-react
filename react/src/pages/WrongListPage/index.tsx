import { faker } from "@faker-js/faker";
import { WrongList } from "@/components/List/WrongList";
import css from "./WrongListPage.module.css";

const data = Array.from({ length: 5 }, () => ({
  name: faker.person.fullName(),
  score: {
    math: faker.number.int({ min: 0, max: 100 }),
    english: faker.number.int({ min: 0, max: 100 }),
    science: faker.number.int({ min: 0, max: 100 }),
  },
}));

export const WrongListPage = () => {
  return (
    <WrongList items={data} keyName="name" striped>
      {(item) => (
        <>
          <strong>{item.name}</strong>
          <ul className={css.score}>
            <li>Math: {item.score.math}</li>
            <li>English: {item.score.english}</li>
            <li>Science: {item.score.science}</li>
          </ul>
        </>
      )}
    </WrongList>
  );
};
