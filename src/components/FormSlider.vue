<template>
    <div class="slider-container">
      <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'FormSlider',
    props: {
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      },
      value: {
        type: Number,
        default: 0
      }
    },
    emits: ['input']
  };
  </script>
  
  <style scoped>
  .slider-container input[type="range"] {
    width: 100%;
  }
  </style>
  