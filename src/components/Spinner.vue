<template>
    <div class="spinner" :style="spinnerStyle"></div>
  </template>
  
  <script>
  export default {
    name: 'Spinner',
    props: {
      size: {
        type: String,
        default: '50px',
      },
      color: {
        type: String,
        default: '#000',
      },
    },
    computed: {
      spinnerStyle() {
        return {
          width: this.size,
          height: this.size,
          border: `5px solid ${this.color}`,
          borderTopColor: 'transparent',
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .spinner {
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  