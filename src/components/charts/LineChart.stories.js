import LineChart from './LineChart.vue';

export default {
  title: 'Others/Charts/LineChart',
  component: LineChart,
  tags: ['autodocs'],
};

const Template = (args) => ({
  components: { LineChart },
  setup() {
    return { args };
  },
  template: '<LineChart v-bind="args" />',
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
