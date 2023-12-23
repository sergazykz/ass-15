<template>
    <div class="input-group">
      <label :for="name">{{ label }}</label>
      <div class="input-wrapper">
        <span v-if="prepend" class="input-group-addon prepend">{{ prepend }}</span>
        <input
          :id="name"
          :name="name"
          :type="type"
          :placeholder="placeholder"
          :value="value"
          @input="$emit('input', $event.target.value)"
        />
        <span v-if="append" class="input-group-addon append">{{ append }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InputGroups',
    props: {
      label: String,
      name: String,
      type: {
        type: String,
        default: 'text'
      },
      placeholder: String,
      value: String,
      prepend: String,
      append: String
    },
    emits: ['input']
  };
  </script>
  
  <style scoped>
  .input-group {
    margin-bottom: 1rem;
  }
  
  .input-group label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .input-wrapper {
    display: flex;
    align-items: center;
  }
  
  .input-group-addon {
    padding: 0.5rem;
    background-color: #eee;
    border: 1px solid #ccc;
  }
  
  .input-group-addon.prepend {
    border-right: 0;
  }
  
  .input-group-addon.append {
    border-left: 0;
  }
  
  .input-group input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  