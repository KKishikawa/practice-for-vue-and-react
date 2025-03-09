<script setup lang="ts">
import Tab, { type TabConfig } from '@/components/Tab.vue';
import CounterPage from '@/pages/CounterPage.vue';
import FormPage from '@/pages/FormPage.vue';
import TodoList from '@/components/TodoList/TodoList.vue';
import ListPage from '@/pages/ListPage.vue';
import ComposablePage from './pages/ComposablePage.vue';

const tabs = [
  { title: 'Counter', content: CounterPage },
  { title: 'Form', content: FormPage },
  { title: 'Todo List', content: TodoList },
  { title: 'List', content: ListPage },
  { title: 'Composables', content: ComposablePage },
] as const satisfies TabConfig[];
</script>

<template>
  <Tab :tabs="tabs" />
</template>
