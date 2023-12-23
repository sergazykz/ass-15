<template>
    <div class="accordion">
      <div class="accordion-item" v-for="(item, index) in items" :key="index">
        <button class="accordion-header" @click="toggle(index)">
          {{ item.header }}
        </button>
        <div class="accordion-body" v-if="isActive(index)">
          {{ item.content }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Accordion',
    props: {
      items: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        activeIndex: null,
      };
    },
    methods: {
      toggle(index) {
        this.activeIndex = this.activeIndex === index ? null : index;
      },
      isActive(index) {
        return this.activeIndex === index;
      },
    },
  };
  </script>
  
  <style scoped>
  .accordion-header {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    transition: background-color 0.6s ease;
    border-bottom: 1px solid #ddd;
  }
  
  .accordion-header:hover {
    background-color: #ccc;
  }
  
  .accordion-body {
    padding: 18px;
    background-color: white;
    display: none;
  }
  </style>
  