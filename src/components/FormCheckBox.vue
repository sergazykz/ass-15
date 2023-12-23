<template>
    <div class="form-checkbox">
      <label :for="name">
        <input
          type="checkbox"
          :id="name"
          :name="name"
          :checked="value"
          @change="$emit('change', $event.target.checked)"
        />
        {{ label }}
      </label>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FormCheckBox',
    props: {
      label: String,
      name: String,
      value: Boolean
    },
    emits: ['change']
  };
  </script>
  
  <style scoped>
  .form-checkbox {
    margin-bottom: 1rem;
    user-select: none;
  }
  
  .form-checkbox input {
    margin-right: 0.5rem;
  }
  </style>
  