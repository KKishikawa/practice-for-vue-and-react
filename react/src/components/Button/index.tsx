import type { FC, ReactNode } from "react";
import cn from "classnames";
import css from "./Button.module.css";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  color: "primary" | "secondary" | "danger";
  onClick?: () => void;
  children?: ReactNode;
};

export const Button: FC<ButtonProps> = ({ type, color, onClick, children }) => {
  return (
    <button
      className={cn(css.btn, css[color])}
      type={type ?? "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
