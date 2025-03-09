<script setup lang="ts">
import { ref } from 'vue';
import { faker } from '@faker-js/faker';
import Button from '@/components/Button.vue';
import { type Todo, getNextId } from './todo';
import TodoListItem from './TodoListItem.vue';

const todos = ref<Todo[]>([
  { id: getNextId(), task: faker.word.words(4), isDone: false },
  { id: getNextId(), task: faker.word.words(6), isDone: true },
]);
const handleAdd = () => {
  todos.value.push({ id: getNextId(), task: "", isDone: false });
};
const handleDelete = (deleteId: number) => {
  const index = todos.value.findIndex((todo) => todo.id === deleteId);
  if (index > -1) {
    todos.value.splice(index, 1);
  }
};
</script>

<template>
  <div>
    <div>
      <Button color="secondary" @click="handleAdd">Add</Button>
      <span class="tip">
        ※ Double click on the task to edit, press <kbd>Escape</kbd> or focusout
        to save
      </span>
    </div>
    <div>
      <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo" @delete="handleDelete" />
    </div>
  </div>
</template>

<style scoped>
.tip {
  color: #999;
  font-size: 0.75rem;
}
</style>
