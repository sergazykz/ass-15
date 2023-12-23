import SearchBar from './SearchBar.vue';

export default {
  title: 'Navigations/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    onSearch: { action: 'search' },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SearchBar },
  props: Object.keys(argTypes),
  methods: {
    onSearch: args.onSearch,
  },
  template: '<SearchBar v-bind="$props" @search="onSearch" />',
});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search...',
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  value: 'Initial Value',
  placeholder: 'Search...',
};
