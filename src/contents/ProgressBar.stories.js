import ProgressBar from './ProgressBar.vue';

export default {
  title: 'Contents/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    progress: {
      control: 'range',
      min: 0,
      max: 100,
    },
    width: {
      control: 'text',
    },
    color: {
      control: 'color',
    },
  },
};

const Template = (args) => ({
  components: { ProgressBar },
  setup() {
    return { args };
  },
  template: '<ProgressBar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  width: '100%',
  progress: 25,
  color: '#4caf50',
};

export const Half = Template.bind({});
Half.args = {
  ...Default.args,
  progress: 50,
};

export const Full = Template.bind({});
Full.args = {
  ...Default.args,
  progress: 100,
  color: '#2196f3',
};
