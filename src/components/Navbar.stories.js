import Navbar from './Navbar.vue';

export default {
  title: 'Navigations/Navbar',
  component: Navbar,
  tags: ['autodocs'],
};

const Template = (args) => ({
  components: { Navbar },
  setup() {
    return { args };
  },
  template: '<Navbar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { text: 'Home', href: '#home' },
    { text: 'About', href: '#about' },
    { text: 'Services', href: '#services' },
    { text: 'Contact', href: '#contact' },
  ],
};
