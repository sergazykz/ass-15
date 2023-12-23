import FormInput from './FormInput.vue';

export default {
  title: 'Components/FormInput',
  component: FormInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select', options: ['text', 'password', 'email', 'number'] },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { FormInput },
  props: Object.keys(argTypes),
  template: '<FormInput v-bind="$props" @update:value="args.value = $event" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Username',
  name: 'username',
  type: 'text',
  placeholder: 'Enter your username',
};

export const Password = Template.bind({});
Password.args = {
  ...Default.args,
  label: 'Password',
  name: 'password',
  type: 'password',
  placeholder: 'Enter your password',
};
