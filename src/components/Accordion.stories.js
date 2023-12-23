import Accordion from './Accordion.vue';

export default {
  title: 'Containers/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

const Template = (args) => ({
  components: { Accordion },
  setup() {
    return { args };
  },
  template: '<Accordion v-bind="args" />',
});

export const Single = Template.bind({});
Single.args = {
  items: [
    {
      header: 'Accordion Header 1',
      content: 'Content for accordion 1'
    },
  ],
};

export const Multiple = Template.bind({});
Multiple.args = {
  items: [
    {
      header: 'Accordion Header 1',
      content: 'Content for accordion 1',
    },
    {
      header: 'Accordion Header 2',
      content: 'Content for accordion 2',
    },
    {
      header: 'Accordion Header 3',
      content: 'Content for accordion 3',
    },
  ],
};
