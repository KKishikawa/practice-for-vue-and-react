import { ReactNode } from "react";
import cn from "classnames";
import css from "./List.module.css";

export type ListProps<T> = {
  items: T[];
  keyName: keyof T;
  striped?: boolean;
  children: (item: T) => ReactNode;
};

export const List = <T extends Record<string, unknown>>({
  items,
  keyName,
  striped,
  children,
}: ListProps<T>) => {
  return (
    <ul className={cn(css.list, { [css.striped]: striped })}>
      {items.map((item) => (
        <li key={String(item[keyName])} className={css.listItem}>
          {children(item)}
        </li>
      ))}
    </ul>
  );
};
