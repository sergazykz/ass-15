<template>
    <nav class="link-group">
      <ul>
        <li v-for="link in links" :key="link.text">
          <a :href="link.href" :target="link.newTab ? '_blank' : '_self'">
            {{ link.text }}
          </a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'LinkGroup',
    props: {
      links: {
        type: Array,
        default: () => [],
      },
    },
  };
  </script>
  
  <style scoped>
  .link-group ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .link-group li {
    margin: 0.5em 0;
  }
  
  .link-group a {
    text-decoration: none;
    color: #333;
    padding: 0.5em;
    display: block;
    transition: color 0.3s ease;
  }
  
  .link-group a:hover {
    color: #007bff;
  }
  </style>
  