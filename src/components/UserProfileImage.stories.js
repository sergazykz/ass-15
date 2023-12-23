import UserProfileImage from './UserProfileImage.vue';

export default {
  title: 'Others/UserProfileImage',
  component: UserProfileImage,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'text',
    },
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
  },
};

const Template = (args) => ({
  components: { UserProfileImage },
  setup() {
    return { args };
  },
  template: '<UserProfileImage v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Default User',
  size: '100px',
};
