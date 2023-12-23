<template>
    <div class="tooltip-container" @mouseenter="show = true" @mouseleave="show = false">
      <slot></slot>
      <div v-if="show" class="tooltip-content" :class="`tooltip-${position}`">{{ text }}</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Tooltip',
    props: {
      text: {
        type: String,
        required: true,
      },
      position: {
        type: String,
        default: 'top',
        validator: function (value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) !== -1;
        },
      },
    },
    data() {
      return {
        show: false,
      };
    },
  };
  </script>
  
  <style scoped>
  .tooltip-container {
    display: inline-block;
    position: relative;
  }
  
  .tooltip-content {
    position: absolute;
    background-color: black;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    z-index: 100;
    white-space: nowrap;
  }
  
  .tooltip-top {
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .tooltip-bottom {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .tooltip-left {
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .tooltip-right {
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
  </style>
  