<template>
  <aside class="sidebar">
    <nav>
      <ul class="menu-list">
        <li v-for="item in menuItems" :key="item.text">
          <a :href="item.link" :class="{ active: item.active }">
            <!-- Use IconContent component here -->
            <IconContent :icon="item.icon" size="1x" color="" />
            {{ item.text }}
            <IconContent :icon="item.icon2" size="1x" color="" />
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
// Make sure the import path is correct relative to this file's location
import IconContent from '../contents/IconContent.vue';

export default {
  name: 'PageSidebarMenu',
  components: {
    // Register the IconContent component
    IconContent,
  },
  props: {
    menuItems: {
      type: Array,
      required: true,
    },
  },
};
</script>

  
  <style scoped>
  .sidebar {
    width: 200px;
    background-color: #ffffff;
    padding: 20px;
    height: 100vh;
  }
  
  .menu-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .menu-list li a {
    display: block;
    padding: 10px;
    color: #6c757d;
    text-decoration: none;
    transition: background-color 0.3s;
    display: flex;
    gap: 15px;
    font-weight: 600;

  }
  
  .menu-list li a.active,
  .menu-list li a:hover {
    color: #356a62;
  }
  </style>
  