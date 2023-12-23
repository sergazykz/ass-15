<template>
    <div class="form-toggle">
      <label :for="name">
        <input
          :id="name"
          type="checkbox"
          :checked="value"
          @change="$emit('update:value', $event.target.checked)"
        />
        <span class="slider round"></span>
      </label>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FormToggle',
    props: {
      name: {
        type: String,
        required: true
      },
      value: {
        type: Boolean,
        default: false
      }
    },
    emits: ['update:value']
  };
  </script>
  
  <style scoped>
  .form-toggle {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  
  .form-toggle input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
  
  input:checked + .slider {
    background-color: #2196F3;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  
  input:checked + .slider:before {
    transform: translateX(26px);
  }
  
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
  </style>
  