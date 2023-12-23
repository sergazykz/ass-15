<template>
    <div class="collapse-container">
      <button @click="toggle" class="collapse-toggle">{{ title }}</button>
      <div v-show="isOpen" class="collapse-content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CollapseContainer',
    props: {
      title: {
        type: String,
        default: 'Collapse Title',
      },
    },
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  .collapse-container {
    margin: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .collapse-toggle {
    padding: 0.5rem 1rem;
    width: 100%;
    text-align: left;
    background: #f7f7f7;
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 4px 4px 0 0;
    cursor: pointer;
  }
  
  .collapse-content {
    padding: 1rem;
  }
  </style>
  