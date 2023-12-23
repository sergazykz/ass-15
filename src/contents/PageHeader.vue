<template>
  <header class="page-header">
    <h1>{{ title }}</h1>
    <p v-if="description">{{ description }}</p>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: String,
  },
};
</script>

<style scoped>
.page-header {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
}

.page-header h1 {
  margin: 0;
  color: #333;
}

.page-header p {
  color: #666;
}
</style>
