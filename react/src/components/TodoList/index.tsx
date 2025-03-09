import { useState } from "react";
import cn from "classnames";
import css from "./TodoList.module.css";
import { faker } from "@faker-js/faker";
import { Button } from "@/components/Button";

type Todo = {
  id: number;
  task: string;
  isDone: boolean;
};

type TodoItemProps = {
  todo: Todo;
  onChange: (newTodo: Todo) => void;
  onDelete: (deleteId: number) => void;
};
const TodoItem = ({ todo, onChange, onDelete }: TodoItemProps) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className={css.todoItem}>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => onChange({ ...todo, isDone: !todo.isDone })}
      />
      <div
        className={css.todoItemTask}
        onDoubleClick={(e) => {
          setIsEdit(true);
          const inputWrapper = e.currentTarget;
          setTimeout(() => {
            inputWrapper.querySelector("input")?.select();
          });
        }}
      >
        {isEdit ? (
          <input
            className={css.editInput}
            type="text"
            value={todo.task}
            onChange={(e) => {
              onChange({ ...todo, task: e.target.value });
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                setIsEdit(false);
              }
            }}
            onBlur={() => setIsEdit(false)}
          />
        ) : (
          <span className={cn({ [css.done]: todo.isDone })}>{todo.task}</span>
        )}
      </div>
      <div className={css.todoItemActions}>
        <Button color="danger" onClick={() => onDelete(todo.id)}>Delete</Button>
      </div>
    </div>
  );
};

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>(() => [
    { id: getNextId(), task: faker.word.words(4), isDone: false },
    { id: getNextId(), task: faker.word.words(6), isDone: true },
  ]);

  const handleAdd = () => {
    setTodos((prev) => [
      ...prev,
      { id: getNextId(), task: "", isDone: false },
    ]);
  }
  const handleChange = (newTodo: Todo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === newTodo.id ? newTodo : todo))
    );
  };
  const handleDelete = (deleteId: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== deleteId));
  };

  return (
    <div>
      <div>
        <Button color="secondary" onClick={handleAdd}>Add</Button>
        <span className={css.tip}>
          ※ Double click on the task to edit, press <kbd>Escape</kbd> or focusout
          to save
        </span>
      </div>
      <div>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onChange={handleChange}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};
const generateGetNextId = () => {
  let id = 1;
  return () => id++;
};
const getNextId = generateGetNextId();
