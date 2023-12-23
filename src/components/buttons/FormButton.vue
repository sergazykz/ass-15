<template>
    <button
      :class="['btn', `btn-${type}`, { disabled: isDisabled }]"
      :disabled="isDisabled"
      @click="onClick"
    >
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'FormButton',
    props: {
      type: {
        type: String,
        default: 'primary', // This can be 'primary', 'secondary', 'danger', etc.
      },
      isDisabled: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      onClick(event) {
        if (!this.isDisabled) {
          this.$emit('click', event);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
  }
  
  .btn-primary {
    background-color: #3498db;
    color: white;
  }
  
  .btn-secondary {
    background-color: #95a5a6;
    color: white;
  }
  
  .btn-danger {
    background-color: #e74c3c;
    color: white;
  }
  
  .btn.disabled,
  .btn:disabled {
    background-color: #ecf0f1;
    color: #bdc3c7;
    cursor: not-allowed;
  }
  </style>
  