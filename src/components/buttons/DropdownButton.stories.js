import DropdownButton from './DropdownButton.vue';

export default {
  title: 'Components/Buttons/DropdownButton',
  component: DropdownButton,
};

const Template = (args) => ({
  components: { DropdownButton },
  setup() {
    return { args };
  },
  template: `
    <DropdownButton v-bind="args">
      <p>Dropdown Item 1</p>
      <p>Dropdown Item 2</p>
      <p>Dropdown Item 3</p>
    </DropdownButton>
  `,
});

export const Default = Template.bind({});
Default.args = {
  buttonText: 'Dropdown',
};
