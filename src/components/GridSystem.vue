<template>
    <div class="grid-system" :style="gridStyle">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GridSystem',
    props: {
      columns: {
        type: Number,
        default: 4
      },
      gap: {
        type: String,
        default: '1rem'
      }
    },
    computed: {
      gridStyle() {
        return {
          display: 'grid',
          gridTemplateColumns: `repeat(${this.columns}, 1fr)`,
          gap: this.gap
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .grid-system {
    width: 100%;
  }
  </style>
  