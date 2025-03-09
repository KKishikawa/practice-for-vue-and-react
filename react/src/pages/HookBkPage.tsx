import { useMouse } from "@/hooks/useMouse";
import { useDisplayedTime } from "@/hooks/useDisplayedTime";

export const HookBkPage = () => {
  const { position } = useMouse();
  const { displayedTime } = useDisplayedTime((date) =>
    date.toLocaleTimeString()
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
