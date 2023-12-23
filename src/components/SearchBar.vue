<template>
    <div class="search-bar">
      <span class="search-icon">&#x1F50D;</span>
      <input
        class="search-input"
        :value="value"
        @input="$emit('update:value', $event.target.value)"
        :placeholder="placeholder"
        type="search"
      />
      <button class="search-button" @click="$emit('search', value)">
        Search
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchBar',
    props: {
      value: String,
      placeholder: {
        type: String,
        default: 'Search...'
      },
    },
    emits: ['update:value', 'search']
  };
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    background: white;
  }
  
  .search-icon {
    margin-right: 8px;
    color: #555;
  }
  
  .search-input {
    border: none;
    outline: none;
    padding: 8px;
    flex-grow: 1;
  }
  
  .search-button {
    padding: 8px 16px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .search-button:hover {
    background-color: #0056b3;
  }
  </style>
  