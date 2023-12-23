<template>
    <div class="form-select">
      <label :for="name">{{ label }}</label>
      <select :id="name" :name="name" v-model="selectedValue" @change="onChange">
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FormSelect',
    props: {
      label: String,
      name: String,
      options: {
        type: Array,
        default: () => [],
        required: true
      },
      value: [String, Number]
    },
    data() {
      return {
        selectedValue: this.value
      };
    },
    methods: {
  onChange(event) {
    this.$emit('change', event.target.value);
  }
},
    watch: {
      value(newValue) {
        this.selectedValue = newValue;
      }
    },
    mounted() {
      console.log('Options prop:', this.options);
    }
  };
  </script>
<style scoped>
.form-select {
  margin-bottom: 1rem;
}

.form-select label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-select select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
  