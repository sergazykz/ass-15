import Spinner from './Spinner.vue';

export default {
  title: 'Others/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'text' },
    color: { control: 'color' },
  },
};

const Template = (args) => ({
  components: { Spinner },
  setup() {
    return { args };
  },
  template: '<Spinner v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  size: '50px',
  color: '#000',
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: '100px',
};

export const Colored = Template.bind({});
Colored.args = {
  ...Default.args,
  color: '#f00',
};
