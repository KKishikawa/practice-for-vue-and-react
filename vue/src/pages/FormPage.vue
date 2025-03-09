<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/Button.vue';

const name = ref("");
const email = ref("");
const favoriteTechs = ref<string[]>([]);
const resultRef = ref<HTMLDivElement | null>(null);

const techs = ["React", "Vue", "Svelte", "jQuery"];
</script>

<template>
  <form @submit.prevent="() => {
    if (resultRef) {
      resultRef.innerHTML = `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Techs: ${favoriteTechs.join(', ')}</p>
      `;
    }
  }">
    <div>
      <label>
        Name:
        <input type="text" v-model="name" />
      </label>
    </div>
    <div>
      <label>
        Email:
        <input type="email" v-model="email" />
      </label>
    </div>
    <div class="checkboxLabelWrapper">
      <label v-for="tech in techs" :key="tech">
        <input type="checkbox" :checked="favoriteTechs.includes(tech)" @change="() => {
          if (favoriteTechs.includes(tech)) {
            favoriteTechs = favoriteTechs.filter((t) => t !== tech);
          } else {
            favoriteTechs.push(tech);
          }
        }" />
        {{ tech }}
      </label>
    </div>
    <Button color="primary" type="submit">Submit</Button>
  </form>
  <div ref="resultRef"></div>
</template>

<style scoped>
.checkboxLabelWrapper {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
</style>
