<template>
  <PageHeader v-bind="{title:'Your '}" />
  <PageSidebarMenu
    :menuItems="menuItems"
  />
</template>

<script>
import PageSidebarMenu from './contents/PageSidebarMenu.vue'
import PageHeader from './contents/PageHeader.vue'

export default {
  name: 'App',
  components: {
    PageSidebarMenu,
    PageHeader,
  },
  data() {
    return {
      menuItems: [
    { text: 'Dashboard', link: '#dashboard', icon: 'bars', active: true },
    { text: 'Wallet', link: '#wallet', icon: 'wallet', active: false },
    { text: 'Invoices', link: '#invoices', icon: 'file-invoice',icon2 : 'envelope', active: false },
    { text: 'Create Invoices', link: '#invoices', icon: 'square-plus', active: false },
    { text: 'Card', link: '#invoices', icon: 'credit-card',icon2 : 'chevron-down', active: false },
    { text: 'Transaction', link: '#invoices', icon: 'rotate', active: false },
    { text: 'Client', link: '#invoices', icon: 'user', active: false }
  ],
    };
  },
}
</script>

<style>
</style>
