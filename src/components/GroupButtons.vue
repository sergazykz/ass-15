<template>
    <div class="button-group">
      <button
        v-for="(button, index) in buttons"
        :key="index"
        :class="['btn', button.type]"
        @click="buttonClicked(button.label)"
      >
        {{ button.label }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GroupButtons',
    props: {
      buttons: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      buttonClicked(label) {
        this.$emit('onClick', label);
      }
    }
  };
  </script>
  
  <style scoped>
  .button-group {
    display: flex;
    gap: 0.5rem;
  }
  
  .btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: white;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    color: white;
  }
  
  .btn-success {
    background-color: #28a745;
    color: white;
  }
  </style>
  