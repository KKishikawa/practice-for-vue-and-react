import { onMounted, onUnmounted, ref } from "vue";

export const useMouse = () => {
  // this hook rewrite when ever mouse position changes
  const position = ref<{ x: number; y: number }>();
  const handleMouseMove = (event: MouseEvent) => {
    position.value = { x: event.clientX, y: event.clientY };
  };
  onMounted(() => {
    document.addEventListener("mousemove", handleMouseMove);
  });
  onUnmounted(() => {
    document.removeEventListener("mousemove", handleMouseMove);
  });
  return {
    position,
  };
};
