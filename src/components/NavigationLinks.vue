<template>
    <nav class="navigation-links">
      <ul>
        <li v-for="link in links" :key="link.text">
          <a :href="link.href" :target="link.newTab ? '_blank' : '_self'">{{ link.text }}</a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavigationLinks',
    props: {
      links: {
        type: Array,
        default: () => [],
      },
    },
  };
  </script>
  
  <style scoped>
  .navigation-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 16px;
  }
  
  .navigation-links li {
    padding: 8px;
  }
  
  .navigation-links a {
    text-decoration: none;
    color: #333;
    transition: color 0.3s;
  }
  
  .navigation-links a:hover {
    color: #007bff;
  }
  </style>
  