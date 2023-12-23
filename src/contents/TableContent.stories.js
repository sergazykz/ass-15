import TableContent from './TableContent.vue';

export default {
  title: 'Contents/TableContent',
  component: TableContent,
  tags: ['autodocs'],
  argTypes: {
    headers: {
      control: 'array',
      description: 'Array of table header titles'
    },
    rows: {
      control: 'array',
      description: 'Array of arrays, each representing a row of table data'
    }
  },
};

const Template = (args) => ({
  components: { TableContent },
  setup() {
    return { args };
  },
  template: '<TableContent v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  headers: ['ID', 'Name', 'Email', 'Role'],
  rows: [
    [1, 'John Doe', 'john@example.com', 'Admin'],
    [2, 'Jane Doe', 'jane@example.com', 'Editor'],
    // Add more rows as needed
  ],
};
