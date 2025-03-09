import { useEffect, useState } from "react";

export const useDisplayedTime = (formatter: (date: Date) => string) => {
  const [displayedTime, setDisplayedTime] = useState(() =>
    formatter(new Date())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedTime(formatter(new Date()));
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, [formatter]);

  return {
    displayedTime,
  };
};
