<script setup lang="ts">
import { useDisplayedTime } from '@/composables/useDisplayedTime';
import { useMouse } from '@/composables/useMouse';

const { position } = useMouse();
const { displayedTime } = useDisplayedTime((date) => date.toLocaleTimeString());
</script>

<template>
  <div>Current time: {{ displayedTime }}</div>
  <template v-if="position">
    <div>Mouse position: {{ position.x }}, {{ position.y }}</div>
  </template>
</template>
