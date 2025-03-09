import { useMouse } from "@/hooks/useMouse";
import { useDisplayedTime } from "@/hooks/useDisplayedTime";
import { useCallback } from "react";

export const HookPage = () => {
  const { position } = useMouse();
  const { displayedTime } = useDisplayedTime(
    useCallback((date) => date.toLocaleTimeString(), [])
  );

  return (
    <>
      <div>Current Time: {displayedTime}</div>
      {position && (
        <div>
          Mouse Position: {position.x}, {position.y}
        </div>
      )}
    </>
  );
};
