import PageFooter from './PageFooter.vue';

export default {
  title: 'Contents/PageFooter',
  component: PageFooter,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text'
    }
  }
};

const Template = (args) => ({
  components: { PageFooter },
  setup() {
    return { args };
  },
  template: '<PageFooter v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  text: '© 2023 Your Company Name. All rights reserved.',
};

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  ...Default.args
};
WithCustomContent.decorators = [
  () => ({
    components: { PageFooter },
    template: `
      <PageFooter>
        <div>Follow us on <a href="#">social media</a>!</div>
      </PageFooter>
    `,
  }),
];
