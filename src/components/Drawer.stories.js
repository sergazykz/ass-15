import Drawer from './Drawer.vue';

export default {
  title: 'Navigations/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { Drawer },
  setup() {
    return { args };
  },
  template: '<Drawer v-bind="args">Your content here</Drawer>',
});

export const ClosedDrawer = Template.bind({});
ClosedDrawer.args = {
  isOpen: false,
};

export const OpenDrawer = Template.bind({});
OpenDrawer.args = {
  isOpen: true,
};
