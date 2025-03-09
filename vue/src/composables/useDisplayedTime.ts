import { onMounted, onUnmounted, ref } from "vue";

export const useDisplayedTime = (formatter: (date: Date) => string) => {
  const displayedTime = ref(formatter(new Date()));

  onMounted(() => {
    const interval = setInterval(() => {
      displayedTime.value = formatter(new Date());
    }, 500);
    onUnmounted(() => {
      clearInterval(interval);
    });
  });

  return {
    displayedTime,
  };
};
