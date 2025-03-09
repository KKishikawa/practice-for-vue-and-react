<script setup lang="ts">
import { faker } from "@faker-js/faker";
import List from "@/components/List.vue";

const data = Array.from({ length: 5 }, () => ({
  name: faker.person.fullName(),
  score: {
    math: faker.number.int({ min: 0, max: 100 }),
    english: faker.number.int({ min: 0, max: 100 }),
    science: faker.number.int({ min: 0, max: 100 }),
  }
}));
</script>

<template>
  <List :items="data" keyName="name" striped>
    <template #row="{ item }">
      <strong>{{ item.name }}</strong>
      <ul class="score">
        <li>Math: {{ item.score.math }}</li>
        <li>English: {{ item.score.english }}</li>
        <li>Science: {{ item.score.science }}</li>
      </ul>
    </template>
  </List>
</template>

<style scoped>
.score {
  li {
    margin-left: 1rem;
  }
}
</style>
