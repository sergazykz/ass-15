import Tooltip from './Tooltip.vue';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    text: { control: 'text' },
    position: {
      control: { type: 'select', options: ['top', 'bottom', 'left', 'right'] },
    },
  },
};

const Template = (args) => ({
  components: { Tooltip },
  setup() {
    return { args };
  },
  template: '<Tooltip v-bind="args">Hover over me</Tooltip>',
});

export const Top = Template.bind({});
Top.args = {
  text: 'Tooltip on Top',
  position: 'top',
};

export const Bottom = Template.bind({});
Bottom.args = {
  text: 'Tooltip on Bottom',
  position: 'bottom',
};

export const Left = Template.bind({});
Left.args = {
  text: 'Tooltip on Left',
  position: 'left',
};

export const Right = Template.bind({});
Right.args = {
  text: 'Tooltip on Right',
  position: 'right',
};
