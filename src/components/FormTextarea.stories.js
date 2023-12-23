import FormTextarea from './FormTextarea.vue';

export default {
  title: 'Components/FormTextarea',
  component: FormTextarea,
  tags: ['autodocs'],
  argTypes: {
    rows: {
      control: { type: 'number' },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { FormTextarea },
  props: Object.keys(argTypes),
  template: '<FormTextarea v-bind="$props" @input="args.value = $event" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Your Message',
  name: 'message',
  placeholder: 'Type your message here',
  rows: 4,
};

export const WithContent = Template.bind({});
WithContent.args = {
  ...Default.args,
  value: 'This is a pre-filled message.',
};
