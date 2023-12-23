import AlertContent from './AlertContent.vue';

export default {
  title: 'Contents/AlertContent',
  component: AlertContent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select', options: ['info', 'warning', 'danger', 'success'] },
    },
    message: { control: 'text' },
    dismissible: { control: 'boolean' },
  },
  parameters: {
    actions: {
      handles: ['dismiss'],
    },
  },
};

const Template = (args) => ({
  components: { AlertContent },
  setup() {
    return { args };
  },
  template: '<AlertContent v-bind="args" @dismiss="onDismiss" />',
  methods: {
    onDismiss() {
      alert('Alert dismissed');
    },
  },
});

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  message: 'This is an info alert.',
  dismissible: true,
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  message: 'This is a warning alert.',
  dismissible: true,
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  message: 'This is a danger alert.',
  dismissible: true,
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  message: 'This is a success alert.',
  dismissible: true,
};
