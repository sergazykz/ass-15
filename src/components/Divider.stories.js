import Divider from './Divider.vue';

export default {
  title: 'Others/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'radio', options: ['horizontal', 'vertical'] }
    }
  }
};

const Template = (args) => ({
  components: { Divider },
  setup() {
    return { args };
  },
  template: '<Divider v-bind="args" />',
});

export const Horizontal = Template.bind({});
Horizontal.args = {
  orientation: 'horizontal'
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: 'vertical'
};
