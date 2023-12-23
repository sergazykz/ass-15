import Typography from './Typography.vue';

export default {
  title: 'Others/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select', options: ['title', 'body', 'caption'] },
    },
    color: { control: 'color' },
    size: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { Typography },
  setup() {
    return { args };
  },
  template: '<Typography v-bind="args">Sample text</Typography>',
});

export const Title = Template.bind({});
Title.args = {
  type: 'title',
  color: '#333',
  size: '2rem',
};

export const Body = Template.bind({});
Body.args = {
  type: 'body',
  color: '#333',
  size: '1rem',
};

export const Caption = Template.bind({});
Caption.args = {
  type: 'caption',
  color: '#666',
  size: '0.75rem',
};
