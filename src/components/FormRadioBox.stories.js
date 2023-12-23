import FormRadioBox from './FormRadioBox.vue';

export default {
  title: 'Components/FormRadioBox',
  component: FormRadioBox,
  tags: ['autodocs'],
  argTypes: {
    selectedValue: {
      control: 'radio',
      options: ['option1', 'option2', 'option3'],
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { FormRadioBox },
  props: Object.keys(argTypes),
  setup() {
    return { args };
  },
  template: '<FormRadioBox v-bind="args" @update:selectedValue="args.selectedValue = $event" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Choose an Option',
  name: 'options',
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ],
  selectedValue: 'option1',
};
