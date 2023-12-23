import ImageComponent from './ImageComponent.vue';

export default {
  title: 'Others/ImageComponent',
  component: ImageComponent,
  tags: ['autodocs'],
};

const Template = (args) => ({
  components: { ImageComponent },
  setup() {
    return { args };
  },
  template: '<ImageComponent v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  width: '150',
  height: '150',
};
