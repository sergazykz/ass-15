<template>
    <nav class="navbar">
      <ul class="nav-list">
        <li v-for="item in items" :key="item.text" class="nav-item">
          <a :href="item.href" class="nav-link">{{ item.text }}</a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    props: {
      items: {
        type: Array,
        default: () => [],
      },
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #333;
    overflow: hidden;
  }
  
  .nav-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  .nav-item {
    float: left;
  }
  
  .nav-link {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  .nav-link:hover {
    background-color: #ddd;
    color: black;
  }
  </style>
  