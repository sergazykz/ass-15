<template>
    <div class="form-input">
      <label :for="name">{{ label }}</label>
      <input
        :id="name"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('update:value', $event.target.value)"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'FormInput',
    props: {
      label: String,
      name: String,
      type: {
        type: String,
        default: 'text'
      },
      placeholder: String,
      value: String
    },
    emits: ['update:value']
  };
  </script>
  
  <style scoped>
  .form-input {
    margin-bottom: 1rem;
  }
  
  .form-input label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .form-input input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  