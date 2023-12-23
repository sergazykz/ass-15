import PageHeader from './PageHeader.vue';

export default {
  title: 'Contents/PageHeader',
  component: PageHeader,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the page header',
    },
    description: {
      control: 'text',
      description: 'The optional description text for the page header',
    },
  },
};

const Template = (args) => ({
  components: { PageHeader },
  setup() {
    return { args };
  },
  template: '<PageHeader v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'Your Page Title',
  description: 'A short description of the page content goes here.',
};

export const NoDescription = Template.bind({});
NoDescription.args = {
  title: 'Your Page Title',
};
