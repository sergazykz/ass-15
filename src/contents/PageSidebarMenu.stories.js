import PageSidebarMenu from './PageSidebarMenu.vue';
import IconContent from './IconContent.vue';

export default {
  title: 'Contents/PageSidebarMenu',
  component: PageSidebarMenu,
  tags: ['autodocs'],
  subcomponents: { IconContent },
};

const Template = (args) => ({
  components: { PageSidebarMenu, IconContent },
  setup() {
    return { args };
  },
  template: '<PageSidebarMenu v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  menuItems: [
    { text: 'Dashboard', link: '#dashboard', icon: 'bars', active: true },
    { text: 'Wallet', link: '#wallet', icon: 'user', active: false },
    { text: 'Invoices', link: '#invoices', icon: 'user',icon2: 'user', active: false },
    { text: 'Create Invoices', link: '#invoices', icon: 'user', active: false },
    { text: 'Card', link: '#invoices', icon: 'user',icon2: 'user', active: false },
    { text: 'Transaction', link: '#invoices', icon: 'user', active: false },
    { text: 'Client', link: '#invoices', icon: 'user', active: false }
  ],
};
