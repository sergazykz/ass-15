import FormButton from './FormButton.vue';

export default {
  title: 'Components/Buttons/Button',
  component: FormButton,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select', options: ['primary', 'secondary', 'danger'] },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
    onClick: {},
  },
};

const Template = (args) => ({
  components: { FormButton },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">Click me</Button>',
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  isDisabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  type: 'secondary',
};

export const Danger = Template.bind({});
Danger.args = {
  ...Primary.args,
  type: 'danger',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  isDisabled: true,
};
