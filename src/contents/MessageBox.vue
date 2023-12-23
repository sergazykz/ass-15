<template>
    <div class="message-box" :class="`message-box--${type}`">
      <span>{{ message }}</span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MessageBox',
    props: {
      message: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'info', // can be 'info', 'success', 'warning', 'error'
        validator: function (value) {
          return ['info', 'success', 'warning', 'error'].indexOf(value) !== -1;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .message-box {
    padding: 16px;
    margin: 8px 0;
    border-radius: 4px;
    color: #fff;
    font-size: 1rem;
  }
  
  .message-box--info {
    background-color: blue;
  }
  
  .message-box--success {
    background-color: green;
  }
  
  .message-box--warning {
    background-color: orange;
  }
  
  .message-box--error {
    background-color: red;
  }
  </style>
  