import ListContent from './ListContent.vue';

export default {
  title: 'Contents/ListContent',
  component: ListContent,
  tags: ['autodocs'],
};

const Template = (args) => ({
  components: { ListContent },
  setup() {
    return { args };
  },
  template: '<ListContent v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { text: 'Item 1' },
    { text: 'Item 2' },
    { text: 'Item 3' },
  ],
};

export const WithLongText = Template.bind({});
WithLongText.args = {
  items: [
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { text: 'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.' },
    { text: 'Sed nisi. Nulla quis sem at nibh elementum imperdiet.' },
  ],
};
