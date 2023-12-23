import ListGroup from './ListGroup.vue';

export default {
  title: 'Navigations/ListGroup',
  component: ListGroup,
  tags: ['autodocs'],
};

const Template = (args) => ({
  components: { ListGroup },
  setup() {
    return { args };
  },
  template: '<ListGroup v-bind="args" @select="onSelect" />',
  methods: {
    onSelect(item) {
      // Handle the select event
      console.log(item);
    },
  },
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, text: 'First Item', active: false },
    { id: 2, text: 'Second Item', active: false },
    { id: 3, text: 'Third Item', active: true },
    { id: 4, text: 'Fourth Item', active: false },
  ],
};
