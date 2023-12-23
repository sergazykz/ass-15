<template>
    <nav class="tags-navigation">
      <ul>
        <li v-for="tag in tags" :key="tag.id" :class="{ active: tag.isActive }">
          <a href="#" @click="selectTag(tag)">{{ tag.name }}</a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'TagsNavigation',
    props: {
      tags: {
        type: Array,
        default: () => [],
      },
    },
    methods: {
      selectTag(selectedTag) {
        this.tags.forEach(tag => {
          tag.isActive = tag.id === selectedTag.id;
        });
        this.$emit('tag-selected', selectedTag);
      },
    },
  };
  </script>
  
  <style scoped>
  .tags-navigation ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }
  
  .tags-navigation li {
    margin: 0.5rem;
  }
  
  .tags-navigation li a {
    text-decoration: none;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 16px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .tags-navigation li.active a {
    color: white;
    background-color: #007bff;
    border-color: #007bff;
  }
  </style>
  