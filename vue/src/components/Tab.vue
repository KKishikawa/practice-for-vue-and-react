<script setup lang="ts">
import { ref, type Component } from 'vue';
export type TabConfig = {
  title: string;
  content: Component;
};
defineProps<{
  tabs: TabConfig[];
}>();
const activeTab = ref(0);
</script>

<template>
  <div>
    <ul class="tabList">
      <li v-for="(tab, index) in tabs" :key="index" :class="['tabItem', { activeTabItem: index === activeTab }]">
        <a class="tabLink" :class="{ activeTabLink: index === activeTab }" @click="activeTab = index">
          {{ tab.title }}
        </a>
      </li>
    </ul>
    <div>
      <component :is="tabs[activeTab].content" />
    </div>
  </div>
</template>

<style scoped>
.tabList {
  display: flex;
  margin-bottom: 1rem;
  border-bottom: 1px solid #a1a1a1;
  column-gap: 0.5rem;
  overflow-x: auto;
}

.tabItem {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  overflow: hidden;
  flex-shrink: 0;
}

.tabLink {
  display: inline-block;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: #000;

  &:hover {
    background-color: #f8f9fa;
    color: #1a1a1a;
    border-bottom: 1px solid currentColor;
  }

  &.activeTabLink {
    background-color: #f8f9fa;
    color: #4d55cc;
    border-bottom: 1px solid currentColor;
  }
}
</style>
