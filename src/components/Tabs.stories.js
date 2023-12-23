import Tabs from './Tabs.vue';

export default {
  title: 'Navigations/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

const Template = (args) => ({
  components: { Tabs },
  setup() {
    return { args };
  },
  template: `
    <Tabs v-bind="args">
      <template v-slot:tab-0>Content of Tab 1</template>
      <template v-slot:tab-1>Content of Tab 2</template>
      <template v-slot:tab-2>Content of Tab 3</template>
    </Tabs>
  `,
});

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { title: 'Tab 1' },
    { title: 'Tab 2' },
    { title: 'Tab 3' },
  ],
  initialTab: 0,
};
