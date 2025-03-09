<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/Button.vue';
import type { Todo } from './todo';

defineProps<{
  todo: Todo;
}>();
defineEmits<{
  delete: [deleteId: number];
}>()

const handleDbClick = (e: MouseEvent) => {
  editing.value = true;
  const inputWrapper = e.currentTarget as HTMLElement;
  setTimeout(() => {
    inputWrapper.querySelector('input')?.select();
  });
};

const editing = ref(false);
</script>

<template>
  <div class="todoItem">
    <input type="checkbox" v-model="todo.isDone" />
    <div class="todoItemTask" @dblclick="handleDbClick">
      <input v-if="editing" v-model="todo.task" class="editInput" @keydown.escape="editing = false"
        @blur="editing = false" />
      <span v-else :class="{ done: todo.isDone }">{{ todo.task }}</span>
    </div>
    <div class="todoItemActions">
      <Button color="danger" @click="$emit('delete', todo.id)">Delete</Button>
    </div>

  </div>
</template>

<style scoped>
.done {
  text-decoration: line-through;
  color: #999;
}

.todoItem {
  display: flex;
  gap: 0.5rem;
  border-bottom: 1px solid #e9ecef;
  width: 450px;
}

.todoItemTask {
  flex: 1;
}

.editInput {
  width: 100%;
}

.todoItemActions {
  display: flex;
  gap: 0.25rem;
}
</style>
