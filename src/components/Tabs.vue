<template>
    <div class="tabs">
      <div class="tab-titles">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          class="tab-title"
          :class="{ active: activeTab === index }"
          @click="activateTab(index)"
        >
          {{ tab.title }}
        </div>
      </div>
      <div class="tab-content">
        <slot :name="`tab-${activeTab}`"></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Tabs',
    props: {
      tabs: {
        type: Array,
        required: true,
      },
      initialTab: {
        type: Number,
        default: 0,
      },
    },
    data() {
      return {
        activeTab: this.initialTab,
      };
    },
    methods: {
      activateTab(index) {
        this.activeTab = index;
      },
    },
  };
  </script>
  
  <style scoped>
  .tabs {
    width: 100%;
  }
  .tab-titles {
    display: flex;
    border-bottom: 1px solid #ccc;
  }
  .tab-title {
    padding: 10px 15px;
    cursor: pointer;
    border-bottom: 3px solid transparent;
  }
  .tab-title.active {
    border-bottom-color: blue;
  }
  .tab-content {
    padding: 20px;
  }
  </style>
  