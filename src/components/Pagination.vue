<template>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li v-for="page in pages" :key="page" :class="{ active: page === currentPage }" class="page-item">
          <a class="page-link" href="#" @click.prevent="goToPage(page)">
            {{ page }}
          </a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Pagination',
    props: {
      currentPage: {
        type: Number,
        default: 1,
      },
      totalPages: {
        type: Number,
        required: true,
      },
    },
    computed: {
      pages() {
        let pages = [];
        for (let i = 1; i <= this.totalPages; i++) {
          pages.push(i);
        }
        return pages;
      },
    },
    methods: {
      goToPage(page) {
        this.$emit('update:currentPage', page);
      },
    },
  };
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    list-style: none;
    padding: 0;
  }
  
  .page-item {
    margin: 0 2px;
  }
  
  .page-item.active .page-link {
    background-color: #007bff;
    border-color: #007bff;
    color: white;
  }
  
  .page-link {
    display: block;
    padding: 5px 10px;
    text-decoration: none;
    border: 1px solid #ddd;
    color: #007bff;
  }
  
  .page-link:hover {
    background-color: #f8f9fa;
  }
  </style>
  