<template>
    <div class="image-wrapper">
      <img :src="src" :alt="alt" :width="width" :height="height" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageComponent',
    props: {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        default: 'image',
      },
      width: {
        type: String,
        default: 'auto',
      },
      height: {
        type: String,
        default: 'auto',
      },
    },
  };
  </script>
  
  <style scoped>
  .image-wrapper img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  </style>
  