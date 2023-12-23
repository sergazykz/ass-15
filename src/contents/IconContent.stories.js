import IconContent from './IconContent.vue';

export default {
  title: 'Contents/IconContent',
  component: IconContent,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'select', options: ['user', 'coffee', 'spinner'] }
    },
    size: {
      control: { type: 'select', options: ['xs', 'sm', 'lg', '2x', '3x', '4x', '5x'] }
    },
    color: {
      control: 'color'
    }
  }
};

const Template = (args) => ({
  components: { IconContent },
  setup() {
    return { args };
  },
  template: '<IconContent v-bind="args" />',
});

export const User = Template.bind({});
User.args = {
  icon: 'user',
  size: '2x',
  color: '#333333'
};

export const Bars = Template.bind({});
Bars.args = {
  icon: 'bars',
  size: '2x',
  color: '#6f4e37'
};

export const Rotate = Template.bind({});
Rotate.args = {
  icon: 'rotate',
  size: '2x',
  color: '#008080'
};
