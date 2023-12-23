import TagsNavigation from './TagsNavigation.vue';

export default {
  title: 'Navigations/Tags',
  component: TagsNavigation,
  tags: ['autodocs'],
};

const Template = (args) => ({
  components: { TagsNavigation },
  setup() {
    return { args };
  },
  methods: {
    onTagSelected(tag) {
      console.log('Selected tag:', tag);
    },
  },
  template: `<TagsNavigation v-bind="args" @tag-selected="onTagSelected"/>`,
});

export const Default = Template.bind({});
Default.args = {
  tags: [
    { id: 1, name: 'Vue.js', isActive: false },
    { id: 2, name: 'React', isActive: false },
    { id: 3, name: 'Angular', isActive: false },
    { id: 4, name: 'Svelte', isActive: false },
  ],
};
