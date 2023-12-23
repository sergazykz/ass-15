<template>
    <input
      type="date"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      class="date-picker"
    />
  </template>
  
  <script>
  export default {
    name: 'DatePicker',
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    emits: ['update:value']
  };
  </script>
  
  <style scoped>
  .date-picker {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  