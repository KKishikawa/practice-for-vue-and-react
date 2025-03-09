<script setup lang="ts" generic="T extends Record<string, unknown>">
defineProps<{
  items: T[];
  keyName: keyof T;
  striped?: boolean;
}>();
defineSlots<{
  row(props: { item: T }): any;
}>();
</script>

<template>
  <ul :class="['list', { striped }]">
    <template v-for="item in items" :key="item[keyName]">
      <li>
        <slot name="row" :item="item" />
      </li>
    </template>
  </ul>
</template>

<style scoped>
.list {
  li {
    padding: 0.25rem;
  }

  li+li {
    border-top: 1px solid #a1a1a1;
  }
}

.striped {
  li:nth-child(even) {
    background-color: #f8f9fa;
  }
}
</style>
