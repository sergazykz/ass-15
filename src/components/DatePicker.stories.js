import DatePicker from './DatePicker.vue';

export default {
  title: 'Others/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'date' },
  },
};

const Template = (args) => ({
  components: { DatePicker },
  setup() {
    return { args };
  },
  template: '<DatePicker v-bind="args" @update:value="args.value = $event" />',
});

export const Default = Template.bind({});
Default.args = {
  value: new Date().toISOString().substr(0, 10), // set default date as today
};
