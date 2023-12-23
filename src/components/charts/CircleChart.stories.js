import CircleChart from './CircleChart.vue';

export default {
  title: 'Others/Charts/CircleChart',
  component: CircleChart,
  tags: ['autodocs'],
};

const Template = (args) => ({
  components: { CircleChart },
  setup() {
    return { args };
  },
  template: '<CircleChart v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  chartData: {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  }
};
