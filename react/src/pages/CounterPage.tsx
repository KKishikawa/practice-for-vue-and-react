import { useState } from "react";
import { Button } from "@/components/Button";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const double = count * 2;

  return (
    <>
      <div>count: {count}</div>
      <Button color="secondary" onClick={increment}>+</Button>
      <Button color="secondary" onClick={decrement}>-</Button>
      <div>count x2: {double}</div>
      <div>count x3: {count * 3}</div>
    </>
  );
};
