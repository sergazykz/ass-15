<template>
    <hr :class="`divider ${orientation}`" />
  </template>
  
  <script>
  export default {
    name: 'Divider',
    props: {
      orientation: {
        type: String,
        default: 'horizontal', // Can be 'horizontal' or 'vertical'
        validator: function (value) {
          return ['horizontal', 'vertical'].indexOf(value) !== -1;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .divider {
    border: none;
    margin: 8px 0;
  }
  
  .divider.horizontal {
    border-top: 1px solid #ddd;
    width: 100%;
  }
  
  .divider.vertical {
    border-left: 1px solid #ddd;
    height: 100%;
    width: 1px;
    display: inline-block;
    margin: 0 8px;
  }
  </style>
  