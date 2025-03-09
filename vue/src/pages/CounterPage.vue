<script setup lang="ts">
import { computed, ref } from 'vue'
import Button from '@/components/Button.vue'

const count = ref(0)
const increment = () => count.value++
const decrement = () => count.value--
const double = computed(() => count.value * 2)
</script>

<template>
  <div>count: {{ count }}</div>
  <Button color="secondary" @click="increment">+</Button>
  <Button color="secondary" @click="decrement">-</Button>
  <div>count x2: {{ double }}</div>
  <div>count x3: {{ count * 3 }}</div>
</template>
