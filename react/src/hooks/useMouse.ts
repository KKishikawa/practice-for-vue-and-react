import { useEffect, useState } from "react";

export const useMouse = () => {
  // this hook rewrite when ever mouse position changes
  const [position, setPosition] = useState<{ x: number; y: number }>();
  const handleMouseMove = (event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return {
    position
  }
};
