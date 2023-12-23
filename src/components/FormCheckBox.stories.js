import FormCheckBox from './FormCheckBox.vue';

export default {
  title: 'Components/FormCheckBox',
  component: FormCheckBox,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'boolean' }
    },
    label: { control: 'text' },
    name: { control: 'text' }
  }
};

const Template = (args, { argTypes }) => ({
  components: { FormCheckBox },
  props: Object.keys(argTypes),
  data() {
    return {
      checked: args.value,
    };
  },
  methods: {
    onChange(newValue) {
      this.checked = newValue;
      args.value = newValue;
    },
  },
  template: '<FormCheckBox v-bind="$props" :value="checked" @change="onChange"/>',
});

export const Default = Template.bind({});
Default.args = {
  label: 'Accept Terms',
  name: 'accept_terms',
  value: false
};
