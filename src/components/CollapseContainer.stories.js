import CollapseContainer from './CollapseContainer.vue';

export default {
  title: 'Containers/CollapseContainer',
  component: CollapseContainer,
  tags: ['autodocs'],
  args: {
    title: 'Details',
  },
};

const Template = (args) => ({
  components: { CollapseContainer },
  setup() {
    return { args };
  },
  template: `
    <CollapseContainer v-bind="args">
      <div>This is the content of the collapse container. You can put any HTML content here.</div>
    </CollapseContainer>
  `,
});

export const Default = Template.bind({});
