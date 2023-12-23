import FormSelect from './FormSelect.vue';

export default {
  title: 'Components/FormSelect',
  component: FormSelect,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    options: {
      control: 'object'
    },
    onChange: { action: 'changed' }
  }
};

const Template = (args, { argTypes }) => ({
  components: { FormSelect },
  props: Object.keys(argTypes),
  template: '<FormSelect v-bind="$props" @change="onChange" />',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Select Option',
  name: 'select',
  value: '',
  options: [
    { value: 'option1', text: 'Option 1' },
    { value: 'option2', text: 'Option 2' },
    { value: 'option3', text: 'Option 3' }
  ]
};

// Ensure Storybook's controls for options are set up correctly
Default.argTypes = {
  options: {
    control: {
      type: 'object'
    }
  }
};
