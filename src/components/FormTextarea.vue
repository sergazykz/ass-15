<template>
    <div class="form-textarea">
      <label :for="name">{{ label }}</label>
      <textarea
        :id="name"
        :name="name"
        :placeholder="placeholder"
        :rows="rows"
        :value="value"
        @input="$emit('input', $event.target.value)"
      ></textarea>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FormTextarea',
    props: {
      label: String,
      name: String,
      placeholder: String,
      rows: {
        type: Number,
        default: 4
      },
      value: String
    },
    emits: ['input']
  };
  </script>
  
  <style scoped>
  .form-textarea {
    margin-bottom: 1rem;
  }
  
  .form-textarea label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .form-textarea textarea {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical; /* Allows the user to vertically resize the textarea */
  }
  </style>
  