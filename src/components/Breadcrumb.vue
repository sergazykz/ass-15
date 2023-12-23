<template>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li v-for="(item, index) in items" :key="index" class="breadcrumb-item" :class="{ active: index === items.length - 1 }">
          <a v-if="index !== items.length - 1" :href="item.href">{{ item.text }}</a>
          <span v-else>{{ item.text }}</span>
        </li>
      </ol>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Breadcrumb',
    props: {
      items: {
        type: Array,
        default: () => [],
      },
    },
  };
  </script>
  
  <style scoped>
  .breadcrumb {
    padding: 8px 16px;
    background: #f8f9fa;
    display: inline-flex;
    border-radius: 5px;
  }
  
  .breadcrumb-item + .breadcrumb-item::before {
    content: '>';
    padding: 0 8px;
    color: #6c757d;
  }
  
  .breadcrumb-item a {
    color: #007bff;
    text-decoration: none;
  }
  
  .breadcrumb-item.active a {
    color: #6c757d;
    pointer-events: none;
    cursor: default;
  }
  
  .breadcrumb-item.active span {
    font-weight: bold;
  }
  </style>
  