<template>
    <footer class="page-footer">
      <div class="container">
        <p>{{ text }}</p>
        <slot></slot> <!-- Allows for custom content -->
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'PageFooter',
    props: {
      text: {
        type: String,
        default: '© 2023 Your Company Name. All rights reserved.',
      },
    },
  };
  </script>
  
  <style scoped>
  .page-footer {
    background-color: #f8f9fa;
    color: #6c757d;
    text-align: center;
    padding: 1rem 0;
    border-top: 1px solid #e9ecef;
  }
  
  .container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 0 15px;
  }
  </style>
  