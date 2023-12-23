import GridSystem from './GridSystem.vue';

export default {
  title: 'Others/GridSystem',
  component: GridSystem,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'number', min: 1, max: 12, step: 1 },
    },
    gap: {
      control: 'text',
    },
  },
};

const Template = (args) => ({
  components: { GridSystem },
  setup() {
    return { args };
  },
  template: `
    <GridSystem v-bind="args">
      <div v-for="i in args.columns" :key="i" class="grid-item">
        Item {{ i }}
      </div>
    </GridSystem>
  `,
});

export const TwoColumnGrid = Template.bind({});
TwoColumnGrid.args = {
  columns: 2,
  gap: '1rem',
};

export const FourColumnGrid = Template.bind({});
FourColumnGrid.args = {
  columns: 4,
  gap: '1rem',
};

export const SixColumnGrid = Template.bind({});
SixColumnGrid.args = {
  columns: 6,
  gap: '1rem',
};
