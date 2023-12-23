<template>
    <ul class="list-content">
      <li v-for="(item, index) in items" :key="index">
        {{ item.text }}
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    name: 'ListContent',
    props: {
      items: {
        type: Array,
        default: () => [],
      },
    },
  };
  </script>
  
  <style scoped>
  .list-content {
    padding: 0;
    list-style-type: none;
  }
  
  .list-content li {
    padding: 8px 16px;
    border-bottom: 1px solid #ccc;
  }
  
  .list-content li:last-child {
    border-bottom: none;
  }
  </style>
  