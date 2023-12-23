import Breadcrumb from './Breadcrumb.vue';

export default {
  title: 'Navigations/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
};

const Template = (args) => ({
  components: { Breadcrumb },
  setup() {
    return { args };
  },
  template: '<Breadcrumb v-bind="args" />',
});

export const SimpleBreadcrumb = Template.bind({});
SimpleBreadcrumb.args = {
  items: [
    { text: 'Home', href: '#' },
    { text: 'Library', href: '#' },
    { text: 'Data', href: '#' },
    { text: 'File', href: '' }, // Current Page
  ],
};

export const CreativeBreadcrumb = Template.bind({});
CreativeBreadcrumb.args = {
  items: [
    { text: 'Galaxy', href: '#' },
    { text: 'Solar System', href: '#' },
    { text: 'Earth', href: '#' },
    { text: 'Continent', href: '#' },
    { text: 'Country', href: '#' },
    { text: 'City', href: '#' },
    { text: 'Street', href: '' }, // Current Page
  ],
};
