import MessageBox from './MessageBox.vue';

export default {
  title: 'Contents/MessageBox',
  component: MessageBox,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select', options: ['info', 'success', 'warning', 'error'] },
    },
    message: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { MessageBox },
  setup() {
    return { args };
  },
  template: '<MessageBox v-bind="args" />',
});

export const Info = Template.bind({});
Info.args = {
  message: 'This is an info message.',
  type: 'info',
};

export const Success = Template.bind({});
Success.args = {
  message: 'This is a success message!',
  type: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a warning message!',
  type: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  message: 'This is an error message!',
  type: 'error',
};
