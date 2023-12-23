import ImageCarousel from './ImageCarousel.vue';

export default {
  title: 'Contents/ImageCarousel',
  component: ImageCarousel,
  tags: ['autodocs'],
};

const Template = (args) => ({
  components: { ImageCarousel },
  setup() {
    return { args };
  },
  template: '<ImageCarousel v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  images: [
    'https://placeimg.com/640/480/any',
    'https://placeimg.com/640/480/any?2',
    'https://placeimg.com/640/480/any?3',
  ],
};
