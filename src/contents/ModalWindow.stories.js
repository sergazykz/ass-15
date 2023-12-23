import ModalWindow from './ModalWindow.vue';

export default {
  title: 'Contents/ModalWindow',
  component: ModalWindow,
  tags: ['autodocs'],
  argTypes: {
    show: {
      control: 'boolean',
      defaultValue: true
    },
    width: {
      control: 'text'
    }
  },
};

const Template = (args, { argTypes }) => ({
  components: { ModalWindow },
  props: Object.keys(argTypes),
  setup() {
    return { args };
  },
  template: `
    <ModalWindow v-bind="args" @update:show="args.show = $event">
      <template #header>
        <h3>My Modal Title</h3>
      </template>
      My Modal Content
      <template #footer>
        <button @click="args.show = false">Close</button>
      </template>
    </ModalWindow>
  `,
});

export const Default = Template.bind({});
Default.args = {
  show: true,
  width: '500px',
};
