<template>
    <div class="form-radio-group">
      <label :for="name" class="form-label">{{ label }}</label>
      <div class="radio-options">
        <div
          class="form-radio"
          v-for="option in options"
          :key="option.value"
        >
          <input
            type="radio"
            :id="option.value"
            :value="option.value"
            :name="name"
            :checked="option.value === selectedValue"
            @change="$emit('update:selectedValue', option.value)"
          />
          <label :for="option.value">{{ option.label }}</label>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FormRadioBox',
    props: {
      label: String,
      name: String,
      options: Array,
      selectedValue: String
    },
    emits: ['update:selectedValue']
  };
  </script>
  
  <style scoped>
  .form-radio-group {
    margin-bottom: 1rem;
  }
  
  .form-label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .radio-options {
    display: flex;
    flex-direction: column;
  }
  
  .form-radio {
    margin-bottom: 0.25rem;
  }
  </style>
  