import FormToggle from './FormToggle.vue';

export default {
  title: 'Components/FormToggle',
  component: FormToggle,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'boolean',
      description: 'Toggle value',
    },
  },
};

const Template = (args) => ({
  components: { FormToggle },
  setup() {
    return { args };
  },
  template: '<FormToggle v-bind="args" @update:value="args.value = $event" />',
});

export const On = Template.bind({});
On.args = {
  name: 'toggle',
  value: true,
};

export const Off = Template.bind({});
Off.args = {
  name: 'toggle',
  value: false,
};
