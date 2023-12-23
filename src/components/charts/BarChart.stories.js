import BarChart from './BarChart.vue';

export default {
  title: 'Others/Charts/BarChart',
  component: BarChart,
  tags: ['autodocs'],
};

const Template = (args) => ({
  components: { BarChart },
  setup() {
    return { args };
  },
  template: '<BarChart v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  chartData: {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Data One',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39]
      }
    ]
  }
};
