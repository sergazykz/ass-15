import CardContainer from './CardContainer.vue';

export default {
  title: 'Containers/CardContainer',
  component: CardContainer,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
  },
};

const Template = (args) => ({
  components: { CardContainer },
  setup() {
    return { args };
  },
  template: `
    <CardContainer v-bind="args">
      <div>Insert your content here</div>
    </CardContainer>
  `,
});

export const SmallCard = Template.bind({});
SmallCard.args = {
  width: '200px',
  height: '100px',
};

export const MediumCard = Template.bind({});
MediumCard.args = {
  width: '300px',
  height: '200px',
};

export const LargeCard = Template.bind({});
LargeCard.args = {
  width: '400px',
  height: '300px',
};
