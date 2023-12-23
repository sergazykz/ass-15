import LabelContent from './LabelContent.vue';

export default {
  title: 'Contents/LabelContent',
  component: LabelContent,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    type: {
      control: { type: 'select', options: ['default', 'primary', 'success', 'danger'] },
    },
    bgColor: { control: 'color' },
    textColor: { control: 'color' },
  },
};

const Template = (args) => ({
  components: { LabelContent },
  setup() {
    return { args };
  },
  template: '<LabelContent v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  text: 'Default Label',
  type: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  text: 'Primary Label',
  type: 'primary',
  bgColor: '#007bff',
  textColor: '#ffffff',
};

export const Success = Template.bind({});
Success.args = {
  ...Default.args,
  text: 'Success Label',
  type: 'success',
  bgColor: '#28a745',
  textColor: '#ffffff',
};

export const Danger = Template.bind({});
Danger.args = {
  ...Default.args,
  text: 'Danger Label',
  type: 'danger',
  bgColor: '#dc3545',
  textColor: '#ffffff',
};
