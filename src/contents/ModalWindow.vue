<template>
    <div v-if="show" class="modal-overlay" @click.self="closeModal">
      <div class="modal-window" :style="{ width: width },{height: height}">
        <header class="modal-header">
          <slot name="header">
            Default Header
          </slot>
          <button class="close-button" @click="closeModal">&times;</button>
        </header>
        <main class="modal-content">
          <slot>
            Default content...
          </slot>
        </main>
        <footer class="modal-footer">
          <slot name="footer">
            Default footer
          </slot>
        </footer>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ModalWindow',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      width: {
        type: String,
        default: '500px'
      },
      height: {
        type: String,
        default: '300px'
      }
    },
    methods: {
      closeModal() {
        this.$emit('update:show', false);
      }
    }
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .modal-window {
    background: white;
    border-radius: 5px;
    padding: 20px;
    position: relative;
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .close-button {
    background: none;
    border: none;
    font-size: 1.5rem;
  }
  
  .modal-content {
    margin-top: 20px;
  }
  
  .modal-footer {
    margin-top: 20px;
    text-align: right;
  }
  </style>

