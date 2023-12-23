<template>
    <ul class="list-group">
      <li v-for="item in items" :key="item.id" class="list-group-item" :class="{ active: item.active }" @click="selectItem(item)">
        {{ item.text }}
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    name: 'ListGroup',
    props: {
      items: {
        type: Array,
        default: () => [],
      },
    },
    methods: {
      selectItem(item) {
        this.$emit('select', item);
      },
    },
  };
  </script>
  
  <style scoped>
  .list-group {
    list-style: none;
    padding: 0;
  }
  
  .list-group-item {
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-top: none;
    cursor: pointer;
    background-color: #fff;
  }
  
  .list-group-item:first-child {
    border-top: 1px solid #ddd;
  }
  
  .list-group-item.active {
    background-color: #007bff;
    color: white;
    border-color: #007bff;
  }
  </style>
  