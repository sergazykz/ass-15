import InputGroups from './InputGroups.vue';

export default {
  title: 'Components/InputGroups',
  component: InputGroups,
  tags: ['autodocs'],
};

const Template = (args, { argTypes }) => ({
  components: { InputGroups },
  props: Object.keys(argTypes),
  template: '<InputGroups v-bind="$props" @input="args.value = $event" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  name: 'username',
  type: 'text',
  placeholder: 'Enter your username',
  value: '',
  prepend: '@',
  append: '.com'
};

export const WithPrepend = Template.bind({});
WithPrepend.args = {
  ...Default.args,
  prepend: 'https://'
};

export const WithAppend = Template.bind({});
WithAppend.args = {
  ...Default.args,
  append: '.org'
};
