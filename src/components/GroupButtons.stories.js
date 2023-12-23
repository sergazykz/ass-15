import GroupButtons from './GroupButtons.vue';

export default {
  title: 'Components/GroupButtons',
  component: GroupButtons,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => ({
  components: { GroupButtons },
  setup() {
    return { args };
  },
  template: '<GroupButtons v-bind="args" @onClick="args.onClick" />',
});

export const Primary = Template.bind({});
Primary.args = {
  buttons: [
    { label: 'First', type: 'btn-primary' },
    { label: 'Second', type: 'btn-primary' },
    { label: 'Third', type: 'btn-primary' }
  ],
};

export const Mixed = Template.bind({});
Mixed.args = {
  buttons: [
    { label: 'Primary', type: 'btn-primary' },
    { label: 'Secondary', type: 'btn-secondary' },
    { label: 'Success', type: 'btn-success' }
  ],
};
