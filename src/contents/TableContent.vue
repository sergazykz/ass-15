<template>
    <table class="table-content">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  export default {
    name: 'TableContent',
    props: {
      headers: {
        type: Array,
        required: true
      },
      rows: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .table-content {
    width: 100%;
    border-collapse: collapse;
  }
  
  .table-content th, .table-content td {
    padding: 8px;
    border: 1px solid #ddd;
    text-align: left;
  }
  
  .table-content thead {
    background-color: #f4f4f4;
  }
  </style>
  