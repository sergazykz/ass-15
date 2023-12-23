<template>
    <div class="card-container" :style="{ width: width, height: height }">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardContainer',
    props: {
      width: {
        type: String,
        default: '300px', // default width of the card
      },
      height: {
        type: String,
        default: '200px', // default height of the card
      },
    },
  };
  </script>
  
  <style scoped>
  .card-container {
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 16px;
    background-color: white;
    margin: 16px;
  }
  </style>
  