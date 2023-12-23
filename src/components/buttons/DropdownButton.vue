<template>
    <div class="dropdown">
      <button class="btn btn-dropdown" @click="toggleDropdown">
        {{ buttonText }} <span class="caret"></span>
      </button>
      <div v-show="isOpen" class="dropdown-content">
        <slot></slot> <!-- allows for dropdown content to be inserted -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DropdownButton',
    props: {
      buttonText: {
        type: String,
        default: 'Dropdown'
      }
    },
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      }
    }
  };
  </script>
  
  <style scoped>
  .btn-dropdown {
    /* styles for the dropdown button */
    color: #6c757d;
    background-color: white;
    padding: 10px 20px;
    border-radius: 8px;
    border: none;
  }
  
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
  }
  
  .caret {
    border-top: 4px solid;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
    content: "";
    vertical-align: middle;
    margin-left: 10px;
    
  }
  
  /* Add more styles for the dropdown if needed */
  </style>
  