import Pagination from './Pagination.vue';

export default {
  title: 'Navigations/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number' },
      defaultValue: 1,
    },
    totalPages: {
      control: { type: 'number' },
      defaultValue: 10,
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Pagination },
  props: Object.keys(argTypes),
  setup() {
    return { args };
  },
  template: '<Pagination v-bind="args" @update:currentPage="args.currentPage = $event" />',
});

export const SimplePagination = Template.bind({});
SimplePagination.args = {
  currentPage: 1,
  totalPages: 10,
};
