<template>
    <div class="progress-bar-container" :style="{ width: width }">
      <div class="progress-bar" :style="{ width: progress + '%', backgroundColor: color }"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProgressBar',
    props: {
      width: {
        type: String,
        default: '100%', // default width of the progress bar container
      },
      progress: {
        type: Number,
        default: 0, // default progress percentage
      },
      color: {
        type: String,
        default: '#4caf50', // default color of the progress bar
      },
    },
  };
  </script>
  
  <style scoped>
  .progress-bar-container {
    background-color: #e0e0e0;
    border-radius: 25px;
    padding: 3px;
    margin: 8px 0;
  }
  .progress-bar {
    height: 20px;
    border-radius: 20px;
    transition: width 0.5s ease-in-out;
  }
  </style>
  