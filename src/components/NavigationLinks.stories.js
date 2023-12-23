import NavigationLinks from './NavigationLinks.vue';

export default {
  title: 'Navigations/NavigationLinks',
  component: NavigationLinks,
  tags: ['autodocs'],
  argTypes: {
    links: {
      control: 'object',
    },
  },
};

const Template = (args) => ({
  components: { NavigationLinks },
  setup() {
    return { args };
  },
  template: '<NavigationLinks v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  links: [
    { href: '#', text: 'Home', newTab: false },
    { href: '#about', text: 'About', newTab: false },
    { href: '#services', text: 'Services', newTab: false },
    { href: '#contact', text: 'Contact', newTab: false },
  ],
};
