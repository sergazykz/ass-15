import LinkGroup from './LinkGroup.vue';

export default {
  title: 'Navigations/LinkGroup',
  component: LinkGroup,
  tags: ['autodocs'],
};

const Template = (args) => ({
  components: { LinkGroup },
  setup() {
    return { args };
  },
  template: '<LinkGroup :links="args.links" />',
});

export const Default = Template.bind({});
Default.args = {
  links: [
    { href: '#', text: 'Home', newTab: false },
    { href: '#about', text: 'About', newTab: false },
    { href: '#services', text: 'Services', newTab: false },
    { href: '#contact', text: 'Contact', newTab: false },
  ],
};

export const WithExternalLinks = Template.bind({});
WithExternalLinks.args = {
  links: [
    { href: 'https://www.example.com', text: 'External', newTab: true },
    ...Default.args.links,
  ],
};
