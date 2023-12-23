<template>
    <div class="carousel-container">
      <div class="carousel-slide" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <img v-for="(image, index) in images" :key="index" :src="image" :alt="`Slide ${index + 1}`" class="carousel-image" />
      </div>
      <button class="prev" @click="prev">Prev</button>
      <button class="next" @click="next">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ImageCarousel',
    props: {
      images: Array,
    },
    data() {
      return {
        currentIndex: 0,
      };
    },
    methods: {
      next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
    },
  };
  </script>
  
  <style scoped>
  .carousel-container {
    position: relative;
    overflow: hidden;
  }
  .carousel-slide {
    display: flex;
    transition: transform 0.3s ease-in-out;
  }
  .carousel-image {
    max-width: 100%;
    display: block;
  }
  button.prev,
  button.next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    cursor: pointer;
  }
  button.prev {
    left: 10px;
  }
  button.next {
    right: 10px;
  }
  </style>
  