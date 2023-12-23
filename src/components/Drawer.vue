<template>
    <div :class="['drawer', { 'is-open': isOpen }]">
      <button @click="toggle">Toggle Drawer</button>
      <div class="drawer-content" v-if="isOpen">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Drawer',
    props: {
      isOpen: {
        type: Boolean,
        default: false,
      },
    },
    emits: ['update:isOpen'],
    methods: {
      toggle() {
        this.$emit('update:isOpen', !this.isOpen);
      },
    },
  };
  </script>
  
  <style scoped>
  .drawer {
    position: relative;
  }
  
  .drawer .drawer-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
    background-color: #ffffff;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
  
  .drawer.is-open .drawer-content {
    transform: translateX(0);
  }
  </style>
  