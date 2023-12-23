<template>
    <div :class="['typography', `typography--${type}`]" :style="styleObject">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Typography',
    props: {
      type: {
        type: String,
        default: 'body', // default type of typography
      },
      color: {
        type: String,
        default: '#333', // default text color
      },
      size: {
        type: String,
        default: '1rem', // default font size
      },
    },
    computed: {
      styleObject() {
        return {
          color: this.color,
          fontSize: this.size,
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .typography {
    margin: 0;
    padding: 0;
  }
  
  .typography--title {
    font-weight: bold;
  }
  
  .typography--body {
    font-weight: normal;
  }
  
  .typography--caption {
    font-size: 0.75rem;
  }
  </style>
  