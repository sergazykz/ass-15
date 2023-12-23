import FormSlider from './FormSlider.vue';

export default {
  title: 'Components/Slider',
  component: FormSlider,
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    value: { control: 'number' },
    input: { action: 'input' }
  },
};

const Template = (args) => ({
  components: { FormSlider },
  setup() {
    return { args };
  },
  template: '<Slider v-bind="args" @input="args.input" />',
});

export const Default = Template.bind({});
Default.args = {
  min: 0,
  max: 100,
  step: 1,
  value: 50
};
