<template>
    <div :class="`alert alert-${type}`" role="alert">
      <slot>{{ message }}</slot>
      <button v-if="dismissible" @click="dismissAlert" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AlertContent',
    props: {
      type: {
        type: String,
        default: 'info', // default type of alert
      },
      message: {
        type: String,
        default: '',
      },
      dismissible: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      dismissAlert() {
        this.$emit('dismiss');
      },
    },
  };
  </script>
  
  <style scoped>
  .alert {
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    position: relative;
  }
  
  .alert-info {
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;
  }
  
  .alert-warning {
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;
  }
  
  .alert-danger {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }
  
  .alert-success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }
  
  .close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.75rem 1.25rem;
    cursor: pointer;
  }
  
  .close span {
    font-size: 1.5rem;
  }
  </style>
  