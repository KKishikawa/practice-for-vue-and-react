export type Todo = {
    id: number;
    task: string;
    isDone: boolean;
}
const generateGetNextId = () => {
  let id = 1;
  return () => id++;
};
export const getNextId = generateGetNextId();
