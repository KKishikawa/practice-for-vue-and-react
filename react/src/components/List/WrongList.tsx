import { ReactNode } from "react";
import cn from "classnames";
import css from "./WrongList.module.css";

export type WrongListProps<T> = {
  items: T[];
  keyName: keyof T;
  striped?: boolean;
  children: (item: T) => ReactNode;
};

export const WrongList = <T extends Record<string, unknown>>({
  items,
  keyName,
  striped,
  children,
}: WrongListProps<T>) => {
  return (
    <ul className={cn(css.list, { [css.striped]: striped })}>
      {items.map((item) => (
        <li key={String(item[keyName])}>{children(item)}</li>
      ))}
    </ul>
  );
};
