<template>
    <span :class="['label', `label-${type}`]" :style="{ backgroundColor: bgColor, color: textColor }">
      {{ text }}
    </span>
  </template>
  
  <script>
  export default {
    name: 'LabelContent',
    props: {
      text: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        default: 'default', // default, primary, success, danger, etc.
      },
      bgColor: {
        type: String,
        default: '#eeeeee', // default background color
      },
      textColor: {
        type: String,
        default: '#333333', // default text color
      },
    },
  };
  </script>
  
  <style scoped>
  .label {
    padding: 0.25em 0.5em;
    border-radius: 0.25em;
    font-size: 0.75em;
    font-weight: bold;
    display: inline-block;
    text-transform: uppercase;
  }
  
  .label-default {
    background-color: #eeeeee;
    color: #333333;
  }
  
  /* Add more styles for different types as needed */
  </style>
  